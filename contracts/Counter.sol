// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    // Biến lưu trữ giá trị số
    int256 private count;

    // Hàm để xem giá trị hiện tại của biến
    function getCount() public view returns (int256) {
        return count;
    }

    // Hàm để tăng giá trị của biến
    function increment() public {
        count += 1;
    }

    // Hàm để giảm giá trị của biến
    function decrement() public {
        count -= 1;
    }
}
