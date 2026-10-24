
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// CHANGE THESE FILENAMES IF YOUR IMAGES ARE NAMED DIFFERENTLY
import mainImg from "../assets/specialized-main.webp";
import planningImg from "../assets/specialized-planning.webp";

function ServicesSection5() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];

  const solutions = [
    {
      number: "01",
      title: "Customized Delivery Scheduling",
      description:
        "Every healthcare organization operates on its own schedule. We work with clients to discuss preferred pickup windows, delivery destinations, shipment requirements, and transportation arrangements that fit their daily operations.",
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
      number: "02",
      title: "Recurring & Multi-Location Routes",
      description:
        "Healthcare facilities may require regular transportation between laboratories, pharmacies, clinics, and other authorized locations. We can discuss recurring delivery arrangements and routes involving multiple locations, subject to scheduling and operational availability.",
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
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="6" r="2" />
          <path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Shipment-Specific Handling Coordination",
      description:
        "Not every medical shipment has the same requirements. We review relevant packaging instructions, shipment identification, authorized recipient details, delivery documentation, and handoff expectations before confirming suitable transportation arrangements.",
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
      title: "Time-Sensitive Delivery Planning",
      description:
        "When healthcare materials need to move within a particular timeframe, clear expectations matter. We review urgent transportation requests, discuss the required pickup and delivery windows, and confirm whether the requested service can be accommodated before accepting an assignment.",
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
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
          <path d="M12 3v2M21 12h-2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="specialized-solutions"
      className="relative isolate w-full overflow-hidden bg-[#F3F8FB] py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#0C9B97]/5 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#071E34]/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ================================== */}
        {/* TWO-COLUMN MAIN LAYOUT             */}
        {/* ================================== */}

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ================================== */}
          {/* LEFT — CONTENT                    */}
          {/* ================================== */}

          <div className="relative">

            {/* SMALL HEADING */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: -30 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#0C9B97]" />

              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
                SPECIALIZED HEALTHCARE LOGISTICS
              </p>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="max-w-[680px] text-[34px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[42px] xl:text-[48px]"
            >
              Tailored Transportation Solutions
              <span className="mt-2 block text-[#0C9B97]">
                For Your Healthcare Workflow.
              </span>
            </motion.h2>

            {/* INTRO DESCRIPTION */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="mt-6 space-y-4"
            >
              <p className="text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
                No two healthcare organizations operate exactly
                alike. A laboratory may require recurring specimen
                pickups, while a pharmacy may need transportation
                arrangements involving different authorized
                delivery locations.
              </p>

              <p className="text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
                At Maximum Care LLC, we believe healthcare
                transportation should begin with understanding
                the client's needs. We discuss shipment
                requirements, pickup schedules, delivery
                expectations, and relevant handling instructions
                to identify appropriate courier arrangements.
              </p>
            </motion.div>

            {/* DIVIDER */}
            <div className="my-8 h-px w-full bg-[#D9E6EC]" />

            {/* ================================== */}
            {/* FOUR SOLUTIONS                    */}
            {/* ================================== */}

            <div className="space-y-5">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.number}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 25 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion
                      ? 0
                      : index * 0.1,
                    ease,
                  }}
                  className="group flex items-start gap-4 rounded-2xl border border-[#DFEAF0] bg-white p-4 shadow-[0_8px_25px_rgba(7,30,52,0.035)] transition-all duration-300 hover:border-[#0C9B97]/35 hover:shadow-[0_15px_35px_rgba(7,30,52,0.08)] sm:p-5"
                >

                  {/* SOLUTION ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#0C9B97] transition-all duration-300 group-hover:bg-[#0C9B97] group-hover:text-white">
                    {solution.icon}
                  </div>

                  {/* SOLUTION CONTENT */}
                  <div className="min-w-0 flex-1">

                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-extrabold tracking-[0.12em] text-[#0C9B97]">
                        {solution.number}
                      </span>

                      <h3 className="text-[16px] font-extrabold leading-snug text-[#102A43] sm:text-[17px]">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="text-[13px] leading-[1.85] text-[#617589] sm:text-[14px]">
                      {solution.description}
                    </p>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* SERVICE AVAILABILITY NOTE */}
            <motion.p
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
              }}
              className="mt-6 text-[12px] leading-[1.8] text-[#617589]"
            >
              All specialized arrangements are subject to
              operational availability, applicable transportation
              requirements, and agreement on shipment-specific
              instructions.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="mt-8"
            >
              <Link
                to="/request-quote"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[13px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] hover:shadow-[0_18px_35px_rgba(12,155,151,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
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

          {/* ================================== */}
          {/* RIGHT — TWO IMAGE COLLAGE         */}
          {/* ================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 55,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.95,
              ease,
            }}
            className="relative mx-auto w-full max-w-[610px] lg:self-center"
          >

            {/* DECORATIVE TOP ACCENT */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-32 w-32 rounded-[28px] border-[3px] border-[#0C9B97]/20 sm:-right-5 sm:-top-5"
            />

            {/* MAIN IMAGE */}
            <div className="relative ml-0 w-[83%] overflow-hidden rounded-[28px] bg-[#DDE9ED] shadow-[0_25px_65px_rgba(7,30,52,0.15)]">

              <motion.img
                src={mainImg}
                alt="Healthcare courier coordinating the handoff of a medical transport container"
                loading="lazy"
                decoding="async"
                className="h-[390px] w-full object-cover sm:h-[490px] lg:h-[540px]"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.05 }
                }
                transition={{
                  duration: 0.8,
                  ease,
                }}
              />

              {/* IMAGE GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071E34]/45 via-transparent to-transparent" />

              {/* IMAGE TEXT LABEL */}
              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#071E34]/75 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md sm:text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  Healthcare Transportation
                </span>
              </div>
            </div>

            {/* SECONDARY IMAGE */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                      scale: 0.95,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="absolute bottom-10 right-0 w-[53%] overflow-hidden rounded-[22px] border-[5px] border-[#F3F8FB] bg-[#DDE9ED] shadow-[0_20px_50px_rgba(7,30,52,0.19)] sm:bottom-12"
            >
              <motion.img
                src={planningImg}
                alt="Coordinator reviewing delivery schedules and logistics arrangements"
                loading="lazy"
                decoding="async"
                className="h-[190px] w-full object-cover sm:h-[250px] lg:h-[270px]"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.06 }
                }
                transition={{
                  duration: 0.8,
                  ease,
                }}
              />
            </motion.div>

            {/* FLOATING INFORMATION BADGE */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.5,
                ease,
              }}
              className="relative z-10 mt-5 flex max-w-[340px] items-center gap-4 rounded-2xl border border-[#E0EBF0] bg-white p-4 shadow-[0_15px_40px_rgba(7,30,52,0.1)] sm:absolute sm:-bottom-5 sm:left-5 sm:mt-0"
            >

              {/* BADGE ICON */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#0C9B97]">
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
                  <path d="M3 6h12v12H3z" />
                  <path d="M15 10h4l3 4v4h-7" />
                  <circle cx="7.5" cy="18" r="2" />
                  <circle cx="18.5" cy="18" r="2" />
                </svg>
              </div>

              <div>
                <p className="text-[13px] font-extrabold text-[#102A43]">
                  Maximum Care LLC
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#617589]">
                  Transportation coordinated around your needs.
                </p>
              </div>
            </motion.div>

            {/* DECORATIVE DOT PATTERN */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 right-2 -z-10 grid grid-cols-5 gap-3 opacity-40"
            >
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-[#0C9B97]"
                />
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection5;
