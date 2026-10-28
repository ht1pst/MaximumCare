
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

import img from "../assets/section2img.webp";

const ease = [0.22, 1, 0.36, 1];

const features = [
  "Locally Owned",
  "Healthcare-Focused",
  "Reliable Transportation",
];

function Section2() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="about"
      className="
        w-full overflow-hidden
        bg-[#F7FAFC]
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ====================================== */}
        {/* MAIN TWO-COLUMN LAYOUT */}
        {/* ====================================== */}

        <div
          className="
            grid grid-cols-1
            items-center gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-12
          "
        >

          {/* ====================================== */}
          {/* LEFT — IMAGE */}
          {/* ====================================== */}

          <motion.div
            {...reveal(0)}
            className="
              relative overflow-hidden
              rounded-[20px]
              bg-[#DCECF3]
              shadow-[0_15px_40px_rgba(7,30,52,0.10)]
            "
          >
            <img
              src={img}
              alt="Maximum Care LLC medical courier services"
              loading="lazy"
              decoding="async"
              className="
                h-[260px] w-full
                object-cover object-center
                sm:h-[340px]
                lg:h-[410px]
              "
            />

            {/* IMAGE GRADIENT */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-t
                from-[#071E34]/70
                via-transparent
                to-transparent
              "
            />

            {/* IMAGE BOTTOM TEXT */}
            <div
              className="
                absolute bottom-5
                left-5 right-5
                sm:bottom-6 sm:left-6
              "
            >
              <p
                className="
                  text-[11px] font-bold
                  uppercase tracking-[0.17em]
                  text-[#6DE0D3]
                "
              >
                MAXIMUM CARE LLC
              </p>

              <h3
                className="
                  mt-2 text-[20px]
                  font-extrabold leading-[1.25]
                  text-white sm:text-[24px]
                "
              >
                Delivering Care
                <span className="block text-[#6DE0D3]">
                  With Precision.
                </span>
              </h3>
            </div>
          </motion.div>

          {/* ====================================== */}
          {/* RIGHT — COMPANY INTRODUCTION */}
          {/* ====================================== */}

          <motion.div
            {...reveal(0.1)}
            className="flex flex-col"
          >
            {/* SMALL LABEL */}
            <p
              className="
                text-[11px] font-extrabold
                uppercase tracking-[0.2em]
                text-[#0C9B97]
              "
            >
              WELCOME TO MAXIMUM CARE
            </p>

            {/* MAIN HEADING */}
            <h2
              className="
                mt-3 text-[29px]
                font-extrabold leading-[1.15]
                tracking-[-0.035em]
                text-[#102A43]
                sm:text-[37px]
                lg:text-[40px]
              "
            >
              Your Trusted Partner
              <span className="block text-[#0C9B97]">
                in Medical Transportation.
              </span>
            </h2>

            {/* CLIENT'S APPROVED CONTENT */}
            <div
              className="
                mt-5 space-y-3
                text-[14px] leading-[1.8]
                text-[#526579]
                sm:text-[15px]
              "
            >
              <p>
                Maximum Care LLC is a locally owned
                medical courier company based in Moorhead,
                Minnesota, serving healthcare organizations
                across Minnesota and North Dakota.
              </p>

              <p>
                We recognize the importance of timely
                deliveries in the healthcare industry.
                Our business is built around
                professionalism, reliability,
                accountability, and respect for the
                sensitive nature of medical shipments.
              </p>

              <p>
                Whether your organization needs scheduled
                deliveries, time-sensitive transportation,
                or an additional courier partner,
                Maximum Care is committed to providing
                responsive and dependable service.
              </p>
            </div>

            {/* ====================================== */}
            {/* SHORT HIGHLIGHTS */}
            {/* ====================================== */}

            <div
              className="
                mt-5 flex flex-wrap
                gap-2
              "
            >
              {features.map((feature) => (
                <span
                  key={feature}
                  className="
                    inline-flex items-center gap-2
                    rounded-lg
                    border border-[#D4EBE8]
                    bg-[#EAF7F5]
                    px-3 py-2
                    text-[11px] font-bold
                    text-[#28736F]
                  "
                >
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

                  {feature}
                </span>
              ))}
            </div>

            {/* ====================================== */}
            {/* ABOUT BUTTON */}
            {/* ====================================== */}

            <div className="mt-6">
              <Link
                to="/about"
                className="
                  group inline-flex
                  min-h-[46px]
                  items-center justify-center
                  gap-3 rounded-xl
                  bg-[#102A43]
                  px-6 text-[13px]
                  font-bold text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0C9B97]
                "
              >
                More About Maximum Care

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
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
