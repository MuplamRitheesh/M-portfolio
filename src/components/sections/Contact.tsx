import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionTitle from '../ui/SectionTitle';
import { contactData, socialLinks } from '../../data/portfolio';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Note: Replace with your actual EmailJS credentials
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_PUBLIC_KEY'
      // );

      // Simulating form submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's connect and build something amazing together"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm currently available for internship opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>

           {/* Contact Details */}
<div className="space-y-4">

  {/* Email */}
  <motion.a
    href={`mailto:${contactData.email}`}
    className="flex items-center gap-4 bg-white/10 dark:bg-white/5 p-4 rounded-xl
              border border-white/20 hover:border-primary-500/50 transition-colors"
    whileHover={{ x: 5 }}
  >
    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500
                  flex items-center justify-center">
      <FaEnvelope className="w-5 h-5 text-white" />
    </div>
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
      <p className="text-gray-900 dark:text-white font-medium">
        {contactData.email}
      </p>
    </div>
  </motion.a>

  {/* Location */}
  <motion.a
  href={contactData.locationUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 bg-white/10 dark:bg-white/5 p-4 rounded-xl
             border border-white/20 hover:border-primary-500/50 transition-colors"
  whileHover={{ x: 5 }}
>
  <div
    className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500
               flex items-center justify-center"
  >
    <FaMapMarkerAlt className="w-5 h-5 text-white" />
  </div>

  <div>
    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
    <p className="text-gray-900 dark:text-white font-medium">
      {contactData.location}
    </p>
  </div>
</motion.a>

  {/* Phone */}
  <motion.a
    href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
    className="flex items-center gap-4 bg-white/10 dark:bg-white/5 p-4 rounded-xl
              border border-white/20 hover:border-primary-500/50 transition-colors"
    whileHover={{ x: 5 }}
  >
    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500
                  flex items-center justify-center">
      <FaPhone className="w-5 h-5 text-white" />
    </div>
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
      <p className="text-gray-900 dark:text-white font-medium">
        {contactData.phone}
      </p>
    </div>
  </motion.a>

</div>

            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30
                        rounded-full text-green-500 dark:text-green-400"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(34, 197, 94, 0)',
                  '0 0 15px rgba(34, 197, 94, 0.3)',
                  '0 0 0px rgba(34, 197, 94, 0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {contactData.availability}
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                           bg-white/10 dark:bg-white/5 border border-white/20
                           text-gray-600 dark:text-gray-400 hover:text-white
                           hover:bg-black/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ ['--hover-bg' as string]: social.color }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8
                      border border-white/20"
          >
            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaUser className="inline-block mr-2 w-4 h-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    } rounded-xl text-gray-900 dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-primary-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaEnvelope className="inline-block mr-2 w-4 h-4" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    } rounded-xl text-gray-900 dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-primary-500 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaPaperPlane className="inline-block mr-2 w-4 h-4" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    } rounded-xl text-gray-900 dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:border-primary-500 transition-colors resize-none`}
                    placeholder="Hi, I'd like to talk about..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <p className="text-center text-sm text-red-500">{errors.submit}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500
                           text-white font-medium rounded-xl shadow-lg
                           hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
