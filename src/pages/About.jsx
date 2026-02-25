import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaUsers, FaHeart, FaLeaf, FaCompass, FaMountain, FaCamera } from 'react-icons/fa';

const About = () => {
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

  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion for Wildlife',
      description: 'We are deeply committed to protecting Uganda\'s incredible wildlife and natural heritage for future generations.',
    },
    {
      icon: <FaUsers />,
      title: 'Personalized Service',
      description: 'Every safari is tailored to your preferences, ensuring a unique and unforgettable experience.',
    },
    {
      icon: <FaAward />,
      title: 'Expert Knowledge',
      description: 'Our experienced guides are passionate about sharing their expertise and love for Uganda\'s wildlife.',
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainable Tourism',
      description: 'We practice responsible tourism that benefits local communities and conservation efforts.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Travelers' },
    { number: '50+', label: 'Safari Tours' },
    { number: '15+', label: 'Destinations' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section - Cinematic with Parallax Feel */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="African Savannah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-safari-green/90" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-safari-sand/30 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rotate-45" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20"
            >
              <FaCompass className="text-safari-sand" />
              <span className="text-white/90 tracking-widest text-sm uppercase">Discover The Wild</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-safari-sand to-amber-400">Wild Trekker</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
              Crafting extraordinary journeys through the heart of Africa's last true wilderness
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex justify-center gap-8 text-white/60"
            >
              <div className="flex flex-col items-center">
                <FaMountain className="text-3xl mb-2 text-safari-sand" />
                <span className="text-sm uppercase tracking-wider">Explore</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex flex-col items-center">
                <FaCamera className="text-3xl mb-2 text-safari-sand" />
                <span className="text-sm uppercase tracking-wider">Capture</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex flex-col items-center">
                <FaHeart className="text-3xl mb-2 text-safari-sand" />
                <span className="text-sm uppercase tracking-wider">Preserve</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-safari-sand rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Our Story - Asymmetric Layout */}
      <section className="py-24 bg-stone-50 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-safari-green/10 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:col-start-1"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-safari-sand/20 rounded-full blur-2xl" />
                <h2 className="text-5xl md:text-6xl font-bold font-heading text-safari-green mb-2 relative">
                  Our Story
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-safari-sand to-amber-600 mb-8" />
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-safari-sand first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                  Wild Trekker Safaris was born from a deep passion for Uganda's incredible wildlife 
                  and a desire to share its wonders with the world. Founded by local wildlife enthusiasts 
                  who grew up exploring Uganda's national parks, we understand the magic of encountering 
                  mountain gorillas in their natural habitat.
                </p>
                <p>
                  What started as a small guiding operation has grown into one of Uganda's most trusted 
                  safari companies. Our success is built on authentic experiences, expert knowledge, and 
                  genuine care for both our guests and the environment.
                </p>
                <p>
                  Today, we specialize in creating personalized safari experiences that go beyond typical 
                  wildlife viewing. We connect travelers with local communities, support conservation 
                  initiatives, and create memories that last a lifetime.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&q=80"
                    alt="Mountain Gorilla"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm uppercase tracking-widest text-safari-sand mb-1">Since 2014</p>
                    <p className="text-2xl font-bold">A Decade of Adventures</p>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-safari-green rounded-full flex items-center justify-center text-white text-xl">
                      <FaAward />
                    </div>
                    <div>
                      <p className="font-bold text-safari-green">Award Winning</p>
                      <p className="text-sm text-gray-500">Best Safari Operator 2023</p>
                    </div>
                  </div>
                </motion.div>
                
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-safari-sand/10 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Dark Cinematic Section */}
      <section className="py-20 bg-safari-green relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="text-center group"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-safari-sand/20 rounded-full blur-xl group-hover:bg-safari-sand/30 transition-all" />
                  <div className="text-6xl md:text-7xl font-bold font-heading text-white mb-2 relative">
                    {stat.number}
                  </div>
                </div>
                <div className="text-lg text-safari-sand uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values - Card Grid with Hover Effects */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-safari-sand uppercase tracking-widest text-sm font-semibold mb-2 block">What Drives Us</span>
            <h2 className="text-5xl md:text-6xl font-bold font-heading text-safari-green mb-6">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-safari-sand mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-safari-sand to-amber-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform opacity-0 group-hover:opacity-100 duration-300" />
                <div className="relative bg-stone-50 p-8 rounded-2xl border border-stone-100 h-full group-hover:translate-y-[-4px] transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="bg-gradient-to-br from-safari-green to-green-800 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-safari-green mb-4 group-hover:text-safari-sand transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Split Layout with Image */}
      <section className="py-24 bg-stone-100 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-safari-green/5 skew-x-12 transform origin-top-right" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                  alt="Safari Experience"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-safari-sand text-white p-8 rounded-2xl shadow-xl max-w-xs">
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-lg">Satisfaction Guarantee on all our curated expeditions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-safari-sand uppercase tracking-widest text-sm font-semibold mb-2 block">Why Travel With Us</span>
              <h2 className="text-5xl font-bold font-heading text-safari-green mb-8 leading-tight">
                The Wild Trekker <br/>Difference
              </h2>
              
              <div className="space-y-6">
                {[
                  'Local expertise with deep knowledge of Uganda\'s wildlife and ecosystems',
                  'Small group sizes for personalized attention and better wildlife viewing',
                  'Experienced, licensed guides passionate about conservation',
                  'Direct support for local communities and conservation projects',
                  'Flexible itineraries tailored to your interests and budget',
                  'Excellent safety record and fully insured operations',
                  '24/7 support before, during, and after your safari',
                  'Transparent pricing with no hidden costs',
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="bg-white p-2 rounded-full shadow-md mr-4 group-hover:bg-safari-sand group-hover:text-white transition-colors duration-300">
                      <FaCheckCircle className="text-safari-sand group-hover:text-white text-xl transition-colors" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conservation - Full Width Cinematic */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&q=80"
            alt="Wildlife Conservation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-safari-green/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8"
            >
              <FaLeaf className="text-6xl text-safari-sand" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
              Guardians of the <span className="text-safari-sand">Wild</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              We believe that tourism should benefit both people and wildlife. That's why a portion of 
              every safari directly supports gorilla conservation, anti-poaching efforts, and community 
              development projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-safari-sand mb-2">$50K+</div>
                <p className="text-white/80">Donated to conservation efforts</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-safari-sand mb-2">12</div>
                <p className="text-white/80">Community projects supported</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-safari-sand mb-2">100%</div>
                <p className="text-white/80">Carbon neutral operations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Elegant Finale */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-heading text-safari-green mb-6 leading-tight">
              Your Adventure <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-safari-sand to-amber-600">
                Awaits
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let us craft an unforgettable journey through Uganda's wild heart. 
              From gorilla encounters to savannah sunsets, your story begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/tours"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-safari-sand font-heading rounded-full hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safari-sand shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>Explore Expeditions</span>
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-safari-green transition-all duration-200 bg-white border-2 border-safari-green font-heading rounded-full hover:bg-safari-green hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safari-green shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Planning
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;