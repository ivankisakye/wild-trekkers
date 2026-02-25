import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tours } from '../data/toursData';
import BookingForm from '../components/tours/BookingForm';
import { FaClock, FaDollarSign, FaCheckCircle, FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-safari-green mb-4">Tour Not Found</h1>
          <Link to="/tours" className="text-safari-sand hover:underline">
            ← Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
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
                to="/tours"
                className="inline-flex items-center text-white/90 hover:text-white mb-4 group"
              >
                <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Tours
              </Link>
              <h1 className="text-5xl font-bold font-heading mb-3">{tour.title}</h1>
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center">
                  <FaClock className="mr-2 text-safari-sand" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaDollarSign className="mr-2 text-safari-sand" />
                  <span className="text-2xl font-bold">{tour.price}</span>
                </div>
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
                <h2 className="text-3xl font-bold font-heading text-safari-green mb-4">
                  Tour Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tour.fullDescription}
                </p>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold font-heading text-safari-green mb-6">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.includes.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-safari-sand mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold font-heading text-safari-green mb-6">
                  Itinerary
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="border-l-4 border-safari-sand pl-6 pb-6 last:pb-0">
                      <div className="flex items-center mb-2">
                        <div className="bg-safari-sand text-white w-10 h-10 rounded-full flex items-center justify-center font-bold -ml-11 mr-3">
                          {day.day}
                        </div>
                        <h3 className="text-xl font-bold text-safari-green">{day.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Important Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-safari-green/5 rounded-lg p-8 border-l-4 border-safari-sand"
              >
                <h3 className="text-2xl font-bold font-heading text-safari-green mb-4">
                  Important Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minimum age requirement may apply for certain activities</li>
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
                  <BookingForm tourTitle={tour.title} tourPrice={tour.price} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-heading text-safari-green mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours
              .filter(t => t.id !== tour.id && t.category === tour.category)
              .slice(0, 3)
              .map((relatedTour) => (
                <motion.div
                  key={relatedTour.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={relatedTour.image}
                      alt={relatedTour.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-safari-sand text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {relatedTour.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-safari-green mb-3">
                      {relatedTour.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedTour.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-safari-brown">
                        {relatedTour.price}
                      </span>
                      <Link
                        to={`/tour/${relatedTour.id}`}
                        className="bg-safari-sand hover:bg-safari-brown text-white px-4 py-2 rounded-full font-semibold transition-all"
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

export default TourDetail;