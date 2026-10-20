
import { Link } from "react-router-dom";

// ICON COMPONENTS
const ArrowIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2.18 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.57 1.79L7.8 9.8a16 16 0 0 0 6.4 6.4l1.29-1.31a2 2 0 0 1 1.79-.57l3 .5A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const TruckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 6h12v12H3z" />
    <path d="M15 10h4l3 4v4h-7" />
    <circle cx="7.5" cy="18" r="2" />
    <circle cx="18.5" cy="18" r="2" />
  </svg>
);

// FOOTER LINKS
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Laboratory Specimen Transportation",
  "Prescription & Pharmacy Deliveries",
  "Medical Supplies & Equipment",
  "Scheduled Courier Services",
  "Time-Sensitive & STAT Deliveries",
];

function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#07111F] text-white">

      {/* TOP TEAL ACCENT LINE */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#07111F] via-[#0C9B97] to-[#07111F]" />

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-[180px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#0C9B97]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-[180px] bottom-[100px] h-[500px] w-[500px] rounded-full bg-[#0C9B97]/10 blur-[130px]" />

      {/* DECORATIVE MEDICAL CROSS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-32 select-none text-[350px] font-black leading-none text-[#0C9B97]/[0.045] sm:text-[500px]"
      >
        +
      </div>

      {/* ============================= */}
      {/* 1. PREMIUM FOOTER OPENING      */}
      {/* ============================= */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-20 pb-16 sm:px-10 lg:px-14 lg:pt-28">

        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          {/* LEFT CONTENT */}
          <div>

            {/* EYEBROW */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#0C9B97]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#6DE0D3] sm:text-[12px]">
                YOUR PARTNER IN HEALTHCARE LOGISTICS
              </p>
            </div>

            {/* MAIN HEADING */}
            <h2 className="max-w-[700px] text-[38px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-[48px] lg:text-[58px]">
              Every Delivery
              <br />
              Matters.
              <span className="mt-2 block text-[#6DE0D3]">
                Every Detail Counts.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[570px] text-[15px] leading-[1.9] text-[#AEBECD] sm:text-[16px]">
              At Maximum Care LLC, we understand the importance
              of dependable medical transportation. We support
              healthcare organizations with professional courier
              solutions built around reliability, responsible
              handling, and clear communication.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* REQUEST QUOTE */}
              <a
                href="mailto:maximumcaree@gmail.com?subject=Medical%20Courier%20Quote%20Request"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg bg-[#0C9B97] px-8 text-[13px] font-extrabold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7C] hover:shadow-[0_12px_35px_rgba(12,155,151,0.22)]"
              >
                REQUEST A QUOTE

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>

              {/* PHONE BUTTON */}
              <a
                href="tel:+17087330065"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg border border-white/20 bg-transparent px-8 text-[13px] font-bold uppercase tracking-[0.07em] text-white transition-all duration-300 hover:border-[#6DE0D3] hover:bg-white/5"
              >
                <PhoneIcon />
                CALL US TODAY
              </a>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:pt-14">

            {/* FEATURE 1 */}
            <div className="group flex items-start gap-5 border-b border-white/10 pb-9">

              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-xl border border-[#0C9B97]/30 bg-[#0C9B97]/10 text-[#6DE0D3] transition-colors duration-300 group-hover:bg-[#0C9B97]/20">
                <ShieldIcon />
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Responsible Medical Handling
                </h3>

                <p className="mt-3 max-w-[380px] text-[14px] leading-[1.8] text-[#94A9BC]">
                  We prioritize careful transportation,
                  responsible custody, and attention to the
                  unique requirements of healthcare shipments.
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="group flex items-start gap-5 border-b border-white/10 py-9">

              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-xl border border-[#0C9B97]/30 bg-[#0C9B97]/10 text-[#6DE0D3] transition-colors duration-300 group-hover:bg-[#0C9B97]/20">
                <TruckIcon />
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-white">
                  Local & Regional Courier Solutions
                </h3>

                <p className="mt-3 max-w-[380px] text-[14px] leading-[1.8] text-[#94A9BC]">
                  Based in Moorhead, Minnesota, supporting
                  healthcare organizations throughout Fargo,
                  Moorhead, Dilworth, and nearby communities.
                </p>
              </div>
            </div>

            {/* TAGLINE */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {["FAST", "SECURE", "RELIABLE"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0C9B97]/25 bg-[#0C9B97]/[0.07] px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-[#6DE0D3]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ============================= */}
      {/* 2. LARGE CENTERED BRAND AREA  */}
      {/* ============================= */}

      <div className="relative z-10 border-y border-white/[0.08] bg-white/[0.015]">

        <div className="relative mx-auto flex min-h-[280px] max-w-[1280px] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:min-h-[350px] lg:min-h-[400px]">

          {/* SUBTLE LINES */}
          <div className="absolute left-6 right-6 top-8 h-px bg-gradient-to-r from-transparent via-[#0C9B97]/30 to-transparent" />

          <div className="absolute bottom-8 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0C9B97]/30 to-transparent" />

          {/* SMALL BRAND ACCENT */}
          <p className="mb-7 text-[11px] font-bold uppercase tracking-[0.4em] text-[#6DE0D3] sm:text-[12px]">
            DELIVERING CARE WITH PRECISION
          </p>

          {/* LOGO AREA */}

          {/*
            REPLACE THIS TEXT WITH YOUR LOGO.

            Example:

            <img
              src={yourLogo}
              alt="Maximum Care LLC"
              className="mx-auto w-[260px] sm:w-[380px] lg:w-[500px]"
            />

            Remove the h2 below after adding your logo.
          */}

          <h2 className="max-w-full text-[clamp(2.4rem,7vw,6rem)] font-black leading-none tracking-[-0.06em] text-white">
            MAXIMUM
            <span className="text-[#6DE0D3]">
              {" "}CARE
            </span>
          </h2>

          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#AEBECD] sm:text-[13px]">
            LLC · MEDICAL COURIER SERVICES
          </p>

          {/* ACCENT */}
          <div className="mt-8 h-[3px] w-[70px] rounded-full bg-[#0C9B97]" />

        </div>
      </div>

      {/* ============================= */}
      {/* 3. FOOTER LINKS & CONTACT     */}
      {/* ============================= */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* COLUMN 1 */}
          <div>
            <h3 className="mb-7 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white">
              MAXIMUM CARE LLC
            </h3>

            <p className="max-w-[275px] text-[14px] leading-[1.9] text-[#94A9BC]">
              Professional medical courier services
              supporting healthcare providers,
              laboratories, pharmacies, and medical
              facilities across Minnesota and North Dakota.
            </p>

            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6DE0D3]">
              Fast. Secure. Reliable.
            </p>
          </div>

          {/* COLUMN 2 */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-7 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white">
              QUICK LINKS
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-2 text-[14px] text-[#94A9BC] transition-colors duration-300 hover:text-[#6DE0D3]"
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-[#0C9B97] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUMN 3 */}
          <div>
            <h3 className="mb-7 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white">
              OUR SERVICES
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-[14px] leading-6 text-[#94A9BC] transition-colors duration-300 hover:text-[#6DE0D3]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="mb-7 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white">
              GET IN TOUCH
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <a
                href="tel:+17087330065"
                className="group flex items-start gap-4"
              >
                <span className="mt-1 shrink-0 text-[#6DE0D3]">
                  <PhoneIcon />
                </span>

                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#71879C]">
                    CALL US
                  </span>

                  <span className="mt-1 block text-[14px] font-semibold text-[#D6E1EB] transition-colors group-hover:text-[#6DE0D3]">
                    708-733-0065
                  </span>
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:maximumcaree@gmail.com"
                className="group flex items-start gap-4"
              >
                <span className="mt-1 shrink-0 text-[#6DE0D3]">
                  <MailIcon />
                </span>

                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#71879C]">
                    EMAIL US
                  </span>

                  <span className="mt-1 block break-all text-[14px] font-semibold text-[#D6E1EB] transition-colors group-hover:text-[#6DE0D3]">
                    maximumcaree@gmail.com
                  </span>
                </span>
              </a>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-[#6DE0D3]">
                  <PinIcon />
                </span>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#71879C]">
                    OUR LOCATION
                  </span>

                  <address className="mt-1 text-[14px] leading-7 font-normal not-italic text-[#D6E1EB]">
                    609 38th Avenue South
                    <br />
                    Moorhead, MN 56560
                  </address>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ============================= */}
      {/* 4. FOOTER BOTTOM BAR          */}
      {/* ============================= */}

      <div className="relative z-10 border-t border-white/[0.08]">

        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-5 px-6 py-7 text-center sm:px-10 lg:flex-row lg:px-14 lg:text-left">

          {/* COPYRIGHT */}
          <p className="text-[12px] text-[#71879C]">
            © {new Date().getFullYear()} Maximum Care LLC.
            All rights reserved.
          </p>

          {/* CENTER MESSAGE */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6DE0D3]">
            DELIVERING CARE WITH PRECISION
          </p>

          {/* LEGAL LINK */}
          <Link
            to="/privacy-policy"
            className="text-[12px] text-[#94A9BC] transition-colors duration-300 hover:text-[#6DE0D3]"
          >
            Privacy Policy
          </Link>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
