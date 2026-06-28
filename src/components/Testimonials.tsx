"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

const testimonials = [
  {
    name: "Rakesh Sharma",
    location: "Vaishali, Ghaziabad",
    rating: 5,
    review:
      "Excellent service! The team came within 2 hours and fixed our burst pipe completely. Very professional and clean. No mess left behind. Highly recommended!",
    initials: "RS",
    color: "bg-blue-500",
  },
  {
    name: "Priya Verma",
    location: "Moradabad City",
    rating: 5,
    review:
      "Got my new geyser installed same day I called. The plumber was punctual, explained everything, and the pricing was very fair. Will definitely call again.",
    initials: "PV",
    color: "bg-purple-500",
  },
  {
    name: "Anil Kumar",
    location: "Raj Nagar, Ghaziabad",
    rating: 5,
    review:
      "Had a major drain blockage. They cleared it in under an hour and also checked all the other pipes. True professionals. Upfront pricing was a big relief.",
    initials: "AK",
    color: "bg-orange-500",
  },
  {
    name: "Sunita Agarwal",
    location: "Crossings Republik",
    rating: 5,
    review:
      "Emergency call at midnight, and they actually came! Fixed our overflowing toilet quickly. Worth every rupee. Thank you PlumFix team!",
    initials: "SA",
    color: "bg-green-600",
  },
  {
    name: "Mohit Gupta",
    location: "Indirapuram, Ghaziabad",
    rating: 5,
    review:
      "Three bathroom faucets replaced in one visit. Super efficient and tidy. Already recommended them to my entire housing society.",
    initials: "MG",
    color: "bg-red-500",
  },
  {
    name: "Deepa Joshi",
    location: "Moradabad, UP",
    rating: 5,
    review:
      "The team arrived on time, completed the bathroom renovation pipe fitting in two days, and the finish is excellent. 5 stars without any hesitation.",
    initials: "DJ",
    color: "bg-teal-600",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FiStar key={i} size={14} className="fill-[#f97316] text-[#f97316]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-[#f97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a]">
            Trusted by 500+ Happy Customers
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Real reviews from real people across Ghaziabad and Moradabad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
              className="bg-[#f8fafd] rounded-2xl p-6 border border-gray-100 transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-sm">{t.name}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                    <HiLocationMarker size={11} />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
              <StarRating count={t.rating} />
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">&ldquo;{t.review}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-10 bg-[#1a3a6b] rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center justify-center text-white text-center">
          {[
            { val: "500+", label: "Happy Customers" },
            { val: "4.9★", label: "Average Rating" },
            { val: "10+", label: "Years in Service" },
            { val: "24/7", label: "Emergency Response" },
          ].map((s) => (
            <div key={s.label} className="flex-1">
              <p className="text-3xl font-black text-[#f97316]">{s.val}</p>
              <p className="text-blue-200 text-xs mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
