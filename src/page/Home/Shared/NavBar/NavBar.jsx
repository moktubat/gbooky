import logo from "../../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    <>
      <li>
        <NavLink to="/" className="flex gap-2 items-center text-sm">
          <FiHome /> List your property
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="flex gap-2 items-center text-sm border-2 border-[#CACACA] p-3 rounded-lg"
        >
          <PiUsersThree /> LOG IN / SIGN UP
        </NavLink>
      </li>
    </>,
  ];
  return (
    <div className="px-4 py-5 mx-auto overflow-hidden">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src={logo} alt="logo" />
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">{navLinks}</ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineBars3BottomRight className="w-8 text-2xl text-[#FF7A00]" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaXmark className="w-5 text-xl text-[#FF7A00]" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">{navLinks}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
