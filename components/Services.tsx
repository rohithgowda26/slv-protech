"use client";

import Link from "next/link";
import { services } from "../data/services";

export default function Services() {
  const mainServices = services.slice(0, 6);

  return (
    <>
      {/* MAIN SERVICES */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
              WHAT WE DO
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Digital Solutions Built
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                For Growth
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We create modern websites, applications, AI solutions and digital
              experiences designed around your business requirements.
            </p>
          </div>

          {/* Main Service Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              >
                {/* Image / Icon */}
                {service.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-xs font-bold text-blue-600 shadow-lg backdrop-blur-sm">
                      {service.number}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex h-48 items-center justify-center bg-gradient-to-br ${service.gradient}`}
                  >
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 flex items-center text-sm font-semibold text-blue-600">
                    Learn more
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MORE DIGITAL SERVICES */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-7 text-center">
            <p className="text-sm font-bold tracking-[0.08em] text-slate-600">
              MORE DIGITAL SERVICES
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Shopify */}
            <Link
              href="/services/shopify-store-development"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 text-xl shadow-sm">
                  🛍️
                </div>

                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-900">
                    Shopify Store Development
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    High-converting Shopify storefronts ready to scale.
                  </p>

                  <span className="mt-4 inline-block text-sm font-semibold text-purple-600 transition group-hover:text-blue-600">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>

            {/* Digital Marketing */}
            <Link
              href="/services/digital-marketing"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 text-xl shadow-sm">
                  📈
                </div>

                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-900">
                    Digital Marketing
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    SEO, social media and performance marketing to grow your
                    online presence.
                  </p>

                  <span className="mt-4 inline-block text-sm font-semibold text-purple-600 transition group-hover:text-blue-600">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>

            {/* Landing Page */}
            <Link
              href="/services/landing-page-design"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-xl shadow-sm">
                  📊
                </div>

                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-900">
                    Landing Page Design
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    Lead-generation pages engineered for paid advertising and
                    higher click-through rates.
                  </p>

                  <span className="mt-4 inline-block text-sm font-semibold text-purple-600 transition group-hover:text-blue-600">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>

            {/* AI Websites */}
            <Link
              href="/services/ai-powered-websites"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-xl shadow-sm">
                  ⚡
                </div>

                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-900">
                    AI-Powered Websites
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    AI content, lead capture, chat and personalization built
                    into modern websites.
                  </p>

                  <span className="mt-4 inline-block text-sm font-semibold text-purple-600 transition group-hover:text-blue-600">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
