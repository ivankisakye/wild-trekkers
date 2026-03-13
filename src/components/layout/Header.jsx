import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaChevronDown, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    
    { 
      name: 'Gorilla Tours', 
      path: '/',
      hasDropdown: true
    },
    { 
      name: 'Wildlife Safaris', 
      path: '/',
      hasDropdown: true
    },
    { 
      name: 'Destinations', 
      path: '/destinations',
      hasDropdown: true
    },
    { 
      name: 'Experiences', 
      path: '/',
      hasDropdown: true
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDark = !isHomePage || isScrolled;

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
      } ${isHomePage ? 'bg-safari-dark/90' : 'bg-safari-green'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between text-white/90 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0758434429" className="flex items-center gap-2 hover:text-safari-sand transition-colors">
              <FaPhone className="text-xs" />
              <span>0758 434 429</span>
            </a>
            <a href="mailto:info@wildtrekkersafaris.com" className="hidden sm:flex items-center gap-2 hover:text-safari-sand transition-colors">
              <FaEnvelope className="text-xs" />
              <span>info@wildtrekker.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span>Follow us:</span>
            <div className="flex gap-3">
              <span className="hover:text-safari-sand cursor-pointer transition-colors">FB</span>
              <span className="hover:text-safari-sand cursor-pointer transition-colors">IG</span>
              <span className="hover:text-safari-sand cursor-pointer transition-colors">TW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isDark ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <Link to="/" className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                {/* Logo Icon */}


                    <img
                      src="/logo3.png"
                      alt="Wild Trekker Logo"
                      className="w-60 h-10 object-contain"
                    />



                {/*<div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isDark ? 'bg-safari-green' : 'bg-safari-sand'
                }`}>
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                    */}


                
              </motion.div>
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-1 bg-gray-100/50 rounded-full px-2 py-1">
                {navLinks.map((link) => (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1 ${
                        location.pathname === link.path
                          ? 'bg-safari-green text-white shadow-md'
                          : isDark
                          ? 'text-safari-dark hover:bg-white hover:shadow-sm'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>
                    

                      {/* Dropdown */}
                        <AnimatePresence>
                          {link.hasDropdown && activeDropdown === link.name && link.name === "Gorilla Tours" && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-1/2 -translate-x-1/2 mt-3 w-[900px] bg-white shadow-2xl rounded-2xl border border-gray-100 p-6"
                            >
                              <div className="grid grid-cols-4 gap-8">

                                {/* Column 1 */}
                                <div>
                                  <h4 className="font-semibold text-safari-green mb-3">
                                    Gorilla Trekking Offers
                                  </h4>

                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="#">2 Days Rwanda Gorilla Safari</Link></li>
                                    <li><Link to="#">2 Days Budget Gorilla from Kigali</Link></li>
                                    <li><Link to="#">3 Days Bwindi Gorilla Trekking</Link></li>
                                    <li><Link to="#">3 Days Gorilla Habituation Safari</Link></li>
                                    <li><Link to="#">3 Days Mgahinga Gorilla Trek Safari</Link></li>
                                    <li><Link to="#">3 Days Bwindi Gorilla Trekking Safari</Link></li>
                                    <li><Link to="#">3 Days Bwindi Gorillas Trek Uganda</Link></li>
                                    <li><Link to="#">3 Days Off-Season Gorilla Trekking</Link></li>
                                    <li><Link to="#">3 Days Rwanda Gorilla Tour</Link></li>
                                    <li><Link to="#">4 Days Gorilla & Sabinyo Volcano Hike</Link></li>
                                    <li><Link to="#">4 Days Magahinga & Golden Monkey</Link></li>
                                  </ul>
                                </div>

                                {/* Column 2 */}
                                <div>
                                  <h4 className="font-semibold text-safari-green mb-3">
                                    Luxury Gorilla Tours
                                  </h4>

                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="#">5 Days Uganda Gorilla & Chimp Tour</Link></li>
                                    <li><Link to="#">5 Days Gorilla & White Water Rafting</Link></li>
                                    <li><Link to="#">5 Days Uganda Gorilla & Chimp</Link></li>
                                    <li><Link to="#">5 Days Rwanda Primates & Lake Kivu</Link></li>
                                    <li><Link to="#">6 Days Bwindi & Nyiragongo Hike</Link></li>
                                    <li><Link to="#">6 Days Gorilla Uganda from DRC</Link></li>
                                    <li><Link to="#">6 Days Rwanda Gorillas & Volcano</Link></li>
                                    <li><Link to="#">6 Days Uganda Gorilla Set Departure</Link></li>
                                    <li><Link to="#">7 Days Budget Uganda Gorilla Tour</Link></li>
                                    <li><Link to="#">7 Days Gorilla, Lion & Chimp Safari</Link></li>
                                    <li><Link to="#">7 Days Primates & Water Rafting</Link></li>
                                  </ul>
                                </div>

                                {/* Column 3 */}
                                <div>
                                  <h4 className="font-semibold text-safari-green mb-3">
                                    Uganda – Rwanda Combined Tours
                                  </h4>

                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="#">2 Days Rwanda Gorilla Trekking</Link></li>
                                    <li><Link to="#">2 Days Uganda Gorilla via Kigali</Link></li>
                                    <li><Link to="#">3 Days Bwindi via Kigali</Link></li>
                                    <li><Link to="#">3 Days Rwanda Gorilla Trekking</Link></li>
                                    <li><Link to="#">3 Days Budget Gorilla from Kigali</Link></li>
                                    <li><Link to="#">3 Days Uganda Gorilla via Kigali</Link></li>
                                    <li><Link to="#">4 Days Gorilla Trekking from Kigali</Link></li>
                                    <li><Link to="#">5 Days Primates from Kigali</Link></li>
                                    <li><Link to="#">10 Days Rwanda & Uganda Gorilla</Link></li>
                                    <li><Link to="#">15 Days Budget East Africa Tour</Link></li>
                                    <li><Link to="#">18 Days Budget East Africa Tour</Link></li>
                                  </ul>
                                </div>

                                {/* Column 4 */}
                                <div>
                                  <h4 className="font-semibold text-safari-green mb-3">
                                    Fly-In Tours
                                  </h4>

                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li><Link to="#">3 Days Gorilla Safari Fly-In</Link></li>
                                    <li><Link to="#">3 Days Fly Entebbe to Bwindi</Link></li>
                                    <li><Link to="#">3 Days Bwindi Flying Safari</Link></li>
                                    <li><Link to="#">5 Days Fly-In Mgahinga & Lake Bunyonyi</Link></li>
                                    <li><Link to="#">5 Days Gorilla & Chimp Tracking</Link></li>
                                  </ul>
                                </div>

                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>



                  </div>
                ))}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone - Icon Only */}
              <a
                href="tel:0758434429"
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark 
                    ? 'bg-gray-100 text-safari-green hover:bg-safari-green hover:text-white' 
                    : 'bg-white/20 text-white hover:bg-safari-sand'
                }`}
              >
                <FaPhone className="w-4 h-4" />
              </a>

              {/* Book Now Button - Pill Shape */}
              <Link
                to="/book-now"
                className="bg-safari-sand hover:bg-safari-brown text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-safari-sand/30 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Book Now</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isMobileMenuOpen
                  ? 'bg-safari-green text-white'
                  : isDark
                  ? 'text-safari-green hover:bg-safari-green/10'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <div key={link.path} className="border-b border-gray-50 last:border-0">
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === link.name ? null : link.name
                          )
                        }
                        className={`w-full flex items-center justify-between py-4 font-medium ${
                          location.pathname === link.path ? 'text-safari-green' : 'text-safari-dark'
                        }`}
                      >
                        {link.name}
                        <motion.div
                          animate={{ rotate: mobileDropdownOpen === link.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="w-4 h-4 text-safari-sand" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === link.name && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            <Link to={link.path} className="block py-2 text-sm text-gray-600 hover:text-safari-green">
                              All {link.name}
                            </Link>
                            <Link to={`${link.path}/featured`} className="block py-2 text-sm text-gray-600 hover:text-safari-green">
                              Featured {link.name}
                            </Link>
                            <Link to={`${link.path}/popular`} className="block py-2 text-sm text-gray-600 hover:text-safari-green">
                              Popular {link.name}
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block py-4 font-medium ${
                        location.pathname === link.path ? 'text-safari-green' : 'text-safari-dark'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                <a href="tel:0758434429" className="flex items-center gap-3 text-safari-green">
                  <div className="p-2 bg-safari-green/10 rounded-full">
                    <FaPhone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">0758 434 429</span>
                </a>
                <Link
                  to="/book-now"
                  className="block w-full bg-safari-sand hover:bg-safari-brown text-white text-center py-4 rounded-full font-semibold transition-colors"
                >
                  Book Now.
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;