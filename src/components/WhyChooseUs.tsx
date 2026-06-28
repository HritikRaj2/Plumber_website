"use client";

import { motion } from "framer-motion";
import {
  MdVerified,
  MdAccessTime,
  MdCleaningServices,
  MdPriceCheck,
} from "react-icons/md";

const features = [
  {
    icon: MdPriceCheck,
    title: "Upfront Pricing",
    desc: "No hidden charges, ever. We give you a clear quote before any work begins — no surprises on the final bill.",
    color: "bg-orange-50 text-[#f97316]",
    border: "border-orange-100",
  },
  {
    icon: MdVerified,
    title: "10+ Years Experience",
    desc: "Over a decade of trusted plumbing work across Ghaziabad and Moradabad. Hundreds of happy homes served.",
    color: "bg-blue-50 text-[#1a3a6b]",
    border: "border-blue-100",
  },
  {
    icon: MdCleaningServices,
    title: "Clean-Up Guarantee",
    desc: "We respect your home. Our team cleans up completely after every job — we leave no mess behind.",
    color: "bg-green-50 text-green-700",
    border: "border-green-100",
  },
  {
    icon: MdAccessTime,
    title: "Same-Day Availability",
    desc: "Most jobs are booked and completed the same day. Emergency calls are our top priority, 24/7.",
    color: "bg-purple-50 text-purple-700",
    border: "border-purple-100",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-[#f8fafd]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-[#f97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-tight">
            The PlumFix Difference
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            We're not just plumbers — we're your neighbours who care about
            getting the job done right, the first time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
              className={`bg-white rounded-2xl p-6 border ${f.border} transition-shadow duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                <f.icon size={24} />
              </div>
              <h3 className="font-bold text-[#0f172a] text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
