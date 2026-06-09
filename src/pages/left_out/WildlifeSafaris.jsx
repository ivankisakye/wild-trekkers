import { Link } from "react-router-dom";
import { wildlifeSafaris } from "../data/wildlifeSafaris";

const WildlifeSafaris = () => {
  const categories = {
    "Classic Wildlife Safaris": wildlifeSafaris.slice(0, 6),
    "Luxury Game Drives": wildlifeSafaris.slice(6, 12),
    "Family Safaris": wildlifeSafaris.slice(12, 18),
    "Photography Safaris": wildlifeSafaris.slice(18, 24),
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Wildlife Safaris</h1>
        
        {Object.entries(categories).map(([category, safaris]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-green-800 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safaris.map((safari) => (
                <Link key={safari.slug} to={`/wildlife-safaris/${safari.slug}`} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img src={safari.image} alt={safari.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{safari.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{safari.duration}</p>
                    <p className="text-gray-700 line-clamp-2">{safari.overview}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WildlifeSafaris;