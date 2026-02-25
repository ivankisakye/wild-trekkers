import { motion } from 'framer-motion';
import { destinations } from '../data/toursData';
import { FaMapMarkerAlt, FaTree, FaBinoculars, FaMountain } from 'react-icons/fa';

const Destinations = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const getIcon = (index) => {
    const icons = [FaTree, FaBinoculars, FaMountain, FaMapMarkerAlt];
    const Icon = icons[index % icons.length];
    return <Icon className="text-4xl text-safari-sand mb-4" />;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-safari-green text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-safari-dark to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Safari <span className="text-safari-sand">Destinations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Explore Uganda's most spectacular national parks and wildlife destinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Uganda, the Pearl of Africa, offers an incredible diversity of wildlife destinations. 
              From mist-covered mountains where mountain gorillas roam, to vast savannahs teeming with 
              elephants and lions, to the source of the mighty Nile River - each destination promises 
              unique and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      {getIcon(index)}
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-safari-green mb-4 group-hover:text-safari-sand transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-safari-green mb-3">Highlights:</h4>
                      <div className="space-y-2">
                        {destination.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-safari-sand rounded-full mr-3 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Uganda */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold font-heading text-safari-green mb-8 text-center">
              Why Choose Uganda for Safari?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-xl font-bold text-safari-green mb-3">Unique Wildlife</h3>
                <p className="text-gray-700">
                  Home to mountain gorillas, tree-climbing lions, and over 1,000 bird species - 
                  wildlife you won't find anywhere else.
                </p>
              </div>
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-xl font-bold text-safari-green mb-3">Diverse Ecosystems</h3>
                <p className="text-gray-700">
                  From tropical rainforests to savannah plains, snow-capped mountains to vast lakes - 
                  incredible variety in a compact area.
                </p>
              </div>
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-xl font-bold text-safari-green mb-3">Authentic Experiences</h3>
                <p className="text-gray-700">
                  Less crowded than other African destinations, offering intimate wildlife encounters 
                  and genuine cultural connections.
                </p>
              </div>
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-xl font-bold text-safari-green mb-3">Year-Round Safari</h3>
                <p className="text-gray-700">
                  Uganda's equatorial location means wildlife viewing is excellent throughout the year, 
                  with two dry seasons ideal for visits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-sand text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold font-heading mb-6">
              Ready to Explore These Destinations?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us create a custom safari itinerary that takes you to Uganda's most incredible places
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tours"
                className="inline-block bg-white text-safari-sand hover:bg-safari-green hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Browse Our Tours
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-safari-sand text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;