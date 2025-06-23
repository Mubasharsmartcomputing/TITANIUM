import { useState } from "react";
// 1. IMPORT ICONS DIRECTLY FROM REACT-ICONS
import { HiGlobeAlt, HiSearch, HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONSULTANT", path: "/consultant" },
    { name: "PROJECTS", path: "/projects" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Using a component for links for consistency
  const NavLink = ({ to, children, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );

  return (
    <>
      {/* The header is relative to allow absolute positioning of the mobile menu */}
      <header className="bg-white shadow-md sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center" onClick={closeMenu}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-gray-400 tracking-wide">
                  TITANIUM
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-sm xl:text-base uppercase tracking-wider px-2 py-1"
                >
                  {item.name}
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

        {/* MOBILE MENU - POSITIONED ABSOLUTELY */}
        {/* It's positioned below the header and uses transitions for a smooth effect */}
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
                key={item.name}
                to={item.path}
                className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium text-sm uppercase tracking-wider rounded-md"
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Right Side Items */}
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

      {/* Overlay for mobile menu - closes menu on click */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 lg:hidden z-40" 
          onClick={closeMenu}
        />
      )}
    </>
  );
}