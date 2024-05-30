import React from "react";
import { motion } from "framer-motion";
import home from "../assets/shoe.png";


function HomePage() {
  return (
    
    <section className="container h-screen mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
          >
            Find Your Dream Sneakers
          </motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-700 mb-8 lg:pr-8 xl:pr-20"
          >
            Discover your perfect pair from our diverse collections. Our range of
            shoes is vast, just like the opportunities for profit.
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center lg:justify-start space-x-4 mt-6"
          >
            <a 
              href="/" 
              className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out"
            >
              Explore More
            </a>
            <button className="btn-secondary bg-gray-100 text-gray-800 py-2 px-6 rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
              Learn More
            </button>
          </motion.div>
        </div>
        {/* Right Side */}
        <div className="relative mt-9 flex justify-center items-center lg:pl-12">
          {/* Background Circle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:block absolute w-[660px] h-[660px] bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full top-1/2 transform -translate-y-1/2 "
          ></motion.div>
          {/* Image with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full mt-8 max-w-lg relative z-10 lg:p-8 rounded-lg shadow-lg bg-gradient-to-br from-purple-600 to-indigo-600"
          >
            <motion.img
              src={home}
              alt="Sneakers"
              className="w-full mt-6 rounded-lg"
            />
          </motion.div>
        </div>
     
      </div>
    </section>
      
  );
}

export default HomePage;
