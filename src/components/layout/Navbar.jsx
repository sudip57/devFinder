import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <div className=" flex justify-between items-center p-2 bg-divBg md:px-[4rem]">
      <Link to="/">
        <h1 className="text-white text-xl">{title}</h1>
      </Link>
      <div className="flex gap-[4rem]">
        <Link to="/about">
          <h1 className="text-white cursor-pointer">About Us</h1>
        </Link>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'devFinder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
