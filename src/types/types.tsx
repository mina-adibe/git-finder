export interface UserProfile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string | null;
  company?: string | null;
  blog: string;
  location: string;
  email?: string | null;
  hireable?: string | null;
  bio: string;
  twitter_username?: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface Users {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
  score?: number;
}

export interface ServerResponse<T> {
  total_count: number | undefined;
  incomplete_results?: boolean;
  items: T[];
}

export interface searchParams {
  search: string | "";
  sort: "followers" | "repositories" | "joined";
  per_page: number;
  page: number;
}

export interface UserCartProps {
  user: Users;
  isBookmarkPage?: boolean;
}

export interface CardsProps {
  isFetching: boolean;
  isError: boolean;
  data: ServerResponse<Users> | undefined;
}
//TODO : inhance this
export interface SearchProps {
  handleChange: (event: any) => any;
  searchTerm: searchParams;
}

//TODO : inhance this
export interface PaginationProps {
  pagesCount: number | undefined;
  page: number | undefined;
  handleChangePanination: any;
  isData: boolean;
}

export interface ThemeState {
  darkTheme: boolean;
}

export interface HeadProps {
  title: string;
  description: string;
}
