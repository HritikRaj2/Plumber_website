"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GiWaterDrop,
  GiHeatHaze,
  GiPipes,
} from "react-icons/gi";
import {
  MdPlumbing,
  MdBathtub,
  MdSanitizer,
} from "react-icons/md";
import { TbToiletPaper } from "react-icons/tb";
import { FaShower, FaWater } from "react-icons/fa";
import { BiWrench } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { RiBuilding2Line } from "react-icons/ri";

const services = [
  {
    icon: GiWaterDrop,
    title: "Leak Repair",
    desc: "Fast detection and repair of pipe leaks, joint failures, and hidden seepage — before water damage gets worse.",
    price: "Starting ₹299",
    color: "text-blue-600 bg-blue-50",
    popular: true,
  },
  {
    icon: GiHeatHaze,
    title: "Geyser Installation",
    desc: "Expert installation of electric & solar geysers from all major brands. Same-day service available.",
    price: "Starting ₹499",
    color: "text-red-500 bg-red-50",
    popular: false,
  },
  {
    icon: MdPlumbing,
    title: "Drain Cleaning",
    desc: "Complete drain and sewer line unblocking using high-pressure jetting and professional equipment.",
    price: "Starting ₹349",
    color: "text-green-600 bg-green-50",
    popular: false,
  },
  {
    icon: GiPipes,
    title: "Pipe Fitting & Replacement",
    desc: "New pipe installation, old pipe replacement, and complete pipeline rerouting for homes and offices.",
    price: "Starting ₹599",
    color: "text-purple-600 bg-purple-50",
    popular: false,
  },
  {
    icon: MdBathtub,
    title: "Bathroom Renovation",
    desc: "Complete bathroom plumbing for new constructions or full renovations. Quality fittings, neat finish.",
    price: "Get Custom Quote",
    color: "text-teal-600 bg-teal-50",
    popular: false,
  },
  {
    icon: FaShower,
    title: "Shower & Tap Repair",
    desc: "Fix dripping taps, broken shower heads, mixer valves, and all types of bathroom fixtures quickly.",
    price: "Starting ₹199",
    color: "text-cyan-600 bg-cyan-50",
    popular: false,
  },
  {
    icon: TbToiletPaper,
    title: "Toilet Repair",
    desc: "Overflowing, clogged, or running toilets fixed. Seat replacement, cistern repair & flush system service.",
    price: "Starting ₹249",
    color: "text-orange-500 bg-orange-50",
    popular: false,
  },
  {
    icon: FaWater,
    title: "Water Tank Cleaning",
    desc: "Professional underground & overhead water tank cleaning, disinfection, and sludge removal.",
    price: "Starting ₹799",
    color: "text-blue-500 bg-blue-50",
    popular: false,
  },
  {
    icon: MdSanitizer,
    title: "RO & Water Filter Service",
    desc: "Installation, servicing, and filter replacement for all RO & purifier brands. Certified technicians.",
    price: "Starting ₹349",
    color: "text-indigo-600 bg-indigo-50",
    popular: false,
  },
  {
    icon: BiWrench,
    title: "Motor Pump Repair",
    desc: "Submersible and monoblock water pump installation, repair, and wiring. Emergency call-outs available.",
    price: "Starting ₹499",
    color: "text-yellow-600 bg-yellow-50",
    popular: false,
  },
  {
    icon: RiBuilding2Line,
    title: "Commercial Plumbing",
    desc: "Plumbing solutions for offices, restaurants, schools, and commercial properties. Annual maintenance plans available.",
    price: "Get Custom Quote",
    color: "text-gray-700 bg-gray-100",
    popular: false,
  },
  {
    icon: BsTools,
    title: "Emergency Plumbing",
    desc: "24/7 emergency response for burst pipes, severe leaks, or any urgent plumbing crisis. We come fast.",
    price: "Call for Price",
    color: "text-red-600 bg-red-50",
    popular: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45 },
  }),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f40] to-[#1a3a6b] py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-orange-500/20 text-[#f97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight">
            Every Plumbing Job, Done Right
          </h1>
          <p className="mt-4 text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
            From a dripping tap to a full bathroom fit-out — our licensed
            plumbers handle it all with upfront pricing and a satisfaction
            guarantee.
          </p>
          <a
            href="tel:+919876543210"
            id="services-hero-call-btn"
            className="mt-8 inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a08] text-white font-bold px-8 py-4 rounded-full text-sm shadow-lg transition-colors"
          >
            <FiPhone size={16} />
            Book a Plumber – Free Quote
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 bg-[#f8fafd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
                className="relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm transition-shadow duration-300"
              >
                {s.popular && (
                  <span className="absolute -top-2 right-4 bg-[#f97316] text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                    POPULAR
                  </span>
                )}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                  <s.icon size={22} />
                </div>
                <h2 className="font-bold text-[#0f172a] text-sm mb-1.5">{s.title}</h2>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#1a3a6b] font-bold text-xs">{s.price}</span>
                  <a
                    href="tel:+919876543210"
                    className="text-[10px] font-semibold text-[#f97316] hover:underline"
                  >
                    Book Now →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-[#1a3a6b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-black mb-2">
              Can&apos;t find what you need?
            </h3>
            <p className="text-blue-200 text-sm mb-6">
              We handle all types of plumbing work. Just call us and we&apos;ll
              figure it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                id="services-bottom-call-btn"
                className="bg-[#f97316] hover:bg-[#ea6a08] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors inline-flex items-center justify-center gap-2"
              >
                <FiPhone size={15} />
                Call Now
              </a>
              <Link
                href="/contact"
                id="services-contact-btn"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
