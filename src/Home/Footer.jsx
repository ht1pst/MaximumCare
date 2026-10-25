
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

// =====================================
// ICON COMPONENTS
// =====================================

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

// =====================================
// FOOTER DATA
// =====================================

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

const smoothEase = [0.22, 1, 0.36, 1];

// =====================================
// MAIN FOOTER
// =====================================

function Footer() {
  const reduceMotion = useReducedMotion();

  // REUSABLE MOTION ANIMATION
  // Changes direction, delay, and distance.
  const reveal = (
    direction = "up",
    delay = 0,
    distance = 35
  ) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -distance
              : direction === "right"
              ? distance
              : 0,
          y: direction === "up" ? distance : 0,
        },

    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },

    viewport: {
      once: false,
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  return (
    <footer
      id="contact"
      className="
        relative isolate overflow-hidden
        bg-[#07111F] text-white
      "
    >
      {/* ===================================== */}
      {/* ANIMATED TOP TEAL ACCENT LINE        */}
      {/* ===================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : { scaleX: 0, opacity: 0 }
        }
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{ once: false }}
        transition={{
          duration: reduceMotion ? 0 : 1.5,
          ease: smoothEase,
        }}
        className="
          h-[3px] w-full origin-center
          bg-gradient-to-r
          from-[#07111F]
          via-[#0C9B97]
          to-[#07111F]
        "
      />

      {/* ===================================== */}
      {/* ANIMATED BACKGROUND GLOW             */}
      {/* ===================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[180px] top-[100px]
          h-[500px] w-[500px]
          rounded-full bg-[#0C9B97]/10
          blur-[130px]
        "
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 55, -20, 0],
                y: [0, -35, 20, 0],
                scale: [1, 1.12, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-[180px] bottom-[100px]
          h-[500px] w-[500px]
          rounded-full bg-[#0C9B97]/10
          blur-[130px]
        "
      />

      {/* DECORATIVE MEDICAL CROSS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-16 top-32 select-none
          text-[350px] font-black
          leading-none
          text-[#0C9B97]/[0.045]
          sm:text-[500px]
        "
      >
        +
      </div>

      {/* ===================================== */}
      {/* 1. PREMIUM FOOTER OPENING            */}
      {/* ===================================== */}

      <div
        className="
          relative z-10 mx-auto
          max-w-[1280px]
          px-6 pb-16 pt-20
          sm:px-10
          lg:px-14 lg:pt-28
        "
      >
        <div
          className="
            grid items-start gap-14
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-24
          "
        >
          {/* ===================================== */}
          {/* LEFT CONTENT                         */}
          {/* ===================================== */}

          <div>

            {/* ANIMATED EYEBROW */}
            <motion.div
              {...reveal("left", 0)}
              className="mb-7 flex items-center gap-3"
            >
              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : { scaleX: 0 }
                }
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease: smoothEase,
                }}
                className="
                  h-[2px] w-9 shrink-0
                  origin-left bg-[#0C9B97]
                "
              />

              <p
                className="
                  text-[11px] font-bold
                  uppercase tracking-[0.28em]
                  text-[#6DE0D3]
                  sm:text-[12px]
                "
              >
                YOUR PARTNER IN HEALTHCARE LOGISTICS
              </p>
            </motion.div>

            {/* ===================================== */}
            {/* ANIMATED MAIN HEADING                */}
            {/* ===================================== */}

            <h2
              className="
                max-w-[700px]
                text-[38px] font-extrabold
                leading-[1.12] tracking-[-0.035em]
                text-white
                sm:text-[48px]
                lg:text-[58px]
              "
            >
              <motion.span
                {...reveal("left", 0.1)}
                className="block"
              >
                Every Delivery
              </motion.span>

              <motion.span
                {...reveal("left", 0.22)}
                className="block"
              >
                Matters.
              </motion.span>

              <motion.span
                {...reveal("up", 0.35)}
                className="
                  mt-2 block text-[#6DE0D3]
                "
              >
                Every Detail Counts.
              </motion.span>
            </h2>

            {/* ANIMATED DESCRIPTION */}
            <motion.p
              {...reveal("up", 0.4)}
              className="
                mt-7 max-w-[570px]
                text-[15px] leading-[1.9]
                text-[#AEBECD]
                sm:text-[16px]
              "
            >
              At Maximum Care LLC, we understand the importance
              of dependable medical transportation. We support
              healthcare organizations with professional courier
              solutions built around reliability, responsible
              handling, and clear communication.
            </motion.p>

            {/* ===================================== */}
            {/* ANIMATED CTA BUTTONS                 */}
            {/* ===================================== */}

            <motion.div
              {...reveal("up", 0.5)}
              className="
                mt-9 flex flex-col gap-4
                sm:flex-row
              "
            >
              {/* REQUEST QUOTE */}
              <motion.a
                  href="/request-quote"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.04,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.96 }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  group inline-flex min-h-[54px]
                  items-center justify-center
                  gap-3 rounded-lg
                  bg-[#0C9B97] px-8

                  text-[13px] font-extrabold
                  uppercase tracking-[0.08em]
                  text-white

                  transition-colors duration-300
                  hover:bg-[#087F7C]
                  hover:shadow-[0_12px_35px_rgba(12,155,151,0.22)]
                "
              >
                REQUEST A QUOTE

                <span
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowIcon />
                </span>
              </motion.a>

              {/* CALL BUTTON */}
              <motion.a
                href="tel:+17087330065"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.04,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.96 }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  inline-flex min-h-[54px]
                  items-center justify-center
                  gap-3 rounded-lg

                  border border-white/20
                  bg-transparent px-8

                  text-[13px] font-bold
                  uppercase tracking-[0.07em]
                  text-white

                  transition-colors duration-300
                  hover:border-[#6DE0D3]
                  hover:bg-white/5
                "
              >
                <PhoneIcon />
                CALL US TODAY
              </motion.a>
            </motion.div>
          </div>

          {/* ===================================== */}
          {/* RIGHT CONTENT                        */}
          {/* ===================================== */}

          <div className="lg:pt-14">

            {/* FEATURE 1 */}
            <motion.div
              {...reveal("right", 0.15)}
              className="
                group flex items-start gap-5
                border-b border-white/10 pb-9
              "
            >
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.1,
                        rotate: -7,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="
                  flex h-[54px] w-[54px]
                  shrink-0 items-center justify-center
                  rounded-xl

                  border border-[#0C9B97]/30
                  bg-[#0C9B97]/10
                  text-[#6DE0D3]

                  transition-colors duration-300
                  group-hover:bg-[#0C9B97]/20
                "
              >
                <ShieldIcon />
              </motion.div>

              <div>
                <h3
                  className="
                    text-[18px] font-bold text-white
                  "
                >
                  Responsible Medical Handling
                </h3>

                <p
                  className="
                    mt-3 max-w-[380px]
                    text-[14px] leading-[1.8]
                    text-[#94A9BC]
                  "
                >
                  We prioritize careful transportation,
                  responsible custody, and attention to the
                  unique requirements of healthcare shipments.
                </p>
              </div>
            </motion.div>

            {/* FEATURE 2 */}
            <motion.div
              {...reveal("right", 0.3)}
              className="
                group flex items-start gap-5
                border-b border-white/10 py-9
              "
            >
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.1,
                        rotate: -7,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="
                  flex h-[54px] w-[54px]
                  shrink-0 items-center justify-center
                  rounded-xl

                  border border-[#0C9B97]/30
                  bg-[#0C9B97]/10
                  text-[#6DE0D3]

                  transition-colors duration-300
                  group-hover:bg-[#0C9B97]/20
                "
              >
                <TruckIcon />
              </motion.div>

              <div>
                <h3
                  className="
                    text-[18px] font-bold text-white
                  "
                >
                  Local & Regional Courier Solutions
                </h3>

                <p
                  className="
                    mt-3 max-w-[380px]
                    text-[14px] leading-[1.8]
                    text-[#94A9BC]
                  "
                >
                  Based in Moorhead, Minnesota, supporting
                  healthcare organizations throughout Fargo,
                  Moorhead, Dilworth, and nearby communities.
                </p>
              </div>
            </motion.div>

            {/* ANIMATED TAGLINE PILLS */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {["FAST", "SECURE", "RELIABLE"].map(
                (item, index) => (
                  <motion.span
                    key={item}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 20,
                            scale: 0.85,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion
                        ? 0
                        : index * 0.12,
                      ease: smoothEase,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                            scale: 1.06,
                          }
                    }
                    className="
                      rounded-full
                      border border-[#0C9B97]/25
                      bg-[#0C9B97]/[0.07]
                      px-4 py-2

                      text-[11px] font-bold
                      tracking-[0.12em]
                      text-[#6DE0D3]
                    "
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* 2. ANIMATED CENTER BRAND AREA        */}
      {/* ===================================== */}

      <div
        className="
          relative z-10
          border-y border-white/[0.08]
          bg-white/[0.015]
        "
      >
        <div
          className="
            relative mx-auto flex
            min-h-[280px] max-w-[1280px]
            flex-col items-center justify-center
            overflow-hidden px-6 py-16 text-center

            sm:min-h-[350px]
            lg:min-h-[400px]
          "
        >
          {/* TOP DECORATIVE LINE */}
          <div
            className="
              absolute left-6 right-6 top-8
              h-px bg-gradient-to-r
              from-transparent
              via-[#0C9B97]/30
              to-transparent
            "
          />

          {/* BOTTOM DECORATIVE LINE */}
          <div
            className="
              absolute bottom-8 left-6 right-6
              h-px bg-gradient-to-r
              from-transparent
              via-[#0C9B97]/30
              to-transparent
            "
          />

          {/* SMALL BRAND ACCENT */}
          <motion.p
            {...reveal("up", 0)}
            className="
              mb-7 text-[11px] font-bold
              uppercase tracking-[0.4em]
              text-[#6DE0D3]
              sm:text-[12px]
            "
          >
            DELIVERING CARE WITH PRECISION
          </motion.p>

          {/* ===================================== */}
          {/* DRAMATIC BRAND NAME REVEAL            */}
          {/* ===================================== */}

          <motion.h2
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 55,
                    scale: 0.88,
                    filter: "blur(9px)",
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.15,
              delay: reduceMotion ? 0 : 0.15,
              ease: smoothEase,
            }}
            className="
              max-w-full
              text-[clamp(1.9rem,6.7vw,6rem)]
              font-black leading-none
              tracking-[-0.06em]
              text-white
            "
          >
            MAXIMUM
            <span className="text-[#6DE0D3]">
              {" "}CARE
            </span>
          </motion.h2>

          {/* BRAND SUBTITLE */}
          <motion.p
            {...reveal("up", 0.35)}
            className="
              mt-5 text-[11px] font-semibold
              uppercase tracking-[0.3em]
              text-[#AEBECD]
              sm:text-[13px]
            "
          >
            LLC · MEDICAL COURIER SERVICES
          </motion.p>

          {/* ANIMATED BRAND UNDERLINE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    scaleX: 0,
                    opacity: 0,
                  }
            }
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: false,
              amount: 0.5,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              delay: reduceMotion ? 0 : 0.5,
              ease: smoothEase,
            }}
            className="
              mt-8 h-[3px] w-[70px]
              origin-center rounded-full
              bg-[#0C9B97]
            "
          />
        </div>
      </div>

      {/* ===================================== */}
      {/* 3. ANIMATED FOOTER LINKS & CONTACT   */}
      {/* ===================================== */}

      <div
        className="
          relative z-10 mx-auto
          max-w-[1280px]
          px-6 py-16
          sm:px-10
          lg:px-14 lg:py-20
        "
      >
        <div
          className="
            grid gap-12
            sm:grid-cols-2
            lg:grid-cols-4 lg:gap-10
          "
        >
          {/* ===================================== */}
          {/* COLUMN 1 - ABOUT                    */}
          {/* ===================================== */}

          <motion.div {...reveal("up", 0)}>
            <h3
              className="
                mb-7 text-[13px] font-extrabold
                uppercase tracking-[0.14em]
                text-white
              "
            >
              MAXIMUM CARE LLC
            </h3>

            <p
              className="
                max-w-[275px]
                text-[14px] leading-[1.9]
                text-[#94A9BC]
              "
            >
              Professional medical courier services
              supporting healthcare providers,
              laboratories, pharmacies, and medical
              facilities across Minnesota and North Dakota.
            </p>

            <p
              className="
                mt-6 text-[12px] font-semibold
                uppercase tracking-[0.16em]
                text-[#6DE0D3]
              "
            >
              Fast. Secure. Reliable.
            </p>
          </motion.div>

          {/* ===================================== */}
          {/* COLUMN 2 - QUICK LINKS              */}
          {/* ===================================== */}

          <motion.nav
            {...reveal("up", 0.12)}
            aria-label="Footer navigation"
          >
            <h3
              className="
                mb-7 text-[13px] font-extrabold
                uppercase tracking-[0.14em]
                text-white
              "
            >
              QUICK LINKS
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="
                      group inline-flex
                      items-center gap-2
                      text-[14px] text-[#94A9BC]
                      transition-colors duration-300
                      hover:text-[#6DE0D3]
                    "
                  >
                    <span
                      className="
                        h-[5px] w-[5px]
                        rounded-full bg-[#0C9B97]
                        opacity-0

                        transition-all duration-300
                        group-hover:opacity-100
                      "
                    />

                    <span
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* ===================================== */}
          {/* COLUMN 3 - SERVICES                 */}
          {/* ===================================== */}

          <motion.div {...reveal("up", 0.24)}>
            <h3
              className="
                mb-7 text-[13px] font-extrabold
                uppercase tracking-[0.14em]
                text-white
              "
            >
              OUR SERVICES
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="
                      inline-block
                      text-[14px] leading-6
                      text-[#94A9BC]

                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#6DE0D3]
                    "
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===================================== */}
          {/* COLUMN 4 - CONTACT                  */}
          {/* ===================================== */}

          <motion.div {...reveal("up", 0.36)}>
            <h3
              className="
                mb-7 text-[13px] font-extrabold
                uppercase tracking-[0.14em]
                text-white
              "
            >
              GET IN TOUCH
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <a
                href="tel:+17087330065"
                className="group flex items-start gap-4"
              >
                <span
                  className="
                    mt-1 shrink-0
                    text-[#6DE0D3]
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  <PhoneIcon />
                </span>

                <span>
                  <span
                    className="
                      block text-[11px] font-bold
                      uppercase tracking-wider
                      text-[#71879C]
                    "
                  >
                    CALL US
                  </span>

                  <span
                    className="
                      mt-1 block text-[14px]
                      font-semibold text-[#D6E1EB]
                      transition-colors duration-300
                      group-hover:text-[#6DE0D3]
                    "
                  >
                    708-733-0065
                  </span>
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:maximumcaree@gmail.com"
                className="group flex items-start gap-4"
              >
                <span
                  className="
                    mt-1 shrink-0
                    text-[#6DE0D3]
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  <MailIcon />
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block text-[11px] font-bold
                      uppercase tracking-wider
                      text-[#71879C]
                    "
                  >
                    EMAIL US
                  </span>

                  <span
                    className="
                      mt-1 block break-all
                      text-[14px] font-semibold
                      text-[#D6E1EB]
                      transition-colors duration-300
                      group-hover:text-[#6DE0D3]
                    "
                  >
                    info@maximumcare.net
                  </span>
                </span>
              </a>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <span
                  className="
                    mt-1 shrink-0
                    text-[#6DE0D3]
                  "
                >
                  <PinIcon />
                </span>

                <div>
                  <span
                    className="
                      block text-[11px] font-bold
                      uppercase tracking-wider
                      text-[#71879C]
                    "
                  >
                    OUR LOCATION
                  </span>

                  <address
                    className="
                      mt-1 text-[14px]
                      font-normal not-italic
                      leading-7 text-[#D6E1EB]
                    "
                  >
                    609 38th Avenue South
                    <br />
                    Moorhead, MN 56560
                  </address>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* ===================================== */}
      {/* 4. ANIMATED FOOTER BOTTOM BAR        */}
      {/* ===================================== */}

      <div
        className="
          relative z-10
          border-t border-white/[0.08]
        "
      >
        <motion.div
          {...reveal("up", 0)}
          className="
            mx-auto flex max-w-[1280px]
            flex-col items-center justify-between
            gap-5 px-6 py-7 text-center

            sm:px-10

            lg:flex-row lg:px-14
            lg:text-left
          "
        >
          {/* COPYRIGHT */}
          <p className="text-[12px] text-[#71879C]">
            © {new Date().getFullYear()} Maximum Care LLC.
            All rights reserved.
          </p>

          {/* CENTER MESSAGE */}
          <p
            className="
              text-[11px] font-semibold
              uppercase tracking-[0.15em]
              text-[#6DE0D3]
            "
          >
            DELIVERING CARE WITH PRECISION
          </p>

          {/* PRIVACY LINK */}
          <Link
            to="/privacy-policy"
            className="
              text-[12px] text-[#94A9BC]
              transition-colors duration-300
              hover:text-[#6DE0D3]
            "
          >
            Privacy Policy
          </Link>
        </motion.div>
      </div>

    </footer>
  );
}

export default Footer;
