import React from 'react'
import { Text, TextProps } from '@plantswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { TranslatableText as UserDescriptionType } from 'config/constants/types'
import styled from 'styled-components'

interface UserDescriptionProps extends TextProps {
  description?: UserDescriptionType
}

const Description = styled(Text).attrs({ as: 'p', fontSize: '14px' })`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const UserDescription: React.FC<UserDescriptionProps> = ({ description, ...props }) => {
  const { t } = useTranslation()

  if (!description) {
    return null
  }

  if (typeof description === 'string') {
    return (
      <Text as="p" color="textSubtle" fontSize="14px" {...props}>
        {description}
      </Text>
    )
  }

  const { key, data = {} } = description

  return (
    <Description color="textSubtle" {...props}>
      {t(key, data)}
    </Description>
  )
}

export default UserDescription
