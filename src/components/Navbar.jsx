import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import { appConfigAction } from "../store/AppConfigSlice";
import {
  getItem,
  KEY_ACCESS_TOKEN,
  removeItem,
} from "../services/LocalStorageManager";

const Navbar = () => {
  const navigate = useNavigate();
  const role = useSelector((state) => state.appAuth.role);
  const sectionId = useSelector((state) => state.appAuth.section);
  const classId = useSelector((state) => state.appAuth.class);
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const profileMenuRef = useRef(null);

  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const username = getItem("username");

  const handleChange = () => {
    dispatch(appConfigAction.toggleDarkMode());
  };

  const handleMenu = () => {
    setMenuOpen(true);
  };

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

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

  const handleLogout = () => {
    removeItem(KEY_ACCESS_TOKEN);
    removeItem("username");
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
          <Link to="/">
            <div className="bg-yellow-400 p-2 rounded-full">
              <span className="text-blue-800 font-bold">A</span>
            </div>
          </Link>
          <span className="font-bold text-lg ml-2 text-white">LOGO</span>
          {/* setup menu */}
          <div className="relative pl-6 z-10">
            <button
              onMouseEnter={handleMenu}
              // onClick={toggleMenu}
              className="text-white bg-blue-900 px-4 py-2 rounded-md hover:text-blue-800 hover:bg-white"
            >
              Setup
            </button>
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute top-12 left-0 mt-1 w-40 bg-blue-950 rounded-xl shadow-lg"
              >
                {role === "teacher" ? (
                  <>
                    <div className="py-1" onClick={closeMenu}>
                      <div
                        onClick={() =>
                          navigate("/student-section", {
                            state: { classId, sectionId },
                          })
                        }
                        className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                      >
                        Classroom
                      </div>
                      <Link
                        to="/event"
                        className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                      >
                        Events
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="py-1" onClick={closeMenu}>
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
                        to="/class-setup"
                        className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                      >
                        Classroom
                      </Link>
                      <Link
                        to="/event"
                        className="block px-4 py-2 hover:text-blue-800 hover:bg-white"
                      >
                        Events
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-8">
          <label className="py-2 flex justify-center items-center gap-x-2 max-sm:hidden">
            <span>Dark Mode</span>
            <Switch
              height={20}
              width={40}
              checked={isDarkMode}
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={handleChange}
              onColor="#000"
            />
          </label>
          <div className="relative">
            <button
              onMouseEnter={handleProfileMenu}
              className="text-white px-4 py-2 rounded-md"
            >
              {username ? username : "Admin"}
            </button>
            {profileMenuOpen && (
              <div
                ref={profileMenuRef}
                className="absolute top-full right-0 mt-1 w-40 bg-blue-950 rounded-md shadow-lg z-10"
                onClick={closeMenu}
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
                    onClick={handleLogout}
                    to="/login"
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
