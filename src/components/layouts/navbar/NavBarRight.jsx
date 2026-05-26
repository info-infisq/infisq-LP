import { NavLink } from "react-router-dom";
import { navItems } from "../../../data/layoutContant";
import { Fragment } from "react";
import { Menu, X } from "lucide-react";

export default function NavBarRight({ isNavOpen, setIsNavOpen }) {
  return (
    <Fragment>
      <ul className="hidden md:flex w-[40%] md:w-[50%] justify-between">
        {navItems.map((item) => {
          return (
            <li key={item.id} className="text-base-custom">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "navItem-active" : "hover:text-primary"
                }
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <span
        className="text-heading-custom md:hidden"
        onClick={() => {
          setIsNavOpen((prv) => !prv);
        }}
      >
        {!isNavOpen ? <Menu /> : <X />}
      </span>
    </Fragment>
  );
}
