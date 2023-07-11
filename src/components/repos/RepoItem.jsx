import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="flex flex-col bg-divBg hover:bg-gray-900 mb-2   sm:mx-0 py-[1rem] px-[2rem] w-[90vw] md:w-[60vw] cursor-pointer text-left">
      <h3 className="mb-2 text-xl font-semibold">
        <a href={html_url} className="gap-5  mr-1 flex items-center">
          <FaLink />
          {name}
        </a>
      </h3>
      <p className="mb-3">{description}</p>
      <div className="flex gap-3">
        <div className="flex items-center h-full w-[4rem] text-center bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-blue-500">
          <span className="flex items-center pl-3">
            <FaEye className="mr-2" />
            {watchers_count}
          </span>
        </div>
        <div className="flex items-center h-full w-[4rem] text-center bg-lime-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-lime-500">
          <span className="flex items-center pl-3">
            <FaStar className="mr-2" />
            {stargazers_count}
          </span>
        </div>
        <div className="flex items-center h-full w-[4rem] text-center bg-red-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-red-500">
          <span className="flex items-center pl-3">
            <FaInfo className="mr-2" />
            {open_issues}
          </span>
        </div>
        <div className="flex items-center h-full w-[4rem] text-center bg-yellow-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-yellow-500">
          <span className="flex items-center pl-3">
            <FaUtensils className="mr-2" />
            {forks}
          </span>
        </div>
      </div>
    </div>
  );
};
// text-[#3ABFF8]
RepoItem.propTypes = {
  repo: PropTypes.array.isRequired,
};
export default RepoItem;
