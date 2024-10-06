import { ethers } from "hardhat";
import { expect } from "chai";
import { Counter } from "../typechain-types/Counter"; // Đảm bảo bạn có TypeChain được cài đặt

describe("Counter contract", function () {
  let counter: Counter;

  beforeEach(async function () {
    // Lấy contract factory và deploy
    const CounterFactory = await ethers.getContractFactory("Counter");
    counter = await CounterFactory.deploy();
   
  });

  it("should return the initial count as 0", async function () {
    const count = await counter.getCount();
    expect(count).to.equal(0);
  });

  it("should increment the count", async function () {
    await counter.increment();
    const count = await counter.getCount();
    expect(count).to.equal(1);
  });

  it("should decrement the count", async function () {
    await counter.increment();  // Tăng trước
    await counter.decrement();  // Sau đó giảm
    const count = await counter.getCount();
    expect(count).to.equal(0);
  });

  it("should handle multiple increments and decrements", async function () {
    await counter.increment();
    await counter.increment();
    await counter.increment();
    await counter.decrement();
    const count = await counter.getCount();
    expect(count).to.equal(2);
  });
});
