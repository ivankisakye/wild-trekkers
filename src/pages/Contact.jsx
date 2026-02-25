import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });





    emailjs.send(
      'service_un0mlzf',
      'template_6x9hmgd',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      'G8iTh1zVXOcmAHhnz'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you for contacting us! We will get back to you within 24 hours.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 5000);

    }, (error) => {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please try calling us at 0758 434 429',
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
              Get in <span className="text-safari-sand">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Have questions about our safaris? We're here to help plan your perfect adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-safari-sand/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-3xl text-safari-sand" />
              </div>
              <h3 className="text-xl font-bold font-heading text-safari-green mb-3">Call Us</h3>
              <a
                href="tel:0758434429"
                className="text-lg text-gray-700 hover:text-safari-sand transition-colors font-semibold"
              >
                +256 758 434 429
              </a>
              <p className="text-gray-500 mt-2 text-sm">Mon - Sat: 8AM - 6PM</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-safari-sand/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-3xl text-safari-sand" />
              </div>
              <h3 className="text-xl font-bold font-heading text-safari-green mb-3">Email Us</h3>
              <a
                href="mailto:adventurestonatureandbeyond@gmail.com"
                className="text-lg text-gray-700 hover:text-safari-sand transition-colors break-all"
              >
                info@wildtrekkersafaris.com
              </a>
              <p className="text-gray-500 mt-2 text-sm">We reply within 24 hours</p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-safari-sand/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-3xl text-safari-sand" />
              </div>
              <h3 className="text-xl font-bold font-heading text-safari-green mb-3">Visit Us</h3>
              <p className="text-lg text-gray-700">Kampala, Uganda</p>
              <p className="text-gray-500 mt-2 text-sm">East Africa</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold font-heading text-safari-green mb-6 text-center">
              Send Us a Message
            </h2>

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
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                  placeholder="Mark Suubi"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="marks@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                    placeholder="+256 758 434 429"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all"
                  placeholder="Safari Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-sand transition-all resize-none"
                  placeholder="Tell us about your safari plans..."
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
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold font-heading text-safari-green mb-8 text-center">
              Quick Answers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-lg font-bold text-safari-green mb-2">
                  How do I book a safari?
                </h3>
                <p className="text-gray-700">
                  You can book directly through our website, call us, or send an email. We'll confirm availability and send you a detailed itinerary.
                </p>
              </div>
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-lg font-bold text-safari-green mb-2">
                  What's the best time to visit?
                </h3>
                <p className="text-gray-700">
                  Uganda is great year-round! Dry seasons (June-September, December-February) are ideal for wildlife viewing and gorilla trekking.
                </p>
              </div>
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-lg font-bold text-safari-green mb-2">
                  Do you offer custom safaris?
                </h3>
                <p className="text-gray-700">
                  Absolutely! We specialize in creating personalized itineraries based on your interests, budget, and time frame.
                </p>
              </div>
              <div className="bg-safari-green/5 p-6 rounded-lg border-l-4 border-safari-sand">
                <h3 className="text-lg font-bold text-safari-green mb-2">
                  What's included in the price?
                </h3>
                <p className="text-gray-700">
                  Our packages typically include accommodation, meals, transport, park fees, and professional guides. Specific inclusions vary by tour.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;