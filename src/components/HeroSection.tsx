"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const marqueeImages = [
  { src: "/plumber1.png", alt: "Plumber fixing pipes" },
  { src: "/plumber2.png", alt: "Geyser installation" },
  { src: "/plumber3.png", alt: "Bathroom plumbing repair" },
  { src: "/plumber4.png", alt: "Drain pipe work" },
];

function MarqueeTrack({
  direction = "left",
  speed = "30s",
}: {
  direction?: "left" | "right";
  speed?: string;
}) {
  // Duplicate the array to create the seamless illusion
  const items = [...marqueeImages, ...marqueeImages, ...marqueeImages];

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed} linear infinite`,
        }}
      >
        {items.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-52 sm:w-64 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 208px, 256px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1f40] via-[#1a3a6b] to-[#1e4080] overflow-hidden min-h-[90vh] flex flex-col">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f97316]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Hero Text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
        >
          <MdVerified className="text-[#f97316]" size={16} />
          <span className="text-white text-xs font-semibold tracking-wide uppercase">
            Licensed & Insured · 10+ Years Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
        >
          Fast, Reliable{" "}
          <span className="text-[#f97316] relative">
            Plumbing
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
            >
              <path
                d="M0 4 Q75 0 150 4 Q225 8 300 4"
                stroke="#f97316"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          at Your Doorstep
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Expert plumbing solutions in Ghaziabad, Moradabad &amp; nearby areas.
          Transparent pricing, on-time service, 100% satisfaction guarantee.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="tel:+919876543210"
            id="hero-call-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6a08] text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-orange-500/30 transition-colors"
          >
            <FiPhone size={18} />
            Call Now – Get Free Quote
          </motion.a>

          <motion.a
            href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi! I need plumbing help.")}`}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-green-500/30 transition-colors"
          >
            <FaWhatsapp size={20} />
            WhatsApp Us
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/services"
              id="hero-services-btn"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-colors backdrop-blur-sm"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-blue-200 text-sm"
        >
          {[
            "✅ Upfront Pricing",
            "⚡ Same-Day Service",
            "🛡️ 1-Year Warranty",
            "🌙 24/7 Emergency",
          ].map((item) => (
            <span key={item} className="font-medium">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 pb-6 space-y-4 overflow-hidden"
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#1a3a6b] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#1a3a6b] to-transparent pointer-events-none" />

        <MarqueeTrack direction="left" speed="28s" />
        <MarqueeTrack direction="right" speed="32s" />
      </motion.div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-6">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-white/40"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
