
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

import laboratoryImg from "../assets/service1.webp";
import pharmacyImg from "../assets/service2.webp";
import suppliesImg from "../assets/service3.webp";
import documentsImg from "../assets/service4.webp";
import scheduledImg from "../assets/service5.webp";
import statImg from "../assets/service6.webp";

// ==========================================
// SERVICES — FROM CLIENT BRIEF
// ==========================================

const services = [
  {
    number: "01",
    title: "Laboratory Specimen Transportation",
    description:
      "Transport of properly packaged laboratory specimens between authorized healthcare locations.",
    image: laboratoryImg,
    alt: "Laboratory specimen transportation",
  },
  {
    number: "02",
    title: "Prescription & Pharmacy Deliveries",
    description:
      "Courier solutions for properly packaged prescription medications and pharmacy-related deliveries.",
    image: pharmacyImg,
    alt: "Prescription and pharmacy delivery",
  },
  {
    number: "03",
    title: "Medical Supplies & Equipment Delivery",
    description:
      "Transportation of medical supplies, packaged healthcare products, and suitable equipment.",
    image: suppliesImg,
    alt: "Medical supplies and equipment delivery",
  },
  {
    number: "04",
    title: "Confidential Medical Document Delivery",
    description:
      "Responsible transportation of sealed medical records and confidential healthcare documents.",
    image: documentsImg,
    alt: "Confidential medical document delivery",
  },
  {
    number: "05",
    title: "Scheduled & Routine Courier Services",
    description:
      "Planned pickup and delivery arrangements for organizations with recurring transportation needs.",
    image: scheduledImg,
    alt: "Scheduled medical courier deliveries",
  },
  {
    number: "06",
    title: "Time-Sensitive & STAT Courier Services",
    description:
      "Urgent medical delivery requests reviewed according to timing, requirements, and availability.",
    image: statImg,
    alt: "Time-sensitive medical courier delivery",
  },
];

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// HOMEPAGE — SECTION 3
// ==========================================

function Section3() {
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
      amount: 0.12,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="services"
      className="
        w-full overflow-hidden
        bg-white
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ====================================== */}
        {/* COMPACT SECTION HEADING */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0)}
          className="mx-auto max-w-[740px] text-center"
        >
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            OUR SERVICES
          </p>

          <h2
            className="
              mt-3 text-[29px]
              font-extrabold leading-[1.2]
              tracking-[-0.035em]
              text-[#102A43]
              sm:text-[38px]
            "
          >
            Our Medical Courier Solutions
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[640px]
              text-[14px] leading-[1.75]
              text-[#526579]
            "
          >
            Professional transportation solutions
            designed to support healthcare organizations.
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* SIX IMAGE SERVICE CARDS */}
        {/* ====================================== */}

        <div
          className="
            mt-8 grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              {...reveal(
                reduceMotion ? 0 : (index % 3) * 0.06
              )}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: {
                        duration: 0.25,
                      },
                    }
              }
              className="
                group flex h-full flex-col
                overflow-hidden
                rounded-[16px]
                border border-[#E3EDF2]
                bg-white
                shadow-[0_7px_22px_rgba(7,30,52,0.055)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[#0C9B97]/40
                hover:shadow-[0_14px_32px_rgba(7,30,52,0.10)]
              "
            >

              {/* ================================== */}
              {/* SERVICE IMAGE */}
              {/* ================================== */}

              <div
                className="
                  relative h-[160px]
                  w-full overflow-hidden
                  bg-[#E5EFF3]
                  sm:h-[175px]
                  lg:h-[185px]
                "
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full w-full
                    object-cover object-center
                    transition-transform duration-500
                    group-hover:scale-[1.06]
                  "
                />

                {/* SUBTLE IMAGE OVERLAY */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#071E34]/30
                    via-transparent
                    to-transparent
                  "
                />

                {/* SERVICE NUMBER */}
                <span
                  className="
                    absolute left-4 top-4
                    rounded-lg
                    bg-[#071E34]/90
                    px-3 py-1.5
                    text-[10px] font-extrabold
                    tracking-[0.12em]
                    text-white
                  "
                >
                  {service.number}
                </span>
              </div>

              {/* ================================== */}
              {/* SERVICE DETAILS */}
              {/* ================================== */}

              <div
                className="
                  flex flex-1 flex-col
                  px-5 pb-5 pt-4
                "
              >
                <h3
                  className="
                    text-[17px] font-extrabold
                    leading-[1.35]
                    text-[#102A43]
                    transition-colors duration-300
                    group-hover:text-[#0C9B97]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-2 text-[13px]
                    leading-[1.75]
                    text-[#526579]
                  "
                >
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ====================================== */}
        {/* CLIENT SERVICE REQUIREMENTS */}
        {/* ====================================== */}

        <motion.p
          {...reveal(0.1)}
          className="
            mx-auto mt-6 max-w-[850px]
            text-center text-[12px]
            leading-[1.8] text-[#617589]
          "
        >
          All services are subject to operational readiness,
          applicable transportation requirements, and
          client-specific handling instructions.
        </motion.p>

        {/* ====================================== */}
        {/* EXPLORE SERVICES LINK */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0.15)}
          className="mt-6 text-center"
        >
          <Link
            to="/services"
            className="
              group inline-flex min-h-[46px]
              items-center justify-center
              gap-3 rounded-xl
              bg-[#102A43]
              px-7 text-[13px]
              font-bold text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#0C9B97]
            "
          >
            Explore All Services

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Section3;
