import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
import { verticalGardensConfig, poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'

// Addresses
import {
  getAddress,
  getPlantAddress,
  getMasterGardenerAddress,
  getFoundationNonProfitAddress,
  getPlantProfileAddress,
  getPlantProfileExtra1Address,
  getPlantswapGardenersAddress,
  getGardeningSchoolNftAddress,
  getMasterGardeningSchoolNftAddress,
  getMulticallAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
  getPointCenterIfoAddress,
  getClaimRefundAddress,
  getChainlinkOracleAddress,
  getBunnySpecialPlantVaultAddress,
  getBunnySpecialPredictionAddress,
} from 'utils/addressHelpers'

// ABI
import plantAbi from 'config/abi/plant.json'
  // Farms and Gardens
import masterGardener from 'config/abi/masterchef.json'
import verticalGardens from 'config/abi/verticalGardens.json'
  // GardenV1
import sousChef from 'config/abi/sousChef.json'
  // Collectibles
import plantswapGardenersAbi from 'config/abi/plantswapGardeners.json'
  // Foundations
import plantswapFoundationNonProfitAbi from 'config/abi/plantswapFoundationNonProfit.json'
  // Profile
import profileABI from 'config/abi/plantswapGardenersProfile.json'
import plantswapProfileExtra1ABI from 'config/abi/plantswapGardenersProfileExtra1.json'
  // Collectibles Claiming School
import gardeningSchoolNftAbi from 'config/abi/gardeningSchool.json'
import masterGardeningSchoolNftAbi from 'config/abi/masterGardeningSchool.json'

  // Multicall and other basic abi
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import lpTokenAbi from 'config/abi/lpToken.json'

  // Not used
import ifoV1Abi from 'config/abi/ifoV1.json'
import ifoV2Abi from 'config/abi/ifoV2.json'
import pointCenterIfo from 'config/abi/pointCenterIfo.json'
import sousChefV2 from 'config/abi/sousChefV2.json'
import sousChefBnb from 'config/abi/sousChefBnb.json'
import claimRefundAbi from 'config/abi/claimRefund.json'
import chainlinkOracleAbi from 'config/abi/chainlinkOracle.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import bunnySpecialPlantVaultAbi from 'config/abi/bunnySpecialCakeVault.json'
import bunnySpecialPredictionAbi from 'config/abi/bunnySpecialPrediction.json'

import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'
import { ChainLinkOracleContract } from './types'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

// Plant token
export const getPlantContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(plantAbi, getPlantAddress(), signer)
}
// Farms and Gardens
export const getMasterchefContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(masterGardener, getMasterGardenerAddress(), signer)
}
export const getVerticalGardenContract = (id: number, signer?: ethers.Signer | ethers.providers.Provider) => {
  const config = verticalGardensConfig.find((verticalGarden) => verticalGarden.vgId === id)
  const abi = verticalGardens
  return getContract(abi, getAddress(config.verticalGardenContractAddress), signer)
}
// GardenV1
export const getSouschefContract = (id: number, signer?: ethers.Signer | ethers.providers.Provider) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  return getContract(abi, getAddress(config.contractAddress), signer)
}
// Collectibles
export const getPlantswapGardenersContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(plantswapGardenersAbi, getPlantswapGardenersAddress(), signer)
}
// Foundations
export const getPlantProfileContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(plantswapFoundationNonProfitAbi, getFoundationNonProfitAddress(), signer)
}
// Profile
export const getProfileContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(profileABI, getPlantProfileAddress(), signer)
}
export const getProfileExtra1Contract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(plantswapProfileExtra1ABI, getPlantProfileExtra1Address(), signer)
}
// Collectibles Claiming School
export const getGardeningSchoolNftContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(gardeningSchoolNftAbi, getGardeningSchoolNftAddress(), signer)
}
export const getMasterGardeningSchoolNftContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(masterGardeningSchoolNftAbi, getMasterGardeningSchoolNftAddress(), signer)
}
// Multicall and other basic abi
export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer)
}
export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
export const getErc721Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc721Abi, address, signer)
}
export const getLpContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(lpTokenAbi, address, signer)
}


// Not used
export const getIfoV1Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(ifoV1Abi, address, signer)
}
export const getIfoV2Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(ifoV2Abi, address, signer)
}
export const getSouschefV2Contract = (id: number, signer?: ethers.Signer | ethers.providers.Provider) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  return getContract(sousChefV2, getAddress(config.contractAddress), signer)
}
export const getPointCenterIfoContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(pointCenterIfo, getPointCenterIfoAddress(), signer)
}
export const getBunnyFactoryContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress(), signer)
}
export const getBunnySpecialContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress(), signer)
}
export const getClaimRefundContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(claimRefundAbi, getClaimRefundAddress(), signer)
}
export const getChainlinkOracleContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(chainlinkOracleAbi, getChainlinkOracleAddress(), signer) as ChainLinkOracleContract
}
export const getBunnySpecialPlantVaultContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bunnySpecialPlantVaultAbi, getBunnySpecialPlantVaultAddress(), signer)
}
export const getBunnySpecialPredictionContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bunnySpecialPredictionAbi, getBunnySpecialPredictionAddress(), signer)
}
