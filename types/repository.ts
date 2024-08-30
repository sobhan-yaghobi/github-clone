type Owner = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

type Repository = {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: Owner
  private: boolean
  html_url: string
  description: string | null
  fork: boolean
  url: string
  forks_count: number
  stargazers_count: number
  watchers_count: number
  size: number
  default_branch: string
  open_issues_count: number
  topics: string[]
  [key: string]: any // Add this to accommodate any other fields you might not have explicitly defined.
}

type RepositoryArray = Repository[]
