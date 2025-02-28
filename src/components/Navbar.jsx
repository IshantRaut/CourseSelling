import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchProfileImage = () => {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (storedUser && storedUser.profileImage) {
        setProfileImage(storedUser.profileImage);
      } else {
        setProfileImage(""); // Reset if no image
      }
    };

    fetchProfileImage();
    window.addEventListener("storage", fetchProfileImage);
    return () => window.removeEventListener("storage", fetchProfileImage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => navigate("/")}>
            <img
              className="h-10 w-auto cursor-pointer"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/course"
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 transition"
            >
              Courses
            </a>
            {isLoggedIn && (
              <a
                href="/mycourses"
                className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 transition"
              >
                My Courses
              </a>
            )}
            <a
              href="/contact"
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 transition"
            >
              Contact
            </a>
            <a
              href="/cart"
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 transition flex items-center"
            >
              <FaCartPlus size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="ml-9 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Profile & Auth Buttons (Always Visible) */}
          <div className="flex items-center space-x-4 ml-4">
            {isLoggedIn && (
              <button onClick={() => navigate("/profile")} className="relative">
                <img
                  className="w-10 h-10 rounded-full border border-white shadow-md"
                  src={profileImage || "https://th.bing.com/th/id/OIP.t7BZK524_FjK_vIz9TaMWwHaJ4?rs=1&pid=ImgDetMain"}
                  alt="Profile"
                />
              </button>
            )}

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-1 py-1 bg-gray- hover:bg-gray-600 text-white font-small rounded-md transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-1 py-1 bg-gray- hover:bg-gray-600 text-white font-small rounded-md transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 py-4 space-y-4 text-center">
          <a
            href="/course"
            className="block px-4 py-2 text-lg font-semibold hover:bg-green-500 transition"
          >
            Courses
          </a>
          {isLoggedIn && (
            <a
              href="/mycourses"
              className="block px-4 py-2 text-lg font-semibold hover:bg-green-500 transition"
            >
              My Courses
            </a>
          )}
          <a
            href="/contact"
            className="block px-4 py-2 text-lg font-semibold hover:bg-green-500 transition"
          >
            Contact
          </a>
          <a
            href="/cart"
            className="block px-4 py-2 text-lg font-semibold hover:bg-green-500 transition flex justify-center"
          >
            <FaCartPlus size={20} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
