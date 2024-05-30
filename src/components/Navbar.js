import React, { useState } from 'react';
import { HiMenu, HiX, HiOutlineShoppingCart } from 'react-icons/hi';
import logo from '../assets/Nike-logo.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center flex-grow justify-center">
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-black inline-flex items-center px-1 pt-1 text-xl font-medium">
                Home
              </Link>
              <Link to="/Collection" className="text-black inline-flex items-center px-1 pt-1 text-xl font-medium">
                Products
              </Link>
             
              <Link to="/About" className="text-black inline-flex items-center px-1 pt-1 text-xl font-medium">
                About
              </Link>
              <Link to="/FAQs" className="text-black inline-flex items-center px-1 pt-1 text-xl font-medium">
                FAQs
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <HiOutlineShoppingCart className="hidden sm:block text-3xl text-black" />
            <button onClick={toggleMenu} className="sm:hidden text-black focus:outline-none ml-4">
              {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-4 space-y-1">
        <Link to="/" className="block pl-3 pr-4 py-2 text-base font-medium text-black">
            Home
          </Link>
          <Link to="/Collection" className="block pl-3 pr-4 py-2 text-base font-medium text-black">
            Products
          </Link>
          
          <Link to="/About" className="block pl-3 pr-4 py-2 text-base font-medium text-black">
            About
          </Link>
          <Link to="/FAQs" className="block pl-3 pr-4 py-2 text-base font-medium text-black">
            FAQs
          </Link>
          <Link to="/Cart" className="block pl-3 pr-4 py-2 text-base font-medium text-black">
            <HiOutlineShoppingCart className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
