import { useEffect, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import { FaLink, FaTwitter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { ImOffice } from 'react-icons/im';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
useParams;
import Spinner from '../components/layout/Spinner';
import RepoList from '../components/repos/RepoList';
import { getUserAndRepos } from '../context/github/GithubActions';

const User = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({
      type: 'SET_LOADING',
    });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
    };
    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    avatar_url,
    location,
    bio,
    created_at,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    company,
  } = user;

  const createdDate = new Date(created_at);
  const formattedDate = createdDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <Link
          to="/"
          className="text-white flex items-center left-[2rem] gap-3  mt-6 absolute"
        >
          <AiOutlineArrowLeft /> <p>Back to search</p>
        </Link>
        <div className="flex flex-col mt-[4rem] sm:mt-[3rem] justify-center items-center text-white">
          <div className="bg-divBg shadow-md w-[90%] h-[90%] md:w-[62%] md:h-[65%] rounded pb-[5rem] ">
            <div className="flex  sm:mb-6 md:mb-0 mx-10 sm:-top-[20rem] my-10 ">
              <img
                src={avatar_url}
                alt="img"
                className="rounded-full h-[5rem]   mb-[5rem] sm:mb-0 sm:left-0 w-[5rem] relative top-[2rem] md:top-0"
              />
            </div>
            <div className="text-white flex flex-col relative left-[2.6rem] sm:left-[4rem] -top-[5rem] sm:mx-20">
              <div className="lg:flex block justify-between ">
                <h1 className="font-bold text-2xl mb-2 md:mb-0">{name}</h1>
                <p className="mb-2  md:mb-0">Joined at {formattedDate}</p>
              </div>
              <p className="mb-1 text-sky-400 text-base">@{login}</p>
            </div>
            {bio ? (
              <p className="mx-[2.5rem] lg:mx-[9rem] relative -mt-[4rem]">
                {bio}
              </p>
            ) : (
              <p className="mx-[2.5rem] lg:mx-[9rem] relative -mt-[2rem] lg:-mt-[4rem]">
                Not Avilable
              </p>
            )}

            <div className="bg-background text-center py-2 mt-10 w-[80%] gap-x-4 sm:w-[90%] mx-auto sm:h-[5rem] flex justify-evenly items-center gap-[4rem] rounded-md ">
              <div className="text-center  mx-1">
                <p className="text-xs">Repos</p>
                <p className=" font-bold text-xl">{public_repos}</p>
              </div>
              <div className="text-center">
                <p className="text-xs">Followers</p>
                <p className=" font-bold text-xl">{followers}</p>
              </div>
              <div className="text-center">
                <p className="text-xs">Following</p>
                <p className=" font-bold text-xl">{following}</p>
              </div>
            </div>
            <div className="mt-6 mx-10 text-base items-center grid grid-cols-1 sm:grid-cols-2">
              <div className="">
                <p className="gap-3 flex items-center mb-4">
                  <span>
                    <MdLocationOn />
                  </span>
                  {location ? `${location}` : `Not Avilable`}
                </p>
                <button className="flex items-center gap-3 mb-4">
                  <FaLink />
                  <a href={html_url}>Visit Github</a>
                </button>
              </div>
              <div className="">
                <p className="gap-3 flex items-center mb-4">
                  <span>
                    <FaTwitter />
                  </span>
                  {twitter_username ? `${twitter_username}` : `Not Available`}
                </p>
                <p className="flex items-center gap-3">
                  <ImOffice />
                  <span>{company ? `${company}` : 'Not Avilable'}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <RepoList repos={repos} />
          </div>
        </div>
      </>
    );
  }
};

export default User;
