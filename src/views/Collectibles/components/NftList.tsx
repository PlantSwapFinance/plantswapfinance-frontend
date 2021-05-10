import React, { useCallback, useEffect, useState } from 'react'
import orderBy from 'lodash/orderBy'
import nfts from 'config/constants/nfts'
import { useWeb3React } from '@web3-react/core'
import { getFarmerSpecialContract } from 'utils/contractHelpers'
import useGetWalletNfts from 'hooks/useGetWalletNfts'
import makeBatchRequest from 'utils/makeBatchRequest'
import { useToast } from 'state/hooks'
import NftCard from './NftCard'
import NftGrid from './NftGrid'

type State = {
  [key: string]: boolean
}

const farmerSpecialContract = getFarmerSpecialContract()

const NftList = () => {
  const [claimableNfts, setClaimableNfts] = useState<State>({})
  const { nfts: nftTokenIds, refresh } = useGetWalletNfts()
  const { account } = useWeb3React()
  const { toastError } = useToast()

  const fetchClaimableStatuses = useCallback(
    async (walletAddress: string) => {
      try {
        const claimStatuses = (await makeBatchRequest(
          nfts.map((nft) => {
            return farmerSpecialContract.methods.canClaimSingle(walletAddress, nft.farmerId).call
          }),
        )) as boolean[]

        setClaimableNfts(
          claimStatuses.reduce((accum, claimStatus, index) => {
            return {
              ...accum,
              [nfts[index].farmerId]: claimStatus,
            }
          }, {}),
        )
      } catch (error) {
        console.error(error)
        toastError('Error checking NFT claimable status')
      }
    },
    [setClaimableNfts, toastError],
  )

  const handleSuccess = () => {
    refresh()
    fetchClaimableStatuses(account)
  }

  useEffect(() => {
    if (account) {
      fetchClaimableStatuses(account)
    }
  }, [account, fetchClaimableStatuses])

  return (
    <NftGrid>
      {orderBy(nfts, 'sortOrder').map((nft) => {
        const tokenIds = nftTokenIds[nft.farmerId] ? nftTokenIds[nft.farmerId].tokenIds : []

        return (
          <div key={nft.name}>
            <NftCard nft={nft} canClaim={claimableNfts[nft.farmerId]} tokenIds={tokenIds} onSuccess={handleSuccess} />
          </div>
        )
      })}
    </NftGrid>
  )
}

export default NftList
