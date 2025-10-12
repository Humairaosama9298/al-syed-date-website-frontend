"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  country: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    country: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" , country: ""});
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container bg-bg max-w-7xl mx-auto py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-10" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-normal mb-4 text-center font-serif text-primary">
              Get in Touch
            </h2>
            <p className="text-dark/70 text-center">
              Ready to experience the finest Pakistani dates? Contact us for
              export inquiries and partnerships.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <div className="text-xl mb-6 text-primary">
              <h2>Contact Information</h2>
            </div>
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-dark">Email</h3>
                <a
                  href="mailto:your.email@example.com"
                  className="text-primary hover:text-secondary"
                >
                  your.email@example.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-dark">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:text-secondary"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-dark">Location</h3>
                <p className="text-primary hover:text-primary">
                  Karachi Sindh, Pakistan.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <div className="text-xl mb-6 text-primary space-y-6">
            <h2>Visit Our Website</h2>
            <a
              className="text-bg text-[1rem] inline-block bg-primary px-6 py-3 rounded-lg hover:bg-primary/90"
              href="www.alsyedbrother.com"
            >
              www.alsyedbrother.com
            </a>
          </div>
          <div className="text-xl space-y-8 text-primary">
            <h2>Follow Us</h2>
            <div className="flex text-dark space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-2xl shadow-amber-950 "
          {...slideInRight}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-dark/90 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md  dark:border-gray-700 bg-secondary/20 dark:bg-dark focus:ring-2 outline-none focus:ring-secondary/80 focus:border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-dark/90 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md  dark:border-gray-700 bg-secondary/20 dark:text-white dark:bg-dark focus:ring-2 outline-none focus:ring-secondary/80 focus:border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
  <label
    htmlFor="country"
    className="block text-dark/90 text-sm font-medium mb-2"
  >
    Country
  </label>
  <input
    type="text"
    id="country"
    name="country"
    placeholder="Your country"
    value={formData.country}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 rounded-md dark:border-gray-700 bg-secondary/20 dark:text-white dark:bg-dark focus:ring-2 outline-none focus:ring-secondary/80 focus:border-transparent"
  />
</motion.div>


            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-dark/90 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your inquiry"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md  dark:border-gray-700 bg-secondary/20 dark:text-white dark:bg-dark focus:ring-2 outline-none focus:ring-secondary/80 focus:border-transparent"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="text-green-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
