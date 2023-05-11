import hre from "hardhat";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

async function main() {
 
  const Portfolio = await hre.ethers.getContractFactory("Portfolio");
  const portfolio = await Portfolio.deploy(process.env.USDT_ADDRESS, process.env.PORTFOLIO_JSON_URL);
  await portfolio.deployed();

  console.log("Portfolio Deployed at: ", portfolio.address);

  fs.writeFileSync("./frontend/app/src/assets/json/portfolio.json", JSON.stringify({
    "address": portfolio.address,
    "abi": portfolio.interface.format("json")
  }));
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });