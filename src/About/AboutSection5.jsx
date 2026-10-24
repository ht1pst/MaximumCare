
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// CHANGE THIS TO YOUR ACTUAL IMAGE FILENAME
import Section5Img from "../assets/aboutsection5.webp";

const ease = [0.22, 1, 0.36, 1];

const Section5s = [
  {
    number: "01",
    title: "Understanding Every Shipment",
    description:
      "Healthcare shipments have different transportation requirements. We aim to understand what is being transported, its packaging, the intended destination, and any applicable handling instructions before confirming a suitable delivery arrangement.",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 7 12 3l9 4-9 4-9-4Z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Thoughtful Pickup & Delivery Planning",
    description:
      "Reliable coordination starts with realistic expectations. We discuss pickup locations, receiving facilities, agreed delivery windows, and operational availability so that transportation arrangements are clear before an assignment begins.",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Respect for Handling Requirements",
    description:
      "We recognize that medical specimens, pharmacy-related shipments, supplies, and confidential documents may each have different requirements. Our approach is to review relevant instructions, recipient details, and transportation limitations before accepting a request.",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Clear & Responsible Handoffs",
    description:
      "The final handoff is an important part of any courier assignment. We aim to coordinate deliveries with designated recipients, follow agreed instructions, and address any necessary handoff or delivery documentation requirements.",
    icon: (
      <svg
        width="25"
        height="25"
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
        <path d="m7 11 2 2 3-3" />
      </svg>
    ),
  },
];

