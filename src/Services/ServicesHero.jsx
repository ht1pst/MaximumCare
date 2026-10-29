
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

  const solidHeader = scrolled || menuOpen;

  // REVEAL ANIMATION
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
      className="relative  w-full overflow-hidden bg-[#071E34] text-white"
    >
      {/* ===================================== */}
      {/* HEADER */}
      {/* ===================================== */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          solidHeader
            ? "bg-white/95 shadow-[0_5px_30px_rgba(16,42,67,0.10)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 transition-all duration-500 sm:px-8 lg:px-10 xl:px-[75px] ${
            scrolled
              ? "h-[120px] lg:h-[110px]"
              : "h-[120px] lg:h-[110px]"
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
                className="w-[175px] object-contain sm:w-[150px] lg:w-[170px]"
              />
            </Link>
          </motion.div>

          {/* ================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================= */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex xl:gap-9"
          >
            {/* HOME */}
            <motion.div {...reveal("up", 0.1)}>
              <Link to="/" className={desktopLinkClass}>
                Home

                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            {/* ABOUT */}
            <motion.div {...reveal("up", 0.2)}>
              <Link
                to="/about"
                className={desktopLinkClass}
              >
                About Us

                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            {/* SERVICES */}
            <motion.div {...reveal("up", 0.3)}>
              <Link
                to="/services"
                className={desktopLinkClass}
              >
                Services

                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            {/* SERVICE AREAS */}
            <motion.div {...reveal("up", 0.4)}>
              <Link
                to="/service-areas"
                className={desktopLinkClass}
              >
                Service Areas

                <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>

            {/* CONTACT */}
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
          {/* RIGHT SIDE */}
          {/* ================================= */}

          <div className="flex items-center gap-4">

            {/* DESKTOP REQUEST QUOTE */}
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
        {/* MOBILE NAVIGATION */}
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
                {/* HOME */}
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

                {/* ABOUT */}
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

                {/* SERVICES */}
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

                {/* SERVICE AREAS */}
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

                {/* CONTACT */}
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
      {/* COMPACT SERVICES HERO */}
      {/* ===================================== */}

      <div
        className="
          relative mx-auto flex w-full
          max-w-[1280px] flex-col justify-center
          px-5 pb-12 pt-[155px]
          sm:px-8 sm:pb-14 sm:pt-[160px]
          lg:min-h-[355px] lg:px-12
          lg:pb-14 lg:pt-[150px]
        "
      >
        {/* SMALL LABEL */}
        <motion.p
          {...reveal("up", 0)}
          className="
            mb-3 text-[11px] font-bold
            uppercase tracking-[0.2em]
            text-[#6DE0D3]
          "
        >
          MAXIMUM CARE LLC
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          {...reveal("up", 0.1)}
          className="
            max-w-[850px]
            text-[34px] font-extrabold
            leading-[1.12]
            tracking-[-0.035em]
            text-white
            sm:text-[42px]
            lg:text-[49px]
          "
        >
          Professional{" "}
          <span className="text-[#6DE0D3]">
            Medical Courier Services.
          </span>
        </motion.h1>

        {/* SHORT DESCRIPTION */}
        <motion.p
          {...reveal("up", 0.2)}
          className="
            mt-4 max-w-[700px]
            text-[13px] leading-[1.8]
            text-[#C4D5DF]
            sm:text-[15px]
          "
        >
          Transportation solutions for healthcare facilities,
          laboratories, pharmacies, and medical offices across
          Fargo–Moorhead and surrounding communities.
        </motion.p>
      </div>

      {/* BOTTOM ACCENT */}
      <div
        aria-hidden="true"
        className="
          h-[3px] w-full
          bg-gradient-to-r
          from-[#071E34]
          via-[#0C9B97]
          to-[#071E34]
        "
      />
    </section>
  );
}

export default ServicesHero;
