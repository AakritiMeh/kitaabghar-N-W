// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Transaction {
    address payable public seller;
    address payable public buyer;
    uint256 public valueOfMaterial;

    enum Status {
        created,
        locked,
        release,
        inactive
    }
    Status public status;

    constructor() payable {
        seller = payable(msg.sender);
    }

    modifier inStatus(Status _status) {
        if (status != _status) {
            revert("wrong status");
        }
        _;
    }

    modifier onlBuyer() {
        if (msg.sender != buyer) {
            revert("only buyer");
        }
        _;
    }

    modifier onlySeller() {
        if (msg.sender != seller) {
            revert("only seller");
        }
        _;
    }

    function confirmPurchase() external payable onlySeller {
        require(msg.sender == buyer, "Seller can not confirm purchase");
        require(
            msg.value == valueOfMaterial,
            "value does not match value of product"
        );
        buyer = payable(msg.sender);
        status = Status.locked;
    }

    function confirmRecieved()
        external
        payable
        inStatus(Status.locked)
        onlBuyer
    {
        require(msg.sender == seller, "buyer can not confirm purchase");
        require(
            msg.value == valueOfMaterial,
            "value does not match value of product"
        );
        status = Status.release;
    }

    function transaction() external payable onlBuyer {
        seller.transfer(msg.value);
    }
}
