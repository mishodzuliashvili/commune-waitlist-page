import logo from "../assets/Logo.svg";
import hamburger from "../assets/Hamburger Menu.svg";
import { useState } from "react";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center mt-14 justify-between">
      <img src={logo} alt="" />

      <nav className="laptop:flex hidden gap-4 items-center">
        <a href="" className="text-neutral-700 p-1">
          Features
        </a>
        <a href="" className="text-neutral-700 p-1">
          Affiliates
        </a>
        <a href="" className="text-neutral-700 p-1">
          Pricing
        </a>
        <a href="" className="text-neutral-700 p-1">
          Communities
        </a>
        <button className="text-white px-4 py-3 bg-primary rounded-md">
          Join Waitlist
        </button>
      </nav>
      <button
        className="laptop:hidden block p-3"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={hamburger} alt="" />
      </button>
      {showMenu && (
        <div className="laptop:hidden fixed top-32 left-0 bg-bg w-full h-screen">
          <nav className="flex flex-col gap-4 items-center">
            <a href="" className="text-neutral-700 p-1">
              Features
            </a>
            <a href="" className="text-neutral-700 p-1">
              Affiliates
            </a>
            <a href="" className="text-neutral-700 p-1">
              Pricing
            </a>
            <a href="" className="text-neutral-700 p-1">
              Communities
            </a>
            <button className="text-white px-4 py-3 bg-primary rounded-md">
              Join Waitlist
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};
