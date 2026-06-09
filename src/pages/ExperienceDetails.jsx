import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import BookingForm from "../components/tours/BookingForm";
import { FaClock, FaCheckCircle, FaArrowLeft, FaTag, FaMapMarkerAlt } from "react-icons/fa";

const ExperienceDetails = () => {
  const { slug } = useParams();
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Experience Not Found</h1>
          <p className="text-gray-600 mb-6">The experience you're looking for doesn't exist.</p>
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link to="/experiences" className="inline-flex items-center text-white/90 hover:text-white mb-4 group">
                <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Experiences
              </Link>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {experience.category}
                </span>
              </div>
              
              <h1 className="text-5xl font-bold font-heading mb-3">{experience.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center">
                  <FaClock className="mr-2 text-amber-500" />
                  <span>{experience.duration}</span>
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
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold font-heading text-green-800 mb-4">Experience Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{experience.description}</p>
              </motion.div>

              {/* Highlights */}
              {experience.highlights && (
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold font-heading text-green-800 mb-6">Experience Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.highlights.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Itinerary */}
              {experience.itinerary && (
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold font-heading text-green-800 mb-6">Activity Schedule</h2>
                  <div className="space-y-6">
                    {experience.itinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-amber-500 pl-6 pb-6 last:pb-0">
                        <div className="flex items-center mb-2">
                          <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold -ml-11 mr-3">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-green-800">{day.day}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Important Information */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-green-800/5 rounded-lg p-8 border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold font-heading text-green-800 mb-4">Important Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• All activities include professional guides and safety equipment</li>
                  <li>• Moderate fitness level may be required for some activities</li>
                  <li>• Customization options available - contact us for details</li>
                  <li>• Travel insurance is highly recommended</li>
                  <li>• Minimum age requirements may apply for certain activities</li>
                </ul>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm 
                  tourTitle={experience.title} 
                  tourPrice="Contact for pricing" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetails;