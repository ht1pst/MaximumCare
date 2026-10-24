
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

// =====================================
// PRIMARY SERVICE LOCATIONS
// =====================================

const locations = [
  {
    number: "01",
    city: "Moorhead",
    state: "Minnesota",
    abbreviation: "MN",
    label: "OUR HOME BASE",
    title: "Healthcare Courier Services in Moorhead",
    description:
      "Moorhead, Minnesota, is home to Maximum Care LLC. Our business is focused on supporting healthcare organizations that need professional transportation arrangements for eligible medical shipments, supplies, and healthcare-related materials.",
    details: [
      "Medical courier transportation inquiries",
      "Scheduled pickup and delivery arrangements",
      "Coordination with authorized healthcare locations",
    ],
  },
  {
    number: "02",
    city: "Dilworth",
    state: "Minnesota",
    abbreviation: "MN",
    label: "MINNESOTA SERVICE AREA",
    title: "Medical Deliveries in Dilworth",
    description:
      "Dilworth is one of the communities included in our regional service focus. Maximum Care LLC welcomes transportation inquiries from healthcare organizations seeking coordinated courier arrangements involving eligible shipments and authorized destinations.",
    details: [
      "Healthcare facility pickup coordination",
      "Routine and scheduled delivery requests",
      "Shipment-specific transportation planning",
    ],
  },
  {
    number: "03",
    city: "Fargo",
    state: "North Dakota",
    abbreviation: "ND",
    label: "NORTH DAKOTA SERVICE AREA",
    title: "Healthcare Transportation in Fargo",
    description:
      "Fargo is an important part of the Fargo–Moorhead healthcare community. Maximum Care LLC aims to support transportation requests involving laboratories, pharmacies, medical offices, and other eligible healthcare locations in the area.",
    details: [
      "Medical specimen transportation inquiries",
      "Pharmacy and medical supply delivery requests",
      "Planned and time-sensitive courier coordination",
    ],
  },
  {
    number: "04",
    city: "West Fargo",
    state: "North Dakota",
    abbreviation: "ND",
    label: "NORTH DAKOTA SERVICE AREA",
    title: "Medical Courier Services in West Fargo",
    description:
      "Maximum Care LLC also includes West Fargo in its primary regional service focus. We work to understand the transportation needs of healthcare organizations and discuss appropriate pickup, scheduling, and delivery arrangements.",
    details: [
      "Medical supply transportation requests",
      "Recurring and scheduled courier inquiries",
      "Authorized pickup and delivery coordination",
    ],
  },
];

