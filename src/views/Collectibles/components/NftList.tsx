import React from 'react'
import orderBy from 'lodash/orderBy'
import { useWeb3React } from '@web3-react/core'
import nfts from 'config/constants/nfts'
import { useAppDispatch } from 'state'
import { fetchWalletNfts } from 'state/collectibles'
import { useGetCollectibles } from 'state/hooks'
import NftCard from './NftCard'
import NftGrid from './NftGrid'
import MasterGardeningSchoolNftCard from './NftCard/MasterGardeningSchoolNftCard'

/**
 * A map of bunnyIds to special campaigns (NFT distribution)
 * Each NftCard is responsible for checking it's own claim status
 *
 */
const nftComponents = {
  'Relax PLANT Farmer': MasterGardeningSchoolNftCard,
  'Relax PLANT BNB Gardener': MasterGardeningSchoolNftCard,
  'Relax PLANT BUSD Farmer': MasterGardeningSchoolNftCard,
  'Relax PLANT USDC Farmer': MasterGardeningSchoolNftCard,
  'Relax PLANT CAKE Gardener': MasterGardeningSchoolNftCard,
}

const NftList = () => {
  const { tokenIds } = useGetCollectibles()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleRefresh = () => {
    dispatch(fetchWalletNfts(account))
  }

  return (
    <NftGrid>
      {orderBy(nfts, 'sortOrder').map((nft) => {
        const Card = nftComponents[nft.identifier] || NftCard

        return (
          <div key={nft.name}>
            <Card nft={nft} tokenIds={tokenIds[nft.identifier]} refresh={handleRefresh} />
          </div>
        )
      })}
    </NftGrid>
  )
}

export default NftList
