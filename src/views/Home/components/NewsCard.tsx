import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from '@plantswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNewsCard = styled(Card)`
  background-image: url('/images/plant-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
`

const NewsCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledNewsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(542, 'News & Announcement')}
        </Heading>
        <Block>
          <Label><a href="https://app.bounce.finance/fixed-swap/5279">🌱PLANT Token available on Bounce.finance!</a></Label>
          <br />
          <Label><a href="https://plantswapfinance.medium.com/plant-token-as-been-deploy-on-binance-smart-chain-d81a3d202d96">🌱PLANT Token as been deploy on Binance Smart Chain</a></Label>
          <br />
          <Label><a href="https://plantswapfinance.medium.com/plantswap-finance-is-sprouting-7b3bee286d4d">🌱 PlantSwap.finance is sprouting 🌱</a></Label>
        </Block>
      </CardBody>
    </StyledNewsCard>
  )
}

export default NewsCard
