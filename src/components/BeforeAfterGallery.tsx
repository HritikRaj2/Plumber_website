"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    before: "/before1.png",
    after: "/after1.png",
    label: "Under-Sink Pipe Replacement",
    location: "Vaishali, Ghaziabad",
  },
  {
    before: "/plumber3.png",
    after: "/plumber2.png",
    label: "Bathroom Fitting Overhaul",
    location: "Raj Nagar, Ghaziabad",
  },
  {
    before: "/plumber1.png",
    after: "/plumber4.png",
    label: "Drain System Replacement",
    location: "Moradabad City",
  },
];

function BeforeAfterCard({
  before,
  after,
  label,
  location,
  index,
}: {
  before: string;
  after: string;
  label: string;
  location: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md transition-shadow duration-300"
    >
      <div className="grid grid-cols-2">
        <div className="relative h-40 sm:h-48">
          <Image src={before} alt={`Before: ${label}`} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            BEFORE
          </div>
        </div>
        <div className="relative h-40 sm:h-48">
          <Image src={after} alt={`After: ${label}`} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
          <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            AFTER
          </div>
          {/* Arrow divider */}
          <div className="absolute inset-y-0 -left-4 flex items-center z-10">
            <div className="bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center text-[#1a3a6b] font-black text-sm">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-gray-50">
        <p className="font-bold text-[#0f172a] text-sm">{label}</p>
        <p className="text-gray-400 text-xs mt-0.5">📍 {location}</p>
      </div>
    </motion.div>
  );
}

export default function BeforeAfterGallery() {
  return (
    <section className="py-16 sm:py-20 bg-[#f8fafd]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-[#1a3a6b] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a]">
            Real Transformations
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            See the quality difference. Every job, no matter how big or small,
            gets our full attention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <BeforeAfterCard key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
