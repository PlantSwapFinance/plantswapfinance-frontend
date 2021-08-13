import React, { useMemo } from 'react'
import { Card, CardBody, CommunityIcon, Flex, Heading, Text } from '@plantswap/uikit'
import shuffle from 'lodash/shuffle'
import { useTeams } from 'state/teams/hooks'
import { useTranslation } from 'contexts/Localization'
import SelectionCard from '../components/SelectionCard'

const Team: React.FC = () => {
  const { t } = useTranslation()
  const { teams } = useTeams()

  const handleTeamSelection = () => null
  const teamValues = useMemo(() => shuffle(Object.values(teams)), [teams])

  return (
    <>
      <Card mb="24px">
        <CardBody>
          <Heading as="h4" scale="lg" mb="8px">
            {t('Chose a Team')}
          </Heading>
          <Text>{t('Select a team that fit best the core mission of the non-profit.')}</Text>
          {teamValues &&
            teamValues.map((team) => {
              return (
                <SelectionCard
                  key={team.name}
                  name="teams-selection"
                  value={team.id}
                  image={`/images/teams/${team.images.md}`}
                  onChange={handleTeamSelection}
                  disabled={!team.isJoinable}
                >
                  <Text bold>{team.name}</Text>
                  <Flex>
                    <CommunityIcon mr="8px" />
                    <Text>{team.users.toLocaleString()}</Text>
                  </Flex>
                </SelectionCard>
              )
            })}
        </CardBody>
      </Card>
    </>
  )
}

export default Team
