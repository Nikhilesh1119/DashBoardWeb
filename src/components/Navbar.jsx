import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const profileMenuRef = useRef(null);

  const isDarkMode = useSelector((state) => state.auth.isDarkMode);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // const toggleProfileMenu = () => {
  //   setProfileMenuOpen(!profileMenuOpen);
  // };

  const handleMenu = () => {
    setMenuOpen(true);
  };

  const handleProfileMenu = () => {
    setProfileMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProfileMenuOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (
      (menuRef.current && !menuRef.current.contains(event.target)) ||
      (profileMenuRef.current && !profileMenuRef.current.contains(event.target))
    ) {
      closeMenu();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-blue-950 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-yellow-400 p-2 rounded-full">
            <span className="text-blue-800 font-bold">A</span>
          </div>
          <span className="font-bold text-lg ml-2 text-white">LOGO</span>
          {/* setup menu */}
          <div className="relative pl-6">
            <button
              onMouseEnter={handleMenu}
              className="text-white bg-blue-900 px-4 py-2 rounded-md hover:text-blue-800 hover:bg-white"
            >
              Setup
            </button>
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute top-12 left-0 mt-1 w-40 bg-blue-950 rounded-xl shadow-lg"
              >
                <div className="py-1">
                  <Link
                    to="/teacher"
                    className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                  >
                    Teacher
                  </Link>
                  <Link
                    to="/student"
                    className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                  >
                    Student
                  </Link>
                  <Link
                    to="/classroom"
                    className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                  >
                    Classroom
                  </Link>
                  <Link
                    to="/Event"
                    className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                  >
                    Events
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-8">
          <div className=""></div>
          <div className="relative">
            <button
              onMouseEnter={handleProfileMenu}
              className="text-white px-4 py-2 rounded-md"
            >
              Name
            </button>
            {profileMenuOpen && (
              <div
                ref={profileMenuRef}
                className="absolute top-full right-0 mt-1 w-40 bg-blue-950 rounded-md shadow-lg"
              >
                <div className="py-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-white hover:text-blue-950"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/updates"
                    className="block px-4 py-2 hover:bg-white hover:text-blue-950"
                  >
                    Updates
                  </Link>
                  <Link
                    to="/loginpage"
                    className="block px-4 py-2 hover:bg-white hover:text-blue-950"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
