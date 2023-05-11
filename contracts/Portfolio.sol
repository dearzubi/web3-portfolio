//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Portfolio is AccessControl{

    //Role to manage the portfolio
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    //IPFS or any url storing json formatted data of the portfolio
    string public url;

    // USDT token contract
    IERC20 public usdt;
    
    // Memo struct.
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string linkedin;
        string message;
        string currency;
        uint amount;
    }

    // List of all memos received from coffee purchases.
    Memo[] memos;

    constructor(address _usdt, string memory _url) {
        // Store the address of the deployer as a payable address.
        // When we withdraw funds, we'll withdraw here.
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MANAGER_ROLE, msg.sender);
        usdt = IERC20(_usdt);
        url = _url;
    }

    /**
     * @dev set manager role
     * @param _manager the address of the manager
     * @notice only the owner can call this function
     */

    function setManager(address _manager) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(MANAGER_ROLE, _manager);
    }

    /**
     * @dev revoke manager role
     * @param _manager the address of the manager
     * @notice only the owner can call this function
     */
    function removeManager(address _manager) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(MANAGER_ROLE, _manager);
    }

     /**
     * @dev set the url of the portfolio
     * @notice only the manager can call this function
     * @param _url the url of the portfolio
     */
    function setUrl(string memory _url) external onlyRole(MANAGER_ROLE) {
        url = _url;
    }

    /**
     * @dev fetches all stored memos
     */
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    /**
     * @dev buy a coffee for owner
     * @param _name name of the coffee purchaser
     * @param _linkedin linkedin of the coffee purchaser
     * @param _message a nice message from the purchaser
     * @param _amount amount of USDT to send
     * @notice the purchaser must approve the contract to spend USDT if buying coffee with USDT
     */
    function buyCoffee
    (
        string memory _name, 
        string memory _linkedin, 
        string memory _message, 
        uint _amount
    ) 
        external 
        payable 
    {

        if(msg.value == 0){
            require (usdt.allowance(msg.sender, address(this)) >= _amount, 'allowance not enough');
            require (usdt.transferFrom(msg.sender, address(this), _amount), 'transfer failed');
        }

        // Add the memo to storage!
        memos.push(Memo(
            msg.sender,
            block.timestamp,
            _name,
            _linkedin,
            _message,
            msg.value > 0 ? 'ETH' : 'USDT',
            msg.value > 0 ? msg.value : _amount

        ));

        // Emit a NewMemo event with details about the memo.
        emit NewMemo(
            msg.sender,
            block.timestamp,
            _name,
            _linkedin,
            _message,
            msg.value > 0 ? 'ETH' : 'USDT',
            msg.value > 0 ? msg.value : _amount
        );
    }

    /**
     * @dev send the entire balance stored in this contract to the owner
     * @notice only the owner can call this function
     * @param _address receiver address
     */
    function withdrawTips(address _address) external onlyRole(DEFAULT_ADMIN_ROLE) {

        if(address(this).balance == 0){
            require (usdt.balanceOf(address(this)) > 0, 'balance not enough');
            require (usdt.transfer(_address, usdt.balanceOf(address(this))), 'transfer failed');
        }else{
            require(payable(_address).send(address(this).balance));
        }

    }
    // Event to emit when a Memo is created.
    event NewMemo(
        address indexed from,
        uint256 timestamp,
        string name,
        string linkedin,
        string message,
        string currency,
        uint amount
    );
}

