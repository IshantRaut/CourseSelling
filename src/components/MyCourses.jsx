import { useState, useEffect } from "react";

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(courses);
  }, []);

  const handleCompleteCourse = (courseId) => {
    const updatedCourses = enrolledCourses.map(course =>
      course.id === courseId ? { ...course, completed: true } : course
    );

    setEnrolledCourses(updatedCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));

    setToastMessage("🎉 Your certificate has been sent!");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleRemoveCourse = (courseId) => {
    const updatedCourses = enrolledCourses.filter(course => course.id !== courseId);
    setEnrolledCourses(updatedCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));

    setToastMessage("❌ Course removed successfully!");
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">My Courses</h2>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {toastMessage}
        </div>
      )}

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-400">You have not enrolled in any courses yet.</p>
      ) : (
        <div className="w-full max-w-4xl bg-gray-800 p-6 shadow-lg rounded-lg">
          {enrolledCourses.map((course, index) => (
            <div
              key={index}
              className="border-b border-gray-700 py-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                <p className="text-gray-400 text-sm">
                  Enrolled on: {new Date(course.enrolledOn).toLocaleDateString()}
                </p>
                {course.youtubeLink ? (
                  <a
                    href={course.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mt-2 inline-block"
                  >
                    🎥 Watch Course
                  </a>
                ) : (
                  <p className="text-red-400">Video link not available</p>
                )}
              </div>
              
              {/* Buttons (Complete & Remove) */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleCompleteCourse(course.id)}
                  className={`px-4 py-2 rounded transition text-white font-medium ${
                    course.completed
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  disabled={course.completed}
                >
                  {course.completed ? "Completed ✅" : "Complete"}
                </button>

                {/* Show Remove button only when course is completed */}
                {course.completed && (
                  <button
                    onClick={() => handleRemoveCourse(course.id)}
                    className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    Remove ❌
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
