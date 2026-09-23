import Link from "next/link";

const services = [
  {
    name: "AI-Powered Website Design",
    href: "/services/ai-powered-website-design",
  },
  {
    name: "E-Commerce Stores",
    href: "/services/e-commerce-stores",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    name: "AI Chatbots & Voice Bots",
    href: "/services/ai-chatbots-voice-bots",
  },
  {
    name: "Agentic AI Automation",
    href: "/services/agentic-ai-automation",
  },
  {
    name: "WordPress Development",
    href: "/services/wordpress-development",
  },
  {
    name: "Shopify Store Development",
    href: "/services/shopify-store-development",
  },

  {
    name: "Landing Page Design",
    href: "/services/landing-page-design",
  },
  {
    name: "AI-Powered Websites",
    href: "/services/ai-powered-websites",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.5fr_1fr]">
          {/* COMPANY */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/logos/logo.png"
                alt="SLV PROTECH Logo"
                className="h-10 w-10 object-contain"
              />

              <span className="text-xl font-extrabold tracking-tight text-white">
                SLV
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  .PROTECH
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Technology solutions designed to help businesses grow, innovate
              and operate efficiently.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold text-white">Quick Links</h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                About
              </Link>

              <Link
                href="/services"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-bold text-white">Services</h3>

            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-sm leading-6 text-slate-400 transition hover:text-blue-400"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-400">
              <p>
                69th Cross, 5th Block,
                <br />
                Rajajinagar, Bangalore
              </p>

              <a
                href="tel:+919999999999"
                className="block transition hover:text-blue-400"
              >
                +91 9999999999
              </a>

              <a
                href="mailto:info@slvprotech.com"
                className="block transition hover:text-blue-400"
              >
                info@slvprotech.com
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-slate-800 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <p>© 2026 SLV PROTECH. All rights reserved.</p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="transition hover:text-blue-400"
              >
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-blue-400">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
