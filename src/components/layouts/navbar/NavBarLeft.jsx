import { NavLink } from "react-router-dom";

export default function NavBarLeft({ setIsNavOpen }) {
  return (
    <div className="logo w-50  md:w-60 lg:75">
      <NavLink to="/">
        <img
          src="imgs/logo.png"
          alt="logo"
          className="h-full w-full object-contain"
          onClick={() => setIsNavOpen((prv) => false)}
        />
      </NavLink>
    </div>
  );
}
