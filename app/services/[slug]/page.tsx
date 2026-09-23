import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { services } from "../../../data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* SEO Metadata */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service | SLV PROTECH",
      description: "Technology and digital solutions from SLV PROTECH.",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

          <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-blue-600">
                Home
              </Link>

              <span className="mx-2">/</span>

              <Link href="/services" className="transition hover:text-blue-600">
                Services
              </Link>

              <span className="mx-2">/</span>

              <span className="text-slate-700">{service.title}</span>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left */}
              <div>
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-lg font-bold text-white shadow-lg`}
                >
                  {service.number}
                </div>

                <p className="text-sm font-bold tracking-[0.28em] text-blue-600">
                  OUR SERVICE
                </p>

                <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href="#requirements"
                    className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Tell Us Your Requirement →
                  </a>

                  <Link
                    href="/services"
                    className="rounded-full border border-blue-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition duration-300 hover:border-blue-400 hover:text-blue-600"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Image / Feature Card */}
              <div className="relative">
                {service.image ? (
                  <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-2 shadow-xl shadow-blue-100/50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[340px] w-full rounded-[24px] object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex h-[340px] items-center justify-center rounded-[30px] bg-gradient-to-br ${service.gradient} shadow-xl`}
                  >
                    <span className="text-7xl">{service.icon}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OVERVIEW
        ====================================================== */}
        <section className="border-t border-blue-100 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold tracking-[0.28em] text-blue-600">
                  ABOUT THIS SERVICE
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Technology designed around your business
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-slate-600">
                  {service.overview}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE PROVIDE
        ====================================================== */}
        <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold tracking-[0.28em] text-blue-600">
                WHAT WE PROVIDE
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Services & Capabilities
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                We provide practical technology solutions based on your business
                requirements, goals and workflows.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.features.map((feature, index) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-4 font-bold leading-6 text-slate-900">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold tracking-[0.28em] text-blue-600">
                  KEY BENEFITS
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  Built to create real business value
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Our approach focuses on creating technology that is practical,
                  scalable and aligned with your business objectives.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/40 p-5"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                      ✓
                    </div>

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR PROCESS
        ====================================================== */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold tracking-[0.28em] text-blue-600">
                OUR PROCESS
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                How we work
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                A structured approach helps us understand your requirements and
                deliver a solution that fits your business.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-sm font-bold text-white shadow-md`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mt-5 text-sm font-semibold leading-6 text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            IDEAL FOR
        ====================================================== */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[30px] border border-blue-100 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-sm font-bold tracking-[0.28em] text-blue-600">
                    WHO IS IT FOR?
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                    Solutions for different business needs
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {service.idealFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REQUIREMENTS FORM
        ====================================================== */}
        <section
          id="requirements"
          className="bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 py-16"
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-xl shadow-blue-100/50">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* Form Introduction */}
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 text-white sm:p-10">
                  <p className="text-sm font-bold tracking-[0.25em] text-blue-100">
                    LET'S BUILD IT
                  </p>

                  <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                    What are your requirements?
                  </h2>

                  <p className="mt-5 leading-7 text-blue-50">
                    Tell us what you are looking to build, improve or automate.
                    Our team will understand your requirements and help you
                    identify the right technology solution.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                        ✓
                      </span>
                      <span className="text-sm">
                        Business-focused solutions
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                        ✓
                      </span>
                      <span className="text-sm">
                        Customized technology approach
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                        ✓
                      </span>
                      <span className="text-sm">
                        Discuss your requirements with our team
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="p-8 sm:p-10">
                  <form action="/contact" method="GET" className="space-y-5">
                    <input type="hidden" name="service" value={service.title} />

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* Requirements */}
                    <div>
                      <label
                        htmlFor="requirements"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        What are your requirements?
                      </label>

                      <textarea
                        id="requirements"
                        name="requirements"
                        required
                        rows={5}
                        placeholder={`Tell us about your ${service.title.toLowerCase()} requirements...`}
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Send My Requirement →
                    </button>

                    <p className="text-center text-xs leading-5 text-slate-400">
                      Share your requirements and our team can discuss the right
                      solution with you.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-50 p-8 text-center shadow-lg shadow-blue-100/40 sm:p-12">
              <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
                READY TO GET STARTED?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Let's discuss your project
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Whether you are starting a new project or improving an existing
                solution, tell us what you need and we can explore the right
                approach for your business.
              </p>

              <a
                href="#requirements"
                className="mt-7 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Tell Us Your Requirement →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
