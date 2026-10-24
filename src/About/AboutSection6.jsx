
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const locations = [
  {
    city: "Moorhead",
    state: "Minnesota",
    abbreviation: "MN",
    detail: "Our home base",
    number: "01",
  },
  {
    city: "Dilworth",
    state: "Minnesota",
    abbreviation: "MN",
    detail: "Local service community",
    number: "02",
  },
  {
    city: "Fargo",
    state: "North Dakota",
    abbreviation: "ND",
    detail: "Regional service community",
    number: "03",
  },
  {
    city: "West Fargo",
    state: "North Dakota",
    abbreviation: "ND",
    detail: "Regional service community",
    number: "04",
  },
];

function AboutSection6() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, direction = "up") => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          x:
            direction === "left"
              ? -35
              : direction === "right"
              ? 35
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
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="our-community"
      className="relative isolate w-full overflow-hidden bg-[#071E34] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* ================================= */}
      {/* BACKGROUND DECORATION             */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#0C9B97]/15 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 h-[500px] w-[500px] rounded-full bg-[#6DE0D3]/10 blur-[110px]"
      />

      {/* DECORATIVE RINGS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[550px] w-[550px] rounded-full border border-white/[0.045]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-[430px] w-[430px] rounded-full border border-white/[0.045]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ================================= */}
        {/* MAIN TWO-COLUMN LAYOUT           */}
        {/* ================================= */}

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================================= */}
          {/* LEFT — COMPANY COMMUNITY FOCUS  */}
          {/* ================================= */}

          <div>

            {/* EYEBROW */}
            <motion.div
              {...reveal(0, "left")}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#6DE0D3]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#6DE0D3] sm:text-[12px]">
                OUR LOCAL ROOTS
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              {...reveal(0.1, "left")}
              className="max-w-[680px] text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[44px] xl:text-[52px]"
            >
              Rooted in Our Community.

              <span className="mt-2 block text-[#6DE0D3]">
                Focused on Healthcare.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.div
              {...reveal(0.2)}
              className="mt-7 space-y-5"
            >
              <p className="text-[15px] leading-[1.95] text-[#D0DFE8] sm:text-[16px]">
                Maximum Care LLC is proudly based in
                Moorhead, Minnesota, with a focus on
                supporting the transportation needs of
                healthcare organizations throughout the
                Fargo–Moorhead region.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#B8CDDA] sm:text-[16px]">
                As a growing medical courier business,
                we recognize the importance of the
                relationships that connect our local
                laboratories, pharmacies, clinics,
                medical offices, and healthcare facilities.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#B8CDDA] sm:text-[16px]">
                Our goal is to develop practical,
                professional transportation arrangements
                that reflect the needs of healthcare
                organizations across our communities,
                with attention to scheduling, shipment
                requirements, and responsible coordination.
              </p>
            </motion.div>

            {/* DIVIDER */}
            <div className="my-9 h-px w-full bg-white/15" />

            {/* COMMUNITY PRINCIPLES */}
            <motion.div
              {...reveal(0.3)}
              className="space-y-5"
            >

              {/* ITEM 1 */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">

                  {/* LOCATION SVG */}
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
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[16px] font-extrabold text-white">
                    Local Understanding
                  </h3>

                  <p className="mt-1 text-[13px] leading-[1.85] text-[#B8CDDA] sm:text-[14px]">
                    Developing transportation arrangements
                    around the needs of healthcare facilities
                    within our local and neighboring communities.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">

                  {/* HANDSHAKE SVG */}
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
                    <path d="m2 12 4-4 5 3 3-2 8 5-4 4-4-2-3 3-4-3-5-4Z" />
                    <path d="m11 11 3 3" />
                    <path d="m7 16 2-2" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[16px] font-extrabold text-white">
                    Meaningful Relationships
                  </h3>

                  <p className="mt-1 text-[13px] leading-[1.85] text-[#B8CDDA] sm:text-[14px]">
                    Building professional relationships
                    through clear communication, realistic
                    expectations, and a service-minded approach.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">

                  {/* TRUCK SVG */}
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
                  </svg>
                </div>

                <div>
                  <h3 className="text-[16px] font-extrabold text-white">
                    Healthcare-Focused Transportation
                  </h3>

                  <p className="mt-1 text-[13px] leading-[1.85] text-[#B8CDDA] sm:text-[14px]">
                    Exploring appropriate courier arrangements
                    for eligible medical shipments, authorized
                    destinations, and agreed transportation needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              {...reveal(0.4)}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >

              {/* SERVICE AREAS BUTTON */}
              <Link
                to="/service-areas"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[13px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6DE0D3]"
              >
                Explore Our Service Areas

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

              {/* QUOTE BUTTON */}
              <Link
                to="/request-quote"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-bold text-white transition-all duration-300 hover:border-[#6DE0D3] hover:bg-white/15"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>

          {/* ================================= */}
          {/* RIGHT — LOCAL COVERAGE PANEL     */}
          {/* ================================= */}

          <motion.div
            {...reveal(0.2, "right")}
            className="relative mx-auto w-full max-w-[590px]"
          >

            {/* BACK FRAME */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[30px] border-2 border-[#6DE0D3]/20 sm:-right-5 sm:-top-5"
            />

            {/* MAIN PANEL */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#12384E] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">

              {/* PANEL GLOW */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0C9B97]/20 blur-[80px]"
              />

              {/* PANEL HEADING */}
              <div className="relative z-10 mb-8 flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0C9B97]/25 text-[#6DE0D3]">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6DE0D3]">
                    OUR LOCAL FOCUS
                  </p>

                  <h3 className="mt-1 text-[23px] font-extrabold text-white sm:text-[27px]">
                    Our Communities
                  </h3>
                </div>
              </div>

              {/* STATE HEADER */}
              <div className="relative z-10 mb-5 flex items-center justify-between border-b border-white/15 pb-4">

                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#B8CDDA]">
                  Fargo–Moorhead Region
                </p>

                <span className="rounded-full border border-[#6DE0D3]/20 bg-[#0C9B97]/20 px-3 py-1.5 text-[10px] font-extrabold tracking-wide text-[#6DE0D3]">
                  MN + ND
                </span>
              </div>

              {/* LOCATIONS */}
              <div className="relative z-10 space-y-3">

                {locations.map((location, index) => (

                  <motion.div
                    key={location.city}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.6,
                      delay: reduceMotion ? 0 : index * 0.1,
                      ease,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { x: 5 }
                    }
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors duration-300 hover:border-[#6DE0D3]/30 hover:bg-white/[0.1]"
                  >

                    {/* LOCATION NUMBER */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">

                      <span className="text-[16px] font-extrabold">
                        {location.number}
                      </span>
                    </div>

                    {/* LOCATION TEXT */}
                    <div className="min-w-0 flex-1">

                      <h4 className="text-[16px] font-extrabold text-white">
                        {location.city}
                      </h4>

                      <p className="mt-1 text-[12px] text-[#B8CDDA]">
                        {location.state}
                      </p>

                      <p className="mt-1 text-[11px] text-[#9BB6C6]">
                        {location.detail}
                      </p>
                    </div>

                    {/* STATE BADGE */}
                    <span className="rounded-lg border border-white/15 bg-white/[0.08] px-3 py-2 text-[11px] font-extrabold text-[#6DE0D3]">
                      {location.abbreviation}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* COVERAGE FOOTNOTE */}
              <div className="relative z-10 mt-6 rounded-2xl border border-[#6DE0D3]/20 bg-[#0C9B97]/10 p-5">

                <div className="mb-3 flex items-center gap-2">

                  {/* INFO ICON */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0 text-[#6DE0D3]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>

                  <h4 className="text-[13px] font-extrabold text-white">
                    Beyond These Communities
                  </h4>
                </div>

                <p className="text-[12px] leading-[1.85] text-[#B8CDDA]">
                  Transportation to surrounding communities
                  and longer-distance destinations may be
                  considered based on the shipment, requested
                  schedule, and operational availability.
                </p>
              </div>

              {/* PANEL FOOTER */}
              <div className="relative z-10 mt-7 flex items-center gap-3 border-t border-white/10 pt-6">

                <div className="h-2.5 w-2.5 rounded-full bg-[#6DE0D3]" />

                <p className="text-[12px] font-medium text-[#B8CDDA]">
                  Based in Moorhead, Minnesota
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================= */}
        {/* BOTTOM COMMUNITY STATEMENT       */}
        {/* ================================= */}

        <motion.div
          {...reveal(0.2)}
          className="mt-20 border-t border-white/15 pt-10 text-center sm:mt-24"
        >

          <p className="mx-auto max-w-[850px] text-[19px] font-semibold leading-[1.7] text-[#D0DFE8] sm:text-[24px]">
            "A healthcare-focused transportation company
            starts with understanding the communities
            it hopes to serve."
          </p>

          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#0C9B97]" />

          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#6DE0D3]">
            MAXIMUM CARE LLC
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutSection6;
