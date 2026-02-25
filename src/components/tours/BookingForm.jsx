import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const BookingForm = ({ tourTitle, tourPrice }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfPeople: '1',
    preferredDate: '',
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
      tour_name: tourTitle,
      tour_price: tourPrice,
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      number_of_people: formData.numberOfPeople,
      preferred_date: formData.preferredDate,
      message: formData.message || 'No additional message provided',
    };

    // Send email using EmailJS
    emailjs.send(
      'service_un0mlzf',  // Your Service ID
      'template_5ras0oc', // Your Booking Template ID
      templateParams,
      'G8iTh1zVXOcmAHhnz' // Your Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Your booking request has been sent successfully! We will contact you soon.',
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        numberOfPeople: '1',
        preferredDate: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 5000);

    }, (error) => {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or call us at 0758 434 429',
      });
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h3 className="text-3xl font-bold font-heading text-safari-green mb-6">
        Book This Tour
      </h3>

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

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
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
            placeholder="Kimani Agnes"
          />
        </div>

        {/* Email */}
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
            placeholder="kimani@example.com"
          />
        </div>

        {/* Phone */}
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

        {/* Number of People */}
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

        {/* Preferred Date */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preferred Date <span className="text-red-500">*</span>
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

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Additional Message (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all resize-none"
            placeholder="Any special requests or questions?"
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
              <span>Sending...</span>
            </>
          ) : (
            <>
              <FaPaperPlane />
              <span>Submit Booking Request</span>
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-6 p-4 bg-safari-green/5 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          📞 Or call us directly at{' '}
          <a href="tel:0758434429" className="text-safari-sand font-semibold hover:underline">
            0758 434 429
          </a>
        </p>
      </div>
    </div>
  );
};

export default BookingForm;