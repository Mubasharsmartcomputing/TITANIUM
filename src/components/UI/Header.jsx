import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiGlobeAlt, HiSearch, HiMenu, HiX } from "react-icons/hi";

// 1. IMPORT THE LOGO IMAGE
// Make sure this path is correct relative to your Header.jsx file
import logo from '../../assets/img/Logoo.png'; 

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Consultant",
    "Projects",
    "Blog",
    "Contact",
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* 2. REPLACE THE TEXT LOGO WITH THE IMAGE LOGO */}
            <NavLink to="/" className="flex items-center" onClick={closeMenu}>
              <img 
                src={logo} 
                alt="Titanium Engineering Logo" 
                className="h-16 lg:h-28 w-28" // Responsive height, auto width
              />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `transition-colors duration-200 font-medium text-sm xl:text-base uppercase tracking-wider px-2 py-1 border-b-2
                     ${isActive
                       ? 'text-red-600 border-red-600'
                       : 'text-gray-700 border-transparent hover:text-red-600'
                     }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right Side Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-sm font-medium">EN</span>
                <HiGlobeAlt size={16} />
              </div>
              <button className="text-red-600 hover:text-red-700 transition-colors duration-200">
                <HiSearch size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
        >
          <nav className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-3 font-medium text-sm uppercase tracking-wider rounded-md transition-colors duration-200
                   ${isActive
                     ? 'bg-red-500 text-white'
                     : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                   }`
                }
              >
                {item}
              </NavLink>
            ))}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 px-3">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-sm font-medium">EN</span>
                <HiGlobeAlt size={16} />
              </div>
              <button className="text-red-600 hover:text-red-700 transition-colors duration-200">
                <HiSearch size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 lg:hidden z-40" 
          onClick={closeMenu}
        />
      )}
    </>
  );
}