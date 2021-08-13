import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { CampaignType, FarmConfig, VerticalGardenConfig, Nft, PoolConfig, Team } from 'config/constants/types'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface BigNumberToJson {
  type: 'BigNumber'
  hex: string
}

export type TranslatableText =
  | string
  | {
      key: string
      data?: {
        [key: string]: string | number
      }
    }

export type SerializedBigNumber = string

export interface Farm extends FarmConfig {
  tokenAmountMc?: SerializedBigNumber
  quoteTokenAmountMc?: SerializedBigNumber
  tokenAmountTotal?: SerializedBigNumber
  quoteTokenAmountTotal?: SerializedBigNumber
  lpTotalInQuoteToken?: SerializedBigNumber
  lpTotalSupply?: SerializedBigNumber
  tokenPriceVsQuote?: SerializedBigNumber
  poolWeight?: SerializedBigNumber
  userData?: {
    allowance: string
    tokenBalance: string
    stakedBalance: string
    earnings: string
  }
}

export interface VerticalGarden extends VerticalGardenConfig {
  totalStaked?: BigNumber
  totalStakedEachBlock?: BigNumber
  totalPendingStakedRewardToSplit?: BigNumber
  totalPendingPlantRewardToSplit?: BigNumber
  pendingStakedInStakedMasterChef?: BigNumber
  pendingPlantInPlantMasterGardener?: BigNumber
  freezeContractTillBloc?: BigNumber
  lastRewardUpdateBlock?: BigNumber
  lastRewardUpdateBlockPrevious?: BigNumber
  lastRewardUpdateTotalStakedToken?: BigNumber
  lastRewardUpdateRewardTokenGained?: BigNumber
  lastRewardUpdatePlantGained?: BigNumber
  startBlock?: number
  endBlock?: number
  apr?: number
  stakingTokenPrice?: number
  stakingRewardTokenPrice?: number
  verticalEarningTokenPrice?: number
  isAutoVault?: boolean
  userData?: {
    allowance: BigNumber
    allowanceReward: BigNumber
    allowancePlant: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
    pendingPlantReward: BigNumber
    estimateReward: BigNumber
    estimatePlantReward: BigNumber
    harvestedReward: BigNumber
    harvestedPlant: BigNumber
    compoundedReward: BigNumber
  }
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  stakingLimit?: BigNumber
  startBlock?: number
  endBlock?: number
  apr?: number
  stakingTokenPrice?: number
  earningTokenPrice?: number
  isAutoVault?: boolean
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface BarnPancakeswapFarm extends FarmConfig {
  tokenAmountMc?: SerializedBigNumber
  quoteTokenAmountMc?: SerializedBigNumber
  tokenAmountTotal?: SerializedBigNumber
  quoteTokenAmountTotal?: SerializedBigNumber
  lpTotalInQuoteToken?: SerializedBigNumber
  lpTotalSupply?: SerializedBigNumber
  tokenPriceVsQuote?: SerializedBigNumber
  poolWeight?: SerializedBigNumber
  userData?: {
    allowance: string
    tokenBalance: string
    stakedBalance: string
    earnings: string
  }
}

export interface Profile {
  userId: number
  points: number
  teamId: number
  nftAddress: string
  tokenId: number
  accountTypeId: number
  isActive: boolean
  username: string
  nft?: Nft
  team: Team
  hasRegistered: boolean
}

// Slices states

export interface FarmsState {
  data: Farm[]
  loadArchivedFarmsData: boolean
  userDataLoaded: boolean
}

export interface VaultFees {
  performanceFee: number
  callFee: number
  withdrawalFee: number
  withdrawalFeePeriod: number
}

export interface VaultUser {
  isLoading: boolean
  userShares: string
  plantAtLastUserAction: string
  lastDepositedTime: string
  lastUserActionTime: string
}
export interface PlantVault {
  totalShares?: string
  pricePerFullShare?: string
  totalPlantInVault?: string
  estimatedPlantBountyReward?: string
  totalPendingPlantHarvest?: string
  fees?: VaultFees
  userData?: VaultUser
}

export interface VerticalGardensState {
  data: VerticalGarden[]
  userDataLoaded: boolean
}

export interface PoolsState {
  data: Pool[]
  userDataLoaded: boolean
}

export interface BarnPancakeswapFarmsState {
  data: BarnPancakeswapFarm[]
  loadArchivedFarmsData: boolean
  userDataLoaded: boolean
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  hasRegistered: boolean
  data: Profile
}

export type TeamResponse = {
  0: string
  1: string
  2: string
  3: string
  4: boolean
}

export type TeamsById = {
  [key: string]: Team
}

export interface TeamsState {
  isInitialized: boolean
  isLoading: boolean
  data: TeamsById
}

export interface Achievement {
  id: string
  type: CampaignType
  address: string
  title: TranslatableText
  description?: TranslatableText
  badge: string
  points: number
}

export interface AchievementState {
  data: Achievement[]
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Collectibles

export interface CollectiblesState {
  isInitialized: boolean
  isLoading: boolean
  data: {
    [key: string]: number[]
  }
}

// Foundation

export enum FoundationProposalType {
  ALL = 'all',
  CORE = 'core',
  COMMUNITY = 'community',
}

export enum FoundationProposalState {
  ACTIVE = 'active',
  PENDING = 'pending',
  CLOSED = 'closed',
}

export interface FoundationGeneral {
  lastProposalId: BigNumber
  numberActiveProposals: BigNumber
  numberVotes: BigNumber
  numberDonnations: BigNumber
  totalDonations: BigNumber
}

export interface FoundationSpace {
  id: string
  name: string
}
export interface FoundationProposal {
  author: string
  body: string
  choices: string[]
  end: number
  id: string
  snapshot: string
  space: Space
  start: number
  state: FoundationProposalState
  title: string
}

export interface FoundationVote {
  id: string
  voter: string
  created: number
  space: Space
  proposal: {
    choices: FoundationProposal['choices']
  }
  choice: number
  metadata?: {
    votingPower: string
    verificationHash: string
  }
  _inValid?: boolean
}

export enum FoundationVotingStateLoadingStatus {
  INITIAL = 'initial',
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
}

export interface FoundationVotingState {
  foundationProposalLoadingStatus: FoundationVotingStateLoadingStatus
  foundationProposals: {
    [key: string]: FoundationProposal
  }
  foundationVoteLoadingStatus: FoundationVotingStateLoadingStatus
  foundationVotes: {
    [key: string]: FoundationVote[]
  }
}

// Voting

/* eslint-disable camelcase */
/**
 * @see https://hub.snapshot.page/graphql
 */
export interface VoteWhere {
  id?: string
  id_in?: string[]
  voter?: string
  voter_in?: string[]
  proposal?: string
  proposal_in?: string[]
}

export enum SnapshotCommand {
  PROPOSAL = 'proposal',
  VOTE = 'vote',
}

export enum ProposalType {
  ALL = 'all',
  CORE = 'core',
  COMMUNITY = 'community',
}

export enum ProposalState {
  ACTIVE = 'active',
  PENDING = 'pending',
  CLOSED = 'closed',
}

export interface Space {
  id: string
  name: string
}

export interface Proposal {
  author: string
  body: string
  choices: string[]
  end: number
  id: string
  snapshot: string
  space: Space
  start: number
  state: ProposalState
  title: string
}

export interface Vote {
  id: string
  voter: string
  created: number
  space: Space
  proposal: {
    choices: Proposal['choices']
  }
  choice: number
  metadata?: {
    votingPower: string
    verificationHash: string
  }
  _inValid?: boolean
}

export enum VotingStateLoadingStatus {
  INITIAL = 'initial',
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
}

export interface VotingState {
  proposalLoadingStatus: VotingStateLoadingStatus
  proposals: {
    [key: string]: Proposal
  }
  voteLoadingStatus: VotingStateLoadingStatus
  votes: {
    [key: string]: Vote[]
  }
}

export type UserTicketsResponse = [ethers.BigNumber[], number[], boolean[]]

// Global state

export interface State {
  achievements: AchievementState
  block: BlockState
  farms: FarmsState
  verticalGardens: VerticalGardensState
  pools: PoolsState
  profile: ProfileState
  teams: TeamsState
  collectibles: CollectiblesState
  voting: VotingState
  foundationVoting: FoundationVotingState
  barnPancakeswapFarms: BarnPancakeswapFarmsState
}
