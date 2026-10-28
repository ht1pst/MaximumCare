
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import logo from "../assets/maximumcarelogo.webp";
import heroImg from "../assets/servicesheroimg.jpg";

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

const frequencyOptions = [
  "One-Time Delivery",
  "Daily / Recurring",
  "Weekly Scheduled Deliveries",
  "Time-Sensitive / STAT",
  "Not Sure Yet",
];

// ==========================================
// FORM STATE
// DO NOT CHANGE THESE FIELD NAMES
// ==========================================

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
// FORM STYLING
// ==========================================

const fieldStyle = `
  w-full min-h-[46px]
  rounded-xl border border-[#DCE7ED]
  bg-white px-4 py-3
  text-[13px] text-[#102A43]
  outline-none
  placeholder:text-[#9AACB9]
  transition-all duration-300
  focus:border-[#0C9B97]
  focus:ring-4 focus:ring-[#0C9B97]/10
`;

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
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[12px] font-bold text-[#102A43]"
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
        placeholder={placeholder}
        required={required}
        className={fieldStyle}
      />
    </div>
  );
}

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
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[12px] font-bold text-[#102A43]"
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
        className={fieldStyle}
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
// REQUEST QUOTE PAGE
// ==========================================

function RequestQuote() {
  const reduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // ========================================
  // NAVBAR SCROLL BEHAVIOR
  // ========================================

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

  // ========================================
  // ANIMATION
  // ========================================

  const reveal = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 18 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  // ========================================
  // INPUT CHANGE HANDLER
  // ========================================

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

  // ========================================
  // SUPABASE QUOTE SUBMISSION
  // EXISTING BACKEND CONNECTION PRESERVED
  // ========================================

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

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.error ||
          result.message ||
          `Quote submission failed (${response.status})`
        );
      }

      setSubmitted(true);
      setForm({ ...initialForm });

    } catch (submitError) {
      console.error(
        "Maximum Care quote submission failed:",
        submitError
      );

      setError(
        "We couldn't submit your request. Please try again or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F8FB]">

      {/* ====================================== */}
      {/* NAVIGATION HEADER */}
      {/* ====================================== */}

      <header
        className={`
          fixed left-0 top-0 z-[100] w-full
          transition-all duration-300
          ${
            solidHeader
              ? "border-b border-[#E5EDF2] bg-white/95 shadow-[0_6px_25px_rgba(7,30,52,0.08)] backdrop-blur-xl"
              : "border-b border-white/15 bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto flex h-[95px]
            max-w-[1400px]
            items-center justify-between
            gap-5 px-5
            sm:px-8 lg:px-12
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Maximum Care Home"
            className="relative z-10 shrink-0"
          >
            <img
              src={logo}
              alt="Maximum Care LLC"
              className="h-[75px] w-auto object-contain sm:h-[78px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  text-[13px] font-semibold
                  transition-colors duration-300
                  hover:text-[#0C9B97]
                  ${
                    solidHeader
                      ? "text-[#102A43]"
                      : "text-white"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP QUOTE BUTTON */}
          <Link
            to="/request-quote"
            aria-current="page"
            className="
              hidden items-center
              justify-center rounded-xl
              bg-[#0C9B97] px-5 py-3
              text-[12px] font-bold
              text-white transition-colors
              hover:bg-[#087F7C]
              xl:inline-flex
            "
          >
            Request a Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="quote-mobile-navigation"
            className={`
              flex h-11 w-11 items-center
              justify-center rounded-xl xl:hidden
              ${
                solidHeader
                  ? "bg-[#F0F8FC] text-[#102A43]"
                  : "bg-white/15 text-white"
              }
            `}
          >
            {menuOpen ? (
              <span className="text-[25px]">×</span>
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
                duration: reduceMotion ? 0 : 0.25,
              }}
              className="
                max-h-[calc(100svh-95px)]
                overflow-y-auto bg-white
                shadow-lg xl:hidden
              "
            >
              <div className="flex flex-col px-6 pb-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className="
                      border-b border-[#E3EDF2]
                      py-4 text-[14px]
                      font-semibold text-[#102A43]
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/request-quote"
                  onClick={closeMenu}
                  className="
                    mt-5 rounded-xl bg-[#0C9B97]
                    px-5 py-3.5 text-center
                    text-[13px] font-bold text-white
                  "
                >
                  Request a Quote
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ====================================== */}
      {/* 1. SHORT, CLEAN HERO */}
      {/* ====================================== */}

      <section
        id="quote-hero"
        className="
          relative isolate overflow-hidden
          bg-[#071E34] text-white
        "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#071E34]/95
            via-[#071E34]/85
            to-[#071E34]/65
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative z-10 mx-auto
            max-w-[1200px]
            px-5 pb-14 pt-[145px]
            sm:px-8 sm:pb-16
            lg:px-12 lg:pb-20
          "
        >
          <motion.div
            {...reveal}
            className="max-w-[750px]"
          >
            <p
              className="
                text-[11px] font-extrabold
                uppercase tracking-[0.2em]
                text-[#6DE0D3]
              "
            >
              GET STARTED
            </p>

            <h1
              className="
                mt-3 text-[38px]
                font-extrabold leading-[1.1]
                tracking-[-0.04em]
                sm:text-[48px]
                lg:text-[55px]
              "
            >
              Request a{" "}
              <span className="text-[#6DE0D3]">
                Quote.
              </span>
            </h1>

            <p
              className="
                mt-4 max-w-[620px]
                text-[14px] leading-[1.75]
                text-[#D0DFE8]
                sm:text-[16px]
              "
            >
              Tell us about your delivery needs, and
              we'll review suitable courier options.
            </p>

            <a
              href="#quote-form"
              className="
                mt-6 inline-flex min-h-[45px]
                items-center justify-center
                rounded-xl bg-[#0C9B97]
                px-6 text-[13px]
                font-extrabold text-white
                transition-colors hover:bg-[#087F7C]
              "
            >
              Start Your Request ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====================================== */}
      {/* 2. COMPACT QUOTE FORM */}
      {/* ====================================== */}

      <section
        id="quote-form"
        className="
          scroll-mt-24
          px-5 py-12
          sm:px-8 sm:py-14
          lg:px-12 lg:py-16
        "
      >
        <div
          className="
            mx-auto grid max-w-[1200px]
            items-start gap-6
            lg:grid-cols-[1.65fr_0.75fr]
            lg:gap-8
          "
        >
          {/* ================================== */}
          {/* LEFT FORM CARD */}
          {/* ================================== */}

          <div
            className="
              rounded-[20px]
              border border-[#E3EDF2]
              bg-white p-5
              shadow-[0_12px_35px_rgba(16,42,67,0.06)]
              sm:p-7 lg:p-8
            "
          >
            {submitted ? (
              /* SUCCESS MESSAGE */
              <div
                role="status"
                className="py-12 text-center"
              >
                <div
                  className="
                    mx-auto flex h-14 w-14
                    items-center justify-center
                    rounded-full bg-[#E6F6F5]
                    text-[28px] text-[#0C9B97]
                  "
                >
                  ✓
                </div>

                <h2
                  className="
                    mt-5 text-[25px]
                    font-extrabold text-[#102A43]
                  "
                >
                  Request Submitted!
                </h2>

                <p
                  className="
                    mx-auto mt-3 max-w-[430px]
                    text-[14px] leading-[1.75]
                    text-[#526579]
                  "
                >
                  Thank you! We've received your quote
                  request. Our team will review the
                  details and contact you about the
                  next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="
                    mt-6 rounded-xl
                    bg-[#0C9B97]
                    px-6 py-3.5
                    text-[13px] font-bold text-white
                    transition-colors
                    hover:bg-[#087F7C]
                  "
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                {/* FORM HEADING */}
                <div className="mb-6">
                  <p
                    className="
                      text-[11px] font-extrabold
                      uppercase tracking-[0.17em]
                      text-[#0C9B97]
                    "
                  >
                    QUOTE REQUEST
                  </p>

                  <h2
                    className="
                      mt-2 text-[25px]
                      font-extrabold text-[#102A43]
                      sm:text-[29px]
                    "
                  >
                    Tell Us About Your Delivery
                  </h2>

                  <p
                    className="
                      mt-2 text-[13px]
                      leading-[1.7] text-[#526579]
                    "
                  >
                    Complete the details below.
                    Fields marked * are required.
                  </p>
                </div>

                {/* ================================= */}
                {/* SUPABASE FORM */}
                {/* ================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* CONTACT INFORMATION */}
                  <div>
                    <h3
                      className="
                        mb-4 border-b border-[#E7EEF2]
                        pb-3 text-[15px]
                        font-extrabold text-[#102A43]
                      "
                    >
                      Contact Information
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <FormField
                          label="Organization / Company"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Organization name"
                          required
                        />
                      </div>

                      <FormField
                        label="Contact Person"
                        name="contactName"
                        value={form.contactName}
                        onChange={handleChange}
                        placeholder="Full name"
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

                  {/* DELIVERY INFORMATION */}
                  <div>
                    <h3
                      className="
                        mb-4 border-b border-[#E7EEF2]
                        pb-3 text-[15px]
                        font-extrabold text-[#102A43]
                      "
                    >
                      Delivery Details
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <SelectField
                          label="Courier Service"
                          name="serviceType"
                          value={form.serviceType}
                          onChange={handleChange}
                          options={serviceOptions}
                          placeholder="Select a service"
                          required
                        />
                      </div>

                      <FormField
                        label="Pickup Area"
                        name="pickupArea"
                        value={form.pickupArea}
                        onChange={handleChange}
                        placeholder="e.g. Fargo, ND"
                        required
                      />

                      <FormField
                        label="Delivery Area"
                        name="deliveryArea"
                        value={form.deliveryArea}
                        onChange={handleChange}
                        placeholder="e.g. Moorhead, MN"
                        required
                      />

                      <SelectField
                        label="Delivery Frequency"
                        name="frequency"
                        value={form.frequency}
                        onChange={handleChange}
                        options={frequencyOptions}
                        placeholder="Select frequency"
                        required
                      />

                      <FormField
                        label="Preferred Date"
                        name="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* ADDITIONAL DETAILS */}
                  <div>
                    <h3
                      className="
                        mb-4 border-b border-[#E7EEF2]
                        pb-3 text-[15px]
                        font-extrabold text-[#102A43]
                      "
                    >
                      Additional Information
                    </h3>

                    <label
                      htmlFor="details"
                      className="mb-1.5 block text-[12px] font-bold text-[#102A43]"
                    >
                      Special Instructions (Optional)
                    </label>

                    <textarea
                      id="details"
                      name="details"
                      rows={3}
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Shipment details or special requirements..."
                      className="
                        w-full resize-y rounded-xl
                        border border-[#DCE7ED]
                        bg-white px-4 py-3
                        text-[13px] leading-[1.7]
                        text-[#102A43]
                        outline-none
                        placeholder:text-[#9AACB9]
                        focus:border-[#0C9B97]
                        focus:ring-4 focus:ring-[#0C9B97]/10
                      "
                    />

                    <p
                      className="
                        mt-2 text-[11px]
                        leading-[1.6] text-[#71879C]
                      "
                    >
                      Please do not include patient names,
                      medical records, or other sensitive
                      patient information.
                    </p>
                  </div>

                  {/* ERROR */}
                  {error && (
                    <div
                      role="alert"
                      className="
                        rounded-xl border
                        border-red-200 bg-red-50
                        px-4 py-3 text-[13px]
                        text-red-700
                      "
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
                        : { y: -2 }
                    }
                    className="
                      flex min-h-[49px] w-full
                      items-center justify-center
                      rounded-xl bg-[#0C9B97]
                      px-6 text-[13px]
                      font-extrabold text-white
                      transition-colors
                      hover:bg-[#087F7C]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {submitting
                      ? "Sending Request..."
                      : "Submit Quote Request →"}
                  </motion.button>

                  <p
                    className="
                      text-center text-[11px]
                      leading-[1.7] text-[#71879C]
                    "
                  >
                    A request is not a confirmed booking
                    or price quote. All services are
                    subject to availability.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* ================================== */}
          {/* RIGHT SIDE — COMPACT CONTACT CARD */}
          {/* ================================== */}

          <aside
            className="
              rounded-[20px]
              bg-[#102A43]
              p-6 text-white
              sm:p-7
            "
          >
            <p
              className="
                text-[11px] font-bold
                uppercase tracking-[0.15em]
                text-[#6DE0D3]
              "
            >
              NEED HELP?
            </p>

            <h2
              className="
                mt-3 text-[21px]
                font-extrabold leading-tight
              "
            >
              We're Here to Help
            </h2>

            <p
              className="
                mt-3 text-[13px]
                leading-[1.75] text-[#C5D8E1]
              "
            >
              Have questions about a delivery?
              Contact our team directly.
            </p>

            {/* PHONE */}
            <a
              href="tel:+17087330065"
              className="
                mt-5 block text-[17px]
                font-extrabold text-[#6DE0D3]
                transition-colors hover:text-white
              "
            >
              708-733-0065
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@maximumcare.net"
              className="
                mt-2 block break-all
                text-[13px] font-semibold
                text-[#D0DFE8]
                transition-colors
                hover:text-[#6DE0D3]
              "
            >
              info@maximumcare.net
            </a>

            <div className="mt-5 border-t border-white/15 pt-4">
              <p
                className="
                  text-[12px] leading-[1.7]
                  text-[#B8CDDA]
                "
              >
                Based in Moorhead, MN. Serving Fargo,
                West Fargo, Dilworth, and nearby areas.
              </p>

              <Link
                to="/service-areas"
                className="
                  mt-3 inline-flex
                  text-[12px] font-bold
                  text-[#6DE0D3]
                  transition-colors hover:text-white
                "
              >
                View Service Areas →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default RequestQuote;
