import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-white flex justify-center items-center mt-[7rem]">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-8">Oops !</h1>
        <p className="text-5xl mb-8">404 - Page not found!</p>
        <Link to="/" className=" flex  justify-center ">
          <button className=" bg-sky-600 flex items-center px-2 py-4 rounded-lg hover:bg-skyBlue transition-all duration-300 ease-linear">
            <FaHome className=" mr-2" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
