import React from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { ActionContent } from './styles'
// import LPValue from './LPValue'
import LPHolderStats from './LPHolderStats'

export interface HolderStatsProps {
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

const HolderStats: React.FunctionComponent<HolderStatsProps> = ({ details }) => {
  const farm = details

  /*
  
      <ActionContainer>
        <ActionContent>
          <LPValue {...farm} />
        </ActionContent>
      </ActionContainer>
  */
 
  return (
    <Container>
      <ActionContainer>
        <ActionContent>
          <LPHolderStats {...farm} />
        </ActionContent>
      </ActionContainer>
    </Container>
  )
}

export default HolderStats
