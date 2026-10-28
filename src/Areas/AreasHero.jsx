
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact Us", href: "/contact" },
];

function AreasHero() {
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

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="service-areas-hero"
      className="relative isolate overflow-hidden bg-[#071E34] text-white"
    >
      {/* NAVIGATION HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          solidHeader
            ? "bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[100px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-[75px]">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Maximum Care Home"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className="w-[145px] object-contain lg:w-[165px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[14px] font-semibold transition-colors hover:text-[#0C9B97] ${
                  solidHeader
                    ? "text-[#102A43]"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

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
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="service-areas-mobile-nav"
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
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="service-areas-mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="Mobile navigation"
              className="max-h-[calc(100svh-100px)] overflow-y-auto bg-white px-6 xl:hidden"
            >
              <div className="flex flex-col pb-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-[#E3EDF2] py-4 text-[15px] font-semibold text-[#102A43]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  to="/request-quote"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 rounded-xl bg-[#0C9B97] px-6 py-3.5 text-center text-[14px] font-bold text-white"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* SUBTLE BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[350px] w-[350px] rounded-full bg-[#0C9B97]/15 blur-[100px]"
      />

      {/* COMPACT HERO */}
      <div className="relative z-10 mx-auto max-w-[1150px] px-5 pb-16 pt-[160px] text-center sm:px-8 sm:pb-20 lg:pb-24 lg:pt-[175px]">
        <motion.p
          {...reveal(0)}
          className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#6DE0D3]"
        >
          OUR SERVICE AREAS
        </motion.p>

        <motion.h1
          {...reveal(0.1)}
          className="mx-auto mt-4 max-w-[800px] text-[clamp(2.3rem,5vw,4.3rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-white"
        >
          Local Medical Courier{" "}
          <span className="text-[#6DE0D3]">
            Coverage.
          </span>
        </motion.h1>

        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-5 max-w-[610px] text-[14px] leading-[1.75] text-[#C5D7E2] sm:text-[16px]"
        >
          Serving Fargo–Moorhead and surrounding
          communities with coordinated medical deliveries.
        </motion.p>

        <motion.div
          {...reveal(0.3)}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#coverage"
            className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#0C9B97] px-6 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7C]"
          >
            View Our Coverage ↓
          </a>

          <Link
            to="/request-quote"
            className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-white/25 px-6 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AreasHero;
