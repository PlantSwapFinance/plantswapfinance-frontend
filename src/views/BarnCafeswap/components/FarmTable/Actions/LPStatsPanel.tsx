import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { LinkExternal } from '@plantswap-libs/uikit'
import { FarmWithStakedValue } from 'views/BarnCafeswap/components/FarmCard/FarmCard'
import { ActionContent } from './styles'

import LPTotalSupply from './LPTotalSupply'
import LPHolderStats from './LPHolderStats'

export interface LPStatsPanelProps {
  details: FarmWithStakedValue
}

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

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
`

const LPStatsPanel: React.FunctionComponent<LPStatsPanelProps> = ({ details }) => {
  const farm = details

  const TranslateString = useI18n()
  const { token } = farm
  const projectTokenLabel = farm.token.symbol
  const projectLinkLabel = farm.token.projectLink
  const projectLinkLink = farm.token.projectLink
  const projectTokenAddress = token.address
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const thisIsAToken = farm.isTokenOnly
  const bscLp = `https://bscscan.com/address/${projectTokenAddress}`
  const bscToken = `https://pancakeswap.info/pair/${lpAddress}`

  let lpOrToken = 'LP Token'
  if(thisIsAToken) { lpOrToken = 'Token' }

  let lpOrTokenLink1 = <StyledLinkExternal href={bscToken}>{TranslateString(999, `View ${projectTokenLabel} Token Contract`)}</StyledLinkExternal>
  if(thisIsAToken) { lpOrTokenLink1 = <StyledLinkExternal href={bscLp}>{TranslateString(999, `View ${lpOrToken} Contract`)}</StyledLinkExternal> }
  
  let lpOrTokenLink2 = null
  if(thisIsAToken) { lpOrTokenLink2 = <StyledLinkExternal href={bscToken}>{TranslateString(999, `View ${projectTokenLabel} Token Contract`)}</StyledLinkExternal> }

  return (
    <Container>
      <InfoContainer>
        <StakeContainer>
          <StyledLinkExternal href={`${projectLinkLink}`}>
            {TranslateString(999, `Go to ${projectLinkLabel}`, { name: projectLinkLabel })}
          </StyledLinkExternal>
        </StakeContainer>
        {lpOrTokenLink1}
        {lpOrTokenLink2}
      </InfoContainer>
      <ActionContainer>
        <ActionContent>
          <LPTotalSupply {...farm} />
        </ActionContent>
        <ActionContent>
          <LPHolderStats {...farm} />
        </ActionContent>
      </ActionContainer>
    </Container>
  )
}

export default LPStatsPanel
