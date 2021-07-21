import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import { ChevronDown, ChevronUp } from 'react-feather'
import { Flex, MetamaskIcon } from '@plantswap-libs/uikit'
import Balance from 'components/Balance'
import { CommunityTag, CoreTag, BinanceTag, PancakeSwapTag, CafeswapTag, GooseFinanceTag } from 'components/Tags'
import { useBlock } from 'state/hooks'
import { VerticalGardenCategory } from 'config/constants/types'
import { registerToken } from 'utils/wallet'
import { BASE_URL } from 'config'

const tags = {
  [VerticalGardenCategory.BINANCE]: BinanceTag,
  [VerticalGardenCategory.CORE]: CoreTag,
  [VerticalGardenCategory.COMMUNITY]: CommunityTag,
  [VerticalGardenCategory.CAFE]: CafeswapTag,
  [VerticalGardenCategory.PANCAKE]: PancakeSwapTag,
  [VerticalGardenCategory.GOOSE]: GooseFinanceTag,
}

interface Props {
  projectLink: string
  decimals: number
  totalStaked: BigNumber
  totalStakedBusd: BigNumber
  totalPendingStakedRewardToSplit?: BigNumber
  totalPendingPlantRewardToSplit?: BigNumber
  pendingStakedInStakedMasterChef?: BigNumber
  pendingPlantInPlantMasterGardener?: BigNumber
  harvestedReward: BigNumber
  harvestedPlant: BigNumber
  compoundedReward: BigNumber
  tokenStakedName: string
  tokenRewardName: string
  tokenStakedAddress: string
  tokenStakedRewardName: string
  tokenStakedRewardAddress: string
  tokenEarnName: string
  tokenEarnAddress: string
  tokenDecimals: number
  startBlock: number
  endBlock: number
  isFinished: boolean
  stakedTokenPrice: number
  verticalGardenMasterGardenerAllocPt: number
  verticalGardenCategory: VerticalGardenCategory
}

const StyledFooter = styled.div<{ isFinished: boolean }>`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#399349' : '#E9EAEB')};
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled2' : 'primary2']};
  padding: 24px;
`

const StyledDetailsButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  outline: 0;
  padding: 0;
  &:hover {
    opacity: 0.9;
  }

  & > svg {
    margin-left: 4px;
  }
`

const Details = styled.div`
  margin-top: 24px;
`

const Row = styled(Flex)`
  align-items: center;
`

const FlexFull = styled.div`
  flex: 1;
`
const Label = styled.div`
  font-size: 14px;
`

const LabelRight = styled.div`
font-size: 14px;
font-weight: bold;
color: ${(props) => props.theme.colors.text};
`
const TokenLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`

