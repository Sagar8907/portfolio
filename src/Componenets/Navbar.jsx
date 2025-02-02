import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-['Edu_AU_VIC_WA_NT_Pre'] flex justify-between items-center p-5 bg-gray-900">
      
      {/* Logo */}
      <h1 className="text-[26px] font-bold text-purple-600">
        S<span className="text-white">agar</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex list-none gap-[40px] text-white text-[16px]">
        <li>
          <NavLink to="/" className="text-xl font-bold hover:text-purple-400" activeClassName="text-purple-600">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-xl font-bold hover:text-purple-400" activeClassName="text-purple-600">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="text-xl font-bold hover:text-purple-400" activeClassName="text-purple-600">
            Resume
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button className="sm:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 right-0 bg-gray-800 w-full text-center flex flex-col gap-4 p-5 text-white sm:hidden">
          <li>
            <NavLink to="/" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
              Resume
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
