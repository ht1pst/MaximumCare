import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";
import heroVideo from "../assets/Herovid.mp4";

const smoothEase = [0.22, 1, 0.36, 1];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Service Areas", href: "#service-areas" },
  { name: "Contact Us", href: "#contact" },
];

const headlineWords = [
  "Reliable",
  "Medical",
  "Deliveries",
  "You",
  "Can",
  "Trust",
];

const features = [
  {
    title: "SECURE HANDLING",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3" />
        <path d="M32 10 48 16V29C48 40 41 48 32 53 23 48 16 40 16 29V16L32 10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="m24 31 5 5 11-12" stroke="#6DE0D3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "MEDICAL COURIER",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3" />
        <path d="M10 22H37V42H10V22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M37 29H46L54 37V42H37V29Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M43 29V36H52" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="43" r="4" fill="#6DE0D3" />
        <circle cx="46" cy="43" r="4" fill="#6DE0D3" />
        <path d="M20 28H28M24 24V32" stroke="#6DE0D3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "RELIABLE DELIVERY",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3" />
        <circle cx="32" cy="32" r="19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 20V32L41 37" stroke="#6DE0D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 10H40M32 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m25 43 5 5 10-11" stroke="#6DE0D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "REGIONAL COVERAGE",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-11 w-11 sm:h-12 sm:w-12">
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1" opacity=".3" />
        <path d="M12 43 23 20 40 15 52 28 43 46 26 51 12 43Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M23 20 26 51M40 15 43 46M12 43 43 46" stroke="currentColor" strokeWidth="1" opacity=".5" />
        <path d="M23 32C23 27 30 24 34 28C38 32 32 38 32 38S23 34 23 32Z" stroke="#6DE0D3" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="30" cy="31" r="2" fill="#6DE0D3" />
      </svg>
    ),
  },
];

