import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="shadow hover:shadow-xl min-w-[10rem] w-[18rem] h-[10rem] md:h-[100px] md:w-[300px] bg-divBg flex items-center justify-center rounded-md ">
      <div className="flex flex-row items-center justify-center space-x-4 ">
        <div className="avatar">
          <div className="">
            <img
              src={avatar_url}
              alt="Profile"
              className="rounded-full  w-14 h-14"
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-xl">{login}</h2>
          <Link to={`/user/${login}`}>
            <p className="text-[12px]   text-gray-400 text-opacity-40">
              Visit Profile
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
