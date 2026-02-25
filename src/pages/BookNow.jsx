import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaPhone } from 'react-icons/fa';
import { tours } from '../data/toursData';

const BookNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tourSelection: '',
    numberOfPeople: '1',
    preferredDate: '',
    travelDuration: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    // Prepare email data
    const templateParams = {
      tour_name: formData.tourSelection || 'General Inquiry',
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      number_of_people: formData.numberOfPeople,
      preferred_date: formData.preferredDate,
      travel_duration: formData.travelDuration || 'Not specified',
      budget: formData.budget || 'Not specified',
      message: formData.message || 'No additional message',
    };

    // Send email using EmailJS
    emailjs.send(
      'service_un0mlzf',
      'template_5ras0oc',
      templateParams,
      'G8iTh1zVXOcmAHhnz'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you for your booking request! Our team will contact you within 24 hours to confirm your safari details.',
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        tourSelection: '',
        numberOfPeople: '1',
        preferredDate: '',
        travelDuration: '',
        budget: '',
        message: '',
      });

      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 7000);

    }, (error) => {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please call us at 0758 434 429',
      });
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-safari-green text-white py-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Book Your <span className="text-safari-sand">Safari</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Start planning your unforgettable African adventure today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold font-heading text-safari-green mb-6">
                Safari Booking Form
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our safari experts will create a personalized itinerary for you.
              </p>

              {/* Success Message */}
              {status.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start"
                >
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-green-700">{status.message}</p>
                </motion.div>
              )}

              {/* Error Message */}
              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start"
                >
                  <FaExclamationCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-red-700">{status.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-safari-green/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-safari-green mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                        placeholder="Angel Kisakye"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                          placeholder="angel@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                          placeholder="+256 758 434 429"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safari Details */}
                <div className="bg-safari-green/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-safari-green mb-4">Safari Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Tour Selection <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="tourSelection"
                        value={formData.tourSelection}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                      >
                        <option value="">Select a tour (or choose Custom)</option>
                        {tours.map(tour => (
                          <option key={tour.id} value={tour.title}>{tour.title}</option>
                        ))}
                        <option value="Custom Safari">Custom Safari Package</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Number of People <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="numberOfPeople"
                          value={formData.numberOfPeople}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                          ))}
                          <option value="10+">10+ People</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Preferred Start Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Travel Duration
                        </label>
                        <select
                          name="travelDuration"
                          value={formData.travelDuration}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                        >
                          <option value="">Select duration</option>
                          <option value="1-3 days">1-3 days</option>
                          <option value="4-7 days">4-7 days</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="2+ weeks">2+ weeks</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Budget (per person)
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                        >
                          <option value="">Select budget range</option>
                          <option value="Under $500">Under $500</option>
                          <option value="$500 - $1000">$500 - $1,000</option>
                          <option value="$1000 - $2000">$1,000 - $2,000</option>
                          <option value="$2000+">$2,000+</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Requests or Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all resize-none"
                    placeholder="Tell us about special interests, dietary requirements, accessibility needs, or any questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    status.submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-safari-sand hover:bg-safari-brown text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {status.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Submit Booking Request</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 p-6 bg-safari-green/5 rounded-lg border-l-4 border-safari-sand">
                <h4 className="font-bold text-safari-green mb-2">What happens next?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ We'll review your request within 24 hours</li>
                  <li>✓ Our team will contact you to discuss details</li>
                  <li>✓ We'll create a customized itinerary for you</li>
                  <li>✓ Once approved, we'll send booking confirmation</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Alternative */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-safari-green text-white rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold font-heading mb-4">
                Prefer to Talk to Us Directly?
              </h3>
              <p className="text-gray-200 mb-6">
                Our safari experts are available to answer your questions and help plan your perfect adventure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0758434429"
                  className="inline-flex items-center justify-center bg-safari-sand hover:bg-white hover:text-safari-green text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhone className="mr-2" />
                  Call: 0758 434 429
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-safari-green text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Contact Page
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;