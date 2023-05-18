import usdtABI from './usdt.abi.json' assert { type: 'json' };

import hre from "hardhat";
import helpers from "@nomicfoundation/hardhat-network-helpers";

const addressUSDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const addressTokenHolder = "0xA7A93fd0a276fc1C0197a5B5623eD117786eeD06"; //token holder
await helpers.impersonateAccount(addressTokenHolder);
const impersonatedSigner = await ethers.getSigner(addressTokenHolder);

const usdt = new ethers.Contract(addressUSDT, usdtABI, impersonatedSigner);

console.log((await usdt.balanceOf(addressTokenHolder)).toString());

await usdt.transfer("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", ethers.utils.parseUnits("10000", 6));

console.log((await usdt.balanceOf("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")).toString());
