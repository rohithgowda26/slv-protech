import Link from "next/link";

export default function Footer() {
  const services = [
    {
      name: "Web Development",
      href: "/services/web-development",
    },
    {
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    {
      name: "AI Development",
      href: "/services/ai-development",
    },
    {
      name: "E-Commerce Development",
      href: "/services/e-commerce-development",
    },
    {
      name: "Custom Software",
      href: "/services/custom-software",
    },
  ];

  return (
    <footer className="bg-[#020617] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-500 text-sm font-bold text-blue-400">
                SLV
              </div>

              <span className="text-xl font-extrabold tracking-tight">
                SLV
                <span className="text-indigo-400">PROTECH</span>
              </span>
            </Link>

            <p className="mt-8 max-w-xs text-sm leading-7 text-slate-400">
              Technology solutions designed to help businesses grow, innovate
              and operate efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white">Services</h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm leading-6 text-slate-400 transition hover:text-blue-400"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white">Contact Us</h3>

            <div className="mt-6 space-y-5 text-sm leading-6 text-slate-400">
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

        {/* Bottom */}
        <div className="mt-14 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} SLV PROTECH. All rights reserved.
            </p>

            <div className="flex gap-5">
              <Link
                href="/privacy-policy"
                className="transition hover:text-blue-400"
              >
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-blue-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
