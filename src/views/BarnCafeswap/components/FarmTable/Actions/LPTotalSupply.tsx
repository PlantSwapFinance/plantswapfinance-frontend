import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/BarnCafeswap/components/FarmCard/FarmCard'
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

const LPTotalSupply: React.FunctionComponent<FarmWithStakedValue> = ({ lpSymbol, isTokenOnly, tokenAmount, lpTotalSupply }) => {
  const tokenAmountBigNumber = new BigNumber(tokenAmount)
  const lpTotalSupplyBigNumber = new BigNumber(lpTotalSupply)
  let tokenAmountings = null
  const thisIsAToken = isTokenOnly

  let lpTotalSupplings = null

  let lpOrToken = 'LP Token'
  if(thisIsAToken) { lpOrToken = 'Token' }

  if (tokenAmountBigNumber) {
    tokenAmountings = getBalanceNumber(tokenAmountBigNumber, 1)
  }

  if (tokenAmountBigNumber) {
    lpTotalSupplings = getBalanceNumber(lpTotalSupplyBigNumber, 1)
  }

  let lpOrTokenValue = tokenAmountings
  if(thisIsAToken) { lpOrTokenValue = lpTotalSupplings }

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
    </Container>
  )
}

export default LPTotalSupply
