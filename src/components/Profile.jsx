import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        profileImage: "",
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({ ...user, profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = () => {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        
        // Trigger an event to notify other components (Navbar)
        window.dispatchEvent(new Event("storage"));

        toast.success("Profile updated successfully!", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-center text-2xl font-bold text-gray-800">Update Profile</h2>

                {/* Profile Image Upload */}
                <div className="flex flex-col items-center my-4">
                    <label htmlFor="profileImage" className="cursor-pointer">
                        <img 
                            src={user.profileImage || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border border-gray-300"
                        />
                    </label>
                    <input
                        type="file"
                        id="profileImage"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>

                {/* Update Form */}
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-indigo-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-indigo-500"
                    />

                    <button
                        onClick={handleUpdate}
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
                    >
                        Update Profile
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="w-full bg-gray-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-gray-600"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
