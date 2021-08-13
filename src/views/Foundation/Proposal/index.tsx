import React from 'react'
import { ArrowBackIcon, Box, Button, Flex, Heading } from '@plantswap/uikit'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import ReactMarkdown from 'components/ReactMarkdown'
import { ProposalTypeTag } from '../components/Proposals/tags'
import Layout from '../components/Layout'

const Proposal = () => {
  const { t } = useTranslation()


  return (
    <Container py="40px">
      <Box mb="40px">
        <Button as={Link} to="/voting" variant="text" startIcon={<ArrowBackIcon color="primary" width="24px" />} px="0">
          {t('Back to Foundation Overview')}
        </Button>
      </Box>
      <Layout>
        <Box>
          <Box mb="32px">
            <Flex alignItems="center" mb="8px">
              <ProposalTypeTag isCoreProposal={false} ml="8px" />
            </Flex>
            <Heading as="h1" scale="xl" mb="16px">
              Hello, world!
            </Heading>
            <Box>
              <ReactMarkdown>Hello World</ReactMarkdown>
            </Box>
          </Box>
          
        </Box>
        <Box>
          More details
        </Box>
      </Layout>
    </Container>
  )
}

export default Proposal
