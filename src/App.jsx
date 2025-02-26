import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import CourseContainer from "./components/CourseContainer";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import MyCourses from "./components/MyCourses";
import Home from "./components/Home";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("loggedInUser");
        setIsLoggedIn(!!user);
    }, []);

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <ToastContainer position="top-right" autoClose={2000} />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/course" element={<CourseContainer />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/mycourses" element={<MyCourses />}/>
            </Routes>
        </Router>
    );
}

export default App;
