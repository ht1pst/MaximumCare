
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";
import heroImg from "../assets/servicesheroimg.jpg";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// NAVIGATION
// ==========================================

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Contact", to: "/contact" },
];

// ==========================================
// SERVICE OPTIONS
// ==========================================

const serviceOptions = [
  "Laboratory Specimen Transportation",
  "Prescription & Pharmacy Deliveries",
  "Medical Supplies & Equipment",
  "Scheduled Courier Services",
  "Time-Sensitive & STAT Deliveries",
  "Confidential Medical Documents",
  "Other Medical Courier Service",
];

const initialForm = {
  organization: "",
  contactName: "",
  email: "",
  phone: "",
  serviceType: "",
  pickupArea: "",
  deliveryArea: "",
  frequency: "",
  preferredDate: "",
  details: "",
};

// ==========================================
// INPUT STYLES
// ==========================================

const inputStyle = `
  min-h-[52px] w-full rounded-xl
  border border-[#DCE7ED]
  bg-white px-4
  text-[14px] text-[#102A43]
  outline-none
  placeholder:text-[#9AACB9]
  transition-all duration-300
  focus:border-[#0C9B97]
  focus:ring-4 focus:ring-[#0C9B97]/10
`;

// ==========================================
// FORM FIELD
// ==========================================

function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-[13px] font-bold text-[#102A43]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#0C9B97]">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
}

