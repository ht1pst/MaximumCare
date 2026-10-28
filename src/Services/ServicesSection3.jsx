
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

import laboratoryImg from "../assets/service1.webp";
import pharmacyImg from "../assets/service2.webp";
import suppliesImg from "../assets/service3.webp";
import documentsImg from "../assets/service4.webp";
import scheduledImg from "../assets/service5.webp";
import statImg from "../assets/service6.webp";

// ==========================================
// SERVICES — CONTENT FROM CLIENT BRIEF
// ==========================================

const services = [
  {
    number: "01",
    category: "LABORATORY LOGISTICS",
    title: "Laboratory Specimen Transportation",
    image: laboratoryImg,
    alt: "Laboratory specimen transportation",

    summary:
      "Transportation of properly packaged laboratory specimens between authorized healthcare locations.",

    details: [
      "Transportation of properly packaged laboratory specimens between authorized collection sites, medical offices, laboratories, and healthcare facilities.",

      "Our approach emphasizes timely handling, shipment identification, documented handoffs when required, and adherence to applicable packaging and transportation instructions.",
    ],

    icon: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v7L4.2 19.3A2 2 0 0 0 5.9 22h12.2a2 2 0 0 0 1.7-2.7L14 10V3" />
        <path d="M7 16h10" />
      </>
    ),
  },

  {
    number: "02",
    category: "PHARMACY LOGISTICS",
    title: "Prescription & Pharmacy Delivery",
    image: pharmacyImg,
    alt: "Prescription and pharmacy delivery",

    summary:
      "Courier solutions for properly packaged prescription medications and pharmacy-related deliveries.",

    details: [
      "Courier solutions for properly packaged prescription medications and pharmacy-related deliveries, subject to applicable laws, client requirements, and any necessary authorizations.",

      "We understand the importance of responsible handling and timely transportation in pharmacy operations.",
    ],

    icon: (
      <>
        <path d="m10.5 20.5 10-10a6 6 0 0 0-8.5-8.5l-10 10a6 6 0 0 0 8.5 8.5Z" />
        <path d="m8.5 8.5 7 7" />
      </>
    ),
  },

  {
    number: "03",
    category: "MEDICAL SUPPLY LOGISTICS",
    title: "Medical Supplies & Equipment Delivery",
    image: suppliesImg,
    alt: "Medical supplies and equipment delivery",

    summary:
      "Transportation of medical supplies, packaged healthcare products, and suitable medical equipment.",

    details: [
      "Transportation of medical supplies, packaged healthcare products, and suitable medical equipment between healthcare facilities, offices, suppliers, and authorized destinations.",
    ],

    icon: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M12 11v6" />
        <path d="M9 14h6" />
      </>
    ),
  },

  {
    number: "04",
    category: "DOCUMENT COURIER",
    title: "Confidential Medical Document Delivery",
    image: documentsImg,
    alt: "Confidential healthcare document delivery",

    summary:
      "Transportation of sealed medical records, administrative documents, and other confidential healthcare materials.",

    details: [
      "Transportation of sealed medical records, administrative documents, and other confidential healthcare materials.",

      "We emphasize responsible custody and appropriate confidentiality practices.",
    ],

    icon: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="m3 7 9 7 9-7" />
        <path d="M17 3v4" />
      </>
    ),
  },

  {
    number: "05",
    category: "PLANNED COURIER SERVICES",
    title: "Scheduled & Routine Courier Services",
    image: scheduledImg,
    alt: "Scheduled and routine courier deliveries",

    summary:
      "Planned pickup and delivery arrangements for organizations with recurring transportation needs.",

    details: [
      "Planned pickup and delivery arrangements for organizations with recurring transportation needs.",

      "Services may be structured around agreed routes, pickup schedules, delivery locations, and handling requirements.",
    ],

    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </>
    ),
  },

  {
    number: "06",
    category: "TIME-SENSITIVE COURIER",
    title: "Time-Sensitive & STAT Courier Services",
    image: statImg,
    alt: "Time-sensitive medical courier delivery",

    summary:
      "Transportation solutions for urgent medical deliveries requiring prompt attention.",

    details: [
      "Transportation solutions for urgent medical deliveries requiring prompt attention.",

      "Availability, pickup windows, delivery expectations, and handling requirements are confirmed before accepting each assignment.",
    ],

    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="M12 3v2" />
        <path d="M21 12h-2" />
      </>
    ),
  },
];

// ==========================================
// SERVICE ICON COMPONENT
// ==========================================

