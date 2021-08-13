import React, { useEffect, useState } from 'react'
import { Card, Heading, Text } from '@plantswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import { useAppDispatch } from 'state'
import { fetchProposals } from 'state/voting'
import { useGetProposalLoadingStatus } from 'state/voting/hooks'
import { ProposalState, ProposalType, VotingStateLoadingStatus } from 'state/types'
import ProposalsLoading from './ProposalsLoading'
import TabMenu from './TabMenu'
// import ProposalRow from './ProposalRow'
import Filters from './Filters'

interface State {
  proposalType: ProposalType
  filterState: ProposalState
}

const Proposals = () => {
  const { t } = useTranslation()
  const [state, setState] = useState<State>({
    proposalType: ProposalType.CORE,
    filterState: ProposalState.ACTIVE,
  })
  const proposalStatus = useGetProposalLoadingStatus()
//  const proposals = useGetProposals()
  const dispatch = useAppDispatch()

  const { proposalType, filterState } = state
  const isLoading = proposalStatus === VotingStateLoadingStatus.LOADING
//  const isIdle = proposalStatus === VotingStateLoadingStatus.IDLE

  useEffect(() => {
    dispatch(fetchProposals({ first: 1000, state: filterState }))
  }, [filterState, dispatch])

  const handleProposalTypeChange = (newProposalType: ProposalType) => {
    setState((prevState) => ({
      ...prevState,
      proposalType: newProposalType,
    }))
  }

  const handleFilterChange = (newFilterState: ProposalState) => {
    setState((prevState) => ({
      ...prevState,
      filterState: newFilterState,
    }))
  }

  return (
    <Container>
      <Heading as="h2" scale="xl" mb="32px">
        {t('List of Ecological non-profit')}
      </Heading>
      <Text>{t('Here is the list of ecological non-profit foundation that Plantswap members submitted for proposals. You can vote on recent proposal, help validate the authenticity of a listing, donate directly to them and consult details on previous donnations to each of these foundations.')}</Text>
      <br />
      <Card>
        <TabMenu proposalType={proposalType} onTypeChange={handleProposalTypeChange} />
        <Filters filterState={filterState} onFilterChange={handleFilterChange} isLoading={isLoading} />
        {isLoading && <ProposalsLoading />}
        
      </Card>
    </Container>
  )
}

export default Proposals
