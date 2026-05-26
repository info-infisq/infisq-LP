import { NavLink } from "react-router-dom";
import { navItems } from "../../../data/layoutContant";

export default function MobileNav({ isNavOpen, setIsNavOpen }) {
  return (
    <div
      className={
        !isNavOpen
          ? "md:hidden absolute top-24 left-0 h-auto w-full flex-center  -z-10 translate-x-[150%] transition ease-linear"
          : "md:hidden absolute top-24 left-0 h-auto w-full flex-center  -z-10 translate-0 transition ease-linear"
      }
    >
      <ul className="flex flex-col gap-5 items-center bg-white w-full rounded-xl shadow-primary py-5">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              className="text-base-custom py-1"
              onClick={() => setIsNavOpen((prv) => !prv)}
            >
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
    </div>
  );
}
