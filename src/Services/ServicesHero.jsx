
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";
import heroImg from "../assets/servicesheroimg.webp";

const smoothEase = [0.22, 1, 0.36, 1];

function ServicesHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // HEADER SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SAME LOGIC AS YOUR HOMEPAGE HERO
  const solidHeader = scrolled || menuOpen;

  // HERO ANIMATIONS
  const reveal = (direction = "up", delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -35
              : direction === "right"
              ? 35
              : 0,
          y: direction === "up" ? 30 : 0,
        },

    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  const desktopLinkClass = `group relative block whitespace-nowrap py-3 text-[15px] font-semibold transition-colors duration-300 ${
    solidHeader
      ? "text-[#102A43] hover:text-[#0C9B97]"
      : "text-white hover:text-[#6DE0D3]"
  }`;

  const mobileLinkClass =
    "flex items-center justify-between border-b border-[#E3EDF2] py-4 text-[16px] font-semibold text-[#102A43] transition-colors hover:text-[#0C9B97]";

  return (
    <section
      id="services-hero"
      className="relative isolate z-100 w-full overflow-hidden bg-[#071E34] text-white"
    >
      {/* ===================================== */}
      {/* HEADER                                */}
      {/* ===================================== */}

      <header
        className={`fixed left-0 h-20 top-0 z-50 w-full transition-all duration-500 ${
          solidHeader
            ? "bg-white/95 shadow-[0_5px_30px_rgba(16,42,67,0.10)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 transition-all duration-500 sm:px-8 lg:px-10 xl:px-[75px] ${
            scrolled
              ? "h-[72px] lg:h-[78px]"
              : "h-[80px] lg:h-[95px]"
          }`}
        >
          {/* LOGO */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -25 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: smoothEase,
            }}
            className="relative z-10 shrink-0"
          >
            <Link
              to="/"
              aria-label="Maximum Care LLC Home"
              onClick={() => setMenuOpen(false)}
            >
              <motion.img
                src={logo}
                alt="Maximum Care LLC"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.05 }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`w-[135px] object-contain transition-[width] duration-500 sm:w-[150px] ${
                  scrolled
                    ? "lg:w-[150px]"
                    : "lg:w-[170px]"
                }`}
              />
            </Link>
          </motion.div>

          {/* ================================= */}
          {/* DESKTOP NAVIGATION                */}
          {/* ================================= */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex xl:gap-9"
          >
            <motion.div {...reveal("up", 0.1)}>
              <Link to="/" className={desktopLinkClass}>
                Home
                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            <motion.div {...reveal("up", 0.2)}>
              <Link
                to="/about"
                className={desktopLinkClass}
              >
                About Us
                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            <motion.div {...reveal("up", 0.3)}>
              <Link
                to="/services"
                className={desktopLinkClass}
              >
                Services
                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            <motion.div {...reveal("up", 0.4)}>
              <Link
                to="/service-areas"
                className={desktopLinkClass}
              >
                Service Areas
                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            <motion.div {...reveal("up", 0.5)}>
              <Link
                to="/contact"
                className={desktopLinkClass}
              >
                Contact Us
                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </nav>

          {/* ================================= */}
          {/* RIGHT SIDE                        */}
          {/* ================================= */}

          <div className="flex items-center gap-4">
            {/* DESKTOP QUOTE BUTTON */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: 25 }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -3, scale: 1.03 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.96 }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
              }}
              className="hidden xl:block"
            >
              <Link
                to="/request-quote"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-[#0C9B97] px-6 text-[13px] font-bold text-white shadow-[0_6px_20px_rgba(12,155,151,0.15)] transition-colors duration-300 hover:bg-[#087F7C]"
              >
                Request a Quote

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl transition-all duration-300 xl:hidden ${
                solidHeader
                  ? "bg-[#F0F8FC] text-[#102A43]"
                  : "bg-white/15 text-white"
              }`}
            >
              <motion.svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: menuOpen
                          ? 90
                          : 0,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        {/* ================================= */}
        {/* MOBILE NAVIGATION                 */}
        {/* ================================= */}

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={
                reduceMotion
                  ? false
                  : {
                      height: 0,
                      opacity: 0,
                    }
              }
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: reduceMotion
                  ? 0
                  : 0.38,
                ease: smoothEase,
              }}
              className="overflow-hidden bg-white xl:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="max-h-[calc(100svh-80px)] overflow-y-auto border-t border-[#E3EDF2] px-6 pb-8 pt-3 sm:px-8"
              >
                <Link
                  to="/"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={mobileLinkClass}
                >
                  <span>Home</span>
                  <span className="text-[12px] text-[#0C9B97]">
                    01
                  </span>
                </Link>

                <Link
                  to="/about"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={mobileLinkClass}
                >
                  <span>About Us</span>
                  <span className="text-[12px] text-[#0C9B97]">
                    02
                  </span>
                </Link>

                <Link
                  to="/services"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={mobileLinkClass}
                >
                  <span>Services</span>
                  <span className="text-[12px] text-[#0C9B97]">
                    03
                  </span>
                </Link>

                <Link
                  to="/service-areas"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={mobileLinkClass}
                >
                  <span>Service Areas</span>
                  <span className="text-[12px] text-[#0C9B97]">
                    04
                  </span>
                </Link>

                <Link
                  to="/contact"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={mobileLinkClass}
                >
                  <span>Contact Us</span>
                  <span className="text-[12px] text-[#0C9B97]">
                    05
                  </span>
                </Link>

                {/* MOBILE REQUEST QUOTE */}

                <Link
                  to="/request-quote"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="mt-6 flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#087F7C]"
                >
                  Request a Quote
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>

                {/* PHONE NUMBER */}

                <a
                  href="tel:+17087330065"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="mt-6 block text-center text-[14px] font-medium text-[#526579]"
                >
                  Call Us:{" "}
                  <span className="font-bold text-[#0C9B97]">
                    708-733-0065
                  </span>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HEADER BORDER */}

        <div
          className={`h-px w-full ${
            solidHeader
              ? "bg-[#E3EDF2]"
              : "bg-white/15"
          }`}
        />

        {/* SCROLL PROGRESS BAR */}

        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#0C9B97]"
          style={{
            scaleX: reduceMotion
              ? scrollYProgress
              : smoothProgress,
          }}
        />
      </header>

      {/* ===================================== */}
      {/* HERO BACKGROUND                       */}
      {/* ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0C9B97]/15 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[10%] h-[400px] w-[400px] rounded-full bg-[#0C9B97]/10 blur-[100px]"
      />

      {/* ===================================== */}
      {/* MAIN HERO CONTENT                     */}
      {/* ===================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 px-5 pb-20 pt-[135px] sm:px-8 sm:pb-24 sm:pt-[155px] lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-[160px]">
        {/* LEFT SIDE */}

        <div className="relative z-10">
          {/* SMALL HEADING */}

          <motion.div
            {...reveal("left", 0)}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 shrink-0 bg-[#6DE0D3]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6DE0D3] sm:text-[12px]">
              OUR MEDICAL COURIER SERVICES
            </p>
          </motion.div>

          {/* MAIN HEADING */}

          <h1 className="max-w-[700px] text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[1.1] tracking-[-0.045em]">
            <motion.span
              {...reveal("left", 0.1)}
              className="block"
            >
              Healthcare
            </motion.span>

            <motion.span
              {...reveal("left", 0.2)}
              className="block"
            >
              Deliveries,
            </motion.span>

            <motion.span
              {...reveal("up", 0.3)}
              className="block text-[#6DE0D3]"
            >
              Handled With Care.
            </motion.span>
          </h1>

          {/* DESCRIPTION */}

          <motion.p
            {...reveal("up", 0.4)}
            className="mt-7 max-w-[570px] text-[15px] leading-[1.9] text-[#B8CDDA] sm:text-[17px]"
          >
            From laboratory specimens and pharmacy
            shipments to medical supplies and
            scheduled routes, Maximum Care LLC
            provides professional medical courier
            solutions designed around the
            transportation needs of healthcare
            organizations.
          </motion.p>

          {/* HERO BUTTONS */}

          <motion.div
            {...reveal("up", 0.5)}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            {/* REQUEST QUOTE */}

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.03,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.97 }
              }
            >
              <Link
                to="/request-quote"
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-8 text-[13px] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_12px_35px_rgba(12,155,151,0.2)] transition-colors duration-300 hover:bg-[#087F7C] sm:w-auto"
              >
                Request a Quote

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
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* EXPLORE SERVICES */}

            <motion.a
              href="#our-services"
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.97 }
              }
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[0.04] px-8 text-[13px] font-bold text-white transition-colors duration-300 hover:border-[#6DE0D3] hover:bg-white/10"
            >
              Explore Our Services
              <span aria-hidden="true">
                ↓
              </span>
            </motion.a>
          </motion.div>

          {/* LOCATION */}

          <motion.div
            {...reveal("up", 0.6)}
            className="mt-9 flex items-start gap-3"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6DE0D3"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>

            <p className="max-w-[440px] text-[13px] leading-6 text-[#A8BDCA]">
              Proudly based in Moorhead, Minnesota,
              serving Fargo, Moorhead, Dilworth,
              West Fargo, and surrounding communities.
            </p>
          </motion.div>
        </div>

        {/* ================================= */}
        {/* RIGHT SIDE — IMAGE                */}
        {/* ================================= */}

        <motion.div
          {...reveal("right", 0.2)}
          className="relative w-full"
        >
          <div className="group relative overflow-hidden rounded-[26px] border border-white/15 bg-[#163D54] shadow-[0_35px_75px_rgba(0,0,0,0.27)]">
            {/* HERO IMAGE */}

            <div className="relative h-[330px] overflow-hidden sm:h-[430px] lg:h-[470px]">
              <motion.img
                src={heroImg}
                alt="Medical courier transportation supporting healthcare facilities"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-center"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.07 }
                }
                transition={{
                  duration: 0.8,
                  ease: smoothEase,
                }}
              />

              {/* IMAGE OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071E34]/90 via-[#071E34]/15 to-transparent" />

              {/* TOP IMAGE LABEL */}

              <div className="absolute left-5 top-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071E34]/75 px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white sm:text-[11px]">
                    Healthcare-Focused Logistics
                  </span>
                </div>
              </div>

              {/* BOTTOM IMAGE TEXT */}

              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6DE0D3]">
                  MAXIMUM CARE LLC
                </p>

                <h2 className="max-w-[400px] text-[24px] font-extrabold leading-[1.2] text-white sm:text-[30px]">
                  Delivering Care
                  <span className="block">
                    With Precision.
                  </span>
                </h2>

                <p className="mt-3 text-[12px] font-semibold tracking-[0.1em] text-white/85">
                  FAST. SECURE. RELIABLE.
                </p>
              </div>
            </div>

            {/* ================================= */}
            {/* DELIVERY PROCESS STRIP            */}
            {/* ================================= */}

            <div className="border-t border-white/10 bg-[#0B2944] px-6 py-6">
              <div className="flex items-center justify-between gap-2">
                {/* PICKUP ICON */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97] text-white">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                    <path d="M12 11v6M9 14h6" />
                  </svg>
                </div>

                {/* CONNECTION */}

                <div className="flex-1 border-t-2 border-dashed border-[#6DE0D3]/40" />

                {/* TRANSPORT ICON */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6DE0D3]/30 bg-[#143B54] text-[#6DE0D3]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 6h12v12H3z" />
                    <path d="M15 10h4l3 4v4h-7" />
                    <circle
                      cx="7.5"
                      cy="18"
                      r="2"
                    />
                    <circle
                      cx="18.5"
                      cy="18"
                      r="2"
                    />
                  </svg>
                </div>

                {/* CONNECTION */}

                <div className="flex-1 border-t-2 border-dashed border-[#6DE0D3]/40" />

                {/* DELIVERY ICON */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0C9B97]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>
              </div>

              {/* PROCESS LABELS */}

              <div className="mt-4 flex justify-between text-[11px] font-semibold text-[#B8CDDA]">
                <span>Pickup</span>
                <span>Transport</span>
                <span>Handoff</span>
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* FLOATING SERVICE HIGHLIGHT        */}
          {/* ================================= */}


{/* ================================= */}
{/* FOUR SERVICE HIGHLIGHT CARDS      */}
{/* ================================= */}

<div className="relative z-10 mt-5 grid grid-cols-1 gap-3 sm:gap-4">

  {/* CARD 1 — RESPONSIBLE HANDLING */}
  <motion.div
    initial={
      reduceMotion
        ? false
        : { opacity: 0, y: 25 }
    }
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : 0.2,
    }}
    whileHover={
      reduceMotion ? undefined : { y: -5 }
    }
   className="flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-[#12384E] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.15)]"
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </div>

    <div>
      <p className="text-[13px] font-extrabold text-white sm:text-[14px]">
        Responsible Handling
      </p>

      <p className="mt-1 text-[11px] leading-5 text-[#B8CDDA] sm:text-[12px]">
        Careful transportation and coordination.
      </p>
    </div>
  </motion.div>

  {/* CARD 2 — LABORATORY SPECIMENS */}
  <motion.div
    initial={
      reduceMotion
        ? false
        : { opacity: 0, y: 25 }
    }
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : 0.3,
    }}
    whileHover={
      reduceMotion ? undefined : { y: -5 }
    }
   className="flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-[#12384E] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.15)]"
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 3h6" />
        <path d="M10 3v7l-5.8 9.3A2 2 0 0 0 5.9 22h12.2a2 2 0 0 0 1.7-2.7L14 10V3" />
        <path d="M7 16h10" />
      </svg>
    </div>

    <div>
      <p className="text-[13px] font-extrabold text-white sm:text-[14px]">
        Laboratory Specimens
      </p>

      <p className="mt-1 text-[11px] leading-5 text-[#B8CDDA] sm:text-[12px]">
        Transport of properly packaged medical specimens.
      </p>
    </div>
  </motion.div>

  {/* CARD 3 — PHARMACY DELIVERIES */}
  <motion.div
    initial={
      reduceMotion
        ? false
        : { opacity: 0, y: 25 }
    }
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : 0.4,
    }}
    whileHover={
      reduceMotion ? undefined : { y: -5 }
    }
   className="flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-[#12384E] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.15)]"
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m10.5 20.5 10-10a6 6 0 0 0-8.5-8.5l-10 10a6 6 0 0 0 8.5 8.5Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    </div>

    <div>
      <p className="text-[13px] font-extrabold text-white sm:text-[14px]">
        Pharmacy Deliveries
      </p>

      <p className="mt-1 text-[11px] leading-5 text-[#B8CDDA] sm:text-[12px]">
        Responsible transport of authorized pharmacy shipments.
      </p>
    </div>
  </motion.div>

  {/* CARD 4 — SCHEDULED ROUTES */}
  <motion.div
    initial={
      reduceMotion
        ? false
        : { opacity: 0, y: 25 }
    }
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : 0.5,
    }}
    whileHover={
      reduceMotion ? undefined : { y: -5 }
    }
   className="flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-[#12384E] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.15)]"
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    </div>

    <div>
      <p className="text-[13px] font-extrabold text-white sm:text-[14px]">
        Scheduled Routes
      </p>

      <p className="mt-1 text-[11px] leading-5 text-[#B8CDDA] sm:text-[12px]">
        Coordinated pickups and recurring delivery arrangements.
      </p>
    </div>
  </motion.div>

</div>




        </motion.div>
      </div>

      {/* ===================================== */}
      {/* BOTTOM ACCENT                         */}
      {/* ===================================== */}

      <div className="h-[3px] w-full bg-gradient-to-r from-[#071E34] via-[#0C9B97] to-[#071E34]" />
    </section>
  );
}

export default ServicesHero;
