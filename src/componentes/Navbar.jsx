import { NavLink } from "react-router-dom";
import logo from '../assets/home/logo.svg'
import menu from '../assets/home/menu.svg'

export const Navbar = () => {
  return (
    <nav className="container mx-auto p-5 borde flex justify-between items-center">
      <div>
        <img className="w-52" src={logo} alt="logo" />
      </div>
      {/* <ul className="hidden lg:block">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul> */}
      <button className="lg:hidden">
        <img className="w-6" src={menu} alt="menu" />
      </button>
    </nav>
  );
};
