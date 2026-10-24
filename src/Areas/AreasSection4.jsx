
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const processSteps = [
  {
    number: "01",
    label: "STEP ONE",
    title: "Share Your Delivery Details",
    description:
      "Tell us where your shipment needs to be collected and delivered. Include the healthcare facility, destination, preferred pickup time, and other relevant transportation details.",
    points: [
      "Pickup and delivery locations",
      "Preferred dates and times",
      "Contact and recipient information",
    ],
    icon: "location",
  },
  {
    number: "02",
    label: "STEP TWO",
    title: "Discuss Shipment Requirements",
    description:
      "We review the type of healthcare material being transported, its packaging, applicable handling instructions, and any special considerations that may affect the proposed delivery.",
    points: [
      "Type of shipment",
      "Packaging and handling needs",
      "Authorized delivery instructions",
    ],
    icon: "package",
  },
  {
    number: "03",
    label: "STEP THREE",
    title: "Review Route & Availability",
    description:
      "We assess the requested route, preferred schedule, and operational availability. This helps determine whether the proposed transportation arrangement can be accepted.",
    points: [
      "Route and destination review",
      "Scheduling considerations",
      "Service availability confirmation",
    ],
    icon: "route",
  },
  {
    number: "04",
    label: "STEP FOUR",
    title: "Confirm Delivery Arrangements",
    description:
      "If the request can be accommodated, we discuss the accepted pickup and delivery arrangements, agreed expectations, and any relevant handoff requirements before transportation begins.",
    points: [
      "Agreed transportation details",
      "Pickup and delivery expectations",
      "Appropriate handoff coordination",
    ],
    icon: "check",
  },
];