function ServiceIcon({ children }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// ==========================================
// SERVICES SECTION 3
// ==========================================

function ServicesSection3() {
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
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="our-services"
      className="
        scroll-mt-28 bg-white
        px-5 py-12
        sm:px-8 sm:py-14
        lg:px-12 lg:py-16
      "
    >
      <div className="mx-auto max-w-[1280px]">

        {/* ====================================== */}
        {/* SECTION HEADING */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0)}
          className="mb-8 max-w-[780px]"
        >
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            WHAT WE DELIVER
          </p>

          <h2
            className="
              mt-3 text-[30px]
              font-extrabold leading-tight
              tracking-[-0.035em]
              text-[#102A43]
              sm:text-[40px]
            "
          >
            Our Medical Courier Services
          </h2>

          <p
            className="
              mt-3 text-[14px]
              leading-[1.75]
              text-[#526579]
              sm:text-[15px]
            "
          >
            Explore our medical courier services and
            the transportation arrangements available
            for healthcare organizations.
          </p>
        </motion.div>

        {/* ====================================== */}
        {/* SIX SERVICE CARDS */}
        {/* ====================================== */}

        <div
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              {...reveal(
                reduceMotion
                  ? 0
                  : (index % 3) * 0.06
              )}
              className="
                group flex h-full
                flex-col overflow-hidden
                rounded-[18px]
                border border-[#DEEAF0]
                bg-white
                shadow-[0_10px_28px_rgba(7,30,52,0.055)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[#0C9B97]/40
                hover:shadow-[0_15px_35px_rgba(7,30,52,0.09)]
              "
            >
              {/* ================================== */}
              {/* SERVICE IMAGE */}
              {/* ================================== */}

              <div
                className="
                  relative h-[145px]
                  overflow-hidden
                  bg-[#DCE8EF]
                  sm:h-[155px]
                "
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.04]
                  "
                />

                {/* SERVICE NUMBER */}
                <span
                  className="
                    absolute left-4 top-3
                    rounded-lg bg-[#071E34]/90
                    px-2.5 py-1
                    text-[10px] font-extrabold
                    tracking-[0.1em]
                    text-white
                  "
                >
                  {service.number}
                </span>
              </div>

              {/* ================================== */}
              {/* SERVICE CONTENT */}
              {/* ================================== */}

              <div
                className="
                  flex flex-1 flex-col
                  p-5
                "
              >
                {/* CATEGORY + ICON */}
                <div
                  className="
                    flex items-center gap-2
                    text-[#0C9B97]
                  "
                >
                  <ServiceIcon>
                    {service.icon}
                  </ServiceIcon>

                  <span
                    className="
                      text-[10px] font-extrabold
                      uppercase tracking-[0.12em]
                    "
                  >
                    {service.category}
                  </span>
                </div>

                {/* SERVICE TITLE */}
                <h3
                  className="
                    mt-3 min-h-[44px]
                    text-[17px]
                    font-extrabold
                    leading-[1.3]
                    text-[#102A43]
                  "
                >
                  {service.title}
                </h3>

                {/* SHORT SUMMARY */}
                <p
                  className="
                    mt-3 text-[13px]
                    leading-[1.75]
                    text-[#526579]
                  "
                >
                  {service.summary}
                </p>

                {/* ================================== */}
                {/* EXPANDABLE CLIENT-APPROVED DETAILS */}
                {/* ================================== */}

                <details
                  className="
                    group/details mt-auto
                    pt-5
                  "
                >
                  <summary
                    className="
                      flex cursor-pointer
                      list-none items-center
                      justify-between gap-3
                      border-t border-[#E5EDF2]
                      pt-4
                      text-[12px] font-extrabold
                      text-[#0C9B97]
                      marker:hidden
                      focus-visible:rounded
                      focus-visible:outline-2
                      focus-visible:outline-[#0C9B97]
                      [&::-webkit-details-marker]:hidden
                    "
                  >
                    <span>
                      View Full Service Details
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        text-[20px]
                        leading-none
                        transition-transform
                        duration-300
                        group-open/details:rotate-45
                      "
                    >
                      +
                    </span>
                  </summary>

                  <div
                    className="
                      mt-4 space-y-3
                      rounded-xl
                      bg-[#F3F8FB]
                      p-4
                    "
                  >
                    {service.details.map(
                      (paragraph, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="
                            text-[12px]
                            leading-[1.85]
                            text-[#526579]
                          "
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </details>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ====================================== */}
        {/* GENERAL SERVICE REQUIREMENTS */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0.1)}
          className="
            mx-auto mt-8
            max-w-[1050px]
            rounded-xl
            border border-[#DCE9EE]
            bg-[#F7FAFC]
            px-5 py-4
            sm:px-7
          "
        >
          <div
            className="
              flex items-start
              justify-center gap-3
            "
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0C9B97"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="mt-0.5 shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 11v5" />
              <path d="M12 8h.01" />
            </svg>

            <p
              className="
                text-[12px] leading-[1.8]
                text-[#526579]
                sm:text-[13px]
              "
            >
              All services are subject to operational
              readiness, applicable transportation
              requirements, and client-specific handling
              instructions.
            </p>
          </div>
        </motion.div>

        {/* ====================================== */}
        {/* REQUEST A QUOTE CTA */}
        {/* ====================================== */}

        <motion.div
          {...reveal(0.15)}
          className="
            mt-8 flex flex-col
            items-start justify-between
            gap-4
            rounded-[18px]
            bg-[#071E34]
            px-6 py-6
            text-white
            sm:flex-row
            sm:items-center
            sm:px-8
          "
        >
          <div>
            <h3
              className="
                text-[19px]
                font-extrabold
              "
            >
              Need a Medical Courier Arrangement?
            </h3>

            <p
              className="
                mt-2 text-[13px]
                leading-[1.75]
                text-[#C6D8E1]
              "
            >
              Tell us about your transportation needs
              and we'll discuss the available options.
            </p>
          </div>

          <Link
            to="/request-quote"
            className="
              inline-flex min-h-[44px]
              shrink-0 items-center
              justify-center gap-2
              rounded-xl
              bg-[#0C9B97]
              px-6
              text-[13px]
              font-extrabold text-white
              transition-colors
              hover:bg-[#087F7C]
            "
          >
            Request a Quote
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default ServicesSection3;
