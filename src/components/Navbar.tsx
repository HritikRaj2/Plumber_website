"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { MdPhotoLibrary } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import GalleryModal from "@/components/GalleryModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GiWaterDrop className="text-[#1a3a6b]" size={30} />
              </motion.div>
              <div className="leading-tight">
                <span className="text-xl font-black text-[#1a3a6b] tracking-tight">
                  Plum
                </span>
                <span className="text-xl font-black text-[#f97316] tracking-tight">
                  Fix
                </span>
                <p className="text-[10px] text-gray-500 font-medium -mt-0.5 tracking-wide">
                  PLUMBING SERVICES
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#f97316] relative group ${
                    pathname === link.href
                      ? "text-[#f97316]"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#f97316] transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* Gallery button — opens modal */}
              <button
                id="navbar-gallery-btn"
                onClick={() => setGalleryOpen(true)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#f97316] transition-colors relative group"
              >
                <MdPhotoLibrary size={16} className="text-[#f97316]" />
                Gallery
                <span className="absolute -bottom-1 left-0 h-0.5 bg-[#f97316] w-0 group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="tel:+919876543210"
                id="navbar-call-btn"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a08] text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-md shadow-orange-200 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone size={15} className="animate-bounce" />
                Call Now: +91-98765-43210
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden text-[#1a3a6b] p-2 rounded-md hover:bg-blue-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-blue-50 text-[#1a3a6b] font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Gallery — mobile */}
                <button
                  id="mobile-gallery-btn"
                  onClick={() => {
                    setMobileOpen(false);
                    setGalleryOpen(true);
                  }}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors text-left"
                >
                  <MdPhotoLibrary size={16} className="text-[#f97316]" />
                  Gallery
                </button>

                <a
                  href="tel:+919876543210"
                  className="mt-2 flex items-center justify-center gap-2 bg-[#f97316] text-white font-semibold py-3 rounded-xl text-sm"
                  id="mobile-call-btn"
                >
                  <FiPhone size={16} />
                  Call Now: +91-98765-43210
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Gallery Modal — rendered at the nav level so it sits above everything */}
      <GalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </>
  );
}
