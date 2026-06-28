"use client";

import { FiAlertCircle } from "react-icons/fi";

export default function EmergencyBanner() {
  return (
    <div className="w-full bg-[#1a3a6b] text-white text-center py-2 px-4 text-sm font-medium z-50 relative">
      <span className="inline-flex items-center gap-2">
        <FiAlertCircle className="text-[#f97316] animate-pulse flex-shrink-0" size={14} />
        <span>
          🚨 <strong>24/7 Emergency Plumbing Services</strong> available — Call us anytime:{" "}
          <a
            href="tel:+919876543210"
            className="underline font-bold text-[#f97316] hover:text-orange-300 transition-colors"
          >
            +91-98765-43210
          </a>
        </span>
      </span>
    </div>
  );
}