// ==========================================
// SELECT FIELD
// ==========================================

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-[13px] font-bold text-[#102A43]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#0C9B97]">*</span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={inputStyle}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

// ==========================================
// REQUEST QUOTE COMPONENT
// ==========================================

function RequestQuote() {
  const reduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // NAVBAR SCROLL BEHAVIOR
  // ==========================================

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

  // ==========================================
  // SCROLL PROGRESS
  // ==========================================

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // ==========================================
  // ANIMATIONS
  // ==========================================

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 35 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  // ==========================================
  // FORM INPUT HANDLING
  // ==========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  // ==========================================
  // SUPABASE QUOTE FORM SUBMISSION
  // ==========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const endpoint = import.meta.env.VITE_QUOTE_ENDPOINT;

      if (!endpoint) {
        throw new Error(
          "Missing VITE_QUOTE_ENDPOINT in .env"
        );
      }

      const formData = {
        organization: form.organization.trim(),
        contactName: form.contactName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        serviceType: form.serviceType,
        pickupArea: form.pickupArea.trim(),
        deliveryArea: form.deliveryArea.trim(),
        frequency: form.frequency,
        preferredDate: form.preferredDate,
        details: form.details.trim(),
      };

      console.log("Sending quote request to Supabase...");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();

      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(
          `Unexpected server response (${response.status})`
        );
      }

      console.log("Quote response status:", response.status);
      console.log("Quote response:", result);

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.error ||
          result.message ||
          `Quote submission failed (${response.status})`
        );
      }

      setSubmitted(true);
      setForm({ ...initialForm });

      console.log("Quote request saved successfully.");

    } catch (error) {
      console.error(
        "Maximum Care quote submission failed:",
        error
      );

      setError(
        "We couldn't submit your quote request. Please try again or contact us directly."
      );

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F8FB]">

      {/* ====================================== */}
      {/* NAVBAR */}
      {/* ====================================== */}

      <header
        className={`
          fixed left-0 top-0 z-[100] w-full
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
              className="h-[90px] w-auto object-contain sm:h-[63px] lg:h-[90px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
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
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-[13px] font-semibold transition-colors duration-300 hover:text-[#0C9B97]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP QUOTE BUTTON */}
          <Link
            to="/request-quote"
            aria-current="page"
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
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="quote-mobile-navigation"
            className={`
              relative z-20 flex h-11 w-11
              items-center justify-center rounded-xl
              border transition-colors lg:hidden
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

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="quote-mobile-navigation"
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
              className="overflow-hidden border-t border-[#E5EDF2] bg-white shadow-xl lg:hidden"
            >
              <div className="space-y-1 px-5 py-5 sm:px-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3.5 text-[14px] font-semibold text-[#102A43] transition-colors duration-300 hover:bg-[#E8F6F4] hover:text-[#0C9B97]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/request-quote"
                  onClick={closeMenu}
                  aria-current="page"
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

      {/* ====================================== */}
      {/* FULL-WIDTH HERO */}
      {/* ====================================== */}

      <section
        id="quote-hero"
        className="relative isolate flex min-h-[760px] w-full items-center overflow-hidden bg-[#071E34] text-white sm:min-h-[800px] lg:min-h-[850px]"
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroImg}
            alt="Medical courier transportation for healthcare organizations"
            className="h-full w-full object-cover object-center"
            initial={
              reduceMotion ? false : { scale: 1.1 }
            }
            animate={{ scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 1.8,
              ease,
            }}
          />
        </div>

        {/* DARK OVERLAYS */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071E34]/95 via-[#071E34]/85 to-[#071E34]/50" />

        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#071E34]/90 via-transparent to-[#071E34]/20" />

        {/* TEAL GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 z-0 h-[480px] w-[480px] rounded-full bg-[#0C9B97]/15 blur-[110px]"
        />

        {/* DECORATIVE RINGS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-[15%] z-0 hidden h-[510px] w-[510px] rounded-full border border-white/10 lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[23%] z-0 hidden h-[370px] w-[370px] rounded-full border border-white/10 lg:block"
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-5 pb-28 pt-40 sm:px-8 sm:pb-32 sm:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:pt-48">

          {/* LEFT CONTENT */}
          <div className="max-w-[790px]">

            {/* EYEBROW */}
            <motion.div
              {...reveal(0.05)}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#6DE0D3]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#6DE0D3] sm:text-[12px]">
                GET STARTED WITH MAXIMUM CARE LLC
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              {...reveal(0.12)}
              className="text-[43px] font-extrabold leading-[1.1] tracking-[-0.045em] text-white sm:text-[59px] lg:text-[67px] xl:text-[74px]"
            >
              Request a

              <span className="mt-2 block text-[#6DE0D3]">
                Medical Courier
              </span>

              <span className="mt-1 block text-white">
                Quote.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal(0.23)}
              className="mt-7 max-w-[660px] text-[15px] leading-[1.95] text-[#D0DFE8] sm:text-[17px] lg:text-[18px]"
            >
              Tell us about your healthcare transportation
              needs. Whether you need a scheduled courier
              arrangement or have an individual delivery
              in mind, we're here to review your request
              and discuss suitable options.
            </motion.p>

            <motion.p
              {...reveal(0.3)}
              className="mt-4 max-w-[625px] text-[14px] leading-[1.9] text-[#B8CDDA] sm:text-[15px]"
            >
              Based in Moorhead, Minnesota, with a focus
              on Fargo, West Fargo, Dilworth, and nearby
              communities. Transportation requests are
              subject to shipment suitability, route
              feasibility, and service availability.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              {...reveal(0.38)}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#quote-form"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_15px_35px_rgba(12,155,151,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B]"
              >
                Start Your Quote Request

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

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 py-4 text-[14px] font-bold text-white backdrop-blur-md transition-colors duration-300 hover:border-[#6DE0D3] hover:bg-white/15"
              >
                Explore Our Services
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            {/* HERO FEATURES */}
            <motion.div
              {...reveal(0.48)}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/20 pt-6"
            >
              {[
                "Healthcare-Focused",
                "Regional Transportation",
                "Clear Communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />

                  <span className="text-[12px] font-semibold text-[#D0DFE8] sm:text-[13px]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FLOATING GLASS PANEL */}
          <motion.div
            {...reveal(0.42)}
            className="relative mx-auto w-full max-w-[450px] lg:ml-auto"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-[28px] border border-[#6DE0D3]/30 sm:-right-5 sm:-top-5"
            />

            <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#092940]/85 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0C9B97]/25 blur-[75px]"
              />

              <div className="relative z-10">

                {/* ICON */}
                <div className="mb-6 flex h-[62px] w-[62px] items-center justify-center rounded-2xl border border-[#6DE0D3]/20 bg-[#0C9B97]/20 text-[#6DE0D3]">
                  <svg
                    width="30"
                    height="30"
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
                </div>

                <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#6DE0D3]">
                  HOW TO GET STARTED
                </p>

                <h2 className="mt-2 text-[25px] font-extrabold text-white sm:text-[29px]">
                  Three Simple Steps
                </h2>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#C5D8E1]">
                  Share a few details so we can evaluate
                  your healthcare transportation request.
                </p>

                {/* STEPS */}
                <div className="mt-7 space-y-3">
                  {[
                    {
                      number: "01",
                      title: "Tell Us What You Need",
                      description:
                        "Provide your shipment and service details.",
                    },
                    {
                      number: "02",
                      title: "Share Your Route",
                      description:
                        "Include pickup, destination, and timing.",
                    },
                    {
                      number: "03",
                      title: "We'll Review the Request",
                      description:
                        "Discuss availability and possible next steps.",
                    },
                  ].map((step) => (
                    <div
                      key={step.number}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0C9B97]/25 text-[12px] font-extrabold text-[#6DE0D3]">
                        {step.number}
                      </span>

                      <div>
                        <h3 className="text-[14px] font-extrabold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-[12px] leading-[1.75] text-[#BDD1DC]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[11px] leading-[1.8] text-[#A9C2D0]">
                  Submitting a request does not guarantee
                  a booking or confirm a delivery price.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TEAL ACCENT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-10 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent"
        />
      </section>

      {/* ====================================== */}
      {/* QUOTE FORM SECTION */}
      {/* ====================================== */}

      <section
        id="quote-form"
        className="relative z-10 scroll-mt-24 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      >
        <div className="mx-auto grid max-w-[1200px] items-start gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:gap-10">

          {/* LEFT FORM CARD */}
          <motion.div
            {...reveal(0.1)}
            className="-mt-12 rounded-[22px] border border-[#E3EDF2] bg-white p-6 shadow-[0_20px_65px_rgba(16,42,67,0.08)] sm:p-9 lg:p-11"
          >
            {submitted ? (

              /* SUCCESS MESSAGE */
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.95 }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                }}
                role="status"
                className="py-12 text-center"
              >
                <div className="mx-auto mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#E6F6F5] text-[#0C9B97]">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m7 12 3 3 7-7" />
                  </svg>
                </div>

                <h2 className="text-[28px] font-extrabold text-[#102A43] sm:text-[34px]">
                  Request Submitted!
                </h2>

                <p className="mx-auto mt-4 max-w-[430px] text-[15px] leading-[1.9] text-[#526579]">
                  Thank you for contacting Maximum Care LLC.
                  Your quote request has been submitted.
                  Our team will review your details and
                  contact you to discuss the next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#0C9B97] px-7 text-[14px] font-bold text-white transition-colors hover:bg-[#087F7C]"
                >
                  Submit Another Request
                </button>
              </motion.div>

            ) : (

              /* QUOTE REQUEST FORM */
              <>
                {/* FORM HEADING */}
                <div className="mb-9">

                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0C9B97]">
                    GET STARTED
                  </p>

                  <h2 className="text-[25px] font-extrabold tracking-[-0.025em] text-[#102A43] sm:text-[30px]">
                    Tell Us About Your Delivery
                  </h2>

                  <p className="mt-3 text-[14px] leading-[1.8] text-[#526579]">
                    Complete the form below so our team
                    can understand your transportation
                    needs. Fields marked * are required.
                  </p>
                </div>

                {/* SUPABASE QUOTE FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >

                  {/* ================================= */}
                  {/* 1. CONTACT INFORMATION */}
                  {/* ================================= */}

                  <div>
                    <h3 className="mb-5 flex items-center gap-3 text-[16px] font-extrabold text-[#102A43]">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6F6F5] text-[13px] text-[#0C9B97]">
                        01
                      </span>
                      Contact Information
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2">

                      <div className="sm:col-span-2">
                        <FormField
                          label="Organization / Company Name"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Healthcare organization name"
                          required
                        />
                      </div>

                      <FormField
                        label="Contact Person"
                        name="contactName"
                        value={form.contactName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />

                      <FormField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                      />

                      <div className="sm:col-span-2">
                        <FormField
                          label="Email Address"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="name@organization.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-[#E7EEF2]" />

                  {/* ================================= */}
                  {/* 2. DELIVERY DETAILS */}
                  {/* ================================= */}

                  <div>
                    <h3 className="mb-5 flex items-center gap-3 text-[16px] font-extrabold text-[#102A43]">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6F6F5] text-[13px] text-[#0C9B97]">
                        02
                      </span>
                      Delivery Details
                    </h3>

                    <div className="space-y-5">

                      <SelectField
                        label="Type of Courier Service"
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        options={serviceOptions}
                        placeholder="Select a service"
                        required
                      />

                      <div className="grid gap-5 sm:grid-cols-2">

                        <FormField
                          label="Pickup Location / Area"
                          name="pickupArea"
                          value={form.pickupArea}
                          onChange={handleChange}
                          placeholder="e.g. Fargo, ND"
                          required
                        />

                        <FormField
                          label="Delivery Location / Area"
                          name="deliveryArea"
                          value={form.deliveryArea}
                          onChange={handleChange}
                          placeholder="e.g. Moorhead, MN"
                          required
                        />
                      </div>

                      <SelectField
                        label="Delivery Frequency"
                        name="frequency"
                        value={form.frequency}
                        onChange={handleChange}
                        options={[
                          "One-Time Delivery",
                          "Daily / Recurring",
                          "Weekly Scheduled Deliveries",
                          "Time-Sensitive / STAT",
                          "Not Sure Yet",
                        ]}
                        placeholder="Select delivery frequency"
                        required
                      />

                      <FormField
                        label="Preferred Start / Delivery Date"
                        name="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="h-px bg-[#E7EEF2]" />

                  {/* ================================= */}
                  {/* 3. ADDITIONAL INFORMATION */}
                  {/* ================================= */}

                  <div>
                    <h3 className="mb-5 flex items-center gap-3 text-[16px] font-extrabold text-[#102A43]">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6F6F5] text-[13px] text-[#0C9B97]">
                        03
                      </span>
                      Additional Information
                    </h3>

                    <label
                      htmlFor="details"
                      className="mb-2 block text-[13px] font-bold text-[#102A43]"
                    >
                      Tell Us More About Your Requirements
                    </label>

                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Describe your delivery schedule, shipment type, special handling requirements, or any additional details that will help us prepare your quote."
                      className="w-full resize-y rounded-xl border border-[#DCE7ED] bg-white px-4 py-4 text-[14px] leading-[1.8] text-[#102A43] outline-none placeholder:text-[#9AACB9] transition-all duration-300 focus:border-[#0C9B97] focus:ring-4 focus:ring-[#0C9B97]/10"
                    />

                    <p className="mt-2 text-[12px] leading-[1.7] text-[#71879C]">
                      Please do not include patient names,
                      medical records, or sensitive patient
                      information in this form.
                    </p>
                  </div>

                  {/* ERROR MESSAGE */}
                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] leading-6 text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={
                      reduceMotion || submitting
                        ? undefined
                        : { y: -3, scale: 1.01 }
                    }
                    whileTap={
                      reduceMotion || submitting
                        ? undefined
                        : { scale: 0.98 }
                    }
                    className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-6 text-[13px] font-extrabold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#087F7C] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      "SENDING REQUEST..."
                    ) : (
                      <>
                        SUBMIT QUOTE REQUEST
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-[12px] leading-[1.8] text-[#71879C]">
                    Submitting this form requests a quote.
                    It does not confirm a booking,
                    service availability, or a delivery price.
                  </p>
                </form>
              </>
            )}
          </motion.div>

          {/* ====================================== */}
          {/* RIGHT INFORMATION PANEL */}
          {/* ====================================== */}

          <motion.aside
            {...reveal(0.25)}
            className="space-y-6"
          >
            {/* HOW IT WORKS */}
            <div className="rounded-[22px] bg-[#102A43] p-7 text-white sm:p-8">

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6DE0D3]">
                SIMPLE & STRAIGHTFORWARD
              </p>

              <h2 className="text-[23px] font-extrabold leading-[1.3]">
                What Happens Next?
              </h2>

              <div className="mt-8 space-y-7">
                {[
                  {
                    number: "01",
                    title: "Submit Your Request",
                    text: "Provide the key details of your courier requirements.",
                  },
                  {
                    number: "02",
                    title: "We Review Your Needs",
                    text: "Our team considers your route, schedule, and shipment requirements.",
                  },
                  {
                    number: "03",
                    title: "We Contact You",
                    text: "We discuss availability, pricing, and suitable service arrangements.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[12px] font-extrabold text-[#6DE0D3]">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-[15px] font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-[1.8] text-[#AFC3D0]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DIRECT CONTACT CARD */}
            <div className="rounded-[22px] border border-[#DDE9EE] bg-white p-7 sm:p-8">

              <h3 className="text-[20px] font-extrabold text-[#102A43]">
                Prefer to Speak With Us?
              </h3>

              <p className="mt-3 text-[14px] leading-[1.8] text-[#526579]">
                Our team is happy to discuss your
                medical transportation requirements
                directly.
              </p>

              <a
                href="tel:+17087330065"
                className="mt-6 block text-[18px] font-extrabold text-[#0C9B97] transition-colors duration-300 hover:text-[#087F7C]"
              >
                708-733-0065
              </a>

              <a
                href="mailto:info@maximumcare.net"
                className="mt-3 block break-all text-[13px] font-semibold text-[#526579] transition-colors duration-300 hover:text-[#0C9B97]"
              >
                info@maximumcare.net
              </a>
            </div>

            {/* SERVICE AREA CARD */}
            <div className="rounded-[22px] border border-[#CBE7E6] bg-[#E6F6F5] p-7 sm:p-8">

              <h3 className="text-[17px] font-extrabold text-[#102A43]">
                Proudly Based in Moorhead
              </h3>

              <p className="mt-3 text-[13px] leading-[1.9] text-[#526579]">
                Our regional focus includes Fargo,
                Moorhead, Dilworth, West Fargo,
                and surrounding communities.
                Additional routes may be considered
                based on availability.
              </p>

              <Link
                to="/service-areas"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#0C9B97] transition-colors hover:text-[#087F7C]"
              >
                Explore Service Areas
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}

export default RequestQuote;
