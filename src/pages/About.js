import React, { useState } from "react";
import shoe from '../assets/about.png';
import { motion } from "framer-motion";

function About() {
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);

  const handleReadMoreClick = () => {
    setIsReadMoreVisible(!isReadMoreVisible);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="text-center mt-20">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-purple-700"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:order-2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.img
            src={shoe}
            alt="Shoe"
            className="max-w-full w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:max-w-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="lg:w-1/2 lg:order-1 text-center lg:text-left">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-purple-700 mb-8"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Dedicated to Quality and Results
          </motion.h2>
          <p className="text-lg text-black mb-8">
            At our shoe store, we are committed to providing the best shoes of various styles,
            ensuring that each pair meets the highest standards of quality and craftsmanship.
            Our collection is designed with you in mind, offering a perfect blend of comfort,
            durability, and fashion.
          </p>
          {isReadMoreVisible && (
            <p className="text-lg text-black mb-8">
              Our shoes are sourced from top manufacturers and designers around the world,
              ensuring that you have access to the latest trends and timeless classics.
              We understand the importance of finding the perfect fit, which is why we offer
              a wide range of sizes and styles to suit every individual. Whether you're
              looking for casual wear, athletic shoes, or something for a special occasion,
              we have something for everyone.
              <br /><br />
              Our team is dedicated to providing exceptional customer service, ensuring that
              your shopping experience is enjoyable and hassle-free. We believe in the value
              of our products, and we stand behind each pair of shoes with a satisfaction
              guarantee. Thank you for choosing our store, where quality and customer
              satisfaction are our top priorities.
            </p>
          )}
          <motion.div
            className="text-center lg:text-left mt-8 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-8 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out"
              onClick={handleReadMoreClick}
            >
              {isReadMoreVisible ? "Read Less" : "Read More"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
