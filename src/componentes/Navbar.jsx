import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
        <img src="src/assets/home/logo.svg" alt="" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
