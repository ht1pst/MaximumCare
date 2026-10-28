
import { motion, useReducedMotion } from "motion/react";

// ==========================================
// SERVICE AREAS
// ==========================================

const locations = [
  {
    city: "Moorhead",
    state: "Minnesota",
    label: "Primary Service Area",
  },
  {
    city: "Fargo",
    state: "North Dakota",
    label: "Service Area",
  },
  {
    city: "West Fargo",
    state: "North Dakota",
    label: "Service Area",
  },
  {
    city: "Dilworth",
    state: "Minnesota",
    label: "Service Area",
  },
  {
    city: "Surrounding Communities",
    state: "Minnesota & North Dakota",
    label: "Subject to Availability",
  },
];

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// SERVICE AREAS SECTION 2
// ==========================================

function AreasSection2() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
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
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="coverage"
      className="
        scroll-mt-28
        bg-white py-12
        sm:py-14 lg:py-16
      "
    >
      <div
        className="
          mx-auto max-w-[1200px]
          px-5 sm:px-8 lg:px-12
        "
      >
        {/* ====================================== */}
        {/* 1. SECTION HEADING */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0)}
          className="mx-auto max-w-[680px] text-center"
        >
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            LOCAL COVERAGE
          </p>

          <h2
            className="
              mt-3 text-[29px]
              font-extrabold leading-tight
              tracking-[-0.03em]
              text-[#102A43]
              sm:text-[36px]
            "
          >
            Where We Serve
          </h2>

          <p
            className="
              mt-3 text-[14px]
              leading-[1.7]
              text-[#526579]
            "
          >
            Medical courier services supporting
            healthcare organizations across the
            Fargo–Moorhead region and nearby communities.
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* 2. FIVE LOCATION CARDS */}
        {/* ====================================== */}

        <div
          className="
            mt-8 grid grid-cols-2
            gap-3 sm:gap-4
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
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
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion
                  ? 0
                  : index * 0.07,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4 }
              }
              className={`
                group flex h-full flex-col
                items-center rounded-[16px]
                border border-[#E3EDF2]
                bg-[#F7FAFC]
                p-4 text-center
                transition-colors duration-300
                hover:border-[#0C9B97]/40
                hover:bg-white
                sm:p-5
                ${
                  index === locations.length - 1
                    ? "col-span-2 md:col-span-1"
                    : ""
                }
              `}
            >
              {/* LOCATION ICON */}
              <div
                className="
                  flex h-11 w-11
                  shrink-0 items-center
                  justify-center rounded-xl
                  bg-[#E5F6F3]
                  text-[#0C9B97]
                  transition-colors duration-300
                  group-hover:bg-[#0C9B97]
                  group-hover:text-white
                "
              >
                <svg
                  width="23"
                  height="23"
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

              {/* CITY */}
              <h3
                className="
                  mt-3 text-[15px]
                  font-extrabold leading-snug
                  text-[#102A43]
                  sm:text-[17px]
                "
              >
                {location.city}
              </h3>

              {/* STATE */}
              <p
                className="
                  mt-1 text-[12px]
                  leading-[1.6]
                  text-[#617589]
                "
              >
                {location.state}
              </p>

              {/* SERVICE STATUS */}
              <p
                className="
                  mt-auto pt-3
                  text-[10px] font-bold
                  leading-[1.5]
                  text-[#0C9B97]
                "
              >
                {location.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ====================================== */}
        {/* 3. LOCAL & REGIONAL COURIER SOLUTIONS */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0.1)}
          className="
            mt-8 rounded-[18px]
            border border-[#DCE9EE]
            bg-[#F5F9FB]
            p-5 sm:p-7
          "
        >
          <div
            className="
              grid items-start gap-5
              md:grid-cols-[0.85fr_1.15fr]
              md:gap-8
            "
          >
            {/* LEFT HEADING */}
            <div>
              <p
                className="
                  text-[11px]
                  font-extrabold uppercase
                  tracking-[0.17em]
                  text-[#0C9B97]
                "
              >
                FLEXIBLE COVERAGE
              </p>

              <h3
                className="
                  mt-2 text-[22px]
                  font-extrabold
                  leading-[1.25]
                  text-[#102A43]
                  sm:text-[26px]
                "
              >
                Local & Regional
                <span
                  className="
                    block text-[#0C9B97]
                  "
                >
                  Courier Solutions
                </span>
              </h3>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className="space-y-3">
              <p
                className="
                  text-[13px]
                  leading-[1.75]
                  text-[#526579]
                  sm:text-[14px]
                "
              >
                We recognize that healthcare transportation
                needs vary by facility. Some organizations
                require recurring routes, while others may
                need occasional, time-sensitive deliveries.
              </p>

              <p
                className="
                  text-[13px]
                  leading-[1.75]
                  text-[#526579]
                  sm:text-[14px]
                "
              >
                Maximum Care works to understand each
                prospective client's needs and determine
                appropriate transportation arrangements.
              </p>

              {/* ADDITIONAL ROUTES NOTE */}
              <div
                className="
                  rounded-xl
                  border-l-[3px]
                  border-[#0C9B97]
                  bg-[#E5F5F3]
                  px-4 py-3
                "
              >
                <p
                  className="
                    text-[12px]
                    leading-[1.75]
                    text-[#315B5F]
                    sm:text-[13px]
                  "
                >
                  Additional routes and delivery
                  destinations throughout Minnesota and
                  North Dakota may be considered based
                  on distance, scheduling, service
                  requirements, and availability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====================================== */}
        {/* 4. SHORT CONTACT LINE */}
        {/* ====================================== */}

        <motion.p
          {...reveal(0.2)}
          className="
            mx-auto mt-6
            max-w-[700px]
            text-center text-[13px]
            leading-[1.7]
            text-[#617589]
          "
        >
          Contact us to discuss your pickup
          and delivery locations.
        </motion.p>
      </div>
    </section>
  );
}

export default AreasSection2;
