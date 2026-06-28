import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ServiceAreas from "@/components/ServiceAreas";
import Link from "next/link";

export const metadata = {
  title: "PlumFix – Trusted Plumber in Ghaziabad & Moradabad | 24/7 Emergency",
  description:
    "PlumFix provides expert plumbing services in Ghaziabad, Moradabad & surrounding areas. Leak repair, geyser installation, drain cleaning. 24/7 emergency. Call now!",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />

      {/* Services preview banner */}
      <section className="bg-[#f97316] py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div>
            <h2 className="text-xl sm:text-2xl font-black">
              Need a plumber today?
            </h2>
            <p className="text-orange-100 text-sm mt-0.5">
              View all our services and book instantly.
            </p>
          </div>
          <Link
            href="/services"
            id="home-services-banner-btn"
            className="flex-shrink-0 bg-white text-[#f97316] font-bold px-7 py-3 rounded-full text-sm hover:bg-orange-50 transition-colors shadow-lg"
          >
            Browse All Services →
          </Link>
        </div>
      </section>

      <Testimonials />
      <BeforeAfterGallery />
      <ServiceAreas />

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1a3a6b] to-[#2350a0] text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-black mb-3">
          Ready to fix the problem?
        </h2>
        <p className="text-blue-200 text-sm sm:text-base max-w-lg mx-auto mb-8">
          Call us now or send a message on WhatsApp. We&apos;ll respond in
          minutes and get a plumber to you ASAP.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919876543210"
            id="home-final-call-btn"
            className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6a08] text-white font-bold px-8 py-4 rounded-full text-base shadow-xl transition-colors"
          >
            📞 Call Now – Free Quote
          </a>
          <Link
            href="/contact"
            id="home-contact-btn"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Send a Message
          </Link>
        </div>
      </section>
    </>
  );
}
