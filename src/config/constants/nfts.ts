import { Nft, NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://cloudflare-ipfs.com'

export const nftSources: NftSource = {
  [NftType.GARDENERS]: {
    address: {
      56: '0xA7C25c199BC8Dd06c4Edd2Ea8aEbCeC40A404c03',
      97: '0x11CeD42DCc6b002Ec66307CfE6B908156cB85944',
    },
    identifierKey: 'name',
  },
  [NftType.PANCAKE]: {
    address: {
      56: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
      97: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
    },
    identifierKey: 'image',
  },
  [NftType.MIXIE]: {
    address: {
      56: '0xa251b5EAa9E67F2Bc8b33F33e20E91552Bf85566',
      97: '',
    },
    identifierKey: 'image',
  },
}

/**
 * NOTE: https://cloudflare-ipfs.com does not support video streaming so for the video URLS we need to use
 * https://gateway.pinata.cloud
 */

const Nfts: Nft[] = [
  {
    name: 'Casual farmer',
    description: 'Just walk-in, this is a other beatiful day for farming!',
    images: {
      lg: 'casual-farmer-lg.png',
      md: 'casual-farmer-md.png',
      sm: 'casual-farmer-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmSYm4Z2WmKx4hhm2CFJ5KhYFAo3iiKGjSkypgHqoAN3oB/gardeningSchool/casualFarmer.json',
      blur: 'casual-farmer-blur.png',
    },
    sortOrder: 11,
    identifier: 'Casual farmer',
    type: NftType.GARDENERS,
    variationId: 1,
  },
  {
    name: 'Casual gardener',
    description: "Just walk-in, this is a other beatiful day for gardening!",
    images: {
      lg: 'casual-gardener-lg.png',
      md: 'casual-gardener-md.png',
      sm: 'casual-gardener-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmSYm4Z2WmKx4hhm2CFJ5KhYFAo3iiKGjSkypgHqoAN3oB/gardeningSchool/casualGardener.json',
      blur: 'casual-gardener-blur.png',
    },
    sortOrder: 12,
    identifier: 'Casual gardener',
    type: NftType.GARDENERS,
    variationId: 2,
  },
  {
    name: 'Pickup',
    description: 'I love a ride in pickup!',
    images: {
      lg: 'pickup-lg.png',
      md: 'pickup-md.png',
      sm: 'pickup-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmSYm4Z2WmKx4hhm2CFJ5KhYFAo3iiKGjSkypgHqoAN3oB/gardeningSchool/pickup.json',
      blur: 'pickup-blur.png',
    },
    sortOrder: 13,
    identifier: 'Pickup',
    type: NftType.GARDENERS,
    variationId: 3,
  },
  {
    name: 'Tractor',
    description: "The tractor use to harvest the farm.",
    images: {
      lg: 'tractor-lg.png',
      md: 'tractor-md.png',
      sm: 'tractor-sm.png',
      ipfs: 'https://ggateway.pinata.cloud/ipfs/QmSYm4Z2WmKx4hhm2CFJ5KhYFAo3iiKGjSkypgHqoAN3oB/gardeningSchool/tractor.json',
      blur: 'tractor-blur.png',
    },
    sortOrder: 14,
    identifier: 'Tractor',
    type: NftType.GARDENERS,
    variationId: 4,
  },
  {
    name: 'Scarecrow',
    description: 'The scarecrow of the farm.',
    images: {
      lg: 'scarecrow-lg.png',
      md: 'scarecrow-md.png',
      sm: 'scarecrow-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmSYm4Z2WmKx4hhm2CFJ5KhYFAo3iiKGjSkypgHqoAN3oB/gardeningSchool/scarecrow.json',
      blur: 'scarecrow-blur.png',
    },
    sortOrder: 15,
    identifier: 'Scarecrow',
    type: NftType.GARDENERS,
    variationId: 5,
  },
  {
    name: 'Plantswap barn',
    description: 'The barn of Plantswap, where everything started!',
    images: {
      lg: 'plantswap-barn-lg.png',
      md: 'plantswap-barn-md.png',
      sm: 'plantswap-barn-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmaaXqzti7QrJxwxxcxfZqrdCw5EXi78ivVTB2gD26MbL3/plantswap-barn.png',
      blur: 'plantswap-barn-blur.png',
    },
    sortOrder: 16,
    identifier: 'plantswapBarn',
    type: NftType.GARDENERS,
    variationId: 6,
  },
  {
    name: 'Plantswap pickup',
    description: "Come for a ride in the Plantswap pickup",
    images: {
      lg: 'plantswap-pickup-lg.png',
      md: 'plantswap-pickup-md.png',
      sm: 'plantswap-pickup-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/Qmb1vi9j1oeiMMb6f7neZSARXMBeWm3mxgcHm1yVRMopWX/plantswap-pickup.png',
      blur: 'plantswap-pickup-blur.png',
    },
    sortOrder: 17,
    identifier: 'plantswapPickup',
    type: NftType.GARDENERS,
    variationId: 7,
  },
  {
    name: 'Plantswap farmer',
    description: "A Plantswap farmer hard at work, making the planet a better place!",
    images: {
      lg: 'plantswap-farmer-lg.png',
      md: 'plantswap-farmer-md.png',
      sm: 'plantswap-farmer-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXCZNP81hVp98tk5R4wf58gniZ9Q6ofMyg5wXgbe6oATg/plantswap-farmer.png',
      blur: 'plantswap-farmer-blur.png',
    },
    sortOrder: 18,
    identifier: 'plantswapFarmer',
    type: NftType.GARDENERS,
    variationId: 8,
  },
  {
    name: 'Pancakeswap farmer',
    description: "I love these cakes!",
    images: {
      lg: 'pancakeswap-farmer-lg.png',
      md: 'twpancakeswap-farmerinkle-md.png',
      sm: 'pancakeswap-farmer-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmWRMh8oG8y7wStBsLR413aPpPFxvC7jMqKKpPi5xYZY5G/pancakeswap-farmer.png',
      blur: 'pancakeswap-farmer-blur.png',
    },
    sortOrder: 19,
    identifier: 'pancakeswapFarmer',
    type: NftType.GARDENERS,
    variationId: 9,
  },
  {
    name: 'Relax PLANT Farmer',
    description: "I love farming Plant, so much that I stake them to harvest even more!",
    requirement: "To claim this collectible you need an active Plantswap Profile and a minimum of 1 PLANT token in the PLANT Garden.",
    images: {
      lg: 'relaxPlantFarmer.png',
      md: 'relaxPlantFarmer.png',
      sm: 'relaxPlantFarmer.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYdaCqtLsymfemxBbc2wT91QfByN9P1kV3uNKQjCWRzpd/gardeners100to105/relaxPlantFarmer.png',
      blur: 'relaxPlantFarmer.png',
    },
    sortOrder: 1,
    identifier: 'Relax PLANT Farmer',
    type: NftType.GARDENERS,
    variationId: 100,      // https://gateway.pinata.cloud/ipfs/Qme1YGy63Ys4We8KDs75XQH1Ybsxc2oRNMhXNUJjU89bJr
  },
  {
    name: 'Relax PLANT BNB Gardener',
    description: "I love farming Plant, I support Plantswap by providing BNB and Plant to the market and I harvest plant in reward!",
    requirement: "To claim this collectible you need an active Plantswap Profile and a minimum of 1 PLANT/BNB LP token in the PLANT/BNB Farms.",
    images: {
      lg: 'relaxPlantBnbGardener.png',
      md: 'relaxPlantBnbGardener.png',
      sm: 'relaxPlantBnbGardener.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYdaCqtLsymfemxBbc2wT91QfByN9P1kV3uNKQjCWRzpd/gardeners100to105/relaxPlantBnbGardener.png',
      blur: 'relaxPlantBnbGardener.png',
    },
    sortOrder: 2,
    identifier: 'Relax PLANT BNB Gardener',
    type: NftType.GARDENERS,
    variationId: 101,       // https://gateway.pinata.cloud/ipfs/QmbnLvTYcMP1WTRsbBa1cnQE2Tc26CNW5aU8rG4iiA7B2Y
  },
  {
    name: 'Relax PLANT BUSD Farmer',
    description: "I love farming Plant, I support Plantswap by providing BUSD and Plant to the market and I harvest plant in reward!",
    requirement: "To claim this collectible you need an active Plantswap Profile and a minimum of 1 PLANT/BUSD LP token in the PLANT/BUSD Farms.",
    images: {
      lg: 'relaxPlantBusdFarmer.png',
      md: 'relaxPlantBusdFarmer.png',
      sm: 'relaxPlantBusdFarmer.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYdaCqtLsymfemxBbc2wT91QfByN9P1kV3uNKQjCWRzpd/gardeners100to105/relaxPlantBusdFarmer.png',
      blur: 'relaxPlantBusdFarmer.png',
    },
    sortOrder: 3,
    identifier: 'Relax PLANT BUSD Farmer',
    type: NftType.GARDENERS,
    variationId: 102,        // https://gateway.pinata.cloud/ipfs/QmPUaBsaxFcfSGbyB72nUVLXMMaQ1ic1zUwB4Z54kDyrNN
  },
  {
    name: 'Relax PLANT USDC Farmer',
    description: "I love farming Plant, I support Plantswap by providing USDC and Plant to the market and I harvest plant in reward!",
    requirement: "To claim this collectible you need an active Plantswap Profile and a minimum of 1 PLANT/USDC LP token in the PLANT/USDC Farms.",
    images: {
      lg: 'relaxPlantUsdcFarmer.png',
      md: 'relaxPlantUsdcFarmer.png',
      sm: 'relaxPlantUsdcFarmer.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYdaCqtLsymfemxBbc2wT91QfByN9P1kV3uNKQjCWRzpd/gardeners100to105/relaxPlantUsdcFarmer.png',
      blur: 'relaxPlantUsdcFarmer.png',
    },
    sortOrder: 4,
    identifier: 'Relax PLANT USDC Farmer',
    type: NftType.GARDENERS,
    variationId: 103,       // https://gateway.pinata.cloud/ipfs/QmUJTHqj4cvdbnBQTgbppSKhNBhyZLjab6gUR4Rz2eK4iE
  },
  {
    name: 'Relax PLANT CAKE Gardener',
    description: "I love farming Plant, I support Plantswap by providing CAKE and Plant to the market and I harvest plant in reward!",
    requirement: "To claim this collectible you need an active Plantswap Profile and a minimum of 1 PLANT/CAKE LP token in the PLANT/CAKE Farms.",
    images: {
      lg: 'relaxPlantCakeGardener.png',
      md: 'relaxPlantCakeGardener.png',
      sm: 'relaxPlantCakeGardener.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYdaCqtLsymfemxBbc2wT91QfByN9P1kV3uNKQjCWRzpd/gardeners100to105/relaxPlantCakeGardener.png',
      blur: 'relaxPlantCakeGardener.png',
    },
    sortOrder: 5,
    identifier: 'Relax PLANT CAKE Gardener',
    type: NftType.GARDENERS,
    variationId: 104,        // https://gateway.pinata.cloud/ipfs/QmazHH85gkiwNJKfQUL46vfg688vn48TguUrcQ8U43EV33
  },
]

export default Nfts
