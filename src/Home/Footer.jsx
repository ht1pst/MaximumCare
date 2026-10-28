
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

// ==========================================
// MAXIMUM CARE FOOTER DATA
// ==========================================

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Laboratory & Specimen Delivery",
  "Pharmacy & Prescription Delivery",
  "Medical Supplies & Equipment",
  "Scheduled & STAT Courier Services",
];

const smoothEase = [0.22, 1, 0.36, 1];

// ==========================================
// MAIN FOOTER
// ==========================================

function Footer() {
  const reduceMotion = useReducedMotion();

  // ========================================
  // SCROLL REVEAL ANIMATION
  // ========================================

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 20,
        },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  return (
    <footer
      id="contact"
      className="
        relative isolate w-full
        overflow-hidden
        bg-[#07111F] text-white
      "
    >
      {/* ====================================== */}
      {/* TOP TEAL ACCENT */}
      {/* ====================================== */}

      <div
        className="
          h-[3px] w-full
          bg-gradient-to-r
          from-[#07111F]
          via-[#0C9B97]
          to-[#07111F]
        "
      />

      {/* SUBTLE BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 top-0
          h-[350px] w-[350px]
          rounded-full bg-[#0C9B97]/10
          blur-[100px]
        "
      />

      <div
        className="
          relative z-10 mx-auto
          max-w-[1280px]
          px-5 sm:px-8 lg:px-12
        "
      >
        {/* ====================================== */}
        {/* 1. COMPACT CALL TO ACTION */}
        {/* ====================================== */}

        <div
          className="
            flex flex-col
            items-start justify-between
            gap-5 border-b border-white/10
            py-9 sm:py-10
            lg:flex-row lg:items-center
          "
        >
          {/* LEFT TEXT */}
          <motion.div {...reveal(0)}>
            <p
              className="
                mb-2 text-[11px]
                font-bold uppercase
                tracking-[0.18em]
                text-[#6DE0D3]
              "
            >
              LET'S GET STARTED
            </p>

            <h2
              className="
                text-[25px] font-extrabold
                leading-[1.2]
                tracking-[-0.03em]
                text-white
                sm:text-[32px]
                lg:text-[36px]
              "
            >
              Need a Dependable Medical Courier Partner?
            </h2>

            <p
              className="
                mt-2 max-w-[540px]
                text-[13px] leading-[1.75]
                text-[#AEBECD]
                sm:text-[14px]
              "
            >
              Tell us what you need, and we'll discuss
              suitable delivery options.
            </p>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            {...reveal(0.1)}
            className="
              flex w-full flex-wrap gap-3
              sm:w-auto
            "
          >
            <Link
              to="/request-quote"
              className="
                inline-flex min-h-[46px]
                items-center justify-center
                gap-2 rounded-xl
                bg-[#0C9B97] px-6
                text-[12px] font-extrabold
                text-white
                shadow-[0_8px_24px_rgba(12,155,151,0.17)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#087F7C]
              "
            >
              Request a Quote

              <svg
                width="16"
                height="16"
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
            </Link>

            <a
              href="tel:+17087330065"
              className="
                inline-flex min-h-[46px]
                items-center justify-center
                gap-2 rounded-xl
                border border-white/20
                px-6 text-[12px]
                font-bold text-white
                transition-all duration-300
                hover:border-[#6DE0D3]
                hover:bg-white/5
              "
            >
              Call Us
            </a>
          </motion.div>
        </div>

        {/* ====================================== */}
        {/* 2. MAIN FOOTER INFORMATION */}
        {/* ====================================== */}

        <div
          className="
            grid grid-cols-1
            gap-8 py-10
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_0.75fr_1.05fr]
            lg:gap-12 lg:py-12
          "
        >
          {/* ================================== */}
          {/* COLUMN 1 — COMPANY INFORMATION */}
          {/* ================================== */}

          <motion.div {...reveal(0)}>
            <h3
              className="
                text-[19px] font-extrabold
                tracking-[-0.02em] text-white
              "
            >
              MAXIMUM{" "}
              <span className="text-[#6DE0D3]">
                CARE
              </span>
              <span className="ml-1 text-[12px]">
                LLC
              </span>
            </h3>

            <p
              className="
                mt-3 max-w-[360px]
                text-[13px] leading-[1.8]
                text-[#94A9BC]
              "
            >
              Professional medical courier services
              supporting healthcare organizations
              across Fargo–Moorhead and surrounding
              communities.
            </p>

            {/* SMALL BRAND TAGLINE */}
            <div
              className="
                mt-4 flex flex-wrap gap-2
              "
            >
              {[
                "Responsible Handling",
                "Clear Communication",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border border-[#0C9B97]/25
                    bg-[#0C9B97]/10
                    px-3 py-1.5
                    text-[10px] font-semibold
                    text-[#6DE0D3]
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* SERVICE SUMMARY */}
            <p
              className="
                mt-4 text-[12px]
                font-medium text-[#71879C]
              "
            >
              Medical Courier & Healthcare Logistics
            </p>
          </motion.div>

          {/* ================================== */}
          {/* COLUMN 2 — QUICK LINKS */}
          {/* ================================== */}

          <motion.nav
            {...reveal(0.1)}
            aria-label="Footer navigation"
          >
            <h3
              className="
                mb-4 text-[12px]
                font-extrabold uppercase
                tracking-[0.13em]
                text-white
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="
                      inline-flex items-center
                      gap-2 text-[13px]
                      text-[#94A9BC]
                      transition-colors duration-300
                      hover:text-[#6DE0D3]
                    "
                  >
                    <span
                      className="
                        h-1.5 w-1.5
                        rounded-full bg-[#0C9B97]
                      "
                    />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* ================================== */}
          {/* COLUMN 3 — CONTACT INFORMATION */}
          {/* ================================== */}

          <motion.div {...reveal(0.2)}>
            <h3
              className="
                mb-4 text-[12px]
                font-extrabold uppercase
                tracking-[0.13em]
                text-white
              "
            >
              Get In Touch
            </h3>

            <div className="space-y-4">

              {/* PHONE */}
              <a
                href="tel:+17087330065"
                className="
                  flex items-start gap-3
                  text-[13px] text-[#D6E1EB]
                  transition-colors duration-300
                  hover:text-[#6DE0D3]
                "
              >
                <svg
                  className="mt-0.5 shrink-0 text-[#6DE0D3]"
                  width="17"
                  height="17"
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

                <span>708-733-0065</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@maximumcare.net"
                className="
                  flex items-start gap-3
                  break-all
                  text-[13px] text-[#D6E1EB]
                  transition-colors duration-300
                  hover:text-[#6DE0D3]
                "
              >
                <svg
                  className="mt-0.5 shrink-0 text-[#6DE0D3]"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                  />
                  <path d="m2 7 10 7 10-7" />
                </svg>

                <span>info@maximumcare.net</span>
              </a>

              {/* LOCATION */}
              <div
                className="
                  flex items-start gap-3
                  text-[13px] leading-[1.7]
                  text-[#D6E1EB]
                "
              >
                <svg
                  className="mt-0.5 shrink-0 text-[#6DE0D3]"
                  width="18"
                  height="18"
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

                <address className="not-italic">
                  609 38th Avenue South
                  <span className="block">
                    Moorhead, MN 56560
                  </span>
                </address>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ====================================== */}
        {/* 3. BOTTOM BAR */}
        {/* ====================================== */}

        <div
          className="
            flex flex-col items-center
            justify-between gap-3
            border-t border-white/10
            py-5 text-center
            sm:flex-row sm:text-left
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-[11px] text-[#71879C]
              sm:text-[12px]
            "
          >
            © {new Date().getFullYear()} Maximum Care LLC.
            All rights reserved.
          </p>

          {/* LEGAL LINKS */}
          <div
            className="
              flex flex-wrap items-center
              justify-center gap-4
            "
          >
            <Link
              to="/privacy-policy"
              className="
                text-[11px] text-[#94A9BC]
                transition-colors duration-300
                hover:text-[#6DE0D3]
                sm:text-[12px]
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/services"
              className="
                text-[11px] text-[#94A9BC]
                transition-colors duration-300
                hover:text-[#6DE0D3]
                sm:text-[12px]
              "
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
