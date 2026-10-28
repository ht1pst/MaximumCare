
import { motion, useReducedMotion } from "motion/react";

import aboutImg from "../assets/aboutsection2.webp";

const ease = [0.22, 1, 0.36, 1];

function AboutSection2() {
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
      id="who-we-are"
      className="scroll-mt-28 bg-[#F5F9FB] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

        {/* ====================================== */}
        {/* COMPANY INTRODUCTION */}
        {/* ====================================== */}

        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* LEFT IMAGE */}
          <motion.div
            {...reveal(0)}
            className="relative overflow-hidden rounded-[20px] bg-[#DCE9EE] shadow-[0_14px_36px_rgba(7,30,52,0.09)]"
          >
            <img
              src={aboutImg}
              alt="Healthcare courier services at Maximum Care LLC"
              loading="lazy"
              decoding="async"
              className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[370px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071E34]/65 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6DE0D3]">
                LOCALLY OWNED
              </p>

              <p className="mt-1 text-[16px] font-extrabold">
                Moorhead, Minnesota
              </p>
            </div>
          </motion.div>

          {/* RIGHT STORY CONTENT */}
          <motion.div {...reveal(0.1)}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
              OUR STORY
            </p>

            <h2 className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.035em] text-[#102A43] sm:text-[36px]">
              About Maximum Care LLC
            </h2>

            <div className="mt-4 space-y-3 text-[14px] leading-[1.8] text-[#526579] sm:text-[15px]">
              <p>
                Maximum Care LLC is a locally owned medical
                courier company headquartered in Moorhead,
                Minnesota. Our company was established with
                a clear purpose: to provide healthcare
                organizations with reliable, professional,
                and carefully managed courier services.
              </p>

              <p>
                We understand that medical transportation
                is different from ordinary package delivery.
                The items being transported may support
                laboratory testing, patient treatment,
                pharmacy operations, or essential
                healthcare services.
              </p>

              <p>
                That responsibility shapes our approach
                to every assignment.
              </p>

              <p>
                At Maximum Care, we are committed to
                building a reputation for dependable service,
                responsible handling, professional
                communication, and strong relationships
                with the healthcare organizations we serve.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ====================================== */}
        {/* MISSION AND VISION CARDS */}
        {/* ====================================== */}

        <div
          id="mission-vision"
          className="mt-9 grid gap-4 md:grid-cols-2"
        >
          {/* MISSION */}
          <motion.div
            {...reveal(0.1)}
            className="rounded-[18px] bg-[#071E34] p-6 text-white sm:p-7"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
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
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>

            <h3 className="text-[21px] font-extrabold">
              Our Mission
            </h3>

            <p className="mt-3 text-[14px] leading-[1.8] text-[#D0DFE8]">
              To support healthcare organizations through
              safe, dependable, and timely medical courier
              services that prioritize shipment integrity,
              professionalism, and customer satisfaction.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            {...reveal(0.2)}
            className="rounded-[18px] border border-[#DCE9ED] bg-white p-6 shadow-[0_8px_24px_rgba(7,30,52,0.04)] sm:p-7"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F7F4] text-[#0C9B97]">
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
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <h3 className="text-[21px] font-extrabold text-[#102A43]">
              Our Vision
            </h3>

            <p className="mt-3 text-[14px] leading-[1.8] text-[#526579]">
              To become a trusted medical courier partner
              across Minnesota and North Dakota, recognized
              for reliability, professionalism, responsible
              handling, and exceptional customer service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;
