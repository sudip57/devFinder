import axios from 'axios';

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  const response = await github.get(`/search/users?q=${text}`);

  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};