function Hero() {
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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const solidHeader = scrolled || menuOpen;

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 30,
          filter: "blur(6px)",
        },

    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: smoothEase,
    },
  });

  return (
    <>
      {/* HEADER */}
      
<header
  className={`fixed left-0 top-0 z-50 w-full  transition-all duration-500 ${
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
      initial={reduceMotion ? false : { opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
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
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className={`w-[175px] object-contain transition-[width] duration-500 sm:w-[150px] ${
            scrolled ? "lg:w-[150px]" : "lg:w-[170px]"
          }`}
        />
      </Link>
    </motion.div>

    {/* DESKTOP NAVIGATION */}
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-7 xl:flex xl:gap-9"
    >
      {/* HOME */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: smoothEase }}
      >
        <Link
          to="/"
          className={`group relative block whitespace-nowrap py-3 text-[15px] font-semibold transition-colors duration-300 ${
            solidHeader
              ? "text-[#102A43] hover:text-[#0C9B97]"
              : "text-white hover:text-[#6DE0D3]"
          }`}
        >
          Home
          <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      </motion.div>

      {/* ABOUT US */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.24, ease: smoothEase }}
      >
        <Link
          to="/about"
          className={`group relative block whitespace-nowrap py-3 text-[15px] font-semibold transition-colors duration-300 ${
            solidHeader
              ? "text-[#102A43] hover:text-[#0C9B97]"
              : "text-white hover:text-[#6DE0D3]"
          }`}
        >
          About Us
          <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      </motion.div>

      {/* SERVICES */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.33, ease: smoothEase }}
      >
        <Link
          to="/services"
          className={`group relative block whitespace-nowrap py-3 text-[15px] font-semibold transition-colors duration-300 ${
            solidHeader
              ? "text-[#102A43] hover:text-[#0C9B97]"
              : "text-white hover:text-[#6DE0D3]"
          }`}
        >
          Services
          <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      </motion.div>

      {/* SERVICE AREAS */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.42, ease: smoothEase }}
      >
        <Link
          to="/service-areas"
          className={`group relative block whitespace-nowrap py-3 text-[15px] font-semibold transition-colors duration-300 ${
            solidHeader
              ? "text-[#102A43] hover:text-[#0C9B97]"
              : "text-white hover:text-[#6DE0D3]"
          }`}
        >
          Service Areas
          <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      </motion.div>

      {/* CONTACT US */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.51, ease: smoothEase }}
      >
        <Link
          to="/contact"
          className={`group relative block whitespace-nowrap py-3 text-[15px] font-semibold transition-colors duration-300 ${
            solidHeader
              ? "text-[#102A43] hover:text-[#0C9B97]"
              : "text-white hover:text-[#6DE0D3]"
          }`}
        >
          Contact Us
          <span className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0C9B97] transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      </motion.div>
    </nav>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-4">

      {/* DESKTOP REQUEST QUOTE */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={
          reduceMotion ? undefined : { y: -3, scale: 1.03 }
        }
        whileTap={
          reduceMotion ? undefined : { scale: 0.96 }
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
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
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
              : { rotate: menuOpen ? 90 : 0 }
          }
          transition={{ duration: 0.25 }}
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

  {/* ANIMATED MOBILE NAVIGATION */}
  <AnimatePresence initial={false}>
    {menuOpen && (
      <motion.div
        id="mobile-navigation"
        initial={
          reduceMotion ? false : { height: 0, opacity: 0 }
        }
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.38,
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
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-[#E3EDF2] py-4 text-[16px] font-semibold text-[#102A43] hover:text-[#0C9B97]"
          >
            <span>Home</span>
            <span className="text-[12px] text-[#0C9B97]">01</span>
          </Link>

          {/* ABOUT US */}
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-[#E3EDF2] py-4 text-[16px] font-semibold text-[#102A43] hover:text-[#0C9B97]"
          >
            <span>About Us</span>
            <span className="text-[12px] text-[#0C9B97]">02</span>
          </Link>

          {/* SERVICES */}
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-[#E3EDF2] py-4 text-[16px] font-semibold text-[#102A43] hover:text-[#0C9B97]"
          >
            <span>Services</span>
            <span className="text-[12px] text-[#0C9B97]">03</span>
          </Link>

          {/* SERVICE AREAS */}
          <Link
            to="/service-areas"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-[#E3EDF2] py-4 text-[16px] font-semibold text-[#102A43] hover:text-[#0C9B97]"
          >
            <span>Service Areas</span>
            <span className="text-[12px] text-[#0C9B97]">04</span>
          </Link>

          {/* CONTACT US */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-[#E3EDF2] py-4 text-[16px] font-semibold text-[#102A43] hover:text-[#0C9B97]"
          >
            <span>Contact Us</span>
            <span className="text-[12px] text-[#0C9B97]">05</span>
          </Link>

          {/* MOBILE REQUEST QUOTE */}
          <Link
            to="/request-quote"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#087F7C]"
          >
            Request a Quote
            <span aria-hidden="true">→</span>
          </Link>

          {/* PHONE NUMBER */}
          <a
            href="tel:+17087330065"
            onClick={() => setMenuOpen(false)}
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
      solidHeader ? "bg-[#E3EDF2]" : "bg-white/15"
    }`}
  />

  {/* ANIMATED SCROLL PROGRESS BAR */}
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


      {/* HERO SECTION */}
      <section
        id="home"
        className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#071E34]"
      >
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* VIDEO OVERLAY */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#061725]/65 via-[#061725]/55 to-[#061725]/90" />

        {/* ANIMATED BACKGROUND GLOW */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[180px] left-1/2 h-[400px] w-[550px] max-w-full -translate-x-1/2 rounded-full bg-[#0C9B97]/20 blur-[110px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 55, -30, 0],
                  y: [0, -35, 20, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* MAIN HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col items-center justify-center px-5 pb-16 pt-[135px] text-center text-white sm:px-8 sm:pb-20 sm:pt-[155px] lg:px-10 lg:pt-[170px]">

          {/* ANIMATED INTRO BADGE */}
          <motion.div
            {...fadeUp(0.15)}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 backdrop-blur-md sm:px-5"
          >
            <motion.span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#6DE0D3]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [1, 0.45, 1],
                      scale: [1, 1.4, 1],
                    }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <p className="text-[11px] font-semibold tracking-[0.05em] text-[#D8F7F4] sm:text-[14px] md:text-[16px]">
              Medical Courier & Healthcare Logistics
            </p>
          </motion.div>

          {/* WORD-BY-WORD ANIMATED HEADING */}
          <h1 className="mx-auto mt-7 max-w-[950px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white min-[375px]:text-[40px] sm:text-[52px] md:text-[62px] lg:text-[72px] lg:leading-[1.08]">
            <span className="sr-only">
              Reliable Medical Deliveries You Can Trust
            </span>

            <span aria-hidden="true">
              {headlineWords.map((word, index) => (
                <span key={index}>
                  <motion.span
                    className={`inline-block ${
                      word === "Trust"
                        ? "text-[#6DE0D3]"
                        : "text-white"
                    }`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 35,
                            rotateX: -30,
                            filter: "blur(8px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.85,
                      delay: reduceMotion
                        ? 0
                        : 0.3 + index * 0.12,
                      ease: smoothEase,
                    }}
                  >
                    {word}
                  </motion.span>
                  {" "}
                </span>
              ))}
            </span>
          </h1>

          {/* ANIMATED DESCRIPTION */}
          <motion.p
            {...fadeUp(1.05)}
            className="mx-auto mt-6 max-w-[780px] text-[15px] leading-[1.8] text-white/85 sm:mt-7 sm:text-[17px] md:text-[18px] lg:text-[20px]"
          >
            We provide fast, secure, and reliable medical
            courier services, helping healthcare providers
            move critical supplies with care, precision,
            and professionalism.
          </motion.p>

          {/* ANIMATED CTA BUTTONS */}
          <motion.div
            {...fadeUp(1.2)}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-4"
          >
            
<motion.a
  href="/request-quote"
  whileHover={
    reduceMotion
      ? undefined
      : { y: -4, scale: 1.04 }
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
  className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-8 text-[14px] font-bold text-white shadow-[0_10px_30px_rgba(12,155,151,0.25)] hover:bg-[#087F7C] sm:w-auto"
>
  Request a Quote

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</motion.a>

            <motion.a
              href="/services"
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4, scale: 1.04 }
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
              className="flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/[0.08] px-8 text-[14px] font-bold text-white backdrop-blur-sm hover:border-[#6DE0D3] hover:bg-white/[0.15] sm:w-auto"
            >
              Explore Our Services
            </motion.a>
          </motion.div>

          {/* STAGGERED FEATURE CARDS */}
          <div className="mx-auto mt-12 grid w-full max-w-[850px] grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4 lg:mt-16 lg:gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                        scale: 0.93,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.13,
                  ease: smoothEase,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        scale: 1.03,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 22,
                        },
                      }
                }
                className="group relative flex min-h-[125px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] px-2 py-5 text-white backdrop-blur-[5px] hover:border-[#6DE0D3]/60 hover:bg-white/[0.12] sm:min-h-[140px] sm:px-3 sm:py-6"
              >
                {/* HOVER ACCENT */}
                <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#6DE0D3] transition-all duration-300 group-hover:w-[70%]" />

                {/* ICON */}
                <div className="flex h-[50px] w-[50px] items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 sm:h-[55px] sm:w-[55px]">
                  {feature.icon}
                </div>

                {/* LABEL */}
                <p className="text-center text-[10px] font-bold leading-[1.5] tracking-[0.07em] text-white/85 sm:text-[11px] lg:text-[12px]">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ANIMATED TAGLINE */}
          <motion.div
            {...fadeUp(1.5)}
            className="mt-10 flex items-center gap-3 sm:mt-12"
          >
            <span className="h-px w-7 bg-[#6DE0D3]/60" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65 sm:text-[11px]">
              Fast. Secure. Reliable.
            </p>

            <span className="h-px w-7 bg-[#6DE0D3]/60" />
          </motion.div>

          {/* ANIMATED SCROLL INDICATOR */}
          <motion.a
            href="#about"
            aria-label="Scroll to learn more about Maximum Care"
            {...fadeUp(1.7)}
            className="mt-6 flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-[#6DE0D3]"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
              SCROLL TO EXPLORE
            </span>

            <motion.span
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 6, 0] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[23px]"
            >
              ↓
            </motion.span>
          </motion.a>

        </div>
      </section>
    </>
  );
}

export default Hero;
