type ErrorComponentProps = {
  message: string
}

type FollowerProps = {
  follower: GitHubFollower
  index: number
}

type GithubLoginButtonProps = {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type RepositoryProps = {
  repository: Repository
}

type FollowersProps = {
  url: string
}

type FollowingProps = {
  url: string
}

type LoginFormProps = {
  code: string | null
}

type ProfileProps = {
  user: GitHubUser
}
