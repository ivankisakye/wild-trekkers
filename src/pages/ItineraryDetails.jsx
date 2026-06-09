import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { itineraries } from "../data/itineraries";
import BookingForm from "../components/tours/BookingForm";
import { FaClock, FaDollarSign, FaCheckCircle, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

const ItineraryDetails = () => {
  const { slug } = useParams();

  const itinerary = itineraries.find(
    (item) => item.slug === slug
  );

  if (!itinerary) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Tour Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The itinerary you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 inline-flex items-center gap-2">
            <FaArrowLeft className="text-sm" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  // Extract price from duration string if available, or set default
  const tourPrice = itinerary.price || "Contact for pricing";

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={itinerary.image}
          alt={itinerary.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/"
                className="inline-flex items-center text-white/90 hover:text-white mb-4 group"
              >
                <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              <h1 className="text-5xl font-bold font-heading mb-3">{itinerary.title}</h1>
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center">
                  <FaClock className="mr-2 text-amber-500" />
                  <span>{itinerary.duration}</span>
                </div>
                {itinerary.price && (
                  <div className="flex items-center">
                    <FaDollarSign className="mr-2 text-amber-500" />
                    <span className="text-2xl font-bold">{itinerary.price}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Tour Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold font-heading text-green-800 mb-4">
                  Tour Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {itinerary.description || itinerary.overview}
                </p>
              </motion.div>

              {/* Highlights */}
              {itinerary.highlights && itinerary.highlights.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold font-heading text-green-800 mb-6">
                    Tour Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {itinerary.highlights.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Daily Itinerary */}
              {itinerary.itinerary && itinerary.itinerary.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold font-heading text-green-800 mb-6">
                    Detailed Itinerary
                  </h2>
                  <div className="space-y-6">
                    {itinerary.itinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-amber-500 pl-6 pb-6 last:pb-0">
                        <div className="flex items-center mb-2">
                          <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold -ml-11 mr-3">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-green-800">{day.day || `Day ${index + 1}`}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Important Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-green-800/5 rounded-lg p-8 border-l-4 border-amber-500"
              >
                <h3 className="text-2xl font-bold font-heading text-green-800 mb-4">
                  Important Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gorilla trekking permits must be secured in advance</li>
                  <li>• Minimum age requirement of 15 years for gorilla trekking</li>
                  <li>• Moderate fitness level required for trekking activities</li>
                  <li>• All permits and entrance fees are included in the price</li>
                  <li>• Customization options available - contact us for details</li>
                  <li>• Travel insurance is highly recommended</li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Booking Form (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <BookingForm 
                    tourTitle={itinerary.title} 
                    tourPrice={tourPrice} 
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-heading text-green-800 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itineraries
              .filter(item => item.slug !== itinerary.slug)
              .slice(0, 3)
              .map((related) => (
                <motion.div
                  key={related.slug}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {related.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-green-800 mb-3 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {related.overview}
                    </p>
                    <div className="flex items-center justify-between">
                      {related.price && (
                        <span className="text-xl font-bold text-green-700">
                          {related.price}
                        </span>
                      )}
                      <Link
                        to={`/itinerary/${related.slug}`}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full font-semibold transition-all ml-auto"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItineraryDetails;