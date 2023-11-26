import { NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.svg'
import menu from '../assets/home/svg/menu.svg'

export const Navbar = () => {
  return (
    <nav className="container mx-auto p-5 lg:py-8 flex justify-between items-center">
      <h1>
        <img className="w-52 lg:w-60" src={logo}  alt="logo" />
      </h1>
      
      <button className="lg:hidden">
        <img className="w-6" src={menu} alt="menu" />
      </button>

      <ul className="hidden lg:flex gap-5 font-barlow font-bold text-light-gray uppercase text-xs lg:text-sm">
        <li className="hover:text-slate-950 transition-all">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-slate-950 transition-all">
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
