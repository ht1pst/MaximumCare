
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
import heroImg from "../assets/areahero.webp";

const ease = [0.22, 1, 0.36, 1];

function AreasHero() {
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

  const closeMenu = () => setMenuOpen(false);

  const desktopLinkClass =
    "relative text-[13px] font-semibold transition-colors duration-300 hover:text-[#6DE0D3]";

  const mobileLinkClass =
    "block rounded-xl px-4 py-3.5 text-[14px] font-semibold text-[#102A43] transition-colors duration-300 hover:bg-[#E8F6F4] hover:text-[#0C9B97]";

  const reveal = (delay = 0, direction = "up") => ({
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
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <>
      {/* ======================================== */}
      {/* NAVIGATION HEADER                       */}
      {/* ======================================== */}

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
        <div className="mx-auto flex h-[120px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-[120px] lg:px-12">

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

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className={`hidden items-center gap-7 lg:flex xl:gap-9 ${
              solidHeader ? "text-[#102A43]" : "text-white"
            }`}
          >
            <Link
              to="/"
              className={desktopLinkClass}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={desktopLinkClass}
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
              aria-current="page"
              className={`${desktopLinkClass} !text-[#0C9B97]`}
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
            className="hidden items-center justify-center gap-2 rounded-xl bg-[#0C9B97] px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(12,155,151,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087F7B] lg:inline-flex"
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

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="areas-mobile-navigation"
            className={`relative z-20 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden ${
              solidHeader
                ? "border-[#DFE9EF] text-[#071E34]"
                : "border-white/25 text-white"
            }`}
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

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="areas-mobile-navigation"
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
              className="overflow-hidden border-t border-[#E5EDF2] bg-white shadow-xl lg:hidden"
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
                  className={mobileLinkClass}
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
                  aria-current="page"
                  className={`${mobileLinkClass} !bg-[#E8F6F4] !text-[#0C9B97]`}
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
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0C9B97] px-5 py-4 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-[#087F7B]"
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
          className="absolute bottom-0 left-0 h-[3px] w-full bg-[#0C9B97]"
        />
      </header>

      {/* ======================================== */}
      {/* SERVICE AREAS HERO                     */}
      {/* ======================================== */}

      <section
        id="areas-hero"
        className="relative isolate flex min-h-[780px] w-full items-center overflow-hidden bg-[#071E34] text-white sm:min-h-[820px] lg:min-h-[850px]"
      >
        {/* HERO IMAGE */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroImg}
            alt="Healthcare courier transportation in a medical setting"
            className="h-full w-full object-cover object-center"
            initial={reduceMotion ? false : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 1.8,
              ease,
            }}
          />
        </div>

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071E34]/95 via-[#071E34]/85 to-[#071E34]/50" />

        {/* BOTTOM OVERLAY */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#071E34]/90 via-transparent to-[#071E34]/15" />

        {/* TEAL GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-1/3 z-0 h-[500px] w-[500px] rounded-full bg-[#0C9B97]/15 blur-[110px]"
        />

        {/* DECORATIVE RINGS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-[18%] z-0 hidden h-[520px] w-[520px] rounded-full border border-white/10 lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[24%] z-0 hidden h-[390px] w-[390px] rounded-full border border-white/10 lg:block"
        />

        {/* ==================================== */}
        {/* HERO CONTENT                         */}
        {/* ==================================== */}

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-5 pb-24 pt-40 sm:px-8 sm:pb-28 sm:pt-44 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:px-12 lg:pb-32 lg:pt-48">

          {/* LEFT CONTENT */}
          <div className="max-w-[780px]">

            {/* SMALL LABEL */}
            <motion.div
              {...reveal(0.1, "left")}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#6DE0D3]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#6DE0D3] sm:text-[12px]">
                WHERE WE SERVE
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              {...reveal(0.2)}
              className="text-[42px] font-extrabold leading-[1.1] tracking-[-0.045em] text-white sm:text-[60px] lg:text-[65px] xl:text-[75px]"
            >
              Connecting Healthcare
              <span className="mt-2 block text-[#6DE0D3]">
                Across Our
              </span>
              <span className="mt-1 block text-white">
                Communities.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal(0.35)}
              className="mt-7 max-w-[680px] text-[15px] leading-[1.95] text-[#D0DFE8] sm:text-[17px] lg:text-[18px]"
            >
              Based in Moorhead, Minnesota, Maximum Care LLC
              focuses on healthcare courier transportation
              across the Fargo–Moorhead region, connecting
              laboratories, pharmacies, medical offices,
              and healthcare facilities through responsible
              delivery coordination.
            </motion.p>

            <motion.p
              {...reveal(0.45)}
              className="mt-4 max-w-[660px] text-[14px] leading-[1.9] text-[#B8CDDA] sm:text-[15px]"
            >
              From Moorhead and Dilworth to Fargo, West Fargo,
              and surrounding communities, we're building
              transportation solutions around the needs
              of local healthcare organizations.
            </motion.p>

            {/* ================================= */}
            {/* BUTTONS                           */}
            {/* ================================= */}

            <motion.div
              {...reveal(0.55)}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >

              {/* EXPLORE BUTTON */}
              <a
                href="#primary-service-areas"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_15px_35px_rgba(12,155,151,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B]"
              >
                Explore Our Coverage

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

              {/* REQUEST QUOTE BUTTON */}
              <Link
                to="/request-quote"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 py-4 text-[14px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#6DE0D3] hover:bg-white/15"
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

            {/* ================================= */}
            {/* HERO BOTTOM DETAILS               */}
            {/* ================================= */}

            <motion.div
              {...reveal(0.7)}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/20 pt-6"
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
                  Based in Moorhead, MN
                </span>
              </div>

              {/* REGIONAL FOCUS */}
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a15 15 0 0 1 0 18" />
                  <path d="M12 3a15 15 0 0 0 0 18" />
                </svg>

                <span className="text-[12px] font-semibold text-[#D0DFE8] sm:text-[13px]">
                  Minnesota & North Dakota
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
                  <path d="M3 6h12v12H3z" />
                  <path d="M15 10h4l3 4v4h-7" />
                  <circle cx="7.5" cy="18" r="2" />
                  <circle cx="18.5" cy="18" r="2" />
                </svg>

                <span className="text-[12px] font-semibold text-[#D0DFE8] sm:text-[13px]">
                  Medical Courier Transportation
                </span>
              </div>
            </motion.div>
          </div>

          {/* ==================================== */}
          {/* RIGHT — REGIONAL LOCATION PANEL     */}
          {/* ==================================== */}

          <motion.div
            {...reveal(0.55, "right")}
            className="relative mx-auto w-full max-w-[460px] lg:ml-auto"
          >

            {/* DECORATIVE OUTER FRAME */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#6DE0D3]/30 sm:-right-5 sm:-top-5"
            />

            {/* GLASS PANEL */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#092940]/85 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">

              {/* PANEL GLOW */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0C9B97]/25 blur-[70px]"
              />

              {/* PANEL HEADER */}
              <div className="relative z-10 mb-7 flex items-center gap-4">

                {/* MAP ICON */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#6DE0D3]/20 bg-[#0C9B97]/20 text-[#6DE0D3]">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#6DE0D3]">
                    REGIONAL SERVICE FOCUS
                  </p>

                  <h2 className="mt-1 text-[22px] font-extrabold text-white sm:text-[25px]">
                    Where We Serve
                  </h2>
                </div>
              </div>

              {/* REGIONAL INTRODUCTION */}
              <p className="relative z-10 mb-6 text-[13px] leading-[1.85] text-[#BED3DF]">
                Healthcare-focused courier transportation
                centered around the Fargo–Moorhead region
                and neighboring communities.
              </p>

              {/* MINNESOTA GROUP */}
              <div className="relative z-10 mb-5">

                <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#6DE0D3]">
                    Minnesota
                  </p>

                  <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white">
                    MN
                  </span>
                </div>

                <div className="space-y-2">

                  {/* MOORHEAD */}
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C9B97]/20 text-[#6DE0D3]">
                      <svg
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
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>

                    <span className="flex-1 text-[14px] font-semibold text-white">
                      Moorhead
                    </span>

                    <span className="text-[10px] font-medium text-[#A9C7D5]">
                      Home Base
                    </span>
                  </div>

                  {/* DILWORTH */}
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C9B97]/20 text-[#6DE0D3]">
                      <svg
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
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>

                    <span className="flex-1 text-[14px] font-semibold text-white">
                      Dilworth
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  </div>
                </div>
              </div>

              {/* NORTH DAKOTA GROUP */}
              <div className="relative z-10">

                <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#6DE0D3]">
                    North Dakota
                  </p>

                  <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white">
                    ND
                  </span>
                </div>

                <div className="space-y-2">

                  {/* FARGO */}
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C9B97]/20 text-[#6DE0D3]">
                      <svg
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
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>

                    <span className="flex-1 text-[14px] font-semibold text-white">
                      Fargo
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  </div>

                  {/* WEST FARGO */}
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C9B97]/20 text-[#6DE0D3]">
                      <svg
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
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>

                    <span className="flex-1 text-[14px] font-semibold text-white">
                      West Fargo
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  </div>
                </div>
              </div>

              {/* BOTTOM NOTE */}
              <div className="relative z-10 mt-6 rounded-xl border border-[#6DE0D3]/20 bg-[#0C9B97]/15 p-4">

                <div className="flex items-start gap-3">

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
                    className="mt-0.5 shrink-0 text-[#6DE0D3]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>

                  <p className="text-[12px] leading-[1.8] text-[#C8DFE8]">
                    Surrounding communities and longer-distance
                    routes may be considered based on shipment
                    requirements, scheduling, and availability.
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING SMALL BADGE */}
            <motion.div
              {...reveal(0.85)}
              className="relative z-10 mx-auto mt-5 flex max-w-[320px] items-center gap-3 rounded-2xl border border-white/20 bg-[#12384E] p-4 shadow-[0_15px_45px_rgba(0,0,0,0.2)] sm:-mb-5 sm:ml-auto sm:mr-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
                <svg
                  width="24"
                  height="24"
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
                  <circle cx="7.5" cy="18" r="2" />
                  <circle cx="18.5" cy="18" r="2" />
                </svg>
              </div>

              <div>
                <p className="text-[13px] font-extrabold text-white">
                  Regional Delivery Focus
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#B8CDDA]">
                  Healthcare logistics across MN & ND
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent" />
      </section>
    </>
  );
}

export default AreasHero;
