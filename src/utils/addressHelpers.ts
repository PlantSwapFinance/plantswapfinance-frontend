import { ChainId } from '@pancakeswap/sdk'
import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getPlantAddress = () => {
  return getAddress(tokens.plant.address)
}

// Farming, Gardens && Vertical Gardens
export const getMasterGardenerAddress = () => {
  return getAddress(addresses.masterGardener)
}
export const getVerticalGardenAddress = () => {
  return getAddress(addresses.verticalGarden)
}
// Foundations
export const getFoundationNonProfitAddress = () => {
  return getAddress(addresses.plantswapFoundationNonProfit)
}
// Profile
export const getPlantProfileAddress = () => {
  return getAddress(addresses.plantswapProfile)
}
export const getPlantProfileExtra1Address = () => {
  return getAddress(addresses.plantswapProfileExtra1)
}
// Collectibles
export const getPlantswapGardenersAddress = () => {
  return getAddress(addresses.plantswapGardeners)
}
// Collectibles Claiming School
export const getGardeningSchoolNftAddress = () => {
  return getAddress(addresses.gardeningSchoolNft)
}
export const getMasterGardeningSchoolNftAddress = () => {
  return getAddress(addresses.masterGardeningSchoolNft)
}
// Multicall
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}


 // Not used anymore
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getPlantVaultAddress = () => {
  return getAddress(addresses.plantVault)
}
export const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}
export const getBunnySpecialPlantVaultAddress = () => {
  return getAddress(addresses.bunnySpecialPlantVault)
}
export const getBunnySpecialPredictionAddress = () => {
  return getAddress(addresses.bunnySpecialPrediction)
}
