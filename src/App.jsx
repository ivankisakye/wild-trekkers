import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';
import ItineraryDetails from './pages/ItineraryDetails';
import WildlifeSafariDetails from './pages/WildlifeSafariDetails';
import ExperienceDetails from './pages/ExperienceDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tour/:id" element={<TourDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-now" element={<BookNow />} />

            {/* Gorilla Trekking Tours Routes */}
            <Route
              path="/gorilla-tours/:slug"
              element={<ItineraryDetails />}
            />

            {/* Wildlife Safaris Routes */}
            <Route
              path="/wildlife-safaris/:slug"
              element={<WildlifeSafariDetails />}
            />

            {/* Experiences Routes */}
            <Route
              path="/experiences/:slug"
              element={<ExperienceDetails />}
            />

            {/* Destination Routes */}
            <Route
              path="/destinations/:slug"
              element={<ItineraryDetails />}
            />

            {/* 404 Catch-all Route - Optional */}
            <Route
              path="*"
              element={
                <div className="pt-32 min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition inline-block">
                      Return Home
                    </a>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;