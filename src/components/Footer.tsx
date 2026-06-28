import Link from "next/link";
import { GiWaterDrop } from "react-icons/gi";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1f40] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GiWaterDrop className="text-[#f97316]" size={28} />
              <span className="text-2xl font-black text-white">
                Plum<span className="text-[#f97316]">Fix</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted local plumbing partner for over 10 years. Licensed,
              insured, and available 24/7 for all plumbing emergencies.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f97316] transition-colors"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f97316] transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/919876543210"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-[#f97316] transition-colors"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                "Leak Repair",
                "Drain Cleaning",
                "Geyser Installation",
                "Pipe Fitting",
                "Bathroom Renovation",
                "Water Tank Cleaning",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="hover:text-[#f97316] transition-colors"
                  >
                    → {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#f97316] mt-0.5 flex-shrink-0" size={15} />
                <span>Sector 14, Ghaziabad, Uttar Pradesh – 201001</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#f97316] flex-shrink-0" size={15} />
                <a href="tel:+919876543210" className="hover:text-[#f97316] transition-colors">
                  +91-98765-43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#f97316] flex-shrink-0" size={15} />
                <a href="mailto:hello@plumfix.in" className="hover:text-[#f97316] transition-colors">
                  hello@plumfix.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-[#f97316] mt-0.5 flex-shrink-0" size={15} />
                <span>
                  Mon–Sat: 7 AM – 9 PM<br />
                  Emergency: 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {year} PlumFix Plumbing Services. All rights reserved.</p>
          <p>
            Serving Ghaziabad, Moradabad, Meerut &amp; surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
