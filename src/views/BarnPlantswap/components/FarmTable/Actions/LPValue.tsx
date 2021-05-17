import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { getBalanceNumber } from 'utils/formatBalance'
import { useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getAddress } from 'utils/addressHelpers'
import { ActionContainer, ActionTitles, Title, Subtle, ActionContent, LP, LPvalue } from './styles'

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

const LPValue: React.FunctionComponent<FarmWithStakedValue> = ({ token, lpSymbol, isTokenOnly, lpTotalSupply, lpTokenBalanceMC }) => {
  const lpTotalSupplyBigNumber = new BigNumber(lpTotalSupply)
  const lpTokenBalanceMCBigNumber = new BigNumber(lpTokenBalanceMC)
  const burnedBalance = getBalanceNumber(useBurnedBalance(getAddress(token.address)))
  const lpTotalSupplingsMinusBurnBigNumber = new BigNumber(lpTotalSupply).minus(burnedBalance)
  let lpTotalSupplingsMinusBurn = null
  let lpTokenBalanceMCings = null
  let pcLPstack = null
  const thisIsAToken = isTokenOnly

  let lpOrToken = 'LP Token'
  if(thisIsAToken) { lpOrToken = 'Token' }

  if (lpTotalSupplyBigNumber) {
    lpTotalSupplingsMinusBurn = (getBalanceNumber(lpTotalSupplingsMinusBurnBigNumber, 18))
  }

  if (lpTokenBalanceMCBigNumber) {
    lpTokenBalanceMCings = getBalanceNumber(lpTokenBalanceMCBigNumber, 18).toFixed(4)
  }

  const lpOrTokenValue = lpTotalSupplingsMinusBurn.toFixed(4)

  pcLPstack = ((lpTokenBalanceMCings / lpOrTokenValue) * 100).toFixed(4)

  const TranslateString = useI18n()

  return (
    <Container>
     <ActionContainer>
        <ActionTitles>
          <Title>{lpOrToken} </Title>
          <Subtle>{TranslateString(999, 'Stack in Master Gardener')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <div>
            <LP>{lpTokenBalanceMCings}</LP>
            <LPvalue>{lpSymbol}</LPvalue>
          </div>
        </ActionContent>
     </ActionContainer>

     <ActionContainer>
        <ActionTitles>
          <Title>% of {lpOrToken} </Title>
          <Subtle>{TranslateString(999, 'Stack in Master Gardener')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <div>
            <LP>{pcLPstack}%</LP>
            <LPvalue>{lpSymbol}</LPvalue>
          </div>
        </ActionContent>
     </ActionContainer>
    </Container>
  )
}

export default LPValue
