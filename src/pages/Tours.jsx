import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { tours } from '../data/toursData';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Wildlife Safari', 'Gorilla Trekking', 'Adventure Safari', 'Hiking & Nature'];

  const filteredTours = selectedCategory === 'All' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-safari-green text-white py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Our Safari <span className="text-safari-sand">Tours</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Choose from our carefully curated selection of unforgettable safari experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-safari-sand text-white shadow-lg'
                    : 'bg-gray-100 text-safari-green hover:bg-safari-green/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTours.map((tour) => (
              <motion.div
                key={tour.id}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-safari-sand text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {tour.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-safari-green/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {tour.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading text-safari-green mb-3 group-hover:text-safari-sand transition-colors">
                    {tour.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{tour.shortDescription}</p>

                  <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">From</p>
                      <p className="text-3xl font-bold text-safari-brown">{tour.price}</p>
                    </div>
                    <Link
                      to={`/tour/${tour.id}`}
                      className="bg-safari-sand hover:bg-safari-brown text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredTours.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">No tours found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold font-heading mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              We can create a custom safari package tailored to your preferences!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-safari-sand hover:bg-white hover:text-safari-green text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Contact Us for Custom Safari
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tours;