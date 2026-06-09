import { useParams, Link } from "react-router-dom";
import { itineraries } from "../data/itineraries";

const ItineraryDetails = () => {
  const { slug } = useParams();

  const itinerary = itineraries.find(
    (item) => item.slug === slug
  );

  if (!itinerary) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Page Under Maintenance
        </h1>
        <p className="text-gray-600 mb-6">
          The itinerary page is being updated.
        </p>
        <Link
          to="/"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          Home Page
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {itinerary.image && (
            <img
              src={itinerary.image}
              alt={itinerary.title}
              className="w-full h-[450px] object-cover"
            />
          )}

          <div className="p-8">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {itinerary.duration}
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {itinerary.title}
            </h1>

            <p className="text-lg text-gray-600">
              {itinerary.overview}
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Tour Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {itinerary.description}
          </p>
        </div>

        {/* Highlights */}
        {itinerary.highlights && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              Tour Highlights
            </h2>

            <ul className="space-y-3">
              {itinerary.highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Daily Itinerary */}
        {itinerary.itinerary && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Detailed Itinerary
            </h2>

            <div className="space-y-6">
              {itinerary.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="border-l-4 border-green-600 pl-5"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {day.day}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 bg-green-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for this adventure?
          </h2>

          <p className="mb-6 text-green-100">
            Contact our safari experts and start planning your trip today.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Enquire Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ItineraryDetails;