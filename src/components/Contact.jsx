import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar, FaCheckCircle } from "react-icons/fa"; // Importing icons

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store data in localStorage (Optional)
        localStorage.setItem("contactForm", JSON.stringify(formData));

        // Show toast notification
        toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        // Reset form fields
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="bg-gray-900 text-white py-24 px-6 sm:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white text-center mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">Name</label>
                            <input
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-gray-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email</label>
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-gray-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                id="message"
                                rows="4"
                                className="block w-full rounded-md bg-gray-700 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full rounded-md bg-indigo-600 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-500 transition-all">
                            Let's Talk
                        </button>
                    </form>
                </div>

                {/* Bootcamp Info */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FaStar className="text-yellow-400" /> Full Stack Web Development Job Bootcamp
                    </h2>
                    <p className="text-gray-300 mt-4">
                        Choose MERN stack or Spring Boot and acquire expertise through practical application and real-world projects.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-300">
                        <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Placement Assistance</p>
                        <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> AI-infused Curriculum</p>
                        <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> 1:1 Mentorship</p>
                        <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Faculty from MAANG</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-8 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white">95%</h3>
                            <p className="text-gray-400 text-sm">Placement Rate</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">1200+</h3>
                            <p className="text-gray-400 text-sm">Companies Hiring</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">128%</h3>
                            <p className="text-gray-400 text-sm">Average Hike</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">1.5L+</h3>
                            <p className="text-gray-400 text-sm">Learners</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a href="#" className="inline-block bg-indigo-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-indigo-500 transition-all">
                            Join Our Free Webinar
                        </a>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Contact;
