import { MenuEntry } from '@plantswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Foundation'),
    icon: 'ContributionIcon',
    href: '/foundation',
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Gardens'),
    icon: 'PoolIcon',
    href: '/gardens',
  },
  {
    label: t('Vertical Gardens'),
    icon: 'TreeIcon',
    href: '/verticalGardens',
    status: {
      text: 'NEW',
      color: 'failure',
    },
  },
  {
    label: t('Teams & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Governance'),
    icon: 'VoteIcon',
    href: '/vote',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://plantswap.finance/contact-us',
      },
      {
        label: t('Github'),
        href: 'https://github.com/plantswapfinance',
      },
      {
        label: t('Blog'),
        href: "https://plantswapfinance.medium.com",
      },
      {
        label: t('Roadmap'),
        href: '/roadmap',
      },
      {
        label: t('Development Fund'),
        href: '/developmentFund',
      },
      {
        label: t('Project'),
        href: 'project',
      },
      {
        label: t('dex.guru'),
        href: "https://dex.guru/token/0x58BA5Bd8872ec18BD360a9592149daed2fC57c69-bsc",
      },
      {
        label: t('PlantSwap Token'),
        href: "https://bscscan.com/token/0x58BA5Bd8872ec18BD360a9592149daed2fC57c69",
      },
    ],
  },
]

export default config