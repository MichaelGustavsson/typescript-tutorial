import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='navbar'>
      <nav>
        <ul>
          <li className='logo'>
            <NavLink to='/'>
              <span>CarDealer</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