function StepIcon({ type }) {
  const iconProps = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "location") {
    return (
      <svg {...iconProps}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "package") {
    return (
      <svg {...iconProps}>
        <path d="m3 7 9-4 9 4-9 4-9-4Z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
        <path d="m7.5 5 9 4" />
      </svg>
    );
  }

  if (type === "route") {
    return (
      <svg {...iconProps}>
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18h8a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h8" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

function AreasSection4() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 35,
        },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="delivery-coordination"
      className="relative isolate w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* ===================================== */}
      {/* BACKGROUND DECORATIONS                */}
      {/* ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[#0C9B97]/5 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#071E34]/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ===================================== */}
        {/* SECTION INTRODUCTION                 */}
        {/* ===================================== */}

        <div className="mx-auto mb-16 max-w-[850px] text-center lg:mb-20">

          {/* EYEBROW */}
          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
              OUR COORDINATION PROCESS
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            {...reveal(0.1)}
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[53px]"
          >
            From Your Request
            <span className="mt-2 block text-[#0C9B97]">
              To Delivery Coordination.
            </span>
          </motion.h2>

          {/* INTRODUCTION */}
          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-6 max-w-[780px] text-[15px] leading-[1.95] text-[#617589] sm:text-[17px]"
          >
            Planning a healthcare delivery involves more
            than choosing a destination. At Maximum Care LLC,
            we aim to make the transportation inquiry process
            straightforward by understanding your shipment
            needs, reviewing the requested route, and
            discussing arrangements before confirming service.
          </motion.p>

          {/* ACCENT */}
          <motion.div
            {...reveal(0.3)}
            className="mx-auto mt-8 h-[3px] w-20 rounded-full bg-[#0C9B97]"
          />
        </div>

        {/* ===================================== */}
        {/* DELIVERY PROCESS TIMELINE             */}
        {/* ===================================== */}

        <div className="relative">

          {/* DESKTOP CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[38px] hidden h-[2px] bg-[#D7EAE8] xl:block"
          />

          {/* FOUR STEP CARDS */}
          <div className="relative z-10 grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">

            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                {...reveal(
                  reduceMotion ? 0 : index * 0.1
                )}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -7 }
                }
                className="group relative flex h-full flex-col"
              >

                {/* ================================= */}
                {/* TOP TIMELINE NODE                 */}
                {/* ================================= */}

                <div className="relative z-10 mb-7 flex items-center justify-start xl:justify-center">

                  <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-[6px] border-[#E8F6F3] bg-[#0C9B97] text-white shadow-[0_12px_30px_rgba(12,155,151,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#071E34]">

                    <StepIcon type={step.icon} />
                  </div>
                </div>

                {/* ================================= */}
                {/* CARD                             */}
                {/* ================================= */}

                <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E0EAF0] bg-[#F7FAFC] p-6 shadow-[0_12px_40px_rgba(7,30,52,0.045)] transition-[border-color,box-shadow] duration-300 group-hover:border-[#0C9B97]/35 group-hover:shadow-[0_24px_55px_rgba(7,30,52,0.1)] sm:p-7 xl:p-6">

                  {/* TOP ACCENT */}
                  <div className="absolute left-0 top-0 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent" />

                  {/* LARGE BACKGROUND NUMBER */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-4 text-[65px] font-extrabold leading-none tracking-[-0.06em] text-[#0C9B97]/[0.065]"
                  >
                    {step.number}
                  </span>

                  {/* STEP LABEL */}
                  <span className="relative z-10 mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#D9EBE7] bg-[#E9F7F4] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0C9B97]">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#0C9B97]" />

                    {step.label}
                  </span>

                  {/* NUMBER */}
                  <span className="relative z-10 mb-4 text-[38px] font-extrabold leading-none tracking-[-0.05em] text-[#0C9B97]">
                    {step.number}
                  </span>

                  {/* TITLE */}
                  <h3 className="relative z-10 min-h-[58px] text-[21px] font-extrabold leading-[1.3] tracking-[-0.025em] text-[#071E34] sm:text-[23px]">
                    {step.title}
                  </h3>

                  {/* SHORT ACCENT LINE */}
                  <div className="my-6 h-[3px] w-11 rounded-full bg-[#0C9B97]" />

                  {/* DESCRIPTION */}
                  <p className="text-[13px] leading-[1.95] text-[#526579] sm:text-[14px]">
                    {step.description}
                  </p>

                  {/* SPACER */}
                  <div className="flex-1" />

                  {/* DIVIDER */}
                  <div className="my-7 h-px w-full bg-[#DCE8EE]" />

                  {/* DETAIL HEADER */}
                  <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#102A43]">
                    KEY INFORMATION
                  </p>

                  {/* DETAILS */}
                  <ul className="space-y-4">

                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5"
                      >

                        {/* CHECK SVG */}
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E0F4F0] text-[#0C9B97]">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        </span>

                        <span className="text-[12px] leading-[1.75] text-[#617589]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* BOTTOM ACCENT */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-tl-[90px] bg-[#0C9B97]/[0.025]"
                  />

                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ===================================== */}
        {/* BOTTOM — NEXT STEP PANEL              */}
        {/* ===================================== */}

        <motion.div
          {...reveal(0.15)}
          className="relative mt-16 overflow-hidden rounded-[28px] bg-[#071E34] px-6 py-10 text-white sm:mt-20 sm:px-10 sm:py-12 lg:px-14"
        >

          {/* GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-[#0C9B97]/20 blur-[85px]"
          />

          {/* DECORATIVE CIRCLES */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 h-[330px] w-[330px] rounded-full border-[45px] border-white/[0.035]"
          />

          <div className="relative z-10 flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT CONTENT */}
            <div className="max-w-[780px]">

              {/* LABEL */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#6DE0D3]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#6DE0D3]">
                  READY TO GET STARTED?
                </span>
              </div>

              {/* HEADING */}
              <h3 className="text-[26px] font-extrabold leading-[1.25] tracking-[-0.03em] sm:text-[34px]">
                Let's Plan Your
                <span className="block text-[#6DE0D3]">
                  Healthcare Transportation.
                </span>
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-[700px] text-[14px] leading-[1.95] text-[#C2D3DE] sm:text-[15px]">
                Whether your pickup or delivery location is
                in Moorhead, Dilworth, Fargo, West Fargo, or
                another community, we welcome the opportunity
                to review your transportation needs.
                Share your details to begin a discussion
                about route feasibility and service availability.
              </p>

              {/* SMALL NOTE */}
              <p className="mt-5 text-[12px] leading-[1.8] text-[#A9C2D0]">
                Requests are subject to appropriate shipment
                requirements, scheduling, operational
                availability, and service confirmation.
              </p>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex w-full flex-col gap-4 sm:w-auto">

              {/* PRIMARY CTA */}
              <Link
                to="/request-quote"
                className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-[#0C9B97] px-7 py-4 text-[13px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6DE0D3]"
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

              {/* SECONDARY CTA */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-bold text-white transition-all duration-300 hover:border-[#6DE0D3] hover:bg-white/15"
              >
                Contact Us

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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AreasSection4;