const CardFooter: React.FC<Props> = ({
  projectLink,
  decimals,
  totalStaked,
  totalStakedBusd,
  totalPendingStakedRewardToSplit,
  totalPendingPlantRewardToSplit,
  pendingStakedInStakedMasterChef,
  pendingPlantInPlantMasterGardener,
  harvestedReward,
  harvestedPlant,
  compoundedReward,
  tokenStakedName,
  tokenRewardName,
  tokenStakedAddress,
  tokenStakedRewardName,
  tokenStakedRewardAddress,
  tokenEarnName,
  tokenEarnAddress,
  tokenDecimals,
  isFinished,
  stakedTokenPrice,
  verticalGardenMasterGardenerAllocPt,
  startBlock,
  endBlock,
  verticalGardenCategory,
}) => {
  const { currentBlock } = useBlock()
  const [isOpen, setIsOpen] = useState(false)
  const TranslateString = useI18n()
  const Icon = isOpen ? ChevronUp : ChevronDown

  const handleClick = () => setIsOpen(!isOpen)
  const Tag = tags[verticalGardenCategory]

  const blocksUntilStart = Math.max(startBlock - currentBlock, 0)
  const blocksRemaining = Math.max(endBlock - currentBlock, 0)

  const totalPendingStakedRewardToSplitNum = 
    getBalanceNumber(totalPendingStakedRewardToSplit, decimals) + 
    getBalanceNumber(pendingStakedInStakedMasterChef, decimals)
  const totalPendingPlantRewardToSplitNum = 
    getBalanceNumber(totalPendingPlantRewardToSplit, decimals) + 
    getBalanceNumber(pendingPlantInPlantMasterGardener, decimals)

  const imageSrc = `${BASE_URL}/images/tokens/${tokenStakedRewardName.toLowerCase()}.png`

  return (
    <StyledFooter isFinished={isFinished}>
      <Row>
        <FlexFull>
          <Tag />
        </FlexFull>
        <StyledDetailsButton onClick={handleClick}>
          {isOpen ? TranslateString(1066, 'Hide') : TranslateString(658, 'Details')} <Icon />
        </StyledDetailsButton>
      </Row>
      {isOpen && (
        <Details>
          <Row mb="4px">
            <FlexFull>
              <Label>
                {TranslateString(408, 'Total Stacked in ')} {tokenStakedName}
              </Label>
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(totalStaked, decimals)} />
            &nbsp;
            <LabelRight> {tokenStakedName}</LabelRight>
          </Row>
          {stakedTokenPrice > 0 && (
          <Row mb="4px">
            <FlexFull>
              <Label>
                {TranslateString(408, 'Total Stacked in BUSD')}
              </Label>
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(totalStakedBusd, decimals)} decimals={2} />
            &nbsp;
            <LabelRight> {TranslateString(1212, 'BUSD')}</LabelRight>
          </Row>
          )}
          {!isFinished && totalPendingStakedRewardToSplitNum > 0 && (
          <Row mb="4px">
            <FlexFull>
              <Label>
                {TranslateString(408, 'Total reward pending distribution')}
              </Label>
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={totalPendingStakedRewardToSplitNum} decimals={2} />
            &nbsp;<LabelRight> {tokenStakedRewardName}</LabelRight>
          </Row>
          )}
          {!isFinished && totalPendingPlantRewardToSplitNum > 0 && (
            <Row mb="4px">
              <FlexFull>&nbsp;
              </FlexFull>
              <Balance fontSize="14px" isDisabled={isFinished} value={totalPendingPlantRewardToSplitNum} decimals={2} />
              &nbsp;<LabelRight> {tokenEarnName}</LabelRight>
            </Row>
          )}
          {blocksUntilStart > 0 && (
            <Row mb="4px">
              <FlexFull>
                <Label>{TranslateString(1212, 'Start')}:</Label>
              </FlexFull>
              <Balance fontSize="14px" isDisabled={isFinished} value={blocksUntilStart} decimals={0} />
            </Row>
          )}
          {blocksUntilStart === 0 && blocksRemaining > 0 && (
            <Row mb="4px">
              <FlexFull>
                <Label>{TranslateString(410, 'End')}:</Label>
              </FlexFull>
              <Balance fontSize="14px" isDisabled={isFinished} value={blocksRemaining} decimals={0} />
            </Row>
          )}
          <Row mb="4px">
            <FlexFull>
              <Label>
              🌱
              </Label>
            </FlexFull>
          </Row>
          {compoundedReward.toNumber() > 0 && (
          <Row mb="4px">
            <FlexFull>
              <Label>
                {TranslateString(408, 'You previously compounded')}
              </Label>
            </FlexFull>
          </Row>
          )}
          {compoundedReward.toNumber() > 0 && (
          <Row mb="4px">
            <FlexFull>
              &nbsp;
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(compoundedReward, decimals)} decimals={6} />
            &nbsp;
            <LabelRight> {tokenRewardName}</LabelRight>
          </Row>
          )}
          {(harvestedPlant.toNumber() > 0 || harvestedReward.toNumber() > 0) && (
          <Row mb="4px">
            <FlexFull>
              <Label>
                {TranslateString(408, 'You previously harvested')}
              </Label>
            </FlexFull>
          </Row>
          )}
          {harvestedPlant.toNumber() > 0 && (
          <Row mb="4px">
            <FlexFull>
              &nbsp;
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(harvestedPlant, decimals)} decimals={6} />
            &nbsp;
            <LabelRight> {tokenEarnName}</LabelRight>
          </Row>
          )}
          {harvestedReward.toNumber() > 0 && (
          <Row mb="4px">
            <FlexFull>
              &nbsp;
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(harvestedReward, decimals)} decimals={6} />
            &nbsp;
            <LabelRight> {tokenRewardName}</LabelRight>
          </Row>
          )}
          {tokenStakedAddress && (
            <Flex mb="4px">
              <TokenLink onClick={() => registerToken(tokenStakedAddress, tokenStakedName, tokenDecimals, imageSrc)}>
                Add {tokenStakedName} to Metamask
              </TokenLink>
              <MetamaskIcon height={15} width={15} ml="4px" />
            </Flex>
          )}
          {tokenStakedRewardAddress && tokenStakedRewardAddress !== tokenStakedAddress && (
            <Flex mb="4px">
              <TokenLink onClick={() => registerToken(tokenStakedRewardAddress, tokenStakedRewardName, tokenDecimals, imageSrc)}>
                Add {tokenStakedRewardName} to Metamask
              </TokenLink>
              <MetamaskIcon height={15} width={15} ml="4px" />
            </Flex>
          )}
          {tokenEarnAddress && verticalGardenMasterGardenerAllocPt > 0 && (
            <Flex mb="4px">
              <TokenLink onClick={() => registerToken(tokenEarnAddress, tokenEarnName, tokenDecimals, imageSrc)}>
                Add {tokenEarnName} to Metamask
              </TokenLink>
              <MetamaskIcon height={15} width={15} ml="4px" />
            </Flex>
          )}
          <TokenLink href={projectLink} target="_blank">
            View {tokenRewardName} project site
          </TokenLink>
        </Details>
      )}
    </StyledFooter>
  )
}

export default React.memo(CardFooter)
