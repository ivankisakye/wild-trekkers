import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaLeaf,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-safari-green via-safari-sand to-amber-500" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section - Takes 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">



                    <img
                      src="/logo3.png"
                      alt="Wild Trekker Logo"
                      className="w-60 h-10 object-contain"
                    />



              {/*<div className="w-10 h-10 bg-gradient-to-br from-safari-sand to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <FaLeaf className="text-white text-xl" />
              </div>
              */} 


              
            </div>
            
            <p className="text-slate-300 leading-relaxed text-sm max-w-sm">
              Crafting extraordinary safari experiences in the Pearl of Africa. 
              Where luxury meets wilderness, and every journey supports conservation.
            </p>

            {/* Social Icons with Enhanced Hover */}
            <div className="flex space-x-3">
              {[
                { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                { icon: FaWhatsapp, href: "https://wa.me/256758434429", label: "WhatsApp" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-safari-sand hover:shadow-lg hover:shadow-safari-sand/25"
                >
                  <social.icon className="text-slate-400 group-hover:text-white text-lg transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-safari-sand to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-safari-sand mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/tours", label: "Safari Tours" },
                { to: "/destinations", label: "Destinations" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Travel Blog" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-safari-sand mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-safari-sand mb-6">
              Adventures
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/tour/3", label: "Gorilla Trekking", tag: "Popular" },
                { to: "/tour/1", label: "Murchison Falls", tag: null },
                { to: "/tour/2", label: "Queen Elizabeth", tag: null },
                { to: "/tour/4", label: "Kidepo Valley", tag: "New" },
                { to: "/tour/5", label: "Jinja Rafting", tag: null }
              ].map((tour, index) => (
                <li key={index}>
                  <Link 
                    to={tour.to} 
                    className="group flex items-center justify-between text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 group-hover:bg-safari-sand transition-colors" />
                      {tour.label}
                    </span>
                    {tour.tag && (
                      <span className="text-[10px] px-2 py-0.5 bg-safari-sand/20 text-safari-sand rounded-full border border-safari-sand/30">
                        {tour.tag}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-safari-sand mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+256758434429" 
                  className="group flex items-start space-x-3 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-safari-sand/20 transition-colors">
                    <FaPhone className="text-safari-sand text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Call Us</p>
                    <p className="text-sm font-medium">+256 758 434 429</p>
                  </div>
                </a>
              </li>
              
              <li>
                <a 
                  href="mailto:info@wildtrekkersafaris.com" 
                  className="group flex items-start space-x-3 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-safari-sand/20 transition-colors">
                    <FaEnvelope className="text-safari-sand text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm font-medium">info@wildtrekkersafaris.com</p>
                  </div>
                </a>
              </li>
              
              <li className="flex items-start space-x-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-safari-sand text-sm" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm font-medium">Kampala, Uganda</p>
                  <p className="text-xs text-slate-500 mt-1">East Africa</p>
                </div>
              </li>
            </ul>

            {/* Newsletter Mini-Form */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-400 mb-3">Subscribe for safari updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-l-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-safari-sand transition-colors"
                />
                <button className="bg-safari-sand hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs text-center md:text-left">
              © {currentYear} WildTrekker Safaris. All rights reserved. 
              <span className="hidden md:inline mx-2">|</span>
              <br className="md:hidden" />
              <Link to="/privacy" className="hover:text-safari-sand transition-colors ml-1">Privacy</Link>
              <span className="mx-2">·</span>
              <Link to="/terms" className="hover:text-safari-sand transition-colors">Terms</Link>
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-slate-600 text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Accepting Bookings
              </span>
              
              <button 
                onClick={scrollToTop}
                className="group w-10 h-10 bg-slate-800 hover:bg-safari-sand rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-safari-sand/25"
                aria-label="Back to top"
              >
                <FaArrowUp className="text-slate-400 group-hover:text-white text-sm transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;