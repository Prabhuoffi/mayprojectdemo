import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    text: 'I absolutely love my new shoes! They are so comfortable and stylish. Will definitely buy again.',
    location: 'New York, NY',
    image: 'https://th.bing.com/th/id/OIP.Gdji2qvqkwQr2peZzn48RQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain', // Replace with actual image URL
  },
  {
    name: 'Jane Smith',
    text: 'Great customer service and fantastic quality. Highly recommended!',
    location: 'Los Angeles, CA',
    image: 'https://th.bing.com/th/id/OIP.Gdji2qvqkwQr2peZzn48RQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain', // Replace with actual image URL
  },
  {
    name: 'Sam Wilson',
    text: 'The best shopping experience I\'ve had in a long time. The shoes fit perfectly and look great.',
    location: 'Chicago, IL',
    image: 'https://th.bing.com/th/id/OIP.Gdji2qvqkwQr2peZzn48RQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain', // Replace with actual image URL
  },
];

function Testimonials() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert(`Message sent from ${email}: ${message}`);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-purple-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Customers Are Saying
        </motion.h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 m-4 max-w-md w-full transition-shadow duration-300 hover:shadow-purple-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 shadow-lg"
              />
              <div>
                <p className="text-lg text-purple-700 font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <p className="text-gray-600">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-purple-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Leave a Message for the Owner
        </motion.h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto p-6 bg-gradient-to-r from-purple-500 to-indigo-500">
          <div className="mb-6">
            <input
              type="email"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-purple-800 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </form>
      </div>
    </section>
  );
}

export default Testimonials;