function AboutSection5() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, direction = "up") => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -40
              : direction === "right"
              ? 40
              : 0,
          y: direction === "up" ? 30 : 0,
        },
    whileInView: {
      opacity: 1,
      x: 0,
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

  return (
    <section
      id="our-Section5"
      className="relative isolate w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#071E34]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ======================================= */}
        {/* SECTION INTRODUCTION                    */}
        {/* ======================================= */}

        <motion.div
          {...reveal(0)}
          className="mb-14 flex items-center justify-center gap-3"
        >
          <span className="h-[2px] w-8 bg-[#0C9B97]" />

          <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
            OUR Section5 TO HEALTHCARE
          </p>

          <span className="h-[2px] w-8 bg-[#0C9B97]" />
        </motion.div>

        {/* ======================================= */}
        {/* MAIN TWO-COLUMN LAYOUT                  */}
        {/* ======================================= */}

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* =================================== */}
          {/* LEFT — CONTENT                      */}
          {/* =================================== */}

          <div>

            {/* HEADING */}
            <motion.h2
              {...reveal(0.1, "left")}
              className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[43px] xl:text-[50px]"
            >
              A Thoughtful Approach
              <span className="mt-2 block text-[#0C9B97]">
                To Every Delivery.
              </span>
            </motion.h2>

            {/* INTRODUCTORY PARAGRAPHS */}
            <motion.div
              {...reveal(0.2)}
              className="mt-7 space-y-4"
            >
              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                Medical courier transportation carries
                responsibilities that go beyond simply moving
                a package from one location to another.
                Healthcare organizations work with important
                materials that may require specific packaging,
                authorized delivery locations, careful
                coordination, and clear handoff instructions.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                At Maximum Care LLC, we're building our
                approach around understanding those needs
                before an assignment begins. Our goal is to
                support healthcare organizations with
                professional transportation arrangements
                guided by communication, responsibility,
                and realistic service expectations.
              </p>
            </motion.div>

            {/* DIVIDER */}
            <div className="my-9 h-px w-full bg-[#E1EBEF]" />

            {/* =================================== */}
            {/* FOUR Section5 POINTS              */}
            {/* =================================== */}

            <div className="space-y-5">
              {Section5s.map((Section5, index) => (
                <motion.div
                  key={Section5.number}
                  {...reveal(index * 0.08, "left")}
                  className="group flex items-start gap-4 rounded-2xl border border-[#E2EDF1] bg-[#F8FBFC] p-4 transition-all duration-300 hover:border-[#0C9B97]/30 hover:bg-[#EFF9F7] hover:shadow-[0_12px_30px_rgba(7,30,52,0.06)] sm:p-5"
                >
                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E2F5F2] text-[#0C9B97] transition-all duration-300 group-hover:bg-[#0C9B97] group-hover:text-white">
                    {Section5.icon}
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">

                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[11px] font-extrabold text-[#0C9B97]">
                        {Section5.number}
                      </span>

                      <h3 className="text-[15px] font-extrabold leading-[1.4] text-[#102A43] sm:text-[17px]">
                        {Section5.title}
                      </h3>
                    </div>

                    <p className="text-[13px] leading-[1.9] text-[#617589] sm:text-[14px]">
                      {Section5.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* IMPORTANT NOTE */}
            <motion.p
              {...reveal(0.2)}
              className="mt-6 text-[12px] leading-[1.9] text-[#718398]"
            >
              Transportation requests are subject to
              appropriate packaging, applicable legal and
              handling requirements, operational readiness,
              and confirmed service availability.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              {...reveal(0.25)}
              className="mt-8"
            >
              <Link
                to="/request-quote"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] hover:shadow-[0_18px_35px_rgba(12,155,151,0.26)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
              >
                Discuss Your Delivery Needs

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
          </div>

          {/* =================================== */}
          {/* RIGHT — FEATURE IMAGE               */}
          {/* =================================== */}

          <motion.div
            {...reveal(0.15, "right")}
            className="relative mx-auto w-full max-w-[580px] lg:self-center"
          >

            {/* DECORATIVE BACK FRAME */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-5 h-full w-full rounded-[30px] border-2 border-[#0C9B97]/20 sm:-right-6 sm:-top-6"
            />

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#DCE9EE] shadow-[0_25px_70px_rgba(7,30,52,0.15)]">

              <motion.img
                src={Section5Img}
                alt="Healthcare logistics professional handling a prepared medical transportation shipment"
                loading="lazy"
                decoding="async"
                className="h-[450px] w-full object-cover object-center sm:h-[570px] lg:h-[700px]"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.045 }
                }
                transition={{
                  duration: 0.85,
                  ease,
                }}
              />

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071E34]/75 via-transparent to-transparent" />

              {/* IMAGE BOTTOM TEXT */}
              <div className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-8">

                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  OUR APPROACH
                </span>

                <h3 className="max-w-[390px] text-[24px] font-extrabold leading-[1.3] text-white sm:text-[30px]">
                  Healthcare Deliveries
                  <span className="block text-[#6DE0D3]">
                    Deserve Careful Coordination.
                  </span>
                </h3>

                <p className="mt-3 max-w-[360px] text-[13px] leading-[1.8] text-[#DFEAF0] sm:text-[14px]">
                  Clear expectations, appropriate handling
                  arrangements, and professional communication.
                </p>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              {...reveal(0.4)}
              className="relative z-10 mt-5 flex max-w-[330px] items-center gap-4 rounded-2xl border border-[#DFEAEF] bg-white p-4 shadow-[0_15px_45px_rgba(7,30,52,0.12)] sm:absolute sm:-bottom-7 sm:-left-7 sm:mt-0"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E2F5F2] text-[#0C9B97]">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <div>
                <p className="text-[13px] font-extrabold text-[#102A43]">
                  Responsibility First
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#617589]">
                  Careful planning and appropriate
                  handling expectations.
                </p>
              </div>
            </motion.div>

            {/* DECORATIVE DOT PATTERN */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-2 -z-10 grid grid-cols-5 gap-3 opacity-35"
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#0C9B97]"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ======================================= */}
        {/* BOTTOM Section5 STATEMENT             */}
        {/* ======================================= */}

        <motion.div
          {...reveal(0.15)}
          className="relative mt-20 overflow-hidden rounded-[26px] bg-[#071E34] px-6 py-10 text-white sm:mt-24 sm:px-10 sm:py-12 lg:px-14"
        >
          {/* GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#0C9B97]/20 blur-[85px]"
          />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            {/* STATEMENT */}
            <div className="max-w-[800px]">

              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6DE0D3]">
                THE MAXIMUM CARE APPROACH
              </p>

              <h3 className="text-[25px] font-extrabold leading-[1.3] tracking-[-0.025em] sm:text-[33px]">
                Every Delivery Begins
                <span className="block text-[#6DE0D3]">
                  With Understanding the Need.
                </span>
              </h3>

              <p className="mt-4 text-[14px] leading-[1.95] text-[#C2D3DE] sm:text-[15px]">
                As we build Maximum Care LLC, our aim is
                to develop a thoughtful approach to
                healthcare logistics—one that starts with
                understanding shipment requirements and
                continues through clear scheduling,
                coordination, and appropriate delivery
                arrangements.
              </p>
            </div>

            {/* BUTTON */}
            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-extrabold text-white transition-all duration-300 hover:border-[#6DE0D3] hover:bg-[#0C9B97] lg:self-center"
            >
              View Our Services

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
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection5;
