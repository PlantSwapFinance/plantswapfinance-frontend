import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, useModal } from '@plantswap-libs/uikit'
import UnlockButton from 'components/UnlockButton'
import { useWeb3React } from '@web3-react/core'
import { useFarmUser } from 'state/hooks'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import useI18n from 'hooks/useI18n'
import { useApprove } from 'hooks/useApprove'
import { getBep20Contract } from 'utils/contractHelpers'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceNumber } from 'utils/formatBalance'
import useStake from 'hooks/useStake'
import useWeb3 from 'hooks/useWeb3'

import DepositModal from '../../DepositModal'
import { ActionContainer, ActionTitles, ActionContent, Earned, Title, Subtle } from './styles'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const LPHolderStats: React.FunctionComponent<FarmWithStakedValue> = ({ pid, lpSymbol, lpAddresses, quoteToken, token, tokenAmount, lpTotalSupply, isTokenOnly }) => {
  const TranslateString = useI18n()
  const lpTotalSupplyBigNumber = new BigNumber(lpTotalSupply)
  const { account } = useWeb3React()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const { onStake } = useStake(pid)
  const web3 = useWeb3()

  let lpTotalSupplings = null

  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })

  
  if (lpTotalSupplyBigNumber) {
    lpTotalSupplings = getBalanceNumber(lpTotalSupplyBigNumber, 1)
  }

  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const rawStakedBalance = getBalanceNumber(stakedBalance)


  const tokenAmountBigNumber = new BigNumber(tokenAmount)
  let tokenAmountings = null
  const thisIsAToken = isTokenOnly

  let lpOrToken = 'LP'
  if(thisIsAToken) { lpOrToken = 'Token' }

  if (tokenAmountBigNumber) {
    tokenAmountings = getBalanceNumber(tokenAmountBigNumber, 1)
  }


  const displayPoolPortion = ((rawStakedBalance / tokenAmountings) * 100)
  const displayPoolTokenPortion = ((rawStakedBalance / lpTotalSupplings) * 100)


  let lpOrTokenValue = displayPoolPortion
  if(thisIsAToken) { lpOrTokenValue = displayPoolTokenPortion }

  const [onPresentDeposit] = useModal(
    <DepositModal max={tokenBalance} onConfirm={onStake} tokenName={lpSymbol} addLiquidityUrl={addLiquidityUrl} />,
  )

  const lpContract = getBep20Contract(lpAddress, web3)

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{TranslateString(999, 'START FARMING')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <UnlockButton width="100%" />
        </ActionContent>
      </ActionContainer>
    )
  }

  if (isApproved) {
    if (rawStakedBalance) {
      return (
        <Container>
          <ActionContainer>
            <ActionTitles>
              <Title>{TranslateString(999, `Your Staked ${lpOrToken} / ${lpOrToken} Total Supply`)}</Title>
            </ActionTitles>
            <ActionContent>
              <div>
                <Earned>{lpOrTokenValue} %</Earned>
              </div>
            </ActionContent>
          </ActionContainer>
        </Container>
      )
    }

    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{TranslateString(999, 'STAKE')} </Subtle>
          <Title>{lpSymbol}</Title>
        </ActionTitles>
        <ActionContent>
          <Button width="100%" onClick={onPresentDeposit} variant="secondary">
            {TranslateString(999, 'Stake LP')}
          </Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>
        <Subtle>{TranslateString(999, 'ENABLE FARM')}</Subtle>
      </ActionTitles>
      <ActionContent>
        <Button width="100%" disabled={requestedApproval} onClick={handleApprove} variant="secondary">
          {TranslateString(999, 'Enable')}
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default LPHolderStats
