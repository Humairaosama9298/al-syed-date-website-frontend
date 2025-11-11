"use client";

import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/varieties", label: "Varieties" },
    { href: "/benefits", label: "Benefits" },
    { href: "/experties", label: "Experties" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 border-b border-b-light/30 backdrop-blur-sm shadow-sm z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ===== Logo Section ===== */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-10 h-10">
              <Image
                src="/images/logo1.png"
                alt="logo"
                width={60}
                height={60}
                className="object-contain text-primary"
                priority
              />
            </div>
            <Link
              href="/"
              className="font-semibold text-primary text-lg sm:text-xl leading-tight hover:text-secondary transition-colors"
            >
              Al&nbsp;Syed&nbsp;Brothers
            </Link>
          </div>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden lg:flex text-sm lg:text-base items-center space-x-4 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
  ? "text-primary font-semibold underline underline-offset-4 decoration-2 decoration-primary"
  : "text-dark hover:text-primary hover:underline-offset-4"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ===== Mobile Menu Button ===== */}
          <motion.button
            className="lg:hidden text-primary p-2 rounded-lg hover:text-secondary transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* ===== Mobile Menu ===== */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="lg:hidden mt-2"
            >
              <div className="p-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-2 text-base transition-colors ${
                        pathname === item.href
                          ? "text-primary font-medium"
                          : "text-dark hover:text-secondary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
