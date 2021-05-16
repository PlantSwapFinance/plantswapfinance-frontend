import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/BarnPancakeswap/components/FarmCard/FarmCard'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
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

const LPTotalSupply: React.FunctionComponent<FarmWithStakedValue> = ({ lpSymbol, isTokenOnly, lpTotalSupply, lpTokenBalanceMC }) => {
  // const tokenAmountBigNumber = new BigNumber(tokenAmount)
  const lpTotalSupplyBigNumber = new BigNumber(lpTotalSupply)
  const lpTokenBalanceMCBigNumber = new BigNumber(lpTokenBalanceMC)
  // let tokenAmountings = null
  let lpTotalSupplings = null
  let lpTokenBalanceMCings = null
  let pcLPstack = null
  const thisIsAToken = isTokenOnly

  let lpOrToken = 'LP Token'
  if(thisIsAToken) { lpOrToken = 'Token' }

  // if (tokenAmountBigNumber) {
  //  tokenAmountings = getBalanceNumber(tokenAmountBigNumber, 1)
 // }

  if (lpTotalSupplyBigNumber) {
    lpTotalSupplings = getBalanceNumber(lpTotalSupplyBigNumber, 18)
  }

  if (lpTokenBalanceMCBigNumber) {
    lpTokenBalanceMCings = getBalanceNumber(lpTokenBalanceMCBigNumber, 18)
  }

  let lpOrTokenValue = lpTotalSupplings
  if(thisIsAToken) { lpOrTokenValue = lpTotalSupplings }

  pcLPstack = ((lpTokenBalanceMCings / lpOrTokenValue) * 100)

  const TranslateString = useI18n()

  return (
    <Container>
      <ActionContainer>
        <ActionTitles>
          <Title>{lpOrToken} </Title>
          <Subtle>{TranslateString(999, 'Total supply')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <div>
            <LP>{lpOrTokenValue}</LP>
            <LPvalue>{lpSymbol}</LPvalue>
          </div>
        </ActionContent>
     </ActionContainer>
     
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

export default LPTotalSupply
