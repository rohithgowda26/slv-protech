import Navbar from "../../components/Navbar";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { company } from "../../data/company";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
                CONTACT US
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  great together
                </span>
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                Have a project or business requirement? Get in touch with SLV
                PROTECH and let&apos;s discuss your needs.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
                  GET IN TOUCH
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  We&apos;d love to hear from you
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Address</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {company.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Phone</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {company.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {company.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">
                  Send us a message
                </h2>

                <form className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-full border border-blue-100 bg-blue-50/40 px-5 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-full border border-blue-100 bg-blue-50/40 px-5 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-full border border-blue-100 bg-blue-50/40 px-5 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400"
                  />

                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirement"
                    className="w-full resize-none rounded-[22px] border border-blue-100 bg-blue-50/40 px-5 py-4 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
