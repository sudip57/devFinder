import { FiSearch } from 'react-icons/fi';
import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  // handle input value
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter a text', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({
        type: 'GET_USERS',
        payload: users,
      });
      setText('');
    }
  };

  return (
    <div className="flex mt-10 justify-center">
      <form onSubmit={handleSubmit}>
        <div className="block md:flex ">
          <div className="relative text-white flex  ">
            <FiSearch className="absolute top-5 text-skyBlue w-16 " />
            <input
              type="text"
              className="bg-divBg px-7 md:px-[14rem] md:pl-[4rem] py-4 rounded-md outline-none text-left pl-[4rem] placeholder:text-white"
              placeholder="Search username... "
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="relative hidden md:block -left-[6rem] bg-skyBlue my-2 px-4 rounded-md"
            >
              Search
            </button>
          </div>
          <div className="text-white text-center mt-2 md:mt-0">
            {users && users.length > 0 && (
              <button
                className="bg-divBg px-4 py-2 my-2 rounded-md"
                onClick={() =>
                  dispatch({
                    type: 'CLEAR_USERS',
                  })
                }
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSearch;
