import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaChevronDown, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

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
    { name: 'Gorilla Tours', path: '/gorilla-tours', hasDropdown: true },
    { name: 'Wildlife Safaris', path: '/wildlife-safaris', hasDropdown: true },
    { name: 'Destinations', path: '/destinations', hasDropdown: true },
    { name: 'Experiences', path: '/experiences', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Exact content for Gorilla Tours as requested
  const gorillaToursContent = {
    columns: [
      {
        title: "Gorilla Trekking Offers",
        links: [
          "2 Days Rwanda Gorilla Safari",
          "2 Days Budget Gorilla from Kigali",
          "3 Days Bwindi Gorilla Trekking",
          "3 Days Gorilla Habituation Safari",
          "3 Days Mgahinga Gorilla Trek Safari",
          "3 Days Bwindi Gorilla Trekking Safari",
          "3 Days Bwindi Gorillas Trek Uganda",
          "3 Days Off-Season Gorilla Trekking",
          "3 Days Rwanda Gorilla Tour",
          "4 Days Gorilla & Sabinyo Volcano Hike",
          "4 Days Magahinga & Golden Monkey"
        ]
      },
      {
        title: "Luxury Gorilla Tours",
        links: [
          "5 Days Uganda Gorilla & Chimp Tour",
          "5 Days Gorilla & White Water Rafting",
          "5 Days Uganda Gorilla & Chimp",
          "5 Days Rwanda Primates & Lake Kivu",
          "6 Days Bwindi & Nyiragongo Hike",
          "6 Days Gorilla Uganda from DRC",
          "6 Days Rwanda Gorillas & Volcano",
          "6 Days Uganda Gorilla Set Departure",
          "7 Days Budget Uganda Gorilla Tour",
          "7 Days Gorilla, Lion & Chimp Safari",
          "7 Days Primates & Water Rafting"
        ]
      },
      {
        title: "Uganda – Rwanda Combined Tours",
        links: [
          "2 Days Rwanda Gorilla Trekking",
          "2 Days Uganda Gorilla via Kigali",
          "3 Days Bwindi via Kigali",
          "3 Days Rwanda Gorilla Trekking",
          "3 Days Budget Gorilla from Kigali",
          "3 Days Uganda Gorilla via Kigali",
          "4 Days Gorilla Trekking from Kigali",
          "5 Days Primates from Kigali",
          "10 Days Rwanda & Uganda Gorilla",
          "15 Days Budget East Africa Tour",
          "18 Days Budget East Africa Tour"
        ]
      },
      {
        title: "Fly-In Tours",
        links: [
          "3 Days Gorilla Safari Fly-In",
          "3 Days Fly Entebbe to Bwindi",
          "3 Days Bwindi Flying Safari",
          "5 Days Fly-In Mgahinga & Lake Bunyonyi",
          "5 Days Gorilla & Chimp Tracking"
        ]
      }
    ]
  };

  // Wildlife Safaris content (placeholder - you can edit later)
  const wildlifeSafarisContent = {
    columns: [
      {
        title: "Classic Wildlife Safaris",
        links: ["3 Days Murchison Falls Safari", "4 Days Queen Elizabeth Tour", "5 Days Big 5 Safari", "6 Days Wild Uganda Expedition", "7 Days Ultimate Wildlife Safari", "8 Days Kidepo Valley Adventure"]
      },
      {
        title: "Luxury Game Drives",
        links: ["4 Days Luxury Kidepo Valley", "5 Days Exclusive Safari", "6 Days Luxury Mara & Serengeti", "7 Days Premium Wildlife Experience", "8 Days Safari & Beach", "10 Days Grand Safari"]
      },
      {
        title: "Family Safaris",
        links: ["4 Days Family Adventure", "5 Days Kid-Friendly Safari", "6 Days Educational Safari", "7 Days Family & Cultural Tour", "8 Days School Group Safari", "10 Days Multi-Family Safari"]
      },
      {
        title: "Photography Safaris",
        links: ["5 Days Photography Tour", "6 Days Wildlife Photo Safari", "7 Days Birding & Game Drive", "8 Days Professional Photo Safari", "10 Days Masters Photography", "12 Days Ultimate Photo Safari"]
      }
    ]
  };

  // Destinations content (placeholder - you can edit later)
  const destinationsContent = {
    columns: [
      {
        title: "Uganda National Parks",
        links: ["Bwindi Impenetrable Forest", "Queen Elizabeth NP", "Murchison Falls NP", "Kidepo Valley NP", "Mgahinga Gorilla NP", "Lake Mburo NP", "Kibale Forest NP", "Semuliki NP"]
      },
      {
        title: "Rwanda Parks",
        links: ["Volcanoes National Park", "Akagera National Park", "Nyungwe Forest NP", "Lake Kivu", "Gishwati-Mukura NP", "Kigali City"]
      },
      {
        title: "Kenya Parks",
        links: ["Maasai Mara Reserve", "Amboseli National Park", "Lake Nakuru NP", "Tsavo East & West", "Samburu Reserve", "Aberdare NP", "Mount Kenya"]
      },
      {
        title: "Tanzania Parks",
        links: ["Serengeti National Park", "Ngorongoro Crater", "Lake Manyara NP", "Tarangire NP", "Mount Kilimanjaro", "Selous Game Reserve", "Zanzibar"]
      }
    ]
  };

  // Experiences content (placeholder - you can edit later)
  const experiencesContent = {
    columns: [
      {
        title: "Adventure Activities",
        links: ["Mountain Hiking", "White Water Rafting", "Bungee Jumping", "Quad Biking", "Zip Lining", "Mountain Biking", "Rock Climbing", "Cave Exploration"]
      },
      {
        title: "Cultural Encounters",
        links: ["Batwa Pygmy Experience", "Village Homestays", "Cultural Dance Tours", "Traditional Cooking Class", "Local Market Tours", "Museum & Heritage Tours", "Art & Craft Workshops"]
      },
      {
        title: "Birding Safaris",
        links: ["5 Day Birding Spectacular", "7 Day Shoebill Quest", "10 Day Big Birding Safari", "3 Day Mabamba Swamp Tour", "Birding & Wildlife Combo", "Endemic Bird Species Tour", "Migratory Bird Watching"]
      },
      {
        title: "Chimpanzee Tracking",
        links: ["1 Day Kibale Chimp Trek", "2 Day Kyambura Gorge Walk", "3 Day Budongo Forest Safari", "4 Day Kalinzu Forest Trek", "5 Day Primates Expedition", "6 Day Chimp Habituation Experience", "7 Day Great Apes Safari"]
      }
    ]
  };

  const getDropdownContent = (menuName) => {
    switch(menuName) {
      case 'Gorilla Tours':
        return gorillaToursContent;
      case 'Wildlife Safaris':
        return wildlifeSafarisContent;
      case 'Destinations':
        return destinationsContent;
      case 'Experiences':
        return experiencesContent;
      default:
        return {
          columns: [
            { title: "Featured", links: [`Popular ${menuName}`, `Luxury ${menuName}`, `Budget ${menuName}`, `${menuName} Deals`] },
            { title: "Destinations", links: [`${menuName} in Uganda`, `${menuName} in Rwanda`, `${menuName} in Kenya`, `${menuName} in Tanzania`] },
            { title: "Duration", links: ["3 Days Safari", "5 Days Adventure", "7 Days Expedition", "10 Days Journey"] },
            { title: "Special Offers", links: ["Early Bird Discount", "Group Safari Deals", "Honeymoon Special", "Family Package"] }
          ]
        };
    }
  };

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
              <FaFacebookF className="hover:text-safari-sand cursor-pointer transition-colors text-xs" />
              <FaInstagram className="hover:text-safari-sand cursor-pointer transition-colors text-xs" />
              <FaTwitter className="hover:text-safari-sand cursor-pointer transition-colors text-xs" />
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
                <img src="/logo3.png" alt="Wild Trekker Logo" className="w-48 h-9 object-contain" />
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

                    {/* Dropdown - Wide, thin, with contour/globe line design */}
                    <AnimatePresence>
                      {link.hasDropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-3 w-[1100px] max-w-[90vw] bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/30 overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,248,235,0.98) 100%)',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8)'
                          }}
                        >
                          {/* Decorative globe/contour line top */}
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-safari-sand to-transparent" />
                          
                          <div className="p-5">
                            <div className="grid grid-cols-4 gap-5">
                              {getDropdownContent(link.name).columns.map((column, idx) => (
                                <div key={idx} className="relative">
                                  {/* Decorative contour line on left side of each column */}
                                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-safari-sand/30 to-transparent" style={{ left: '-12px' }} />
                                  <h4 className="font-semibold text-safari-green mb-3 text-sm uppercase tracking-wide border-b border-safari-green/20 pb-2 inline-block">
                                    {column.title}
                                  </h4>
                                  <ul className="space-y-1.5 text-sm max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                                    {column.links.map((item, itemIdx) => (
                                      <li key={itemIdx}>
                                        <Link
                                          to={`${link.path}/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                          className="text-gray-700 hover:text-safari-green transition-all duration-200 block py-1 hover:translate-x-1 text-[13px]"
                                        >
                                          {item}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            {/* Bottom CTA with globe contour */}
                            <div className="mt-4 pt-3 border-t border-safari-sand/20 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-safari-sand/10 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-safari-sand" />
                                </div>
                                <Link
                                  to={`${link.path}/all`}
                                  className="text-xs text-safari-green font-medium hover:underline"
                                >
                                  View All {link.name} →
                                </Link>
                              </div>
                              <Link
                                to="/book-now"
                                className="text-xs bg-gradient-to-r from-safari-sand to-safari-brown text-white px-4 py-2 rounded-full hover:shadow-md transition-all"
                              >
                                Need Help? Contact Us
                              </Link>
                            </div>
                          </div>
                          {/* Decorative globe/contour line bottom */}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safari-sand/40 to-transparent" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
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

      {/* Mobile Menu - Responsive with scrollable dropdowns */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <div key={link.path} className="border-b border-gray-50 last:border-0">
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(
                          mobileDropdownOpen === link.name ? null : link.name
                        )}
                        className="w-full flex items-center justify-between py-4 font-medium text-safari-dark"
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
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 space-y-4">
                              {getDropdownContent(link.name).columns.map((column, idx) => (
                                <div key={idx}>
                                  <h4 className="font-semibold text-safari-green text-sm mb-2 border-l-2 border-safari-sand pl-2">
                                    {column.title}
                                  </h4>
                                  <ul className="space-y-1.5">
                                    {column.links.map((item, itemIdx) => (
                                      <li key={itemIdx}>
                                        <Link
                                          to={`${link.path}/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                          className="block py-1.5 text-sm text-gray-600 hover:text-safari-green pl-2"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {item}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              <Link
                                to={`${link.path}/all`}
                                className="block mt-2 text-sm text-safari-green font-medium pl-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                View All {link.name} →
                              </Link>
                            </div>
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
                      onClick={() => setIsMobileMenuOpen(false)}
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
                  className="block w-full bg-gradient-to-r from-safari-sand to-safari-brown text-white text-center py-4 rounded-full font-semibold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom scrollbar styles for webkit browsers */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c7a55b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a08443;
        }
      `}</style>
    </header>
  );
};

export default Header;