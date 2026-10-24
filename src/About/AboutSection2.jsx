
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// CHANGE THIS TO YOUR ACTUAL IMAGE FILENAME
import aboutImg from "../assets/aboutsection2.webp";

const ease = [0.22, 1, 0.36, 1];

function AboutSection2() {
  const reduceMotion = useReducedMotion();

  const principles = [
    {
      title: "Purpose-Driven Service",
      description:
        "Focused on understanding the transportation needs of healthcare organizations and delivering appropriate courier solutions.",
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
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      ),
    },
    {
      title: "Responsible Transportation",
      description:
        "An approach that emphasizes agreed handling instructions, suitable packaging, and appropriate delivery coordination.",
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
      title: "Clear Communication",
      description:
        "Setting realistic expectations about scheduling, availability, shipment requirements, and delivery arrangements.",
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
          <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5A9 9 0 0 1 4 11.5a8.5 8.5 0 0 1 17 0Z" />
          <path d="M8 11h8M8 14h5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="who-we-are"
      className="relative isolate w-full scroll-mt-24 overflow-hidden bg-[#F5F9FB] py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0C9B97]/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================================== */}
          {/* LEFT — COMPANY IMAGE              */}
          {/* ================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -55, scale: 0.97 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
            className="relative mx-auto w-full max-w-[590px] lg:mx-0"
          >
            {/* DECORATIVE IMAGE FRAME */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-4 h-full w-full rounded-[28px] border-2 border-[#0C9B97]/20 sm:-bottom-7 sm:-left-7"
            />

            {/* IMAGE */}
            <div className="group relative overflow-hidden rounded-[28px] bg-[#DCE9EE] shadow-[0_25px_70px_rgba(7,30,52,0.14)]">

              <motion.img
                src={aboutImg}
                alt="Healthcare professional receiving a properly packaged medical delivery"
                loading="lazy"
                decoding="async"
                className="h-[420px] w-full object-cover object-center sm:h-[540px] lg:h-[650px]"
                whileHover={
                  reduceMotion ? undefined : { scale: 1.05 }
                }
                transition={{
                  duration: 0.85,
                  ease,
                }}
              />

              {/* BOTTOM IMAGE GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071E34]/65 via-transparent to-transparent" />

              {/* IMAGE BOTTOM LABEL */}
              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8">

                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  Maximum Care LLC
                </span>

                <p className="max-w-[360px] text-[21px] font-extrabold leading-[1.35] text-white sm:text-[25px]">
                  Built Around Care.
                  <span className="block text-[#6DE0D3]">
                    Focused on Every Delivery.
                  </span>
                </p>
              </div>
            </div>

            {/* FLOATING LOCATION BADGE */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.35,
                ease,
              }}
              className="relative z-10 mt-5 flex max-w-[280px] items-center gap-3 rounded-2xl border border-[#E0EBF0] bg-white p-4 shadow-[0_15px_40px_rgba(7,30,52,0.12)] sm:absolute sm:-bottom-5 sm:-right-5 sm:mt-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5F7F4] text-[#0C9B97]">

                {/* MAP PIN SVG */}
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
                <p className="text-[13px] font-extrabold text-[#102A43]">
                  Moorhead, Minnesota
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#617589]">
                  Serving the Fargo–Moorhead area
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ================================== */}
          {/* RIGHT — COMPANY INTRODUCTION       */}
          {/* ================================== */}

          <div className="relative">

            {/* SMALL HEADING */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: 30 }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#0C9B97]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0C9B97] sm:text-[12px]">
                WHO WE ARE
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="max-w-[650px] text-[34px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[42px] xl:text-[49px]"
            >
              A New Name.
              <span className="mt-2 block text-[#0C9B97]">
                A Clear Purpose.
              </span>
              <span className="mt-2 block">
                A Commitment to Care.
              </span>
            </motion.h2>

            {/* INTRODUCTION PARAGRAPHS */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="mt-7 space-y-4"
            >
              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                Maximum Care LLC is a medical courier startup
                based in Moorhead, Minnesota, created with
                a clear focus on supporting healthcare
                organizations through professional,
                well-coordinated transportation solutions.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                We recognize that laboratories, pharmacies,
                clinics, medical offices, and other healthcare
                facilities depend on transportation arrangements
                that fit their schedules and shipment
                requirements. Whether the need involves
                laboratory specimens, eligible pharmacy
                shipments, medical supplies, or sealed
                documents, thoughtful coordination matters.
              </p>

              <p className="text-[15px] leading-[1.95] text-[#526579] sm:text-[16px]">
                As we build Maximum Care LLC, our aim is to
                develop lasting professional relationships
                through responsible handling, clear
                communication, and attention to the
                specific requirements of each accepted
                transportation assignment.
              </p>
            </motion.div>

            {/* DECORATIVE DIVIDER */}
            <div className="my-8 h-px w-full bg-[#DCE8EE]" />

            {/* ================================== */}
            {/* THREE PRINCIPLES                 */}
            {/* ================================== */}

            <div className="space-y-5">

              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: 25 }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion
                      ? 0
                      : index * 0.12,
                    ease,
                  }}
                  className="group flex items-start gap-4"
                >

                  {/* PRINCIPLE ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E3F5F2] text-[#0C9B97] transition-all duration-300 group-hover:bg-[#0C9B97] group-hover:text-white">
                    {principle.icon}
                  </div>

                  {/* PRINCIPLE TEXT */}
                  <div>
                    <h3 className="text-[16px] font-extrabold text-[#102A43]">
                      {principle.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.85] text-[#617589] sm:text-[14px]">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ================================== */}
            {/* BOTTOM CALL TO ACTION             */}
            {/* ================================== */}

            <motion.div
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
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="mt-9"
            >
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_12px_30px_rgba(12,155,151,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F7B] hover:shadow-[0_18px_35px_rgba(12,155,151,0.27)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C9B97]"
              >
                Explore Our Services

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
      </div>
    </section>
  );
}

export default AboutSection2;
