import { useState } from "react";
import logo from "../assets/logo-text.png";
import type { NavItemTypes } from "../types/NavItemType";
import ListItem from "./ui/ListItem";

const Nav = () => {
  const [navItem] = useState<NavItemTypes[]>([
    { id: 1, title: "Home" },
    { id: 2, title: "Technologies" },
    { id: 3, title: "About" },
    { id: 4, title: "Contact" },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-300 px-5 py-5 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <img src={logo} alt="logo-image" className="w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 font-medium text-[14px] text-primary-black md:flex">
          {navItem.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-primary-black">
            Sign In
          </button>

          <button className="rounded-2xl bg-deep-pink px-5 py-2.5 text-[14px] font-semibold text-white">
            Sign Up
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-primary-black md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container mx-auto md:hidden">
          <ul className="mt-5 flex flex-col gap-4 border-t border-slate-200 pt-5 font-medium text-[14px] text-primary-black">
            {navItem.map((item) => (
              <li
                key={item.id}
                onClick={() => setIsMenuOpen(false)}
              >
                <ListItem key={item.id} item={item} />
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-5 flex gap-4 border-t border-slate-200 pt-5">
            <button className="text-primary-black">
              Sign In
            </button>

            <button className="rounded-2xl bg-deep-pink px-5 py-2.5 text-[14px] font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;