
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// CHANGE THE FILENAME IF YOUR IMAGE IS DIFFERENT
import coverageImg from "../assets/areacoverage.webp";

const ease = [0.22, 1, 0.36, 1];

const coverageFeatures = [
  {
    number: "01",
    title: "Surrounding Communities",
    description:
      "Healthcare organizations outside Moorhead, Dilworth, Fargo, and West Fargo can inquire about courier transportation. We can review nearby pickup and delivery destinations to determine whether suitable arrangements are available.",
    icon: (
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
    ),
  },
  {
    number: "02",
    title: "Longer-Distance Transportation",
    description:
      "Some healthcare shipments may need to travel farther than the company's primary regional focus. Longer-distance requests can be discussed individually, taking into account the destination, shipment requirements, schedule, and available transportation resources.",
    icon: (
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
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18h8a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h8" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Flexible Scheduling Discussions",
    description:
      "Different organizations have different transportation schedules. We welcome discussions about advance bookings, recurring pickups, and specific delivery windows, with each proposed arrangement subject to operational availability and confirmation.",
    icon: (
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
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Shipment-Specific Coordination",
    description:
      "Before confirming an extended-area delivery, we review what is being transported, its packaging, applicable handling instructions, authorized receiving location, and other requirements that may affect the assignment.",
    icon: (
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
    ),
  },
];

function AreasSection3() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, direction = "up") => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -45
              : direction === "right"
              ? 45
              : 0,
          y: direction === "up" ? 35 : 0,
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
      id="extended-coverage"
      className="relative isolate w-full overflow-hidden bg-[#F3F8FB] py-20 sm:py-24 lg:py-32"
    >
      {/* ===================================== */}
      {/* BACKGROUND DECORATION                 */}
      {/* ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0C9B97]/5 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#071E34]/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ===================================== */}
        {/* SECTION HEADING                       */}
        {/* ===================================== */}

        <div className="mx-auto mb-14 max-w-[850px] text-center sm:mb-16">

          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
              BEYOND OUR PRIMARY LOCATIONS
            </p>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[53px]"
          >
            Your Destination Matters.
            <span className="mt-2 block text-[#0C9B97]">
              Let's Discuss the Possibilities.
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-6 max-w-[780px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]"
          >
            Our primary focus is the Fargo–Moorhead region,
            but some healthcare organizations may require
            transportation to destinations outside those
            communities. Maximum Care LLC welcomes the
            opportunity to review additional delivery routes
            and discuss appropriate transportation arrangements.
          </motion.p>

          <motion.div
            {...reveal(0.3)}
            className="mx-auto mt-8 h-[3px] w-20 rounded-full bg-[#0C9B97]"
          />
        </div>

        {/* ===================================== */}
        {/* MAIN TWO-COLUMN LAYOUT                */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* =================================== */}
          {/* LEFT — COVERAGE IMAGE               */}
          {/* =================================== */}

          <motion.div
            {...reveal(0.1, "left")}
            className="relative mx-auto w-full max-w-[590px] lg:self-center"
          >
            {/* DECORATIVE FRAME */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-4 h-full w-full rounded-[30px] border-2 border-[#0C9B97]/20 sm:-bottom-7 sm:-left-7"
            />

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#DCE9EE] shadow-[0_25px_70px_rgba(7,30,52,0.15)]">

              <motion.img
                src={coverageImg}
                alt="Logistics coordinator reviewing transportation routes and delivery planning"
                loading="lazy"
                decoding="async"
                className="h-[420px] w-full object-cover object-center sm:h-[540px] lg:h-[650px]"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.05 }
                }
                transition={{
                  duration: 0.85,
                  ease,
                }}
              />

              {/* IMAGE GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071E34]/80 via-[#071E34]/15 to-transparent" />

              {/* IMAGE BOTTOM CONTENT */}
              <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-9">

                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur-md sm:text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  ROUTE COORDINATION
                </span>

                <h3 className="max-w-[400px] text-[25px] font-extrabold leading-[1.25] text-white sm:text-[32px]">
                  Transportation Planning
                  <span className="block text-[#6DE0D3]">
                    Beyond the Usual Route.
                  </span>
                </h3>

                <p className="mt-3 max-w-[370px] text-[13px] leading-[1.8] text-[#DFEAF0] sm:text-[14px]">
                  Discussing destinations, schedules, and
                  shipment requirements before confirming
                  delivery arrangements.
                </p>
              </div>
            </div>

            {/* FLOATING INFORMATION CARD */}
            <motion.div
              {...reveal(0.4)}
              className="relative z-10 mt-5 flex max-w-[340px] items-center gap-4 rounded-2xl border border-[#E0EBF0] bg-white p-4 shadow-[0_15px_45px_rgba(7,30,52,0.12)] sm:absolute sm:-bottom-6 sm:-right-5 sm:mt-0"
            >

              {/* ROUTE SVG */}
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
                  <circle cx="5" cy="18" r="2" />
                  <circle cx="19" cy="6" r="2" />
                  <path d="M7 18h8a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h8" />
                </svg>
              </div>

              <div>
                <p className="text-[13px] font-extrabold text-[#102A43]">
                  Additional Routes
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#617589]">
                  Reviewed according to scheduling
                  and availability.
                </p>
              </div>
            </motion.div>

            {/* DECORATIVE DOTS */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 left-4 -z-10 grid grid-cols-5 gap-3 opacity-35"
            >
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-[#0C9B97]"
                />
              ))}
            </div>
          </motion.div>

          {/* =================================== */}
          {/* RIGHT — DETAILED COVERAGE CONTENT   */}
          {/* =================================== */}

          <div className="relative">

            {/* SMALL HEADING */}
            <motion.div
              {...reveal(0.05, "right")}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#0C9B97]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
                EXTENDED TRANSPORTATION REQUESTS
              </span>
            </motion.div>

            {/* MAIN CONTENT HEADING */}
            <motion.h3
              {...reveal(0.1, "right")}
              className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#071E34] sm:text-[37px] xl:text-[42px]"
            >
              Healthcare Logistics
              <span className="mt-1 block text-[#0C9B97]">
                Beyond Our Core Communities.
              </span>
            </motion.h3>

            {/* INTRO PARAGRAPHS */}
            <motion.div
              {...reveal(0.2)}
              className="mt-6 space-y-4"
            >
              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                While Moorhead, Dilworth, Fargo, and West Fargo
                are the primary locations in our service
                focus, we understand that healthcare
                transportation needs do not always end
                at city boundaries.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                Laboratories, pharmacies, clinics, medical
                offices, and other healthcare organizations
                may occasionally need shipments transported
                to nearby communities or more distant
                authorized destinations.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                Maximum Care LLC can review such inquiries
                individually to determine whether the
                requested destination, schedule, shipment
                requirements, and transportation resources
                allow for a suitable arrangement.
              </p>
            </motion.div>

            {/* DIVIDER */}
            <div className="my-8 h-px w-full bg-[#DCE8EE]" />

            {/* =================================== */}
            {/* FOUR COVERAGE FEATURES              */}
            {/* =================================== */}

            <div className="space-y-5">
              {coverageFeatures.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  {...reveal(index * 0.1, "right")}
                  className="group flex items-start gap-4 rounded-2xl border border-[#E0EBF0] bg-white p-4 shadow-[0_8px_25px_rgba(7,30,52,0.035)] transition-all duration-300 hover:border-[#0C9B97]/35 hover:shadow-[0_15px_35px_rgba(7,30,52,0.08)] sm:p-5"
                >
                  {/* FEATURE ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E3F6F3] text-[#0C9B97] transition-all duration-300 group-hover:bg-[#0C9B97] group-hover:text-white">
                    {feature.icon}
                  </div>

                  {/* FEATURE TEXT */}
                  <div className="min-w-0 flex-1">

                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-extrabold text-[#0C9B97]">
                        {feature.number}
                      </span>

                      <h4 className="text-[16px] font-extrabold leading-[1.4] text-[#102A43] sm:text-[17px]">
                        {feature.title}
                      </h4>
                    </div>

                    <p className="text-[13px] leading-[1.85] text-[#617589] sm:text-[14px]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AVAILABILITY NOTE */}
            <motion.p
              {...reveal(0.25)}
              className="mt-6 text-[12px] leading-[1.85] text-[#718398]"
            >
              Extended transportation is not automatically
              available. All requests are subject to
              appropriate packaging, applicable requirements,
              route feasibility, scheduling, and confirmation
              by Maximum Care LLC.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              {...reveal(0.3)}
              className="mt-8"
            >
              <Link
                to="/request-quote"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] hover:shadow-[0_18px_35px_rgba(12,155,151,0.26)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
              >
                Discuss Your Delivery Location

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
        </div>

        {/* ===================================== */}
        {/* BOTTOM ROUTE PLANNING PANEL           */}
        {/* ===================================== */}

        <motion.div
          {...reveal(0.15)}
          className="relative mt-20 overflow-hidden rounded-[28px] bg-[#071E34] px-6 py-10 text-white sm:mt-24 sm:px-10 sm:py-12 lg:px-14"
        >
          {/* BACKGROUND GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#0C9B97]/20 blur-[85px]"
          />

          <div className="relative z-10">

            {/* LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#6DE0D3]" />

              <p className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#6DE0D3]">
                PLANNING AN EXTENDED DELIVERY
              </p>
            </div>

            {/* HEADING */}
            <h3 className="max-w-[850px] text-[27px] font-extrabold leading-[1.25] tracking-[-0.025em] sm:text-[35px]">
              What We Need to Review
              <span className="block text-[#6DE0D3]">
                Your Transportation Request.
              </span>
            </h3>

            <p className="mt-4 max-w-[850px] text-[14px] leading-[1.9] text-[#C2D3DE] sm:text-[15px]">
              Providing clear information helps us assess
              whether an extended delivery arrangement
              can be accommodated.
            </p>

            {/* FOUR INFORMATION ITEMS */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Pickup Location",
                  description:
                    "The address or authorized facility where the shipment will be collected.",
                },
                {
                  number: "02",
                  title: "Delivery Destination",
                  description:
                    "The intended receiving location and relevant recipient instructions.",
                },
                {
                  number: "03",
                  title: "Shipment Information",
                  description:
                    "What is being transported, its packaging, and any handling requirements.",
                },
                {
                  number: "04",
                  title: "Preferred Schedule",
                  description:
                    "The requested pickup date, delivery window, and any timing limitations.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition-colors duration-300 hover:border-[#6DE0D3]/30 hover:bg-white/[0.09]"
                >
                  <span className="text-[12px] font-extrabold text-[#6DE0D3]">
                    {item.number}
                  </span>

                  <h4 className="mt-4 text-[16px] font-extrabold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-[12px] leading-[1.9] text-[#B8CDDA]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* BOTTOM TEXT AND CTA */}
            <div className="mt-9 flex flex-col gap-6 border-t border-white/15 pt-8 lg:flex-row lg:items-center lg:justify-between">

              <p className="max-w-[680px] text-[13px] leading-[1.85] text-[#C2D3DE]">
                Once the relevant details are provided,
                Maximum Care LLC can review the request
                and discuss available transportation options.
                Submission does not guarantee acceptance.
              </p>

              <Link
                to="/request-quote"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#0C9B97] px-7 py-4 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] lg:self-center"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AreasSection3;
