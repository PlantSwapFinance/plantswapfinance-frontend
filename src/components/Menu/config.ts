import { MenuEntry } from '@plantswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade (PancakeSwap)',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x58BA5Bd8872ec18BD360a9592149daed2fC57c69',
      },
      {
        label: 'Liquidity',
        href: 'https://v1exchange.pancakeswap.finance/#/add/BNB/0x58BA5Bd8872ec18BD360a9592149daed2fC57c69',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Gardens (soon)',
    icon: 'PoolIcon',
    href: '/gardens',
  },
  {
    label: "Project",
    icon: "ProjectIcon",
    href: "/project",
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: '/roadmap',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/plantswapfinance',
      },
      {
        label: "Blog",
        href: "https://plantswapfinance.medium.com",
      },
      {
        label: "PlantSwap Token",
        href: "https://bscscan.com/token/0x58BA5Bd8872ec18BD360a9592149daed2fC57c69",
      },
    ],
  },
]

export default config
