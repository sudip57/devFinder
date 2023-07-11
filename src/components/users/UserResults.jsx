import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return (
      <div className="flex justify-center ">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 gap-x-3 gap-y-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-white mt-[4rem]  mb-8">
        {users.map((user) => (
          <div key={user.id} className="flex justify-center ">
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
};

export default UserResults;
