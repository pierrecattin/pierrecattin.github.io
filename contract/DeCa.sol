// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts@4.3.2/token/ERC20/ERC20.sol";

contract DeCa is ERC20 {
    constructor() ERC20("DeCa", "DCA") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
    
    function playWin(uint256 amount) public{
        _mint(msg.sender, amount * 10 ** decimals());
    } 
    
    function playLose(uint256 amount) public{
        _burn(msg.sender, amount * 10 ** decimals());
    } 
}