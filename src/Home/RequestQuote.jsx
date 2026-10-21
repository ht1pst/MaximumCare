
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

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
  "bot-field": "",
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// REUSABLE FORM FIELD
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
        className="
          min-h-[52px] w-full rounded-xl
          border border-[#DCE7ED]
          bg-white px-4
          text-[14px] text-[#102A43]
          outline-none

          placeholder:text-[#9AACB9]

          transition-all duration-300
          focus:border-[#0C9B97]
          focus:ring-4 focus:ring-[#0C9B97]/10
        "
      />
    </div>
  );
}

// ==========================================
// REUSABLE SELECT FIELD
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
        className="
          min-h-[52px] w-full rounded-xl
          border border-[#DCE7ED]
          bg-white px-4
          text-[14px] text-[#102A43]
          outline-none

          transition-all duration-300
          focus:border-[#0C9B97]
          focus:ring-4 focus:ring-[#0C9B97]/10
        "
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

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==========================================
  // NETLIFY FORM SUBMISSION
  // ==========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setError("");

    const formData = new URLSearchParams();

    formData.append("form-name", "quote-request");

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      setForm({ ...initialForm });
    } catch (error) {
      setError(
        "We couldn't send your request. Please try again or email maximumcaree@gmail.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F8FB]">

      {/* ========================================== */}
      {/* TOP INTRO SECTION                         */}
      {/* ========================================== */}

      <section
        className="
          relative overflow-hidden
          bg-[#071E34]
          px-5 pb-24 pt-16
          sm:px-8
          lg:px-12 lg:pb-32 lg:pt-24
        "
      >
        {/* BACKGROUND DECORATIONS */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-28 -top-28
            h-[400px] w-[400px]
            rounded-full bg-[#0C9B97]/15
            blur-[100px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-32 -left-32
            h-[350px] w-[350px]
            rounded-full bg-[#0C9B97]/10
            blur-[100px]
          "
        />

        <div className="relative mx-auto max-w-[1200px]">

          {/* BACK LINK */}
          <Link
            to="/"
            className="
              mb-10 inline-flex items-center
              gap-2 text-[13px] font-semibold
              text-[#AFC7D5]
              transition-colors duration-300
              hover:text-[#6DE0D3]
            "
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>

          {/* EYEBROW */}
          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#6DE0D3]" />

            <p
              className="
                text-[11px] font-bold uppercase
                tracking-[0.25em]
                text-[#6DE0D3]
                sm:text-[12px]
              "
            >
              MAXIMUM CARE LLC
            </p>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            {...reveal(0.1)}
            className="
              max-w-[750px]
              text-[38px] font-extrabold
              leading-[1.12] tracking-[-0.035em]
              text-white

              sm:text-[50px]
              lg:text-[64px]
            "
          >
            Request a{" "}
            <span className="text-[#6DE0D3]">
              Courier Quote.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            {...reveal(0.2)}
            className="
              mt-6 max-w-[640px]
              text-[15px] leading-[1.9]
              text-[#B5C8D6]
              sm:text-[17px]
            "
          >
            Tell us about your medical transportation needs.
            Our team will review your requirements and discuss
            a suitable courier solution for your organization.
          </motion.p>

          {/* SMALL TRUST LABEL */}
          <motion.div
            {...reveal(0.3)}
            className="
              mt-8 flex flex-wrap items-center gap-3
            "
          >
            {[
              "Reliable Service",
              "Careful Handling",
              "Local & Regional",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full border
                  border-[#6DE0D3]/20
                  bg-white/5 px-4 py-2
                  text-[11px] font-semibold
                  text-[#C9E1E3]
                "
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FORM AND INFORMATION SECTION              */}
      {/* ========================================== */}

      <section
        className="
          relative z-10
          -mt-12 px-5 pb-24
          sm:px-8
          lg:px-12 lg:pb-32
        "
      >
        <div
          className="
            mx-auto grid max-w-[1200px]
            items-start gap-8
            lg:grid-cols-[1.5fr_0.85fr]
            lg:gap-10
          "
        >
          {/* ========================================== */}
          {/* LEFT — FORM CARD                         */}
          {/* ========================================== */}

          <motion.div
            {...reveal(0.1)}
            className="
              rounded-[22px] border
              border-[#E3EDF2]
              bg-white p-6

              shadow-[0_20px_65px_rgba(16,42,67,0.08)]

              sm:p-9
              lg:p-11
            "
          >
            {submitted ? (
              // ======================================
              // SUCCESS MESSAGE
              // ======================================

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
                <div
                  className="
                    mx-auto mb-6 flex
                    h-[76px] w-[76px]
                    items-center justify-center
                    rounded-full
                    bg-[#E6F6F5]
                    text-[#0C9B97]
                  "
                >
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

                <h2
                  className="
                    text-[28px] font-extrabold
                    text-[#102A43]
                    sm:text-[34px]
                  "
                >
                  Request Submitted!
                </h2>

                <p
                  className="
                    mx-auto mt-4 max-w-[430px]
                    text-[15px] leading-[1.9]
                    text-[#526579]
                  "
                >
                  Thank you for contacting Maximum Care LLC.
                  Your quote request has been submitted.
                  Our team will review your details and
                  contact you to discuss the next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="
                    mt-8 inline-flex min-h-[50px]
                    items-center justify-center
                    rounded-xl bg-[#0C9B97]
                    px-7 text-[14px] font-bold
                    text-white transition-colors
                    hover:bg-[#087F7C]
                  "
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              // ======================================
              // QUOTE REQUEST FORM
              // ======================================

              <>
                {/* CARD HEADING */}
                <div className="mb-9">
                  <p
                    className="
                      mb-3 text-[11px] font-bold
                      uppercase tracking-[0.2em]
                      text-[#0C9B97]
                    "
                  >
                    GET STARTED
                  </p>

                  <h2
                    className="
                      text-[25px] font-extrabold
                      tracking-[-0.025em]
                      text-[#102A43]
                      sm:text-[30px]
                    "
                  >
                    Tell Us About Your Delivery
                  </h2>

                  <p
                    className="
                      mt-3 text-[14px] leading-[1.8]
                      text-[#526579]
                    "
                  >
                    Complete the form below so our team
                    can understand your transportation needs.
                    Fields marked * are required.
                  </p>
                </div>

                <form
                  name="quote-request"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="quote-request"
                  />

                  {/* HONEYPOT */}
                  <div
                    className="hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="bot-field">
                      Do not fill this in
                    </label>
                    <input
                      id="bot-field"
                      name="bot-field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form["bot-field"]}
                      onChange={handleChange}
                    />
                  </div>

                  {/* ================================== */}
                  {/* 1. CONTACT INFORMATION           */}
                  {/* ================================== */}

                  <div>
                    <h3
                      className="
                        mb-5 flex items-center gap-3
                        text-[16px] font-extrabold
                        text-[#102A43]
                      "
                    >
                      <span
                        className="
                          flex h-8 w-8
                          items-center justify-center
                          rounded-lg bg-[#E6F6F5]
                          text-[13px] text-[#0C9B97]
                        "
                      >
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

                  {/* ================================== */}
                  {/* 2. DELIVERY DETAILS              */}
                  {/* ================================== */}

                  <div>
                    <h3
                      className="
                        mb-5 flex items-center gap-3
                        text-[16px] font-extrabold
                        text-[#102A43]
                      "
                    >
                      <span
                        className="
                          flex h-8 w-8
                          items-center justify-center
                          rounded-lg bg-[#E6F6F5]
                          text-[13px] text-[#0C9B97]
                        "
                      >
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

                  {/* ================================== */}
                  {/* 3. ADDITIONAL INFORMATION        */}
                  {/* ================================== */}

                  <div>
                    <h3
                      className="
                        mb-5 flex items-center gap-3
                        text-[16px] font-extrabold
                        text-[#102A43]
                      "
                    >
                      <span
                        className="
                          flex h-8 w-8
                          items-center justify-center
                          rounded-lg bg-[#E6F6F5]
                          text-[13px] text-[#0C9B97]
                        "
                      >
                        03
                      </span>

                      Additional Information
                    </h3>

                    <label
                      htmlFor="details"
                      className="
                        mb-2 block text-[13px]
                        font-bold text-[#102A43]
                      "
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
                      className="
                        w-full resize-y rounded-xl
                        border border-[#DCE7ED]
                        bg-white px-4 py-4
                        text-[14px] leading-[1.8]
                        text-[#102A43] outline-none

                        placeholder:text-[#9AACB9]

                        transition-all duration-300
                        focus:border-[#0C9B97]
                        focus:ring-4 focus:ring-[#0C9B97]/10
                      "
                    />

                    <p
                      className="
                        mt-2 text-[12px]
                        leading-[1.7] text-[#71879C]
                      "
                    >
                      Please do not include patient names,
                      medical records, or sensitive patient
                      information in this form.
                    </p>
                  </div>

                  {/* ERROR MESSAGE */}
                  {error && (
                    <div
                      role="alert"
                      className="
                        rounded-xl border
                        border-red-200 bg-red-50
                        px-4 py-3
                        text-[13px] leading-6
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
                        : {
                            y: -3,
                            scale: 1.01,
                          }
                    }
                    whileTap={
                      reduceMotion || submitting
                        ? undefined
                        : { scale: 0.98 }
                    }
                    className="
                      flex min-h-[56px]
                      w-full items-center justify-center
                      gap-3 rounded-xl
                      bg-[#0C9B97] px-6

                      text-[13px] font-extrabold
                      uppercase tracking-[0.08em]
                      text-white

                      transition-colors duration-300
                      hover:bg-[#087F7C]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
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

                  <p
                    className="
                      text-center text-[12px]
                      leading-[1.8] text-[#71879C]
                    "
                  >
                    Submitting this form requests a quote.
                    It does not confirm a booking,
                    service availability, or a delivery price.
                  </p>
                </form>
              </>
            )}
          </motion.div>

          {/* ========================================== */}
          {/* RIGHT — INFORMATION PANEL                 */}
          {/* ========================================== */}

          <motion.aside
            {...reveal(0.25)}
            className="space-y-6"
          >
            {/* HOW IT WORKS */}
            <div
              className="
                rounded-[22px]
                bg-[#102A43] p-7
                text-white
                sm:p-8
              "
            >
              <p
                className="
                  mb-3 text-[11px] font-bold
                  uppercase tracking-[0.2em]
                  text-[#6DE0D3]
                "
              >
                SIMPLE & STRAIGHTFORWARD
              </p>

              <h2
                className="
                  text-[23px] font-extrabold
                  leading-[1.3]
                "
              >
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
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl bg-[#0C9B97]/20
                        text-[12px] font-extrabold
                        text-[#6DE0D3]
                      "
                    >
                      {step.number}
                    </div>

                    <div>
                      <h3
                        className="
                          text-[15px] font-bold
                          text-white
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2 text-[13px]
                          leading-[1.8]
                          text-[#AFC3D0]
                        "
                      >
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DIRECT CONTACT CARD */}
            <div
              className="
                rounded-[22px]
                border border-[#DDE9EE]
                bg-white p-7
                sm:p-8
              "
            >
              <h3
                className="
                  text-[20px] font-extrabold
                  text-[#102A43]
                "
              >
                Prefer to Speak With Us?
              </h3>

              <p
                className="
                  mt-3 text-[14px]
                  leading-[1.8]
                  text-[#526579]
                "
              >
                Our team is happy to discuss your
                medical transportation requirements
                directly.
              </p>

              <a
                href="tel:+17087330065"
                className="
                  mt-6 block text-[18px]
                  font-extrabold text-[#0C9B97]
                  transition-colors duration-300
                  hover:text-[#087F7C]
                "
              >
                708-733-0065
              </a>

              <a
                href="mailto:maximumcaree@gmail.com"
                className="
                  mt-3 block break-all
                  text-[13px] font-semibold
                  text-[#526579]
                  transition-colors duration-300
                  hover:text-[#0C9B97]
                "
              >
                maximumcaree@gmail.com
              </a>
            </div>

            {/* SERVICE AREA CARD */}
            <div
              className="
                rounded-[22px]
                border border-[#CBE7E6]
                bg-[#E6F6F5] p-7
                sm:p-8
              "
            >
              <h3
                className="
                  text-[17px] font-extrabold
                  text-[#102A43]
                "
              >
                Proudly Based in Moorhead
              </h3>

              <p
                className="
                  mt-3 text-[13px]
                  leading-[1.9]
                  text-[#526579]
                "
              >
                Serving Fargo, Moorhead,
                Dilworth, West Fargo,
                and surrounding communities.
                Additional routes may be
                considered based on availability.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

export default RequestQuote;
