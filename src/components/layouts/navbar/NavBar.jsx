import { useState } from "react";
import MobileNav from "./MobileNav";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="h-20  max-w-350 bg-white  fixed z-50 flex justify-between px-3 w-[90%] mx-auto  md:px-10 items-center rounded-xl shadow-primary">
      <NavBarLeft setIsNavOpen={setIsNavOpen} />
      <NavBarRight isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </nav>
  );
}
