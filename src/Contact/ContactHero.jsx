
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
import heroImg from "../assets/contacthero.webp";

const ease = [0.22, 1, 0.36, 1];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Contact", to: "/contact" },
];

function ContactHero() {
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

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.85,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <>
      {/* ================================ */}
      {/* NAVBAR                           */}
      {/* ================================ */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          solidHeader
            ? "border-b border-[#E5EDF2] bg-white/95 shadow-[0_8px_30px_rgba(7,30,52,0.07)] backdrop-blur-xl"
            : "border-b border-white/15 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-[92px] lg:px-12">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-10 flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className="h-[54px] w-auto object-contain sm:h-[63px]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Main navigation"
            className={`hidden items-center gap-7 lg:flex xl:gap-9 ${
              solidHeader ? "text-[#102A43]" : "text-white"
            }`}
          >
            {navLinks.map((item) => {
              const isActive = item.to === "/contact";

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-[13px] font-semibold transition-colors duration-300 hover:text-[#6DE0D3] ${
                    isActive
                      ? solidHeader
                        ? "text-[#0C9B97]"
                        : "text-[#6DE0D3]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <Link
            to="/request-quote"
            className="hidden items-center justify-center gap-2 rounded-xl bg-[#0C9B97] px-5 py-3.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#087F7B] lg:inline-flex"
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="contact-mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative z-20 flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden ${
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
                <path d="M18 6 6 18M6 6l12 12" />
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
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="contact-mobile-nav"
              aria-label="Mobile navigation"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, height: 0 }
              }
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
              }}
              className="overflow-hidden border-t border-[#E5EDF2] bg-white shadow-xl lg:hidden"
            >
              <div className="space-y-1 px-5 py-5 sm:px-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    aria-current={
                      item.to === "/contact" ? "page" : undefined
                    }
                    className={`block rounded-xl px-4 py-3.5 text-[14px] font-semibold transition-colors ${
                      item.to === "/contact"
                        ? "bg-[#E8F6F4] text-[#0C9B97]"
                        : "text-[#102A43] hover:bg-[#E8F6F4] hover:text-[#0C9B97]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/request-quote"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-center rounded-xl bg-[#0C9B97] px-5 py-4 text-[14px] font-bold text-white"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* SCROLL PROGRESS */}
        <motion.div
          style={{
            scaleX: smoothProgress,
            transformOrigin: "left",
          }}
          className="absolute bottom-0 left-0 h-[3px] w-full bg-[#0C9B97]"
        />
      </header>

      {/* ================================ */}
      {/* HERO SECTION                     */}
      {/* ================================ */}

      <section
        id="contact-hero"
        className="relative isolate flex min-h-[760px] w-full items-center overflow-hidden bg-[#071E34] text-white lg:min-h-[820px]"
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10">
          <motion.img
            src={heroImg}
            alt="Professional healthcare facility"
            className="h-full w-full object-cover object-center"
            initial={reduceMotion ? false : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 1.8,
              ease,
            }}
          />
        </div>

        {/* GRADIENT OVERLAYS */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071E34]/95 via-[#071E34]/85 to-[#071E34]/50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071E34]/85 via-transparent to-[#071E34]/20" />

        {/* BACKGROUND GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-32 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/15 blur-[100px]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-5 pb-24 pt-40 sm:px-8 sm:pt-44 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:px-12 lg:pb-28 lg:pt-48">

          {/* LEFT CONTENT */}
          <div className="max-w-[780px]">

            <motion.div
              {...reveal(0.1)}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#6DE0D3]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#6DE0D3] sm:text-[12px]">
                GET IN TOUCH WITH MAXIMUM CARE
              </span>
            </motion.div>

            <motion.h1
              {...reveal(0.2)}
              className="text-[43px] font-extrabold leading-[1.1] tracking-[-0.045em] sm:text-[60px] lg:text-[69px] xl:text-[76px]"
            >
              Let's Connect.
              <span className="mt-3 block text-[#6DE0D3]">
                Your Healthcare
              </span>
              <span className="mt-1 block text-white">
                Needs Matter.
              </span>
            </motion.h1>

            <motion.p
              {...reveal(0.35)}
              className="mt-7 max-w-[680px] text-[15px] leading-[1.95] text-[#D0DFE8] sm:text-[17px]"
            >
              Have questions about medical courier
              transportation? Maximum Care LLC welcomes
              the opportunity to learn about your
              organization's delivery needs and discuss
              available service arrangements.
            </motion.p>

            <motion.p
              {...reveal(0.45)}
              className="mt-4 max-w-[650px] text-[14px] leading-[1.9] text-[#B8CDDA] sm:text-[15px]"
            >
              Based in Moorhead, Minnesota, our regional
              focus includes Fargo, West Fargo, Dilworth,
              and surrounding communities.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              {...reveal(0.55)}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_15px_35px_rgba(12,155,151,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B]"
              >
                Send Us a Message

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
                  className="transition-transform group-hover:translate-y-1"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>

              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 py-4 text-[14px] font-bold text-white backdrop-blur-md transition-colors hover:border-[#6DE0D3] hover:bg-white/15"
              >
                Request a Quote
              </Link>
            </motion.div>

            {/* BOTTOM FEATURES */}
            <motion.div
              {...reveal(0.65)}
              className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/20 pt-6"
            >
              {[
                "Healthcare-Focused",
                "Professional Communication",
                "Regional Transportation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  <span className="text-[12px] font-semibold text-[#D0DFE8]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FLOATING CONTACT PANEL */}
          <motion.div
            {...reveal(0.55)}
            className="relative mx-auto w-full max-w-[430px] lg:ml-auto"
          >
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#6DE0D3]/30 sm:-right-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#092940]/85 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-9">

              <div className="mb-7 flex h-[65px] w-[65px] items-center justify-center rounded-[18px] bg-[#0C9B97]/20 text-[#6DE0D3]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 7 9-7" />
                </svg>
              </div>

              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#6DE0D3]">
                START A CONVERSATION
              </p>

              <h2 className="text-[27px] font-extrabold leading-[1.2] text-white">
                How Can We Help?
              </h2>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#C2D3DE]">
                Tell us about your transportation
                requirements and we'll review
                your inquiry.
              </p>

              <div className="my-7 h-px bg-white/15" />

              <div className="space-y-5">

                <a
                  href="tel:+17087330065"
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-[#6DE0D3]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 3 5.1 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L8 11.4a16 16 0 0 0 4.6 4.6l1.9-1.9a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2.9Z" />
                    </svg>
                  </span>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#AFC8D5]">
                      Phone
                    </p>
                    <p className="mt-1 text-[15px] font-bold text-white">
                      708-733-0065
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:maximumcaree@gmail.com"
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-[#6DE0D3]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 7 9-7" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#AFC8D5]">
                      Email
                    </p>
                    <p className="mt-1 break-all text-[14px] font-bold text-white">
                     info@maximumcare.net
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#6DE0D3]">
                    <svg
                      width="21"
                      height="21"
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

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#AFC8D5]">
                      Based In
                    </p>
                    <p className="mt-1 text-[14px] font-bold text-white">
                      Moorhead, Minnesota
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contact-form"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#0C9B97] px-6 py-4 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7B]"
              >
                Write to Maximum Care
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="absolute bottom-0 left-0 z-10 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent" />
      </section>
    </>
  );
}

export default ContactHero;
