
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  subject: "",
  message: "",
};

const inputStyle =
  "w-full rounded-xl border border-[#DBE7EC] bg-[#F8FBFC] px-4 py-3.5 text-[14px] text-[#102A43] outline-none transition-colors duration-200 placeholder:text-[#8A9DAE] focus:border-[#0C9B97] focus:ring-2 focus:ring-[#0C9B97]/10";

const labelStyle =
  "mb-2 block text-[12px] font-extrabold text-[#102A43]";

function ContactSection2() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  // ========================================
  // HANDLE FORM INPUT
  // ========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  // ========================================
  // SEND FORM TO SUPABASE
  // ========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const endpoint =
        import.meta.env.VITE_CONTACT_ENDPOINT;

      if (!endpoint) {
        throw new Error(
          "Missing VITE_CONTACT_ENDPOINT in .env"
        );
      }

      console.log(
        "Sending contact message to Supabase..."
      );

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          organization: form.organization.trim(),
          subject: form.subject,
          message: form.message.trim(),
          website: "",
        }),
      });

      const responseText = await response.text();

      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(
          `Unexpected server response (${response.status}): ${responseText}`
        );
      }

      console.log(
        "Supabase response status:",
        response.status
      );

      console.log("Supabase result:", result);

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.error ||
          `Request failed (${response.status})`
        );
      }

      setStatus({
        type: "success",
        message:
          "Your message has been submitted successfully. Thank you for contacting Maximum Care LLC.",
      });

      setForm(initialForm);

    } catch (error) {
      console.error(
        "Maximum Care contact submission failed:",
        error
      );

      setStatus({
        type: "error",
        message:
          "We couldn't submit your message. Please try again or contact us directly by email or phone.",
      });

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="relative w-full scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ====================================== */}
        {/* SECTION HEADER */}
        {/* ====================================== */}

        
        {/* ====================================== */}
        {/* TWO-COLUMN LAYOUT */}
        {/* ====================================== */}

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* ====================================== */}
          {/* LEFT CONTACT INFORMATION */}
          {/* ====================================== */}

          <motion.div
            {...reveal(0.1)}
            className="space-y-7"
          >
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0C9B97]">
                CONTACT INFORMATION
              </p>

              <h3 className="text-[29px] font-extrabold leading-[1.2] text-[#071E34] sm:text-[36px]">
                We're Here to

                <span className="block text-[#0C9B97]">
                  Connect With You.
                </span>
              </h3>

              <p className="mt-5 text-[14px] leading-[1.95] text-[#617589] sm:text-[15px]">
                Whether you're a healthcare provider,
                pharmacy, laboratory, or medical facility,
                Maximum Care LLC welcomes the opportunity
                to discuss your transportation needs.
              </p>
            </div>

            {/* PHONE CARD */}
            <a
              href="tel:+17087330065"
              className="group flex items-center gap-4 rounded-2xl border border-[#DFEAEF] bg-[#F8FBFC] p-5 transition-all duration-300 hover:border-[#0C9B97]/40 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E2F5F2] text-[#0C9B97]">
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
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 3 5.1 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L8 11.4a16 16 0 0 0 4.6 4.6l1.9-1.9a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2.9Z" />
                </svg>
              </span>

              <span>
                <span className="block text-[11px] font-bold uppercase tracking-wide text-[#0C9B97]">
                  Call Maximum Care
                </span>

                <span className="mt-1 block text-[17px] font-extrabold text-[#071E34]">
                  708-733-0065
                </span>

                <span className="mt-1 block text-[12px] text-[#718398]">
                  Call to discuss your inquiry
                </span>
              </span>
            </a>

            {/* EMAIL CARD */}
            <a
              href="mailto:info@maximumcare.net"
              className="group flex items-center gap-4 rounded-2xl border border-[#DFEAEF] bg-[#F8FBFC] p-5 transition-all duration-300 hover:border-[#0C9B97]/40 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E2F5F2] text-[#0C9B97]">
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
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 7 9-7" />
                </svg>
              </span>

              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-[#0C9B97]">
                  Email Maximum Care
                </span>

                <span className="mt-1 block break-all text-[15px] font-extrabold text-[#071E34] sm:text-[17px]">
                  info@maximumcare.net
                </span>

                <span className="mt-1 block text-[12px] text-[#718398]">
                  Send a general inquiry
                </span>
              </span>
            </a>

            {/* LOCATION CARD */}
            <div className="flex items-center gap-4 rounded-2xl border border-[#DFEAEF] bg-[#F8FBFC] p-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E2F5F2] text-[#0C9B97]">
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
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#0C9B97]">
                  Our Location
                </p>

                <p className="mt-1 text-[17px] font-extrabold text-[#071E34]">
                  Moorhead, Minnesota
                </p>

                <p className="mt-1 text-[12px] text-[#718398]">
                  Fargo–Moorhead regional focus
                </p>
              </div>
            </div>

            {/* REQUEST QUOTE INFORMATION PANEL */}
            <div className="relative overflow-hidden rounded-[24px] bg-[#071E34] p-6 text-white sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#0C9B97]/20 blur-[70px]"
              />

              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6DE0D3]">
                  REQUESTING COURIER SERVICE?
                </p>

                <h4 className="mt-4 text-[22px] font-extrabold leading-[1.3]">
                  Need Transportation

                  <span className="block text-[#6DE0D3]">
                    for a Specific Shipment?
                  </span>
                </h4>

                <p className="mt-4 text-[13px] leading-[1.9] text-[#C2D3DE]">
                  For a delivery estimate, please use
                  our dedicated quote form so you can
                  provide pickup, destination, and
                  scheduling information.
                </p>

                <Link
                  to="/request-quote"
                  className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[#0C9B97] px-6 py-3.5 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7B]"
                >
                  Request a Quote
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ====================================== */}
          {/* RIGHT CONTACT FORM PANEL */}
          {/* ====================================== */}

          <motion.div
            {...reveal(0.2)}
            className="relative overflow-hidden rounded-[28px] border border-[#E0EBF0] bg-white p-6 shadow-[0_20px_60px_rgba(7,30,52,0.08)] sm:p-9 lg:p-10"
          >
            {/* TOP ACCENT */}
            <div className="absolute left-0 top-0 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent" />

            <div className="mb-9">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0C9B97]">
                SEND A MESSAGE
              </p>

              <h3 className="mt-3 text-[27px] font-extrabold text-[#071E34] sm:text-[32px]">
                How Can We Help You?
              </h3>

              <p className="mt-3 text-[13px] leading-[1.85] text-[#718398] sm:text-[14px]">
                Fill out the form below with your contact
                information and the nature of your inquiry.
              </p>
            </div>

            {/* ====================================== */}
            {/* CONTACT FORM */}
            {/* ====================================== */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* NAME AND EMAIL */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* FULL NAME */}
                <div>
                  <label
                    htmlFor="contact-fullName"
                    className={labelStyle}
                  >
                    Full Name
                    <span className="ml-1 text-[#0C9B97]">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-fullName"
                    name="fullName"
                    type="text"
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>

                {/* EMAIL ADDRESS */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className={labelStyle}
                  >
                    Email Address
                    <span className="ml-1 text-[#0C9B97]">
                      *
                    </span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* PHONE AND ORGANIZATION */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* PHONE NUMBER */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className={labelStyle}
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    maxLength={30}
                    autoComplete="tel"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>

                {/* ORGANIZATION */}
                <div>
                  <label
                    htmlFor="contact-organization"
                    className={labelStyle}
                  >
                    Organization
                  </label>

                  <input
                    id="contact-organization"
                    name="organization"
                    type="text"
                    maxLength={150}
                    autoComplete="organization"
                    placeholder="Company or facility name"
                    value={form.organization}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className={labelStyle}
                >
                  Subject
                  <span className="ml-1 text-[#0C9B97]">
                    *
                  </span>
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">
                    Select an inquiry type
                  </option>

                  <option value="General Inquiry">
                    General Inquiry
                  </option>

                  <option value="Medical Courier Services">
                    Medical Courier Services
                  </option>

                  <option value="Service Area Question">
                    Service Area Question
                  </option>

                  <option value="Scheduling Inquiry">
                    Scheduling Inquiry
                  </option>

                  <option value="Partnership Inquiry">
                    Partnership Inquiry
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* YOUR MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className={labelStyle}
                >
                  Your Message
                  <span className="ml-1 text-[#0C9B97]">
                    *
                  </span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  maxLength={3000}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputStyle} resize-y`}
                />
              </div>

              {/* PRIVACY NOTICE */}
              <div className="rounded-xl border border-[#DCECE8] bg-[#F0F9F7] p-4">
                <p className="text-[12px] leading-[1.85] text-[#526579]">
                  Please do not include patient names,
                  medical records, protected health
                  information, or other sensitive personal
                  information in this general contact form.
                </p>
              </div>

              {/* SUBMISSION STATUS */}
              {status.message && (
                <div
                  role={
                    status.type === "error"
                      ? "alert"
                      : "status"
                  }
                  aria-live="polite"
                  className={`rounded-xl border p-4 text-[13px] leading-[1.8] ${
                    status.type === "success"
                      ? "border-[#B8E5D7] bg-[#F0FAF5] text-[#17694B]"
                      : "border-[#F1CACA] bg-[#FFF4F4] text-[#A13232]"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={submitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.2)] transition-all duration-300 hover:bg-[#087F7B] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting
                  ? "Sending Message..."
                  : "Send Your Message"}

                {!submitting && (
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
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                )}
              </button>

              <p className="text-center text-[11px] leading-[1.8] text-[#8293A2]">
                Submitting an inquiry does not confirm
                transportation service or availability.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection2;
