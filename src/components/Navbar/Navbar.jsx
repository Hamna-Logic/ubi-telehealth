import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Learn More", link: "/learn-more" },
  { id: 4, name: "Services", link: "#", dropdown: true },
  { id: 5, name: "FAQs", link: "/faqs" },
  { id: 6, name: "Contact Us", link: "/contact" },
];

const ServicesDropdown = [
  { id: 1, name: "Hair Growth", link: "/services/Hairs" },
  { id: 2, name: "Men's Sexual Health", link: "/services/Health" },
  { id: 3, name: "Weight Lose", link: "/services/Weight" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative">
      <div className="container mx-auto px-4 py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-20" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6">
            <DarkMode />
            <ul className="flex items-center gap-4">
              {Menu.map((menu) =>
                menu.dropdown ? (
                  <li
                    key={menu.id}
                    className="relative group"
                    onMouseEnter={() => setDesktopDropdown(true)}
                    onMouseLeave={() => setDesktopDropdown(false)}
                  >
                    <span className="inline-block py-4 px-4 hover:text-blue-500 cursor-pointer">
                      {menu.name}
                    </span>

                    {desktopDropdown && (
                      <ul className="absolute top-full left-0 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md w-40 rounded-md z-10">
                        {ServicesDropdown.map((item) => (
                          <li key={item.id}>
                            <Link
                              to={item.link}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={menu.id}>
                    <Link
                      to={menu.link}
                      className="inline-block py-4 px-4 hover:text-blue-500"
                    >
                      {menu.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link
              to="/login"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              Sign In
              <FaSignInAlt className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden flex items-center gap-4">
            <DarkMode />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="sm:hidden mt-3">
            <ul className="flex flex-col gap-2">
              {Menu.map((menu) =>
                menu.dropdown ? (
                  <li key={menu.id}>
                    <div
                      onClick={() => setMobileDropdown((prev) => !prev)}
                      className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 cursor-pointer"
                    >
                      <span>{menu.name}</span>
                      <span>{mobileDropdown ? "▲" : "▼"}</span>
                    </div>
                    {mobileDropdown && (
                      <ul className="bg-gray-50 dark:bg-gray-900">
                        {ServicesDropdown.map((item) => (
                          <li key={item.id}>
                            <Link
                              to={item.link}
                              className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={menu.id}>
                    <Link
                      to={menu.link}
                      className="block px-4 py-2 hover:text-blue-500"
                    >
                      {menu.name}
                    </Link>
                  </li>
                )
              )}
              <Link
                to="/login"
                className="mt-2 mx-4 bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full flex items-center gap-2 justify-center"
              >
                Sign In
                <FaSignInAlt />
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