function AreasSection2() {
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
      amount: 0.1,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="primary-service-areas"
      className="relative isolate w-full scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* ===================================== */}
      {/* BACKGROUND DECORATION                 */}
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
        {/* SECTION HEADER                       */}
        {/* ===================================== */}

        <div className="mx-auto mb-14 max-w-[850px] text-center sm:mb-16">

          {/* EYEBROW */}
          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
              OUR PRIMARY SERVICE AREAS
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            {...reveal(0.1)}
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[53px]"
          >
            Local Communities.
            <span className="mt-2 block text-[#0C9B97]">
              Healthcare-Focused Connections.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-6 max-w-[780px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]"
          >
            Maximum Care LLC is based in Moorhead, Minnesota,
            with a regional service focus spanning communities
            in both Minnesota and North Dakota. We welcome
            inquiries from healthcare organizations seeking
            appropriate transportation arrangements for
            medical shipments, supplies, and other
            eligible healthcare materials.
          </motion.p>

          {/* DECORATIVE ACCENT */}
          <motion.div
            {...reveal(0.3)}
            className="mx-auto mt-8 h-[3px] w-20 rounded-full bg-[#0C9B97]"
          />
        </div>

        {/* ===================================== */}
        {/* STATE LABELS                         */}
        {/* ===================================== */}

        <motion.div
          {...reveal(0.1)}
          className="mb-9 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#DCEBE9] bg-[#EFF9F7] px-5 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0C9B97] text-[10px] font-extrabold text-white">
              MN
            </span>

            <span className="text-[13px] font-bold text-[#102A43]">
              Minnesota
            </span>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-[#DCEBE9] bg-[#EFF9F7] px-5 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0C9B97] text-[10px] font-extrabold text-white">
              ND
            </span>

            <span className="text-[13px] font-bold text-[#102A43]">
              North Dakota
            </span>
          </div>
        </motion.div>

        {/* ===================================== */}
        {/* FOUR LOCATION CARDS                   */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:gap-8">

          {locations.map((location, index) => (
            <motion.article
              key={location.city}
              {...reveal((index % 2) * 0.12)}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -7 }
              }
              className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E1EBF0] bg-[#F8FBFC] p-6 shadow-[0_12px_40px_rgba(7,30,52,0.05)] transition-[border-color,box-shadow] duration-300 hover:border-[#0C9B97]/35 hover:shadow-[0_25px_60px_rgba(7,30,52,0.11)] sm:p-9"
            >

              {/* TOP ACCENT */}
              <div className="absolute left-0 top-0 h-[5px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-transparent" />

              {/* BACKGROUND NUMBER */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-5 text-[75px] font-extrabold leading-none tracking-[-0.06em] text-[#0C9B97]/[0.055] sm:text-[95px]"
              >
                {location.number}
              </span>

              {/* CARD TOP */}
              <div className="relative z-10 mb-8 flex items-start justify-between gap-4">

                {/* LOCATION ICON */}
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[20px] bg-[#E2F5F2] text-[#0C9B97] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0C9B97] group-hover:text-white">

                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                {/* STATE BADGE */}
                <span className="relative z-10 rounded-full border border-[#D5E9E6] bg-white px-4 py-2 text-[11px] font-extrabold tracking-[0.1em] text-[#0C9B97]">
                  {location.abbreviation}
                </span>
              </div>

              {/* CATEGORY */}
              <p className="relative z-10 mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0C9B97] sm:text-[11px]">
                {location.label}
              </p>

              {/* CITY NAME */}
              <h3 className="relative z-10 text-[31px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#071E34] sm:text-[37px]">
                {location.city}
              </h3>

              {/* STATE NAME */}
              <p className="mt-2 text-[14px] font-semibold text-[#71869A]">
                {location.state}
              </p>

              {/* DIVIDER */}
              <div className="my-6 h-[3px] w-12 rounded-full bg-[#0C9B97]" />

              {/* SERVICE TITLE */}
              <h4 className="text-[18px] font-extrabold leading-[1.4] text-[#102A43] sm:text-[20px]">
                {location.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="mt-4 text-[14px] leading-[1.95] text-[#526579] sm:text-[15px]">
                {location.description}
              </p>

              {/* DETAILS DIVIDER */}
              <div className="my-7 h-px w-full bg-[#DFEAEE]" />

              {/* SERVICE DETAILS */}
              <div className="flex-1">

                <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#102A43]">
                  TRANSPORTATION INQUIRIES
                </p>

                <ul className="space-y-4">
                  {location.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3"
                    >
                      {/* CHECK ICON */}
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3F6F3] text-[#0C9B97]">

                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </div>

                      <span className="text-[13px] leading-[1.8] text-[#617589] sm:text-[14px]">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* REQUEST BUTTON */}
              <div className="mt-9">

                <Link
                  to="/request-quote"
                  aria-label={`Request courier service in ${location.city}, ${location.state}`}
                  className="group/btn flex w-full items-center justify-between gap-3 rounded-xl bg-[#071E34] px-5 py-4 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#0C9B97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
                >
                  <span>
                    Request Service in {location.city}
                  </span>

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
                    className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </motion.article>
          ))}
        </div>

        {/* ===================================== */}
        {/* REGIONAL INFORMATION BANNER           */}
        {/* ===================================== */}

        <motion.div
          {...reveal(0.15)}
          className="relative mt-14 overflow-hidden rounded-[26px] bg-[#071E34] px-6 py-9 text-white sm:mt-16 sm:px-10 sm:py-11 lg:px-12"
        >
          {/* BACKGROUND GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[330px] w-[330px] rounded-full bg-[#0C9B97]/20 blur-[85px]"
          />

          <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* INFORMATION */}
            <div className="flex max-w-[800px] items-start gap-4">

              {/* INFO ICON */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>

              <div>
                <h3 className="text-[20px] font-extrabold leading-[1.3] sm:text-[24px]">
                  Is Your Facility Located Nearby?
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#B8CDDA] sm:text-[14px]">
                  These four communities represent our primary
                  regional service focus. Transportation to
                  nearby locations or other destinations may
                  also be discussed depending on shipment
                  requirements, scheduling, operational
                  readiness, and availability.
                </p>
              </div>
            </div>

            {/* CTA BUTTON */}
            <Link
              to="/request-quote"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-6 py-4 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B]"
            >
              Check Your Location

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

export default AreasSection2;
