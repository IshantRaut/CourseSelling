import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w mx-auto px-4 py-8 bg-[#1E293B] min-h-screen">
      <h2 className="text-3xl font-bold text-gray-200 mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <motion.p 
          className="text-gray-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Your cart is empty. Start shopping now!
        </motion.p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-4 shadow-md rounded-lg bg-[#334155] flex justify-between items-center"
              >
                {/* Product Title */}
                <p className="text-lg font-semibold text-gray-200">{item.title}</p>

                {/* Price */}
                <p className="text-gray-300 font-medium">₹{item.price.toFixed(2)}</p>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className={`px-3 py-1 rounded-md ${item.quantity > 1 ? 'bg-gray-500 text-white' : 'bg-gray-400 text-gray-300 cursor-not-allowed'}`}
                    onClick={() => item.quantity > 1 && dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                  >
                    <AiOutlineMinus />
                  </motion.button>

                  <motion.p 
                    className="text-lg font-semibold text-gray-200"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.quantity}
                  </motion.p>

                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-500 text-white px-3 py-1 rounded-md" 
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    <AiOutlinePlus />
                  </motion.button>
                </div>

                {/* Remove Button */}
                <motion.button
                  whileTap={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.2 }}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Total Price */}
          <motion.div 
            className="text-2xl font-bold mt-6 text-right text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Total: ₹{totalPrice.toFixed(2)}
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:justify-end space-y-3 md:space-x-4 md:space-y-0 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-red-700 text-white py-2 px-6 rounded-md hover:bg-red-800"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
