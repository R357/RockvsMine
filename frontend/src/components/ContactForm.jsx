import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactForm = ({ formAction }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      toast.error('Please fix the errors in the form');
      return;
    }

    console.log('Contact Form Submission:', formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (formAction) {
      // If formAction is provided, submit to external service
      e.target.submit();
    }

    setSubmitted(true);
    setLoading(false);
    toast.success('Message sent successfully! 🎉');

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 card-shadow h-full"
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="text-2xl mr-2">📧</span>
        Contact Us
      </h3>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 bg-green-50 dark:bg-green-900 dark:bg-opacity-30 border-l-4 border-green-500 p-4 rounded-lg"
        >
          <p className="text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
            <FaCheckCircle className="text-xl" />
            Message sent successfully! We'll get back to you soon.
          </p>
        </motion.div>
      )}

      <form 
        onSubmit={handleSubmit}
        action={formAction || undefined}
        method={formAction ? 'POST' : undefined}
        className="space-y-4"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition dark:bg-dark-bg dark:text-gray-300 dark:border-dark-border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1"
            >
              <span>⚠️</span> {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition dark:bg-dark-bg dark:text-gray-300 dark:border-dark-border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1"
            >
              <span>⚠️</span> {errors.email}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none dark:bg-dark-bg dark:text-gray-300 dark:border-dark-border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your message..."
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1"
              >
                <span>⚠️</span> {errors.message}
              </motion.p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
              {formData.message.length} characters
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-300 hover:to-blue-700 shadow-lg'
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane /> Send Message
            </>
          )}
        </motion.button>
      </form>

      {/* Contact Info */}
      
    </motion.div>
  );
};

export default ContactForm;
