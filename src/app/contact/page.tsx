"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  "Leak Repair",
  "Geyser Installation",
  "Drain Cleaning",
  "Pipe Fitting / Replacement",
  "Bathroom Renovation",
  "Shower / Tap Repair",
  "Toilet Repair",
  "Water Tank Cleaning",
  "RO / Water Filter Service",
  "Motor Pump Repair",
  "Emergency Plumbing",
  "Other / Not Listed",
];

const contactInfo = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91-98765-43210",
    href: "tel:+919876543210",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "hello@plumfix.in",
    href: "mailto:hello@plumfix.in",
  },
  {
    icon: FiMapPin,
    label: "Address",
    value: "Sector 14, Ghaziabad, UP – 201001",
    href: "#",
  },
  {
    icon: FiClock,
    label: "Hours",
    value: "Mon–Sat: 7 AM – 9 PM · Emergency: 24/7",
    href: "#",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!form.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (!form.service) {
      toast.error("Please select a service.");
      return;
    }

    setLoading(true);

    // Simulate async submission (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1200));

    toast.success(
      "🎉 Thanks! We'll call you back within 30 minutes.",
      {
        duration: 5000,
        style: {
          background: "#1a3a6b",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "12px",
        },
        iconTheme: { primary: "#f97316", secondary: "#fff" },
      }
    );

    setForm({ name: "", phone: "", service: "", message: "" });
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f40] to-[#1a3a6b] py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-orange-500/20 text-[#f97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">
            Get in Touch
          </h1>
          <p className="mt-4 text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
            Book a plumber, get a free quote, or ask any question. We respond in
            minutes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 bg-[#f8fafd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-2xl font-black text-[#0f172a] mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-500 text-sm">
                  Reach us through any of these channels — we&apos;re always
                  reachable.
                </p>
              </div>

              {contactInfo.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#1a3a6b] flex-shrink-0 group-hover:bg-[#1a3a6b] group-hover:text-white transition-colors">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                    <p className="text-[#0f172a] font-semibold text-sm">{c.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hi%21%20I%20need%20plumbing%20help."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-4 font-semibold text-sm hover:bg-[#1ebe5d] transition-colors shadow-md"
              >
                <FaWhatsapp size={22} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Right: Form */}
            <motion.div
              className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-black text-[#0f172a] mb-1">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                We&apos;ll get back to you within 30 minutes during business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]/30 focus:border-[#1a3a6b] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]/30 focus:border-[#1a3a6b] transition-all"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]/30 focus:border-[#1a3a6b] transition-all bg-white"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your problem (e.g. kitchen pipe leaking, geyser not heating...)"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]/30 focus:border-[#1a3a6b] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#1a3a6b] hover:bg-[#122a52] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-sm transition-colors shadow-lg shadow-blue-900/20"
                >
                  {loading ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
                  ) : (
                    <FiSend size={16} />
                  )}
                  {loading ? "Sending..." : "Send Message – We'll Call Back Soon"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
