import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    console.log("Updated Cart Items:", cartItems);
  }, [cartItems]);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      toast.error("Please fill in all the billing details.");
      return;
    }
  
    console.log("Razorpay Key:", import.meta.env.VITE_APP_RAZORPAY_KEY);
  
    if (!window.Razorpay) {
      toast.error("Razorpay SDK failed to load. Please refresh.");
      return;
    }
  
    const options = {
      key: import.meta.env.VITE_APP_RAZORPAY_KEY ,
      amount: totalPrice * 100,
      currency: "INR",
      name: "Course Enrollment",
      description: "Payment for enrolled courses",
      handler: function (response) {
        toast.success(
          "Payment Successful! Transaction ID: " + response.razorpay_payment_id
        );
  
        const enrolledCourses =
          JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  
        const newEnrollments = cartItems.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          enrolledOn: new Date().toDateString(),
          youtubeLink: item.youtubeLink || getYoutubeLink(item.id),
        }));
  
        const uniqueEnrollments = [
          ...enrolledCourses,
          ...newEnrollments.filter(
            (newCourse) =>
              !enrolledCourses.some((course) => course.id === newCourse.id)
          ),
        ];
  
        localStorage.setItem("enrolledCourses", JSON.stringify(uniqueEnrollments));
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const getYoutubeLink = (id) => {
    const courseLinks = {
      1: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      2: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      3: "https://www.youtube.com/watch?v=Oe421EPjeBE",
      4: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
    };
    return courseLinks[id] || null;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Checkout</h2>

      <ToastContainer />

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2 text-sm sm:text-base">
            <p>{item.title} x {item.quantity}</p>
            <p>₹{item.price * item.quantity}</p>
          </div>
        ))}
        <h3 className="text-xl font-bold mt-4">Total Price: ₹{totalPrice.toFixed(2)}</h3>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
        <input type="text" name="name" placeholder="Full Name" className="w-full border p-2 mb-2 rounded-md text-sm sm:text-base" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2 mb-2 rounded-md text-sm sm:text-base" onChange={handleChange} />
        <textarea name="address" placeholder="Address" className="w-full border p-2 mb-2 rounded-md text-sm sm:text-base" onChange={handleChange}></textarea>
      </div>

      <button 
        className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all duration-200 sm:py-3 text-sm sm:text-base" 
        onClick={handleCheckout}>
        Pay & Enroll
      </button>
    </div>
  );
};

export default Checkout;
