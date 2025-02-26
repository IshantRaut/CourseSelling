import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");

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

    // Listen for storage changes when profile updates
    window.addEventListener("storage", fetchProfileImage);

    return () => {
      window.removeEventListener("storage", fetchProfileImage);
    };
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

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="/course"
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 hover:text-white transition"
            >
              Courses
            </a>
            {isLoggedIn && (
              <a
                href="/mycourses"
                className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 hover:text-white transition"
              >
                My Courses
              </a>
            )}
            <a
              href="/contact"
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 hover:text-white transition"
            >
              Contact
            </a>
            <a
              href="/cart"
              className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 hover:text-white transition flex items-center"
            >
              <FaCartPlus size={20} />
            </a>
          </div>

          {/* Profile Image & Login/Logout */}
          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <button onClick={() => navigate("/profile")} className="relative">
                <img
                  className="w-10 h-10 rounded-full border border-white shadow-md"
                  src={profileImage || "https://via.placeholder.com/40"}
                  alt="Profile"
                />
              </button>
            )}

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition"
              >
                Login / Signup
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
