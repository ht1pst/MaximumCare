
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";
import heroImg from "../assets/abouthero.webp";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Service Areas", path: "/service-areas" },
  { name: "Contact Us", path: "/contact" },
];

const ease = [0.22, 1, 0.36, 1];

function AboutHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();

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

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <>
      {/* ====================================== */}
      {/* NAVIGATION HEADER */}
      {/* ====================================== */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          solidHeader
            ? "border-b border-[#E5EDF2] bg-white/95 shadow-[0_8px_30px_rgba(7,30,52,0.07)] backdrop-blur-xl"
            : "border-b border-white/15 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[105px] max-w-[1400px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Maximum Care LLC Home"
            className="relative z-10 shrink-0"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className="h-[85px] w-auto object-contain sm:h-[75px] lg:h-[85px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex"
          >
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={
                  item.path === "/about"
                    ? "page"
                    : undefined
                }
                className={`text-[14px] font-semibold transition-colors duration-300 hover:text-[#0C9B97] ${
                  item.path === "/about"
                    ? "text-[#0C9B97]"
                    : solidHeader
                    ? "text-[#102A43]"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Link
              to="/request-quote"
              className="hidden rounded-xl bg-[#0C9B97] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#087F7C] xl:inline-flex"
            >
              Request a Quote
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={menuOpen}
              aria-controls="about-mobile-navigation"
              onClick={() =>
                setMenuOpen((previous) => !previous)
              }
              className={`flex h-11 w-11 items-center justify-center rounded-xl xl:hidden ${
                solidHeader
                  ? "bg-[#F0F8FC] text-[#102A43]"
                  : "bg-white/15 text-white"
              }`}
            >
              {menuOpen ? (
                <span className="text-[26px]">×</span>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence initial={false}>
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
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="max-h-[calc(100svh-105px)] overflow-y-auto border-t border-[#E5EDF2] bg-white shadow-lg xl:hidden"
            >
              <div className="flex flex-col px-6 pb-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`border-b border-[#E3EDF2] py-4 text-[14px] font-semibold transition-colors hover:text-[#0C9B97] ${
                      item.path === "/about"
                        ? "text-[#0C9B97]"
                        : "text-[#102A43]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  to="/request-quote"
                  onClick={closeMenu}
                  className="mt-5 rounded-xl bg-[#0C9B97] px-6 py-3.5 text-center text-[14px] font-bold text-white"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ====================================== */}
      {/* COMPACT ABOUT US HERO */}
      {/* ====================================== */}

      <section
        id="about-hero"
        className="relative isolate overflow-hidden bg-[#071E34] text-white"
      >
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071E34]/95 via-[#071E34]/85 to-[#071E34]/65" />

        {/* TEAL GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-[320px] w-[320px] rounded-full bg-[#0C9B97]/15 blur-[90px]"
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 pt-[165px] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-[800px]">
            <motion.p
              {...reveal(0)}
              className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#6DE0D3]"
            >
              GET TO KNOW US
            </motion.p>

            <motion.h1
              {...reveal(0.1)}
              className="mt-4 text-[38px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[49px] lg:text-[58px]"
            >
              About{" "}
              <span className="text-[#6DE0D3]">
                Maximum Care LLC
              </span>
            </motion.h1>

            <motion.h2
              {...reveal(0.2)}
              className="mt-5 text-[19px] font-bold leading-snug text-white sm:text-[24px]"
            >
              More Than a Delivery.
              <span className="block text-[#6DE0D3]">
                A Partner in Healthcare.
              </span>
            </motion.h2>

            <motion.p
              {...reveal(0.3)}
              className="mt-4 max-w-[580px] text-[14px] leading-[1.75] text-[#D0DFE8] sm:text-[16px]"
            >
              A locally owned medical courier company
              headquartered in Moorhead, Minnesota.
            </motion.p>

            <motion.div
              {...reveal(0.4)}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                href="#who-we-are"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#0C9B97] px-6 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7C]"
              >
                Learn About Us ↓
              </a>

              <Link
                to="/request-quote"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-white/30 px-6 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="h-[3px] bg-gradient-to-r from-[#071E34] via-[#0C9B97] to-[#071E34]" />
      </section>
    </>
  );
}

export default AboutHero;
