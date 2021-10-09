// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts@4.3.2/token/ERC20/ERC20.sol";

contract DeCa is ERC20 {
    // TODO: throw evens
    event Payoff(bytes32 requestId, uint256 payoff);

    enum Color {
        black,
        red
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

    constructor() ERC20("DeCa", "DCA") {
        _mint(msg.sender, 1000000 * 10**decimals());

        numberColors[0] = Color.black; // not relevant: zero does not exist. We still assign so that indexes of numberColors correspond to cell numbers
        for (uint8 i = 1; i < 37; i++) {
            numberColors[i] = Color.black;
        }
        for (uint8 i = 0; i < redNumbers.length; i++) {
            numberColors[redNumbers[i]] = Color.red;
        }
    }

    function spin(
        Bet[] calldata bets,
        uint8 spinResult // TODO: replace by VRF
    ) public returns (int256 netProfitOut) {
        uint256 totalBetAmount = 0;
        for (uint256 betIx = 0; betIx < bets.length; betIx++) {
            totalBetAmount += bets[1].amount;
        }
        uint256 senderBalance = balanceOf(msg.sender);
        require(
            senderBalance >= totalBetAmount * 10**decimals(),
            "betAmount exceeds balance of sender"
        );

        int256 netProfit = -int256(totalBetAmount);

        for (uint256 betIx = 0; betIx < bets.length; betIx++) {
            BetType betType = bets[betIx].betType;
            uint8 cellNumber = bets[betIx].cellNumber;
            uint256 betAmount = bets[betIx].amount;
            if (betType == BetType.number && spinResult == cellNumber) {
                require(
                    cellNumber < 37 && cellNumber > 0,
                    "Possible cell number are 1-36"
                );
                netProfit += int256(betAmount) * 36;
            } else if (
                betType == BetType.black &&
                numberColors[spinResult] == Color.black
            ) {
                netProfit += int256(betAmount) * 2;
            } else if (
                betType == BetType.red && numberColors[spinResult] == Color.red
            ) {
                netProfit += int256(betAmount) * 2;
            } else if (betType == BetType.odd && spinResult % 2 == 1) {
                netProfit += int256(betAmount) * 2;
            } else if (betType == BetType.even && spinResult % 2 == 0) {
                netProfit += int256(betAmount) * 2;
            } else if (betType == BetType.range_1_12 && spinResult < 13) {
                netProfit += int256(betAmount) * 3;
            } else if (
                betType == BetType.range_13_24 &&
                spinResult > 12 &&
                spinResult < 25
            ) {
                netProfit += int256(betAmount) * 3;
            } else if (betType == BetType.range_25_36 && spinResult > 24) {
                netProfit += int256(betAmount) * 3;
            } else if (betType == BetType.range_1_18 && spinResult < 19) {
                netProfit += int256(betAmount) * 2;
            } else if (betType == BetType.range_19_36 && spinResult > 18) {
                netProfit += int256(betAmount) * 2;
            } else if (betType == BetType.column_1 && spinResult % 3 == 1) {
                netProfit += int256(betAmount) * 3;
            } else if (betType == BetType.column_2 && spinResult % 3 == 2) {
                netProfit += int256(betAmount) * 3;
            } else if (betType == BetType.column_3 && spinResult % 3 == 3) {
                netProfit += int256(betAmount) * 3;
            }
        }
        _settle(netProfit);
        return (netProfit);
    }

    function _settle(int256 netProfit) internal {
        if (netProfit < 0) {
            _burn(msg.sender, uint256(-netProfit) * 10**decimals());
        } else if (netProfit > 0) {
            _mint(msg.sender, uint256(netProfit) * 10**decimals());
        }
    }
}
