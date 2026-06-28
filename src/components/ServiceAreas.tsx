"use client";

import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";

const areas = [
  {
    city: "Ghaziabad",
    neighborhoods: [
      "Vaishali",
      "Indirapuram",
      "Raj Nagar",
      "Crossings Republik",
      "Kaushambi",
      "Vasundhara",
      "Sahibabad",
      "Pratap Vihar",
    ],
  },
  {
    city: "Moradabad",
    neighborhoods: [
      "Civil Lines",
      "Majhola",
      "Pakbara",
      "Budh Vihar",
      "Rampur Road",
      "Thandi Sadak",
      "Gandhi Nagar",
      "Shastri Nagar",
    ],
  },
  {
    city: "Nearby Areas",
    neighborhoods: [
      "Noida Sector 62",
      "Greater Noida West",
      "Meerut Bypass",
      "Hapur",
      "Muradnagar",
      "Dasna",
      "Bhojpur",
      "Loni",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section className="py-16 sm:py-20 bg-[#0f1f40] text-white" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500/20 text-[#f97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            We Come to You
          </h2>
          <p className="mt-3 text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
            Covering Ghaziabad, Moradabad, and surrounding neighbourhoods. Call us to confirm coverage in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.city}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <HiLocationMarker className="text-[#f97316]" size={20} />
                <h3 className="text-lg font-bold text-white">{area.city}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {area.neighborhoods.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-1.5 text-blue-200 text-sm"
                  >
                    <span className="w-1 h-1 bg-[#f97316] rounded-full flex-shrink-0" />
                    {n}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-blue-200 text-sm mb-4">
            Don&apos;t see your area? Call us — we may still cover you!
          </p>
          <motion.a
            href="tel:+919876543210"
            id="areas-call-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#f97316] text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-xl shadow-orange-500/20 transition-colors hover:bg-[#ea6a08]"
          >
            Check Coverage – Call Now
          </motion.a>
        </div>
      </div>
    </section>
  );
}
