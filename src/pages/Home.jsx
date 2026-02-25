import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  FaArrowRight, 
  FaQuoteLeft, 
  FaCompass, 
  FaMountain, 
  FaLeaf, 
  FaCamera, 
  FaUsers,
  FaStar,
  FaShieldAlt,
  FaGlobeAfrica,
  FaClock,
  FaMapMarkerAlt,
  FaChevronDown
} from 'react-icons/fa';
import { tours, destinations, blogPosts } from '../data/toursData';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80',
    'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1600&q=80',
    'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="overflow-x-hidden bg-amber-50/30">
      {/* Hero Section with Sliding Background - Enhanced */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Sliding Background Images with Parallax Effect */}
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${image})`,
                filter: 'brightness(0.7)'
              }}
            />
            {/* Animated overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </motion.div>
        ))}

        {/* Hero Content - Enhanced */}
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
          >
            <FaShieldAlt className="text-amber-400 mr-2" />
            <span className="text-sm font-medium tracking-wide">TRUSTED SAFARI OPERATOR SINCE 2010</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-tight"
          >
            Adventures <br />
            <span className="text-amber-400 relative inline-block">
              To Nature
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/50"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
            <br />And beyond
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed"
          >
            From misty mountain gorillas to the wild savannahs — 
            <span className="text-amber-300 font-semibold"> live the adventure of a lifetime</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/tours"
              className="group relative bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Begin Your Journey
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </Link>
            
            <Link
              to="/contact"
              className="group backdrop-blur-md bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                <FaCompass className="mr-3 group-hover:rotate-45 transition-transform duration-300" />
                Plan Your Safari
              </span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaChevronDown className="text-white/80 text-2xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators - Enhanced */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
            >
              <span 
                className={`block h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index 
                    ? 'w-12 bg-amber-500' 
                    : 'w-2 bg-white/50 group-hover:w-6 group-hover:bg-white/80'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-32 right-10 hidden lg:block z-30">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <FaUsers className="text-amber-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-xs text-gray-300">Happy Travelers</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <FaGlobeAfrica className="text-amber-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12+</p>
                  <p className="text-xs text-gray-300">Destinations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section - Enhanced with Stats */}
      <section className="py-32 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-amber-800 font-semibold text-sm tracking-wider">SINCE 2010</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-safari-green leading-tight">
                  Crafting Authentic
                  <span className="text-amber-500 block mt-2">African Adventures</span>
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  At <span className="font-bold text-safari-green">Wild Trekker Safaris</span>, we don't just show you wildlife — 
                  we connect you with the raw, untamed spirit of Africa. Every journey is thoughtfully crafted 
                  to create moments that will stay with you forever.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaLeaf className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Eco-Conscious</h4>
                      <p className="text-sm text-gray-600">Sustainable travel practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Local Guides</h4>
                      <p className="text-sm text-gray-600">Expert & passionate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCamera className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Photography</h4>
                      <p className="text-sm text-gray-600">Capture every moment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Safety First</h4>
                      <p className="text-sm text-gray-600">Your security matters</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center text-safari-green hover:text-amber-600 font-semibold text-lg group mt-8"
                >
                  <span className="border-b-2 border-transparent group-hover:border-amber-500 transition-all duration-300">
                    Discover Our Story
                  </span>
                  <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-all duration-300" />
                </Link>
              </motion.div>

              {/* Right Column - Image Collage */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-48">
                      <img 
                        src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80" 
                        alt="Gorilla"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80" 
                        alt="Elephant"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" 
                        alt="Lion"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-48">
                      <img 
                        src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80" 
                        alt="Zebra"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 z-20">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center">
                      <FaStar className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-safari-green">4.9</p>
                      <p className="text-sm text-gray-600">TripAdvisor Rating</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours - Enhanced with Card Design */}
      <section className="py-32 bg-gradient-to-b from-amber-50/50 to-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551972251-12070d63502a?w=1200&q=80')] bg-fixed bg-cover bg-center opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4 block">
              Choose Your Adventure
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-safari-green mb-6">
              Signature Safari Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-selected journeys that showcase the very best of Uganda's wild beauty
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tours.slice(0, 6).map((tour) => (
              <motion.div
                key={tour.id}
                variants={scaleIn}
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badges */}
                  <div className="absolute top-5 right-5 flex flex-col gap-2">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                      {tour.duration}
                    </span>
                    <span className="bg-white/95 text-safari-green px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      From {tour.price}
                    </span>
                  </div>

                  {/* Quick Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <FaClock className="mr-2" /> {tour.duration}
                      </span>
                      <span className="flex items-center">
                        <FaUsers className="mr-2" /> Max 8
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-safari-green mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {tour.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Starting from</p>
                      <span className="text-3xl font-bold text-safari-brown">{tour.price}</span>
                    </div>
                    <Link
                      to={`/tour/${tour.id}`}
                      className="group/btn relative overflow-hidden bg-safari-green hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="relative z-10 flex items-center text-sm">
                        View Details
                        <FaArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/tours"
              className="group inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Explore All Adventures
              <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations - Enhanced with 3D Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4 block">
              Where to Go
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-safari-green mb-6">
              Iconic Ugandan Landscapes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From misty rainforests to vast savannahs — each destination tells its own story
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.slice(0, 6).map((destination) => (
              <motion.div
                key={destination.id}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer h-96"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/50 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-3xl font-bold font-heading mb-3 flex items-center">
                      <FaMapMarkerAlt className="text-amber-400 mr-2 text-sm" />
                      {destination.name}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-500">
                      {destination.description}
                    </p>
                    
                    {/* Hidden content that appears on hover */}
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-amber-500/90 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/destinations#${destination.id}`}
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold text-sm group/link mt-2"
                      >
                        Explore Destination
                        <FaArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Preview Badge */}
                <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ⭐ {destination.rating || '4.9'} Rating
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/destinations"
              className="group inline-flex items-center bg-safari-green hover:bg-safari-sand text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Discover All Destinations
              <FaGlobeAfrica className="ml-3 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Enhanced with Video Feel */}
      <section className="py-32 relative overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518709766631-a6c7f7856bc2?w=1600&q=80" 
            alt="Safari background"
            className="w-full h-full object-cover scale-105 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-safari-green/95 to-safari-green/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Stats */}
              <motion.div variants={fadeInUp} className="text-white space-y-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-amber-400 font-semibold text-sm tracking-wider">TRAVELER STORIES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                  What Our
                  <span className="text-amber-400 block mt-2">Adventurers Say</span>
                </h2>

                <div className="flex items-center space-x-6 pt-6">
                  <div>
                    <p className="text-6xl font-bold text-amber-400">500+</p>
                    <p className="text-white/80 mt-2">5-Star Reviews</p>
                  </div>
                  <div className="w-px h-16 bg-white/20" />
                  <div>
                    <p className="text-6xl font-bold text-amber-400">98%</p>
                    <p className="text-white/80 mt-2">Would Recommend</p>
                  </div>
                </div>

                <div className="flex -space-x-2 pt-4">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${20 + i}.jpg`} 
                        alt="Traveler"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    +500
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Testimonial Card */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              >
                <FaQuoteLeft className="text-5xl text-amber-400/50 mb-6" />
                <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-8">
                  "An absolutely incredible experience! Seeing the mountain gorillas in Bwindi was a dream come true. 
                  Wild Trekker Safaris didn't just organize a trip — they created memories that will last a lifetime. 
                  The guides were knowledgeable, the accommodations perfect, and every detail was thoughtfully planned."
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="Sarah Johnson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Sarah Johnson</p>
                      <p className="text-amber-400/80 text-sm">Chicago, USA</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-amber-400 text-sm mr-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-sm">Toured in</p>
                    <p className="text-white font-semibold">Feb 2025</p>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-8 pt-6 border-t border-white/10">
                  {[0,1,2].map((dot) => (
                    <button 
                      key={dot}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        dot === 0 ? 'bg-amber-400 w-6' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview - Enhanced Magazine Style */}
      <section className="py-32 bg-gradient-to-b from-white to-amber-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4 block">
              Safari Journal
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-safari-green mb-6">
              Stories from the Wild
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips, traveler stories, and a window into the wild
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Featured Post - Takes 2 columns on large screens */}
            {blogPosts.slice(0, 1).map((post) => (
              <motion.div
                key={post.id}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="lg:col-span-2 group relative overflow-hidden rounded-3xl shadow-2xl h-[500px]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-200 text-lg mb-6 line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-white/80">{post.date}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/80">5 min read</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group/link"
                    >
                      Read Feature
                      <FaArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Other Posts */}
            {blogPosts.slice(1, 5).map((post) => (
              <motion.div
                key={post.id}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-safari-green mb-4 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-safari-green hover:text-amber-600 font-semibold group/link"
                  >
                    Continue Reading
                    <FaArrowRight className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/blog"
              className="group inline-flex items-center bg-gradient-to-r from-safari-green to-safari-brown hover:from-safari-brown hover:to-safari-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Explore All Stories
              <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80" 
            alt="Safari sunset"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/95 to-amber-700/95 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 mb-8"
            >
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
              <span className="font-semibold tracking-wider">LIMITED SPOTS AVAILABLE</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Ready for the 
              <span className="text-amber-300 block mt-2">Adventure of a Lifetime?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-3xl mx-auto">
              Your journey into the wild begins with a single step. 
              Let our experts craft your perfect Ugandan safari.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/book-now"
                className="group relative bg-white text-amber-700 hover:bg-amber-50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform duration-300" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-100 to-white"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
              
              <a
                href="tel:0758434429"
                className="group backdrop-blur-md bg-transparent hover:bg-white/10 border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <FaCompass className="mr-3 group-hover:rotate-45 transition-transform duration-300" />
                Speak to an Expert
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <FaShieldAlt className="text-amber-300 text-xl" />
                <span className="text-white/80 text-sm">Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-amber-300 text-xl" />
                <span className="text-white/80 text-sm">Expert Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="text-amber-300 text-xl" />
                <span className="text-white/80 text-sm">Best Price Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-amber-300 text-xl" />
                <span className="text-white/80 text-sm">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;