"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
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
      name: "Digital Marketing",
      href: "/services/digital-marketing",
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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="SLV PROTECH Home"
            className="group flex items-center gap-3"
          >
            <img
              src="/logos/logo.png"
              alt="SLV PROTECH Logo"
              className="h-10 w-10 object-contain transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            />

            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              SLV
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                .PROTECH
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-2 lg:flex">
            {/* HOME */}
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                isActive("/")
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Home
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                isActive("/about")
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              About
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="group relative">
              <Link
                href="/services"
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  isActive("/services")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Services
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              {/* DROPDOWN */}
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-xl shadow-blue-100/40">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={`block rounded-xl px-4 py-2.5 text-sm transition-all duration-200 ${
                        pathname === service.href
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* PORTFOLIO */}
            <Link
              href="/portfolio"
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                isActive("/portfolio")
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Portfolio
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Contact
            </Link>

            {/* GET STARTED */}
            <Link
              href="/contact"
              className="ml-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200"
            >
              Get Started
              <span className="ml-1">→</span>
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl text-slate-700 transition hover:bg-blue-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="border-t border-blue-100 py-5 lg:hidden">
            <div className="flex flex-col gap-2">
              {/* HOME */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Home
              </Link>

              {/* ABOUT */}
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/about")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                About
              </Link>

              {/* MOBILE SERVICES */}
              <div className="rounded-xl border border-blue-100 bg-white p-2">
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 font-semibold transition ${
                    isActive("/services")
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  Services
                </Link>

                <div className="mt-1 border-t border-blue-50 pt-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        pathname === service.href
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* PORTFOLIO */}
              <Link
                href="/portfolio"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/portfolio")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Portfolio
              </Link>

              {/* CONTACT */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/contact")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>

              {/* GET STARTED */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-center font-semibold text-white"
              >
                Get Started →
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
