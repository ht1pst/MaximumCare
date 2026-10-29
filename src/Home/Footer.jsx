
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact Us", href: "/contact" },
];

function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 18 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <footer
      id="contact"
      className="
        relative w-full overflow-hidden
        bg-[#07111F] text-white
      "
    >
      {/* TOP TEAL ACCENT */}
      <div
        className="
          h-[3px] w-full
          bg-gradient-to-r
          from-[#07111F]
          via-[#0C9B97]
          to-[#07111F]
        "
      />

      <div
        className="
          relative mx-auto
          max-w-[1280px]
          px-5 sm:px-8 lg:px-12
        "
      >
        {/* ====================================== */}
        {/* MAIN FOOTER INFORMATION */}
        {/* ====================================== */}

        <div
          className="
            grid grid-cols-1
            gap-9 py-10
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_0.75fr_1.05fr]
            lg:gap-12 lg:py-12
          "
        >
          {/* COLUMN 1 — COMPANY INFORMATION */}
          <motion.div {...reveal(0)}>
            <h3
              className="
                text-[20px] font-extrabold
                tracking-[-0.02em] text-white
              "
            >
              MAXIMUM{" "}
              <span className="text-[#6DE0D3]">
                CARE
              </span>{" "}
              <span className="text-[12px]">
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
              across Fargo–Moorhead and
              surrounding communities.
            </p>

            <p
              className="
                mt-4 text-[11px]
                font-bold uppercase
                tracking-[0.16em]
                text-[#6DE0D3]
              "
            >
              Fast. Secure. Reliable.
            </p>
          </motion.div>

          {/* COLUMN 2 — QUICK LINKS */}
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
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="
                      inline-flex items-center gap-2
                      text-[13px] text-[#94A9BC]
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

          {/* COLUMN 3 — CONTACT INFORMATION */}
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
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-[#6DE0D3]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2.18 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.57 1.79L7.8 9.8a16 16 0 0 0 6.4 6.4l1.29-1.31a2 2 0 0 1 1.79-.57l3 .5A2 2 0 0 1 22 16.92Z" />
                </svg>

                708-733-0065
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@maximumcare.net"
                className="
                  flex items-start gap-3
                  break-all text-[13px]
                  text-[#D6E1EB]
                  transition-colors duration-300
                  hover:text-[#6DE0D3]
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-[#6DE0D3]"
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

                info@maximumcare.net
              </a>

              {/* ADDRESS */}
              <div
                className="
                  flex items-start gap-3
                  text-[13px] leading-[1.7]
                  text-[#D6E1EB]
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-[#6DE0D3]"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
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
        {/* BOTTOM BAR */}
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
          <p
            className="
              text-[11px] text-[#71879C]
              sm:text-[12px]
            "
          >
            © {new Date().getFullYear()} Maximum Care LLC.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
