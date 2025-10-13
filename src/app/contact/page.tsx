"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

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
    country: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", country: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-bg py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            Ready to experience the finest Pakistani dates? Contact us for
            export inquiries, business collaborations, and partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            {/* 📞 Contact Info */}
            <div>
              <h3 className="text-2xl font-playfair text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <FaEnvelope className="text-primary text-xl" />,
                    title: "Email",
                    value: "info@alsyedbrothers.com",
                    link: "mailto:info@alsyedbrothers.com",
                  },
                  {
                    icon: <FaPhone className="text-primary text-xl" />,
                    title: "Phone",
                    value: "+92 (300) 261-1865",
                    link: "tel:+923002611865",
                  },
                  {
                    icon: <FaWhatsapp className="text-primary text-xl" />,
                    title: "WhatsApp",
                    value: "+92 (300) 261-1865",
                    link: "https://wa.me/923002611865",
                  },
                  {
                    icon: <FaMapMarkerAlt className="text-primary text-xl" />,
                    title: "Location",
                    value:
                      "Office No: 203, 2nd Floor, MR 5/121, Mehran Manzil, Zakaria Lane, Jodia Bazar, Karachi.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-dark/80">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 🌐 Website */}
            <div>
              <h3 className="text-2xl font-playfair text-primary mb-4">
                Visit Our Website
              </h3>
              <a
                href="https://www.alsyedbrother.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                www.alsyedbrother.com
              </a>
            </div>

            {/* 👥 Social Links */}
            <div>
              <h3 className="text-2xl font-playfair text-primary mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/yourusername",
                  },
                  {
                    icon: <FaTwitter />,
                    link: "https://twitter.com/yourusername",
                  },
                  {
                    icon: <FaLinkedin />,
                    link: "https://linkedin.com/in/yourusername",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE (Form) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "country", label: "Country", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-dark/90 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    value={formData[field.id as keyof FormData]}
                    onChange={handleChange}
                    placeholder={`Your ${field.label.toLowerCase()}`}
                    className="w-full px-4 py-2 rounded-md bg-secondary/20 focus:ring-2 focus:ring-secondary/80 outline-none"
                  />
                </div>
              ))}

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark/90 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry"
                  className="w-full px-4 py-2 rounded-md bg-secondary/20 focus:ring-2 focus:ring-secondary/80 outline-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={status === "loading"}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 text-center">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
