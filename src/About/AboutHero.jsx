
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Link } from "react-router-dom";

import logo from "../assets/maximumcarelogo.webp";

// CHANGE THIS IF YOUR IMAGE HAS A DIFFERENT NAME
import heroImg from "../assets/abouthero.webp";

function AboutHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const ease = [0.22, 1, 0.36, 1];

  const desktopLinkClass = `
    relative text-[13px] font-semibold
    transition-colors duration-300
    hover:text-[#0C9B97]
  `;

  const mobileLinkClass = `
    block rounded-xl px-4 py-3.5
    text-[14px] font-semibold
    text-[#102A43]
    transition-colors duration-300
    hover:bg-[#E8F6F4]
    hover:text-[#0C9B97]
  `;

  return (
    <>
      {/* ========================================= */}
      {/* NAVIGATION HEADER                         */}
      {/* ========================================= */}

      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-500
          ${
            solidHeader
              ? "border-b border-[#E5EDF2] bg-white/95 shadow-[0_8px_30px_rgba(7,30,52,0.07)] backdrop-blur-xl"
              : "border-b border-white/15 bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto flex h-[120px] max-w-[1400px]
            items-center justify-between
            px-5 sm:px-8 lg:h-[110px] lg:px-12
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="relative z-10 flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className="h-[90px] lg:h-[90px] w-auto object-contain sm:h-[63px]"
            />
          </Link>

          {/* ================================= */}
          {/* DESKTOP NAVIGATION                */}
          {/* ================================= */}

          <nav
            aria-label="Main navigation"
            className={`
              hidden items-center gap-7 lg:flex xl:gap-9
              ${
                solidHeader
                  ? "text-[#102A43]"
                  : "text-white"
              }
            `}
          >
            <Link
              to="/"
              className={desktopLinkClass}
            >
              Home
            </Link>

            <Link
              to="/about"
              aria-current="page"
              className={`${desktopLinkClass} !text-[#0C9B97]`}
            >
              About Us
            </Link>

            <Link
              to="/services"
              className={desktopLinkClass}
            >
              Services
            </Link>

            <Link
              to="/service-areas"
              className={desktopLinkClass}
            >
              Service Areas
            </Link>

            <Link
              to="/contact"
              className={desktopLinkClass}
            >
              Contact
            </Link>
          </nav>

          {/* DESKTOP QUOTE BUTTON */}
          <Link
            to="/request-quote"
            className="
              hidden items-center justify-center
              gap-2 rounded-xl
              bg-[#0C9B97]
              px-5 py-3.5
              text-[13px] font-bold
              text-white
              shadow-[0_10px_25px_rgba(12,155,151,0.18)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#087F7B]
              lg:inline-flex
            "
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
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          {/* ================================= */}
          {/* MOBILE MENU BUTTON                 */}
          {/* ================================= */}

          <button
            type="button"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="about-mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`
              relative z-20 flex h-11 w-11
              items-center justify-center
              rounded-xl border transition-all
              duration-300 lg:hidden
              ${
                solidHeader
                  ? "border-[#DFE9EF] text-[#071E34]"
                  : "border-white/25 text-white"
              }
            `}
          >
            {menuOpen ? (
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ================================= */}
        {/* MOBILE NAVIGATION                  */}
        {/* ================================= */}

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="about-mobile-navigation"
              aria-label="Mobile navigation"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, height: 0 }
              }
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, height: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="
                overflow-hidden border-t
                border-[#E5EDF2]
                bg-white shadow-xl
                lg:hidden
              "
            >
              <div className="space-y-1 px-5 py-5 sm:px-8">

                <Link
                  to="/"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenu}
                  aria-current="page"
                  className={`${mobileLinkClass} !bg-[#E8F6F4] !text-[#0C9B97]`}
                >
                  About Us
                </Link>

                <Link
                  to="/services"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  Services
                </Link>

                <Link
                  to="/service-areas"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  Service Areas
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  Contact
                </Link>

                <Link
                  to="/request-quote"
                  onClick={closeMenu}
                  className="
                    mt-4 flex items-center
                    justify-center gap-2
                    rounded-xl bg-[#0C9B97]
                    px-5 py-4
                    text-[14px] font-bold
                    text-white
                    transition-colors duration-300
                    hover:bg-[#087F7B]
                  "
                >
                  Request a Quote

                  <svg
                    width="18"
                    height="18"
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
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* SCROLL PROGRESS BAR */}
        <motion.div
          style={{
            scaleX: smoothProgress,
            transformOrigin: "left",
          }}
          className="
            absolute bottom-0 left-0
            h-[3px] w-full bg-[#0C9B97]
          "
        />
      </header>

      {/* ========================================= */}
      {/* ABOUT US HERO SECTION                     */}
      {/* ========================================= */}

      <section
        id="about-hero"
        className="
          relative isolate flex w-full
          min-h-[720px] items-center
          overflow-hidden bg-[#071E34]
          text-white
          sm:min-h-[760px]
          lg:min-h-[800px]
        "
      >
        {/* ================================= */}
        {/* HERO BACKGROUND IMAGE             */}
        {/* ================================= */}

        <div className="absolute inset-0 -z-20">

          <motion.img
            src={heroImg}
            alt="Healthcare courier transportation in a medical setting"
            className="h-full w-full object-cover object-center"
            initial={
              reduceMotion
                ? false
                : { scale: 1.08 }
            }
            animate={{ scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 2,
              ease,
            }}
          />
        </div>

        {/* MAIN DARK OVERLAY */}
        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-r
            from-[#071E34]/95
            via-[#071E34]/85
            to-[#071E34]/45
          "
        />

        {/* BOTTOM GRADIENT */}
        <div
          className="
            pointer-events-none absolute
            inset-0 -z-10
            bg-gradient-to-t
            from-[#071E34]/75
            via-transparent
            to-transparent
          "
        />

        {/* TEAL BACKGROUND GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-40 top-1/3 -z-10
            h-[500px] w-[500px]
            rounded-full
            bg-[#0C9B97]/10
            blur-[110px]
          "
        />

        {/* ================================= */}
        {/* HERO MAIN CONTENT                 */}
        {/* ================================= */}

        <div
          className="
            relative z-10 mx-auto
            w-full max-w-[1400px]
            px-5 pb-24 pt-40
            sm:px-8 sm:pb-28 sm:pt-44
            lg:px-12 lg:pb-32 lg:pt-48
          "
        >
          <div className="max-w-[850px]">

            {/* ================================= */}
            {/* SMALL INTRO LABEL                 */}
            {/* ================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -30,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.15,
                ease,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#6DE0D3]" />

              <span
                className="
                  text-[11px] font-extrabold
                  uppercase tracking-[0.23em]
                  text-[#6DE0D3]
                  sm:text-[12px]
                "
              >
                GET TO KNOW MAXIMUM CARE
              </span>
            </motion.div>

            {/* ================================= */}
            {/* MAIN HEADING                      */}
            {/* ================================= */}

            <motion.h1
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.25,
                ease,
              }}
              className="
                text-[43px]
                font-extrabold
                leading-[1.1]
                tracking-[-0.04em]
                text-white
                sm:text-[58px]
                lg:text-[70px]
                xl:text-[78px]
              "
            >
              Driven by Care.

              <span className="mt-2 block text-[#6DE0D3]">
                Built for Healthcare
              </span>

              <span className="block text-white">
                Deliveries.
              </span>
            </motion.h1>

            {/* ================================= */}
            {/* HERO DESCRIPTION                  */}
            {/* ================================= */}

            <motion.p
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.45,
                ease,
              }}
              className="
                mt-7 max-w-[670px]
                text-[15px] leading-[1.95]
                text-[#D0DFE8]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              Maximum Care LLC is a medical courier startup
              based in Moorhead, Minnesota, with a clear
              purpose: to support healthcare organizations
              through responsible transportation, thoughtful
              coordination, and attention to every shipment's
              requirements.
            </motion.p>

            {/* ================================= */}
            {/* SECONDARY INTRODUCTION            */}
            {/* ================================= */}

            <motion.p
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.55,
                ease,
              }}
              className="
                mt-4 max-w-[640px]
                text-[14px] leading-[1.9]
                text-[#B8CDDA]
                sm:text-[15px]
              "
            >
              We're building a healthcare-focused transportation
              company grounded in professionalism, clear
              communication, and a commitment to handling
              eligible medical deliveries with care.
            </motion.p>

            {/* ================================= */}
            {/* CTA BUTTONS                       */}
            {/* ================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.7,
                ease,
              }}
              className="
                mt-9 flex flex-col gap-4
                sm:flex-row sm:items-center
              "
            >

              {/* PRIMARY BUTTON */}
              <a
                href="#who-we-are"
                className="
                  group inline-flex items-center
                  justify-center gap-3
                  rounded-xl
                  bg-[#0C9B97]
                  px-7 py-4
                  text-[14px] font-extrabold
                  text-white
                  shadow-[0_15px_35px_rgba(12,155,151,0.2)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#087F7B]
                  hover:shadow-[0_20px_40px_rgba(12,155,151,0.3)]
                "
              >
                Discover Our Story

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
                  className="transition-transform duration-300 group-hover:translate-y-1"
                >
                  <path d="M12 5v14" />
                  <path d="m5 12 7 7 7-7" />
                </svg>
              </a>

              {/* SECONDARY BUTTON */}
              <Link
                to="/services"
                className="
                  group inline-flex items-center
                  justify-center gap-3
                  rounded-xl border
                  border-white/35
                  bg-white/10
                  px-7 py-4
                  text-[14px] font-bold
                  text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#6DE0D3]
                  hover:bg-white/15
                "
              >
                Explore Our Services

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

            {/* ================================= */}
            {/* HERO BOTTOM INFORMATION           */}
            {/* ================================= */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.9,
                ease,
              }}
              className="
                mt-11 flex flex-wrap
                items-center gap-x-7 gap-y-4
                border-t border-white/20
                pt-6
              "
            >

              {/* LOCATION */}
              <div className="flex items-center gap-2.5">

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
                  className="shrink-0 text-[#6DE0D3]"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span className="text-[12px] font-semibold text-[#D0DFE8] sm:text-[13px]">
                  Moorhead, Minnesota
                </span>
              </div>

              {/* SERVICE FOCUS */}
              <div className="flex items-center gap-2.5">

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
                  className="shrink-0 text-[#6DE0D3]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                <span className="text-[12px] font-semibold text-[#D0DFE8] sm:text-[13px]">
                  Healthcare-Focused Logistics
                </span>
              </div>

              {/* COMPANY FOCUS */}
              <div className="flex items-center gap-2.5">

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
                  className="shrink-0 text-[#6DE0D3]"
                >
                  <path d="M3 6h12v12H3z" />
                  <path d="M15 10h4l3 4v4h-7" />
                  <circle cx="7.5" cy="18" r="2" />
                  <circle cx="18.5" cy="18" r="2" />
                </svg>

                <span className="text-[12px] font-semibold text-[#D0DFE8] sm:text-[13px]">
                  Responsible Transportation
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================================= */}
        {/* HERO BOTTOM ACCENT                */}
        {/* ================================= */}

        <div
          className="
            pointer-events-none absolute
            bottom-0 left-0 h-[5px] w-full
            bg-gradient-to-r
            from-[#0C9B97]
            via-[#6DE0D3]
            to-transparent
          "
        />
      </section>
    </>
  );
}

export default AboutHero;
