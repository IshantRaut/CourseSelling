import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, setCategory } from "../redux/courseSlice";
import { setSearchTerm } from "../redux/searchSlice";
import { addToCart } from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseContainer = () => {
  const dispatch = useDispatch();
  const { courses, selectedCategory } = useSelector((state) => state.courses);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    fetch("/course.json")
      .then((response) => response.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((error) => console.error("Error fetching courses:", error));
  }, [dispatch]);

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    toast.success(`${course.title} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Available Courses
      </h2>

      {/* Category Filters & Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
        {/* Scrollable Categories on Mobile */}
        <div className="w-full md:w-auto overflow-x-auto">
          <ul className="flex gap-3 justify-start md:justify-center whitespace-nowrap">
            {["All", "Full Stack Developer", "FrontEnd Development", "BackEnd Development", "Data Analytics"].map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-md text-sm font-semibold cursor-pointer transition ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-green-500 hover:text-white"
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
      </div>

      <ToastContainer />

      {/* Display Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden text-white transform transition-all hover:scale-105"
            >
              <img
                className="w-full h-40 object-cover"
                src={course.image}
                alt={course.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{course.description}</p>
                <p className="text-green-400 font-bold mt-2">₹{course.price}</p>
                <button
                  className="mt-3 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                  onClick={() => handleAddToCart(course)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseContainer;
