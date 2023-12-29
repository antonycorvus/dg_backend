import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);


    // const DauGia = await ethers.getContractFactory("DauGia");
    // const daugia = await DauGia.deploy();
    // console.log('DauGia address: ', daugia.address);
    // Config.setConfig(network + '.DauGia', daugia.address);
    
    // const USDT = await ethers.getContractFactory("USDT");
    // const usdt = await USDT.deploy();
    // console.log('USDT address: ', usdt.address);
    // Config.setConfig(network + '.USDT', usdt.address);

    // const Ico = await ethers.getContractFactory("DGCCrowdSale");
    // const ico = await Ico.deploy(1000,100,'0xaddaa2328DBa19B50De6d4db5103B4F8543D7c93', '0x455f28320602bB3CE16997805717D5555d77fCfe');
    // console.log('ICO address: ', ico.address);
    // Config.setConfig(network + '.Ico', ico.address);

    
    // const Hero = await ethers.getContractFactory("Hero");
    // const hero = await Hero.deploy();
    // console.log('stman hero address: ', hero.address);
    // Config.setConfig(network + '.Hero', hero.address);


    // const MKP = await ethers.getContractFactory("HeroMarketplace");
    // const hMarket = await MKP.deploy("0x261F3c84AdA78Dcc021ed2db7410cf74F15e27da", "0x455f28320602bB3CE16997805717D5555d77fCfe");
    // console.log('Market deployed at: ', hMarket.address);
    // Config.setConfig(network + '.HMK', hMarket.address);
    
    
    // const Auction = await ethers.getContractFactory("Auction");
    // const auction = await Auction.deploy("0x455f28320602bB3CE16997805717D5555d77fCfe", "0x261F3c84AdA78Dcc021ed2db7410cf74F15e27da");
    // console.log('Auction deployed at: ', auction.address);
    // Config.setConfig(network + '.Auction', auction.address);

    await Config.updateConfig();
    
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});
