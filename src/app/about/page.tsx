"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdVerified, MdStar } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsAwardFill } from "react-icons/bs";

const milestones = [
  { year: "2013", event: "Started PlumFix in Ghaziabad with 2 plumbers" },
  { year: "2016", event: "Expanded service to Moradabad and surrounding areas" },
  { year: "2019", event: "Reached 200+ happy customers milestone" },
  { year: "2022", event: "Introduced 24/7 emergency response service" },
  { year: "2024", event: "500+ customers, 5-star average rating maintained" },
];

const values = [
  {
    icon: MdVerified,
    title: "Licensed & Insured",
    desc: "Every plumber on our team is fully licensed and insured for your peace of mind.",
  },
  {
    icon: MdStar,
    title: "Customer-First Always",
    desc: "We don't leave until you're 100% satisfied. Your home is treated like our own.",
  },
  {
    icon: BsAwardFill,
    title: "Quality Guarantee",
    desc: "We use only certified parts and fittings. All work comes with a 1-year warranty.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f40] to-[#1a3a6b] py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-orange-500/20 text-[#f97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">
            More Than Just Plumbers
          </h1>
          <p className="mt-4 text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
            A decade of expertise, hundreds of satisfied homes, and a
            commitment to doing the job right — every single time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/plumber1.png"
                  alt="PlumFix founder at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -right-4 bg-[#f97316] text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-3xl font-black">10+</p>
                <p className="text-orange-100 text-xs font-medium">Years of Service</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-5">
                Built on Trust, Driven by Skill
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                PlumFix was founded by <strong>Rajiv Sharma</strong> in 2013 with a simple
                belief: plumbing should be honest, professional, and affordable
                for every household. Starting with just two plumbers and a van,
                we&apos;ve grown into a trusted team serving hundreds of homes
                across Ghaziabad and Moradabad.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Every plumber on our team is trained, background-checked, and
                committed to our core values: upfront pricing, clean workmanship,
                and standing behind our work with a full warranty.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-[#1a3a6b]">500+</p>
                  <p className="text-gray-500 text-xs">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-[#1a3a6b]">4.9★</p>
                  <p className="text-gray-500 text-xs">Avg Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-[#1a3a6b]">8</p>
                  <p className="text-gray-500 text-xs">Expert Plumbers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-[#1a3a6b]">24/7</p>
                  <p className="text-gray-500 text-xs">Emergency Response</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-[#f8fafd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1a3a6b]">
                  <v.icon size={24} />
                </div>
                <h3 className="font-bold text-[#0f172a] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#1a3a6b] text-white flex items-center justify-center text-xs font-bold">
                    {m.year}
                  </div>
                  <div className="bg-[#f8fafd] rounded-xl p-4 border border-gray-100">
                    <p className="text-gray-700 text-sm">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1a3a6b] text-white text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-black mb-3">
          Ready to experience the PlumFix difference?
        </h2>
        <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
          Call us today for a free quote — no commitment required.
        </p>
        <a
          href="tel:+919876543210"
          id="about-call-btn"
          className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a08] text-white font-bold px-8 py-4 rounded-full text-sm shadow-lg transition-colors"
        >
          <FiPhone size={16} />
          Call Now – +91-98765-43210
        </a>
      </section>
    </>
  );
}
