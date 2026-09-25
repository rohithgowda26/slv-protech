import Link from "next/link";
import Navbar from "../../components/Navbar";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { company } from "../../data/company";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 pb-12 pt-12 lg:px-8 lg:pb-14">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            {/* HERO HEADING */}
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-bold tracking-[0.18em] text-blue-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                CONTACT SLV PROTECH
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  great together.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                Have a project, business requirement, or digital idea? Tell us
                what you need and let&apos;s create the right digital solution
                for your business.
              </p>
            </div>

            {/* CONTACT SECTION */}
            <div className="mt-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
              {/* LEFT CARD */}
              <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-8 shadow-lg shadow-blue-100/50 sm:p-9">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-100/50 blur-3xl" />

                <div className="relative">
                  <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
                    LET&apos;S TALK
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                    Start your digital journey
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    Tell us about your business or project. Our team can help
                    you choose the right technology and solution.
                  </p>

                  {/* CONTACT DETAILS */}
                  <div className="mt-8 space-y-4">
                    {/* EMAIL */}
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                          />
                        </svg>
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Email
                        </p>

                        <p className="mt-1 break-all text-base font-bold text-slate-900">
                          {company.email}
                        </p>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/50">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M3 5a2 2 0 012-2h2.2a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.27 1.04L7.7 9.3a16 16 0 007 7l1.28-1.28a1 1 0 011.04-.27l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Phone
                        </p>

                        <p className="mt-1 text-base font-bold text-slate-900">
                          {company.phone}
                        </p>
                      </div>
                    </div>

                    {/* OFFICE */}
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-purple-200 hover:bg-purple-50/50">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M12 21s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z"
                          />
                          <circle cx="12" cy="9" r="2.2" strokeWidth="1.8" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Office
                        </p>

                        <p className="mt-1 text-base font-bold leading-6 text-slate-900">
                          {company.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT CTA */}
                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5">
                    <div>
                      <p className="text-base font-bold text-white">
                        Have a project in mind?
                      </p>

                      <p className="mt-1 text-sm text-blue-100">
                        Let&apos;s discuss your requirements.
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl text-white">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="rounded-[28px] border border-blue-100 bg-white p-8 shadow-lg shadow-indigo-100/40 sm:p-9">
                <p className="text-sm font-bold tracking-[0.2em] text-indigo-600">
                  SEND AN ENQUIRY
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                  Tell us about your project
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  Share a few details and our team can understand your
                  requirement better.
                </p>

                <form className="mt-7 space-y-5">
                  {/* NAME + PHONE */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-800">
                        Your Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-800">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Required Service
                    </label>

                    <select
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>AI Development</option>
                      <option>E-Commerce Development</option>
                      <option>Custom Software</option>
                      <option>Other Requirement</option>
                    </select>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Project Details
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us about your project or requirement..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Send Project Enquiry
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    We&apos;ll use your details only to respond to your enquiry.
                  </p>
                </form>
              </div>
            </div>

            {/* SERVICES LINK */}
            <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white px-6 py-5 shadow-sm sm:flex-row">
              <div>
                <p className="text-base font-bold text-slate-900">
                  Looking for a specific digital solution?
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Explore all services offered by SLV PROTECH.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
