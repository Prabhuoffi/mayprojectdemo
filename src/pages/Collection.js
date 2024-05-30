import React, { useState } from "react";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa"; // Import icons
import shoe1 from "../assets/shoe.png";
import shoe2 from "../assets/shoe.png";
import shoe3 from "../assets/shoe.png";
import shoe4 from "../assets/shoe.png";
import shoe5 from "../assets/shoe.png";
import shoe6 from "../assets/shoe.png";
import shoe7 from "../assets/shoe.png";
import shoe8 from "../assets/shoe.png";
import shoe9 from "../assets/shoe.png";

const shoes = [
  { id: 1, name: "Shoe Model 1", cost: "₹100", image: shoe1, rating: 4.5, offer: "10% off", freeDelivery: true, bankOffer: "10% cashback with HDFC" },
  { id: 2, name: "Shoe Model 2", cost: "₹110", image: shoe2, rating: 4.0, offer: "15% off", freeDelivery: false, bankOffer: "5% cashback with ICICI" },
  { id: 3, name: "Shoe Model 3", cost: "₹120", image: shoe3, rating: 4.8, offer: "20% off", freeDelivery: true, bankOffer: "20% cashback with SBI" },
  { id: 4, name: "Shoe Model 4", cost: "₹130", image: shoe4, rating: 3.5, offer: "5% off", freeDelivery: true, bankOffer: "10% cashback with HDFC" },
  { id: 5, name: "Shoe Model 5", cost: "₹140", image: shoe5, rating: 4.1, offer: "25% off", freeDelivery: false, bankOffer: "5% cashback with ICICI" },
  { id: 6, name: "Shoe Model 6", cost: "₹150", image: shoe6, rating: 4.7, offer: "30% off", freeDelivery: true, bankOffer: "20% cashback with SBI" },
  { id: 7, name: "Shoe Model 7", cost: "₹160", image: shoe7, rating: 4.3, offer: "35% off", freeDelivery: true, bankOffer: "10% cashback with HDFC" },
  { id: 8, name: "Shoe Model 8", cost: "₹170", image: shoe8, rating: 4.2, offer: "40% off", freeDelivery: false, bankOffer: "5% cashback with ICICI" },
  { id: 9, name: "Shoe Model 9", cost: "₹180", image: shoe9, rating: 4.9, offer: "45% off", freeDelivery: true, bankOffer: "20% cashback with SBI" },
];

function OurCollection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [isSeeMoreModalOpen, setIsSeeMoreModalOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const handleCloseModal = () => {
    setSelectedShoe(null);
  };

  const handleSeeMoreModalClose = () => {
    setIsSeeMoreModalOpen(false);
  };

  const filteredShoes = shoes
    .filter((shoe) =>
      shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") {
        return parseInt(a.cost.substring(1)) - parseInt(b.cost.substring(1));
      }
      if (sortOption === "priceHighToLow") {
        return parseInt(b.cost.substring(1)) - parseInt(a.cost.substring(1));
      }
      return 0;
    });

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-purple-700 mb-8 text-center">
        Our Collection
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search shoes..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4 md:mb-0 md:mr-4"
        />
        <select
          value={sortOption}
          onChange={handleSort}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="default">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredShoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative group"
            style={{ height: '600px' }} // Ensure all boxes have the same height
          >
            <div
              className="relative flex justify-center items-center h-64 bg-gray-50 cursor-pointer"
              onClick={() => setSelectedShoe(shoe)}
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 text-center flex flex-col justify-between h-36">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {shoe.name}
                </h2>
                <p className="text-lg text-gray-600 mb-4">{shoe.cost}</p>
                <p className="text-yellow-500 mb-2">
                  {"★".repeat(Math.floor(shoe.rating)) + (shoe.rating % 1 !== 0 ? "★" : "")}
                  {"☆".repeat(5 - Math.ceil(shoe.rating))}
                </p>
                <p className="text-green-500 mb-2">{shoe.offer}</p>
                <p className="text-gray-600 mb-2">{shoe.freeDelivery ? "Free Delivery" : ""}</p>
                <p className="text-blue-500 mb-4">{shoe.bankOffer}</p>
              </div>
              <div className="flex justify-center gap-4">
                <button
                  className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out"
                  onClick={() => alert(`Added ${shoe.name} to cart!`)}
                >
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
                <button
                  className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:from-green-600 hover:to-teal-600 transition duration-300 ease-in-out"
                  onClick={() => alert(`Bought ${shoe.name}!`)}
                >
                  <FaCreditCard className="mr-2" /> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-8 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out"
          onClick={() => setIsSeeMoreModalOpen(true)}
        >
          See More Collection
        </button>
      </div>
      {selectedShoe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-10 w-96 relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 focus:outline-none"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedShoe.name}
            </h2>
            <img
              src={selectedShoe.image}
              alt={selectedShoe.name}
              className="w-full h-64 object-contain mb-4"
            />
            <p className="text-lg text-gray-600 mb-4">{selectedShoe.cost}</p>
            <p className="text-yellow-500 mb-2">
              {"★".repeat(Math.floor(selectedShoe.rating)) + (selectedShoe.rating % 1 !== 0 ? "★" : "")}
              {"☆".repeat(5 - Math.ceil(selectedShoe.rating))}
            </p>
            <p className="text-green-500 mb-2">{selectedShoe.offer}</p>
            <p className="text-gray-600 mb-2">{selectedShoe.freeDelivery ? "Free Delivery" : ""}</p>
            <p className="text-blue-500 mb-4">{selectedShoe.bankOffer}</p>
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isSeeMoreModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-2xl relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 focus:outline-none"
              onClick={handleSeeMoreModalClose}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              More Collection Coming Soon!
            </h2>
            <p className="text-lg text-gray-600 mb-4 text-center">
              We are constantly updating our collection. Stay tuned for more amazing shoes!
            </p>
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out mx-auto block"
              onClick={handleSeeMoreModalClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default OurCollection;