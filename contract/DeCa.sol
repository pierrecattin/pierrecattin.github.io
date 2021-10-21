// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.3.2/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract DeCa is ERC20, VRFConsumerBase {
    event Payoff(address indexed player, uint8 spinResult, int256 netProfit);
    event VRFRequested(address indexed player, bytes32 indexed requestId);
    event SpinCompleted(address indexed player, bytes32 indexed  requestId, uint8 spinResult);

    // Roulette logic data
    enum Color {
        black,
        red
    }

    enum BetType {
        number, // 0
        red, // 1
        black, // 2
        odd, // 3
        even, // 4
        range_1_18, // 5
        range_19_36, // 6
        range_1_12, // 7
        range_13_24, // 8
        range_25_36, // 9
        column_1, // 10
        column_2, // 11
        column_3 // 12
    }

    struct Bet {
        BetType betType;
        uint8 cellNumber; // only relvant for BetType.number
        uint256 amount;
    }

    uint8[18] redNumbers = [
        1,
        3,
        5,
        7,
        9,
        12,
        14,
        16,
        18,
        19,
        21,
        23,
        25,
        27,
        30,
        32,
        34,
        36
    ];
    mapping(uint8 => Color) numberColors;

    // Chainlink VRF data
    bytes32 internal s_keyHash; // Chainlink VRF Kery Hash
    uint256 private s_fee; // Chainlink VRF fee

    // request ID -> bets by  for availability in fulfillRandomness
    mapping(bytes32 => Bet[]) requestBets;

    // request ID -> player address
    mapping(bytes32 => address) requestPlayer;

    // TODO: replace hardcoded VRF adresses and token parameters:
    // contructor(name, symbol, initialSupply, address vrfCoordinator, address link, bytes32 keyHash, )
    constructor()
        ERC20("DeCa", "DCA")
        VRFConsumerBase(
            0x3d2341ADb2D31f1c5530cDC622016af293177AE0,
            0xb0897686c545045aFc77CF20eC7A532E3120E0F1
        )
    {
        // VRF Coordinator; LINK Token
        s_keyHash = 0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da; // TODO: s_keyHash =keyHash;
        s_fee = 10**(18 - 4); // TODO: s_fee = fee;

        _mint(msg.sender, 1000000 * 10**decimals()); //TODO: initialSupply

        numberColors[0] = Color.black; // Index 0 not relevant: Cell 0 does not exist. We still assign so that indexes of numberColors correspond to cell numbers
        for (uint8 i = 1; i < 37; i++) {
            numberColors[i] = Color.black;
        }
        for (uint8 i = 0; i < redNumbers.length; i++) {
            numberColors[redNumbers[i]] = Color.red;
        }
    }

    function spin(Bet[] calldata bets) public returns (bytes32) {
        require(
            LINK.balanceOf(address(this)) >= s_fee,
            "Not enough LINK to pay fee"
        );
        uint256 totalBetAmount = 0;
        for (uint256 betIx = 0; betIx < bets.length; betIx++) {
            totalBetAmount += bets[betIx].amount;
        }
        require(
            totalBetAmount > 0,
            "Total bet amount must be greater than zero"
        );

        uint256 playerBalance = balanceOf(msg.sender);
        require(
            playerBalance >= totalBetAmount * 10**decimals(),
            "Total bet amount exceeds balance of player"
        );

        bytes32 requestId = requestRandomness(s_keyHash, s_fee);
        emit VRFRequested(msg.sender, requestId);
        
        // populate mappings required by fulfillRandomness
        requestPlayer[requestId] = msg.sender;
        for (
            uint256 betIx = 0;
            betIx < bets.length;
            betIx++
        ) 
        {
            requestBets[requestId].push(bets[betIx]);
        }

        return (requestId);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness)
        internal
        override
    {
        uint8 spinResult = uint8((randomness % 36) + 1); // 1-36
        address player = requestPlayer[requestId];

        emit SpinCompleted(player, requestId, spinResult);

        _pay(player, requestBets[requestId], spinResult);

        delete (requestBets[requestId]);
        delete (requestPlayer[requestId]);
    }

    function _pay(
        address player,
        Bet[] memory bets,
        uint8 spinResult
    ) internal {
        uint256 totalBetAmount = 0;
        for (uint256 betIx = 0; betIx < bets.length; betIx++) {
            totalBetAmount += bets[betIx].amount;
        }

        // Re-check balance because _pay() runs in different transaction from spin() -> transactions in the meatime could have changed balance
        uint256 playerBalance = balanceOf(player);
        require(
            playerBalance >= totalBetAmount * 10**decimals(),
            "Total bet amount exceeds balance of player"
        );

        int256 netProfit = -int256(totalBetAmount);
        for (uint256 betIx = 0; betIx < bets.length; betIx++) {
            netProfit += int256(_computeBetPayoff(bets[betIx], spinResult));
        }

        _settle(player, netProfit);
        emit Payoff(player, spinResult, netProfit);
    }

    function _computeBetPayoff(Bet memory bet, uint8 spinResult)
        internal
        view
        returns (uint256)
    {
        BetType betType = bet.betType;
        uint8 cellNumber = bet.cellNumber;
        uint256 betAmount = bet.amount;

        uint256 payoff = 0;
        if (betType == BetType.number && spinResult == cellNumber) {
            require(
                cellNumber < 37 && cellNumber > 0,
                "Possible cell number are 1-36"
            );
            payoff = betAmount * 36;
        } else if (
            betType == BetType.black && numberColors[spinResult] == Color.black
        ) {
            payoff = betAmount * 2;
        } else if (
            betType == BetType.red && numberColors[spinResult] == Color.red
        ) {
            payoff = betAmount * 2;
        } else if (betType == BetType.odd && spinResult % 2 == 1) {
            payoff = betAmount * 2;
        } else if (betType == BetType.even && spinResult % 2 == 0) {
            payoff = betAmount * 2;
        } else if (betType == BetType.range_1_12 && spinResult < 13) {
            payoff = betAmount * 3;
        } else if (
            betType == BetType.range_13_24 && spinResult > 12 && spinResult < 25
        ) {
            payoff = betAmount * 3;
        } else if (betType == BetType.range_25_36 && spinResult > 24) {
            payoff = betAmount * 3;
        } else if (betType == BetType.range_1_18 && spinResult < 19) {
            payoff = betAmount * 2;
        } else if (betType == BetType.range_19_36 && spinResult > 18) {
            payoff = betAmount * 2;
        } else if (betType == BetType.column_1 && spinResult % 3 == 1) {
            payoff = betAmount * 3;
        } else if (betType == BetType.column_2 && spinResult % 3 == 2) {
            payoff = betAmount * 3;
        } else if (betType == BetType.column_3 && spinResult % 3 == 3) {
            payoff = betAmount * 3;
        }
        return (payoff);
    }

    function _settle(address player, int256 netProfit) internal {
        if (netProfit < 0) {
            _burn(player, uint256(-netProfit) * 10**decimals());
        } else if (netProfit > 0) {
            _mint(player, uint256(netProfit) * 10**decimals());
        }
    }
}
