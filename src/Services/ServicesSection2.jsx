
import { motion, useReducedMotion } from "motion/react";

// CHANGE THE IMAGE NAME TO YOUR ACTUAL IMAGE
import overviewImg from "../assets/servicessection2img.webp";

const smoothEase = [0.22, 1, 0.36, 1];

function ServicesSection2() {
  const reduceMotion = useReducedMotion();

  const benefits = [
    {
      title: "Healthcare-Focused Transportation",
      description:
        "Courier solutions tailored to the transportation needs of healthcare organizations.",
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
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M12 11v6M9 14h6" />
        </svg>
      ),
    },
    {
      title: "Responsible Shipment Handling",
      description:
        "Attention to agreed handling instructions, shipment requirements, and appropriate handoffs.",
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
      title: "Coordinated Delivery Scheduling",
      description:
        "Planned pickups, recurring routes, and time-sensitive requests reviewed according to availability.",
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
  ];

  return (
    <section
      id="services-overview"
      className="relative w-full overflow-hidden bg-[#F3F8FB] py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div
        className="
          relative z-10 mx-auto grid
          max-w-[1280px] items-center
          gap-14 px-5
          sm:px-8
          lg:grid-cols-2
          lg:gap-20
          lg:px-12
        "
      >
        {/* ===================================== */}
        {/* LEFT — IMAGE                         */}
        {/* ===================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -55,
                  scale: 0.96,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: smoothEase,
          }}
          className="relative w-full"
        >
          {/* IMAGE FRAME */}
          <div className="relative">

            {/* DECORATIVE BACK FRAME */}
            <div
              aria-hidden="true"
              className="
                absolute -bottom-5 -right-4
                h-full w-full
                rounded-[28px]
                border-2 border-[#0C9B97]/15
                sm:-bottom-6 sm:-right-6
              "
            />

            {/* MAIN IMAGE */}
            <div
              className="
                group relative overflow-hidden
                rounded-[28px]
                bg-[#DCE9EE]
                shadow-[0_25px_70px_rgba(16,42,67,0.14)]
              "
            >
              <motion.img
                src={overviewImg}
                alt="Healthcare courier delivery and medical logistics coordination"
                loading="lazy"
                decoding="async"
                className="
                  h-[380px] w-full
                  object-cover object-center
                  sm:h-[500px]
                  lg:h-[570px]
                "
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.045 }
                }
                transition={{
                  duration: 0.8,
                  ease: smoothEase,
                }}
              />

              {/* IMAGE GRADIENT */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#071E34]/45
                  via-transparent
                  to-transparent
                "
              />

              {/* IMAGE CORNER LABEL */}
              <div
                className="
                  absolute bottom-6 left-6 right-6
                  sm:bottom-8 sm:left-8
                "
              >
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/25
                    bg-[#071E34]/75
                    px-4 py-2.5
                    text-[11px] font-bold
                    uppercase tracking-[0.08em]
                    text-white
                    backdrop-blur-md
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-[#6DE0D3]" />
                  Healthcare-Focused Logistics
                </span>
              </div>
            </div>

            {/* FLOATING DECORATIVE BADGE */}
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
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.4,
              }}
              className="
                absolute -right-2 top-6
                hidden items-center gap-3
                rounded-2xl border border-[#E3EDF2]
                bg-white p-4
                shadow-[0_15px_45px_rgba(16,42,67,0.12)]
                sm:flex
                lg:-right-8
              "
            >
              {/* TRUCK SVG */}
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#E6F7F5]
                  text-[#0C9B97]
                "
              >
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

                <p className="mt-1 text-[11px] font-medium text-[#617589]">
                  Fast. Secure. Reliable.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ===================================== */}
        {/* RIGHT — CONTENT                      */}
        {/* ===================================== */}

        <div className="relative">

          {/* SMALL HEADING */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 35,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: smoothEase,
            }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#0C9B97]" />

            <p
              className="
                text-[11px] font-extrabold
                uppercase tracking-[0.22em]
                text-[#0C9B97]
                sm:text-[12px]
              "
            >
              HEALTHCARE LOGISTICS SOLUTIONS
            </p>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.1,
              ease: smoothEase,
            }}
            className="
              max-w-[650px]
              text-[34px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#102A43]
              sm:text-[42px]
              lg:text-[48px]
            "
          >
            More Than Moving Packages.
            <span className="mt-2 block text-[#0C9B97]">
              Supporting Your Healthcare Workflow.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
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
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.2,
              ease: smoothEase,
            }}
            className="mt-7 space-y-4"
          >
            <p
              className="
                text-[15px] leading-[1.9]
                text-[#526579]
                sm:text-[16px]
              "
            >
              Healthcare organizations depend on coordinated
              transportation to keep their operations moving.
              From laboratories and pharmacies to medical
              offices and healthcare facilities, each delivery
              has its own scheduling and handling requirements.
            </p>

            <p
              className="
                text-[15px] leading-[1.9]
                text-[#526579]
                sm:text-[16px]
              "
            >
              Maximum Care LLC provides professional medical
              courier solutions with attention to responsible
              shipment handling, clear communication, and
              transportation arrangements tailored to each
              organization's needs.
            </p>
          </motion.div>

          {/* DIVIDER */}
          <div className="my-8 h-px w-full bg-[#DCE8EE]" />

          {/* ================================= */}
          {/* BENEFITS                          */}
          {/* ================================= */}

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 30,
                      }
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
                    : 0.25 + index * 0.12,
                  ease: smoothEase,
                }}
                className="group flex items-start gap-4"
              >
                {/* BENEFIT ICON */}
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-[#E2F5F3]
                    text-[#0C9B97]
                    transition-all duration-300
                    group-hover:bg-[#0C9B97]
                    group-hover:text-white
                  "
                >
                  {benefit.icon}
                </div>

                {/* BENEFIT TEXT */}
                <div>
                  <h3
                    className="
                      text-[16px]
                      font-extrabold
                      text-[#102A43]
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      leading-6
                      text-[#617589]
                      sm:text-[14px]
                    "
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ACCENT */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    width: 0,
                    opacity: 0,
                  }
            }
            whileInView={{
              width: 90,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.5,
              ease: smoothEase,
            }}
            className="mt-10 h-[3px] rounded-full bg-[#0C9B97]"
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection2;
