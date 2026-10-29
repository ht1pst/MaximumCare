
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

function Section6() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 22 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="our-commitment"
      className="
        relative w-full overflow-hidden
        bg-[#F7FAFC]
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ====================================== */}
        {/* MAIN COMMITMENT CONTAINER */}
        {/* ====================================== */}

        <div
          className="
            relative overflow-hidden
            rounded-[20px]
            bg-[#071E34]
            px-6 py-11
            sm:px-10 sm:py-14
            lg:px-14
          "
        >
          {/* SUBTLE BACKGROUND ACCENTS */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-24 -top-24
              h-[280px] w-[280px]
              rounded-full bg-[#0C9B97]/20
              blur-[85px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-32 -left-20
              h-[250px] w-[250px]
              rounded-full bg-[#0C9B97]/10
              blur-[80px]
            "
          />

          {/* ====================================== */}
          {/* CONTENT */}
          {/* ====================================== */}

          <div
            className="
              relative z-10 mx-auto
              max-w-[800px] text-center
            "
          >
            {/* SMALL LABEL */}
            <motion.p
              {...reveal(0)}
              className="
                text-[11px] font-extrabold
                uppercase tracking-[0.22em]
                text-[#6DE0D3]
              "
            >
              OUR COMMITMENT
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h2
              {...reveal(0.1)}
              className="
                mt-4 text-[29px]
                font-extrabold leading-[1.18]
                tracking-[-0.035em]
                text-white
                sm:text-[38px]
                lg:text-[43px]
              "
            >
              Your Deliveries Matter.
              <span className="block text-[#6DE0D3]">
                Your Trust Matters More.
              </span>
            </motion.h2>

            {/* SHORT DESCRIPTION */}
            <motion.p
              {...reveal(0.2)}
              className="
                mx-auto mt-4 max-w-[610px]
                text-[14px] leading-[1.8]
                text-[#CEDDE5]
                sm:text-[15px]
              "
            >
              Partner with Maximum Care LLC for
              professional medical courier solutions
              built on responsible handling,
              reliability, and clear communication.
            </motion.p>

            {/* ====================================== */}
            {/* CTA BUTTONS */}
            {/* ====================================== */}

            <motion.div
              {...reveal(0.3)}
              className="
                mt-7 flex flex-col
                items-center justify-center
                gap-3 sm:flex-row
              "
            >
              {/* REQUEST QUOTE */}
              <Link
                to="/request-quote"
                className="
                  group inline-flex min-h-[48px]
                  w-full items-center
                  justify-center gap-3
                  rounded-xl bg-[#0C9B97]
                  px-7 text-[13px]
                  font-bold text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#087F7C]
                  hover:shadow-[0_10px_26px_rgba(12,155,151,0.22)]
                  sm:w-auto
                "
              >
                Request a Quote

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
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              {/* CALL BUTTON */}
              <a
                href="tel:+17087330065"
                className="
                  inline-flex min-h-[48px]
                  w-full items-center
                  justify-center gap-2
                  rounded-xl
                  border border-white/35
                  bg-white/[0.06]
                  px-7 text-[13px]
                  font-bold text-white
                  transition-all duration-300
                  hover:border-[#6DE0D3]
                  hover:bg-white/[0.12]
                  sm:w-auto
                "
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L9 10.5a16 16 0 0 0 4.5 4.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
                </svg>

                Call 708-733-0065
              </a>
            </motion.div>

            {/* TAGLINE */}
            <motion.p
              {...reveal(0.4)}
              className="
                mt-7 text-[11px]
                font-bold uppercase
                tracking-[0.22em]
                text-[#6DE0D3]
              "
            >
              Fast. Secure. Reliable.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
