import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { merge } from 'lodash'
import { FoundationProposal, FoundationProposalState, FoundationVotingStateLoadingStatus, FoundationVotingState, FoundationVote, State } from 'state/types'
import { getAllVotes, getProposal, getProposals, getVoteVerificationStatuses } from './helpers'

import fetchFoundationGeneral from './fetchFoundationGeneral'
import { FoundationGeneral } from '../types'

const initialState: FoundationVotingState = {
  foundationProposalLoadingStatus: FoundationVotingStateLoadingStatus.INITIAL,
  foundationProposals: {},
  foundationVoteLoadingStatus: FoundationVotingStateLoadingStatus.INITIAL,
  foundationVotes: {},
}
/*
export const fetchFoundation = createAsyncThunk<FoundationGeneral[], { skip?: number; }>(
  'foundationVoting/fetchProposals',
  async ({ skip = 0 }) => {
    const response = await fetchFoundationGeneral(skip)

    return response
  },
) 
*/
export const foundationVotingSlice = createSlice({
  name: 'FoundationVoting',
  initialState,
  reducers: {},
  extraReducers: {},
})

export default foundationVotingSlice.reducer



// Thunks
/* export const fetchProposals = createAsyncThunk<FoundationProposal[], { first?: number; skip?: number; state?: FoundationProposalState }>(
  'foundationVoting/fetchProposals',
  async ({ first, skip = 0, state = FoundationProposalState.ACTIVE }) => {
    const response = await getProposals(first, skip, state)
    return response
  },
)

export const fetchProposal = createAsyncThunk<FoundationProposal, string>('voting/fetchProposal', async (proposalId) => {
  const response = await getProposal(proposalId)
  return response
})

export const fetchVotes = createAsyncThunk<
  { votes: FoundationVote[]; proposalId: string },
  { proposalId: string; block?: number }
>('foundationVoting/fetchVotes', async ({ proposalId, block }) => {
  const response = await getAllVotes(proposalId, block)
  return { votes: response, proposalId }
})

export const verifyVotes = createAsyncThunk<
  { results: { [key: string]: boolean }; proposalId: string },
  { proposalId: string; snapshot?: string },
  { state: State }
>('foundationVoting/verifyVotes', async ({ proposalId, snapshot }, { getState }) => {
  const state = getState()
  const proposalVotes = state.foundationVoting.votes[proposalId]
  const response = await getVoteVerificationStatuses(proposalVotes, Number(snapshot))
  return { results: response, proposalId }
})

export const votingSlice = createSlice({
  name: 'foundationVoting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Verify Votes
    builder.addCase(verifyVotes.fulfilled, (state, action) => {
      const { proposalId, results } = action.payload

      if (state.foundationVotes[proposalId]) {
        state.foundationVotes[proposalId] = state.foundationVotes[proposalId].map((vote) => {
          return {
            ...vote,
            _inValid: results[vote.id] === false,
          }
        })
      }
    })

    // Fetch Proposals
    builder.addCase(fetchProposals.pending, (state) => {
      state.foundationProposalLoadingStatus = FoundationVotingStateLoadingStatus.LOADING
    })
    builder.addCase(fetchProposals.fulfilled, (state, action) => {
      const proposals = action.payload.reduce((accum, proposal) => {
        return {
          ...accum,
          [proposal.id]: proposal,
        }
      }, {})

      state.foundationProposals = merge({}, state.foundationProposals, proposals)
      state.foundationProposalLoadingStatus = FoundationVotingStateLoadingStatus.IDLE
    })

    // Fetch Proposal
    builder.addCase(fetchProposal.pending, (state) => {
      state.foundationProposalLoadingStatus = FoundationVotingStateLoadingStatus.LOADING
    })
    builder.addCase(fetchProposal.fulfilled, (state, action) => {
      state.foundationProposals[action.payload.id] = action.payload
      state.foundationProposalLoadingStatus = FoundationVotingStateLoadingStatus.IDLE
    })

    // Fetch Votes
    builder.addCase(fetchVotes.pending, (state) => {
      state.foundationVoteLoadingStatus = FoundationVotingStateLoadingStatus.LOADING
    })
    builder.addCase(fetchVotes.fulfilled, (state, action) => {
      const { votes, proposalId } = action.payload

      state.foundationVotes = {
        ...state.foundationVotes,
        [proposalId]: votes,
      }
      state.foundationVoteLoadingStatus = FoundationVotingStateLoadingStatus.IDLE
    })
  },
}) 

export default votingSlice.reducer */
