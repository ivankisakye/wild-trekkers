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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
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

            {/* Dynamic Itinerary Routes */}
            <Route
              path="/gorilla-tours/:slug"
              element={<ItineraryDetails />}
            />

            <Route
              path="/wildlife-safaris/:slug"
              element={<ItineraryDetails />}
            />

            <Route
              path="/destinations/:slug"
              element={<ItineraryDetails />}
            />

            <Route
              path="/experiences/:slug"
              element={<ItineraryDetails />}
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