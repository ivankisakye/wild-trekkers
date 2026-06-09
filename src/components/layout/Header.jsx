import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars, FaTimes, FaPhone, FaChevronDown,
  FaEnvelope, FaInstagram, FaFacebookF, FaTwitter,
  FaArrowRight
} from 'react-icons/fa';

// ─── Navigation Data ───────────────────────────────────────────────────────────

const NAV_LINKS = [
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

const DROPDOWN_DATA = {
  'Gorilla Tours': [
    {
      title: 'Gorilla Trekking Offers',
      links: [
        '2 Days Rwanda Gorilla Safari',
        '2 Days Budget Gorilla from Kigali',
        '3 Days Bwindi Gorilla Trekking',
        '3 Days Gorilla Habituation Safari',
        '3 Days Mgahinga Gorilla Trek Safari',
        '3 Days Bwindi Gorilla Trekking Safari',
        '3 Days Bwindi Gorillas Trek Uganda',
        '3 Days Off-Season Gorilla Trekking',
        '3 Days Rwanda Gorilla Tour',
        '4 Days Gorilla & Sabinyo Volcano Hike',
        '4 Days Magahinga & Golden Monkey',
      ],
    },
    {
      title: 'Luxury Gorilla Tours',
      links: [
        '5 Days Uganda Gorilla & Chimp Tour',
        '5 Days Gorilla & White Water Rafting',
        '5 Days Uganda Gorilla & Chimp',
        '5 Days Rwanda Primates & Lake Kivu',
        '6 Days Bwindi & Nyiragongo Hike',
        '6 Days Gorilla Uganda from DRC',
        '6 Days Rwanda Gorillas & Volcano',
        '6 Days Uganda Gorilla Set Departure',
        '7 Days Budget Uganda Gorilla Tour',
        '7 Days Gorilla, Lion & Chimp Safari',
        '7 Days Primates & Water Rafting',
      ],
    },
    {
      title: 'Uganda – Rwanda Combined',
      links: [
        '2 Days Rwanda Gorilla Trekking',
        '2 Days Uganda Gorilla via Kigali',
        '3 Days Bwindi via Kigali',
        '3 Days Rwanda Gorilla Trekking',
        '3 Days Budget Gorilla from Kigali',
        '3 Days Uganda Gorilla via Kigali',
        '4 Days Gorilla Trekking from Kigali',
        '5 Days Primates from Kigali',
        '10 Days Rwanda & Uganda Gorilla',
        '15 Days Budget East Africa Tour',
        '18 Days Budget East Africa Tour',
      ],
    },
    {
      title: 'Fly-In Tours',
      links: [
        '3 Days Gorilla Safari Fly-In',
        '3 Days Fly Entebbe to Bwindi',
        '3 Days Bwindi Flying Safari',
        '5 Days Fly-In Mgahinga & Lake Bunyonyi',
        '5 Days Gorilla & Chimp Tracking',
      ],
    },
  ],
  'Wildlife Safaris': [
    {
      title: 'Classic Wildlife Safaris',
      links: [
        '3 Days Murchison Falls Safari',
        '4 Days Queen Elizabeth Tour',
        '5 Days Big 5 Safari',
        '6 Days Wild Uganda Expedition',
        '7 Days Ultimate Wildlife Safari',
        '8 Days Kidepo Valley Adventure',
      ],
    },
    {
      title: 'Luxury Game Drives',
      links: [
        '4 Days Luxury Kidepo Valley',
        '5 Days Exclusive Safari',
        '6 Days Luxury Mara & Serengeti',
        '7 Days Premium Wildlife Experience',
        '8 Days Safari & Beach',
        '10 Days Grand Safari',
      ],
    },
    {
      title: 'Family Safaris',
      links: [
        '4 Days Family Adventure',
        '5 Days Kid-Friendly Safari',
        '6 Days Educational Safari',
        '7 Days Family & Cultural Tour',
        '8 Days School Group Safari',
        '10 Days Multi-Family Safari',
      ],
    },
    {
      title: 'Photography Safaris',
      links: [
        '5 Days Photography Tour',
        '6 Days Wildlife Photo Safari',
        '7 Days Birding & Game Drive',
        '8 Days Professional Photo Safari',
        '10 Days Masters Photography',
        '12 Days Ultimate Photo Safari',
      ],
    },
  ],
  'Destinations': [
    {
      title: 'Uganda National Parks',
      links: [
        'Bwindi Impenetrable Forest',
        'Queen Elizabeth NP',
        'Murchison Falls NP',
        'Kidepo Valley NP',
        'Mgahinga Gorilla NP',
        'Lake Mburo NP',
        'Kibale Forest NP',
        'Semuliki NP',
      ],
    },
    {
      title: 'Rwanda Parks',
      links: [
        'Volcanoes National Park',
        'Akagera National Park',
        'Nyungwe Forest NP',
        'Lake Kivu',
        'Gishwati-Mukura NP',
        'Kigali City',
      ],
    },
    {
      title: 'Kenya Parks',
      links: [
        'Maasai Mara Reserve',
        'Amboseli National Park',
        'Lake Nakuru NP',
        'Tsavo East & West',
        'Samburu Reserve',
        'Aberdare NP',
        'Mount Kenya',
      ],
    },
    {
      title: 'Tanzania Parks',
      links: [
        'Serengeti National Park',
        'Ngorongoro Crater',
        'Lake Manyara NP',
        'Tarangire NP',
        'Mount Kilimanjaro',
        'Selous Game Reserve',
        'Zanzibar',
      ],
    },
  ],
  'Experiences': [
    {
      title: 'Adventure Activities',
      links: [
        'Mountain Hiking',
        'White Water Rafting',
        'Bungee Jumping',
        'Quad Biking',
        'Zip Lining',
        'Mountain Biking',
        'Rock Climbing',
        'Cave Exploration',
      ],
    },
    {
      title: 'Cultural Encounters',
      links: [
        'Batwa Pygmy Experience',
        'Village Homestays',
        'Cultural Dance Tours',
        'Traditional Cooking Class',
        'Local Market Tours',
        'Museum & Heritage Tours',
        'Art & Craft Workshops',
      ],
    },
    {
      title: 'Birding Safaris',
      links: [
        '5 Day Birding Spectacular',
        '7 Day Shoebill Quest',
        '10 Day Big Birding Safari',
        '3 Day Mabamba Swamp Tour',
        'Birding & Wildlife Combo',
        'Endemic Bird Species Tour',
        'Migratory Bird Watching',
      ],
    },
    {
      title: 'Chimpanzee Tracking',
      links: [
        '1 Day Kibale Chimp Trek',
        '2 Day Kyambura Gorge Walk',
        '3 Day Budongo Forest Safari',
        '4 Day Kalinzu Forest Trek',
        '5 Day Primates Expedition',
        '6 Day Chimp Habituation Experience',
        '7 Day Great Apes Safari',
      ],
    },
  ],
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

const slugify = (str) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '');

// ─── Component ─────────────────────────────────────────────────────────────────

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isDark = !isHomePage || isScrolled;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleMouseEnter = (name) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const handleDropdownEnter = () => {
    clearTimeout(closeTimer.current);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* ── Top bar ──────────────────────────────────────────────────── */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          } ${isHomePage ? 'bg-black/70 backdrop-blur-sm' : 'bg-green-900'}`}
        >
          <div className="max-w-screen-xl mx-auto px-6 h-10 flex items-center justify-between text-white/80 text-xs">
            <div className="flex items-center gap-6">
              <a
                href="tel:0758434429"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <FaPhone className="text-[10px]" />
                <span>0758 434 429</span>
              </a>
              <a
                href="mailto:info@wildtrekkersafaris.com"
                className="hidden sm:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <FaEnvelope className="text-[10px]" />
                <span>info@wildtrekkersafaris.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-white/50">Follow us:</span>
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <button
                  key={i}
                  aria-label="Social link"
                  className="hover:text-amber-300 transition-colors"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main nav bar ─────────────────────────────────────────────── */}
        <div
          className={`transition-all duration-300 ${
            isDark ? 'bg-white shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link to="/" className="flex-shrink-0 z-10">
                <img
                  src="/logo3.png"
                  alt="Wild Trekker Safaris"
                  className="h-9 w-auto object-contain"
                />
              </Link>

              {/* Desktop nav items — these are triggers only */}
              <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
                {NAV_LINKS.map((link) => (
                  <div
                    key={link.path}
                    onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                    onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                  >
                    <Link
                      to={link.path}
                      aria-expanded={link.hasDropdown ? activeDropdown === link.name : undefined}
                      aria-haspopup={link.hasDropdown ? 'true' : undefined}
                      className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                        location.pathname === link.path
                          ? 'bg-green-700 text-white'
                          : isDark
                          ? 'text-gray-700 hover:bg-gray-100 hover:text-green-800'
                          : 'text-white hover:bg-white/15'
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <FaChevronDown
                          className={`w-2.5 h-2.5 transition-transform duration-200 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Right actions */}
              <div className="hidden lg:flex items-center gap-3 z-10">
                <a
                  href="tel:0758434429"
                  aria-label="Call us"
                  className={`p-2.5 rounded-full transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isDark
                      ? 'bg-gray-100 text-green-700 hover:bg-green-700 hover:text-white'
                      : 'bg-white/20 text-white hover:bg-amber-400'
                  }`}
                >
                  <FaPhone className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/book-now"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md hover:shadow-amber-500/30 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  Book Now
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                className={`lg:hidden p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isDark ? 'text-green-800 hover:bg-gray-100' : 'text-white hover:bg-white/15'
                }`}
              >
                {isMobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mega dropdown panel — anchored to navbar, always centered ── */}
        {/*
          KEY ARCHITECTURE:
          The dropdown is NOT a child of the nav item. It is a sibling of the
          entire nav bar, positioned absolutely below the header. Its left/right
          edges are bound to the viewport (or a max-width container), so every
          dropdown appears in the exact same place regardless of which nav item
          triggered it. Only the content inside changes.
        */}
        <AnimatePresence>
          {activeDropdown && DROPDOWN_DATA[activeDropdown] && (
            <motion.div
              key={activeDropdown}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              className="absolute left-0 right-0 pt-2 px-6"
              role="region"
              aria-label={`${activeDropdown} menu`}
            >
              {/* Floating card — constrained width, centered, never touches viewport edges */}
              <div
                className="max-w-screen-xl mx-auto rounded-2xl overflow-hidden bg-white border border-gray-100"
                style={{
                  boxShadow: '0 20px 60px -10px rgba(0,0,0,0.18), 0 8px 24px -6px rgba(0,0,0,0.10)',
                }}
              >
              {/* Accent line */}
              <div className="h-0.5 bg-gradient-to-r from-green-700 via-amber-400 to-green-700" />

              <div className="px-8 py-7">
                <div className="grid grid-cols-4 gap-8">
                  {DROPDOWN_DATA[activeDropdown].map((col, colIdx) => (
                    <div key={colIdx}>
                      {/* Column header */}
                      <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-3 pb-2 border-b border-gray-100">
                        {col.title}
                      </p>
                      {/* Links */}
                      <ul className="space-y-1 max-h-72 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-gray-50">
                        {col.links.map((item, itemIdx) => {
                          const parentPath = NAV_LINKS.find((l) => l.name === activeDropdown)?.path ?? '';
                          return (
                            <li key={itemIdx}>
                              <Link
                                to={`${parentPath}/${slugify(item)}`}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-2 py-1 text-[13px] text-gray-600 hover:text-green-800 hover:translate-x-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:text-green-800"
                              >
                                <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0 opacity-60" />
                                {item}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer row */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to={`${NAV_LINKS.find((l) => l.name === activeDropdown)?.path}/all`}
                    onClick={() => setActiveDropdown(null)}
                    className="text-xs text-green-700 font-semibold hover:underline underline-offset-2 inline-flex items-center gap-1"
                  >
                    View all {activeDropdown}
                    <FaArrowRight className="w-2.5 h-2.5" />
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="text-xs bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full font-medium transition-colors"
                  >
                    Need help? Talk to a safari expert
                  </Link>
                </div>
              </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile menu — slide-down drawer ──────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl overflow-y-auto lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <img src="/logo3.png" alt="Wild Trekker Safaris" className="h-8 w-auto" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 px-4 py-3" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <div key={link.path} className="border-b border-gray-50 last:border-0">
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === link.name ? null : link.name)
                          }
                          aria-expanded={mobileExpanded === link.name}
                          className="w-full flex items-center justify-between py-3.5 text-sm font-medium text-gray-800"
                        >
                          {link.name}
                          <motion.span
                            animate={{ rotate: mobileExpanded === link.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="w-3.5 h-3.5 text-amber-500" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {mobileExpanded === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-3 space-y-5">
                                {DROPDOWN_DATA[link.name].map((col, colIdx) => (
                                  <div key={colIdx}>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2 border-l-2 border-amber-400 pl-2">
                                      {col.title}
                                    </p>
                                    <ul className="space-y-1">
                                      {col.links.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            to={`${link.path}/${slugify(item)}`}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="block py-1.5 text-[13px] text-gray-600 hover:text-green-800 pl-2"
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
                                  onClick={() => setIsMobileOpen(false)}
                                  className="inline-flex items-center gap-1 text-xs text-green-700 font-semibold pl-2 mt-1"
                                >
                                  View all <FaArrowRight className="w-2.5 h-2.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block py-3.5 text-sm font-medium ${
                          location.pathname === link.path
                            ? 'text-green-700'
                            : 'text-gray-800'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-5 py-5 border-t border-gray-100 space-y-3">
                <a
                  href="tel:0758434429"
                  className="flex items-center gap-3 text-green-700 text-sm font-medium"
                >
                  <span className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                    <FaPhone className="w-3.5 h-3.5" />
                  </span>
                  0758 434 429
                </a>
                <Link
                  to="/book-now"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-full text-sm font-semibold transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Custom scrollbar for dropdown columns */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: #f9fafb; border-radius: 9999px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #fbbf24; border-radius: 9999px; }
      `}</style>
    </>
  );
};

export default Header;