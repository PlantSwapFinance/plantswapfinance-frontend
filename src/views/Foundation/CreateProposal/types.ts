import { TeamMember } from './OrganisationTeam'
import { Address } from './WebsiteAndSocialList'

export interface FormState {
  name: string
  body: string
  donationAddress: string
  logoUrl: string
  organisationTeam: TeamMember[]
  websiteAndSocialList: Address[]
}
