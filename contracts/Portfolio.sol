//SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract Portfolio is AccessControl{

    //Role to manage the portfolio
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
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
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(MANAGER_ROLE, msg.sender);
        _setRoleAdmin(MANAGER_ROLE, ADMIN_ROLE);
        usdt = IERC20(_usdt);
        url = _url;
    }

    /**
     * @dev set manager role
     * @param _manager the address of the manager
     * @notice only the owner can call this function
     */

    function setManager(address _manager) external onlyRole(ADMIN_ROLE) {
        grantRole(MANAGER_ROLE, _manager);
    }

    /**
     * @dev revoke manager role
     * @param _manager the address of the manager
     * @notice only the owner can call this function
     */
    function removeManager(address _manager) external onlyRole(ADMIN_ROLE) {
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
     * @dev buy a coffee for owner
     * @param _name name of the coffee purchaser
     * @param _linkedin linkedin of the coffee purchaser
     * @param _message a nice message from the purchaser
     * @param _amount amount of USDT to send
     * @return true if successful
     * @notice the purchaser must send ETH if buying coffee with ETH
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
        returns(bool)
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

        return(true);
    }

    /**
     * @dev send the entire balance stored in this contract to the owner
     * @notice only the owner can call this function
     * @param _address receiver address
     * @return true if successful
     */
    function withdrawTips(address _address) external onlyRole(ADMIN_ROLE) returns(bool) {

        if(address(this).balance == 0){
            require (usdt.balanceOf(address(this)) > 0, 'balance not enough');
            require (usdt.transfer(_address, usdt.balanceOf(address(this))), 'transfer failed');
        }else{
            require(payable(_address).send(address(this).balance));
        }

        return true;

    }

    /**
     * @dev fetches the number of stored memos
     * @return number of memos
     */

    function getMemoCount() public view returns (uint) {
        return memos.length;
    }

    /**
     * @dev fetches stored memos
     * @param _start the start index of the memos array
     * @param _limit the number of memos to fetch
     * @notice the memos are returned in reverse order of the stored array
     * @return memos array
     */
    function getMemos(uint _start, uint _limit) public view returns (Memo[] memory) {

        if(memos.length == 0 || _start > (memos.length - 1)) return new Memo[](0);

        uint start = (memos.length - 1) - _start;
              
        uint limit = _start + _limit > memos.length ? (memos.length - _start) : _limit;
    
        Memo[] memory _memos = new Memo[](limit);

        uint index = 0;

        unchecked {

            while(limit >= 1){
                _memos[index] = memos[start];
                start--;
                index++;
                limit--;
            }

        }

        return _memos;

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

