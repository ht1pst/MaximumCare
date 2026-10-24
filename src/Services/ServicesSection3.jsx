
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

// ============================================
// YOUR SIX SERVICE IMAGES
// Change the filenames if yours are different.
// ============================================

import laboratoryImg from "../assets/service1.webp";
import pharmacyImg from "../assets/service2.webp";
import suppliesImg from "../assets/service3.webp";
import documentsImg from "../assets/service4.webp";
import scheduledImg from "../assets/service5.webp";
import statImg from "../assets/service6.webp";

const smoothEase = [0.22, 1, 0.36, 1];

// ============================================
// SERVICE CONTENT
// ============================================

const services = [
  {
    number: "01",
    category: "LABORATORY LOGISTICS",
    title: "Laboratory Specimen Transportation",
    image: laboratoryImg,
    alt: "Laboratory specimens prepared for medical transportation",

    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 3h6" />
        <path d="M10 3v7L4.2 19.3A2 2 0 0 0 5.9 22h12.2a2 2 0 0 0 1.7-2.7L14 10V3" />
        <path d="M7 16h10" />
      </svg>
    ),

    description:
      "Laboratory specimens are an important part of patient testing, diagnosis, and ongoing healthcare services. Their transportation requires clear coordination between collection locations, laboratories, and receiving facilities.",

    description2:
      "Maximum Care LLC provides courier transportation for properly packaged laboratory specimens between authorized healthcare locations. We coordinate accepted deliveries according to the agreed pickup arrangements, shipment identification, applicable handling instructions, and destination requirements.",

    highlights: [
      "Transportation between authorized collection sites, laboratories, and healthcare facilities.",
      "Collection and delivery arrangements based on agreed schedules and receiving locations.",
      "Attention to shipment identification, packaging requirements, and applicable handling instructions.",
      "Coordination of required delivery information and documented handoffs when specified.",
    ],

    coordination:
      "Before accepting a specimen transportation request, packaging suitability, pickup location, delivery destination, timing, and any special handling requirements must be confirmed. Transportation is subject to applicable requirements and operational capabilities.",
  },

  {
    number: "02",
    category: "PHARMACY LOGISTICS",
    title: "Prescription & Pharmacy Delivery",
    image: pharmacyImg,
    alt: "Packaged prescription medication prepared by a pharmacy",

    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m10.5 20.5 10-10a6 6 0 0 0-8.5-8.5l-10 10a6 6 0 0 0 8.5 8.5Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),

    description:
      "Pharmacies and healthcare providers often need reliable transportation arrangements for prescriptions and pharmacy-related shipments. These deliveries must be coordinated with attention to packaging, authorized recipients, delivery instructions, and the requirements that apply to the shipment.",

    description2:
      "Maximum Care LLC offers courier services for eligible, properly packaged prescription and pharmacy-related items. We work with clients to establish appropriate pickup and delivery arrangements and to clarify the information needed for responsible transportation.",

    highlights: [
      "Transportation of eligible, properly packaged prescription and pharmacy-related shipments.",
      "Coordinated pickups from authorized pharmacies and healthcare locations.",
      "Delivery arrangements based on recipient information and client instructions.",
      "Attention to applicable legal requirements, necessary authorizations, and shipment restrictions.",
    ],

    coordination:
      "Pharmacy deliveries are accepted only when the shipment, packaging, authorization, destination, and requested handling are compatible with applicable laws and the company's confirmed transportation capabilities.",
  },

  {
    number: "03",
    category: "MEDICAL SUPPLY LOGISTICS",
    title: "Medical Supplies & Equipment Delivery",
    image: suppliesImg,
    alt: "Organized medical supplies and healthcare equipment ready for delivery",

    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M12 11v6" />
        <path d="M9 14h6" />
      </svg>
    ),

    description:
      "Healthcare organizations depend on a steady flow of supplies and suitable equipment to support their daily activities. Coordinated deliveries help move important materials between medical suppliers, clinics, healthcare offices, and other authorized destinations.",

    description2:
      "Maximum Care LLC provides transportation arrangements for eligible packaged medical supplies, healthcare products, and suitable equipment. Each request is reviewed according to shipment size, packaging, pickup and delivery locations, scheduling needs, and any relevant handling instructions.",

    highlights: [
      "Delivery of eligible packaged healthcare products and medical supplies.",
      "Transportation between suppliers, clinics, medical offices, and authorized facilities.",
      "Coordination of pickup arrangements and destination-specific delivery requirements.",
      "Review of equipment dimensions, packaging, loading needs, and handling instructions before acceptance.",
    ],

    coordination:
      "Availability for equipment transportation depends on the item's size, weight, packaging, loading requirements, and the resources needed for safe and appropriate delivery. Specialized equipment transport must be confirmed in advance.",
  },

  {
    number: "04",
    category: "DOCUMENT COURIER",
    title: "Confidential Medical Document Delivery",
    image: documentsImg,
    alt: "Sealed confidential medical documents prepared for secure transportation",

    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="m3 7 9 7 9-7" />
        <path d="M17 3v4" />
      </svg>
    ),

    description:
      "Healthcare operations frequently involve administrative records, medical documentation, and other materials that require careful transportation between authorized locations. Maintaining appropriate confidentiality and clear delivery instructions is particularly important when such documents contain sensitive information.",

    description2:
      "Maximum Care LLC offers courier transportation for sealed medical and healthcare-related documents. Our approach emphasizes agreed pickup instructions, responsible custody during transportation, designated delivery recipients, and appropriate handoff procedures.",

    highlights: [
      "Transportation of sealed healthcare records and administrative documents.",
      "Pickup and delivery coordination between authorized offices and healthcare facilities.",
      "Attention to confidentiality-related requirements and designated recipient instructions.",
      "Support for agreed handoff procedures and delivery documentation when required.",
    ],

    coordination:
      "Clients are responsible for preparing and sealing documents appropriately, identifying authorized recipients, and communicating relevant confidentiality and delivery requirements before pickup. Specific privacy or security obligations must be agreed before service.",
  },

  {
    number: "05",
    category: "PLANNED COURIER SERVICES",
    title: "Scheduled & Routine Courier Services",
    image: scheduledImg,
    alt: "Logistics coordinator reviewing scheduled courier routes and delivery arrangements",

    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),

    description:
      "Many medical offices, laboratories, pharmacies, and healthcare facilities have recurring transportation needs. Rather than organizing every delivery independently, scheduled courier arrangements can help these organizations plan pickups and deliveries around established operational routines.",

    description2:
      "Maximum Care LLC works with healthcare clients to discuss routine courier schedules, recurring pickup locations, designated destinations, and other transportation requirements. Routes and service arrangements are developed according to the agreed frequency, available resources, and client-specific needs.",

    highlights: [
      "Planned pickups and deliveries for recurring healthcare transportation needs.",
      "Discussion of daily, weekly, or other agreed service frequencies.",
      "Coordination of regular pickup locations, destinations, and delivery windows.",
      "Review of route requirements, shipment types, and scheduling adjustments.",
    ],

    coordination:
      "Recurring routes and pickup times are established only after reviewing operational availability, service locations, shipment requirements, and the agreed transportation schedule. Frequency and route coverage are not guaranteed until confirmed.",
  },

  {
    number: "06",
    category: "TIME-SENSITIVE COURIER",
    title: "Urgent & STAT Medical Courier Services",
    image: statImg,
    alt: "Medical courier carrying a sealed shipment for a time-sensitive healthcare delivery",

    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="M12 3v2" />
        <path d="M21 12h-2" />
      </svg>
    ),

    description:
      "Some healthcare deliveries cannot be handled through a routine transportation schedule. When a shipment is time-sensitive, organizations need clear communication about pickup availability, delivery expectations, the destination, and any handling instructions that may affect transportation.",

    description2:
      "Maximum Care LLC reviews urgent and STAT courier requests on an individual basis. Before an assignment is accepted, the requested pickup window, shipment details, destination, available transportation resources, and delivery expectations must be discussed and confirmed.",

    highlights: [
      "Individual review of urgent and time-sensitive healthcare delivery requests.",
      "Confirmation of pickup location, destination, and requested delivery window.",
      "Assessment of shipment requirements and available transportation resources.",
      "Clear communication about whether the requested assignment can be accommodated.",
    ],

    coordination:
      "Urgent and STAT services are subject to real-time operational availability and advance confirmation. Requests are not considered accepted until the company confirms that the timing and shipment requirements can be accommodated. Emergency response services are not implied.",
  },
];

// ============================================
// SECTION COMPONENT
// ============================================

function ServicesSection3() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-services"
      className="relative isolate w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* ===================================== */}
      {/* BACKGROUND DETAILS                    */}
      {/* ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#0C9B97]/5 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-[#071E34]/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">

        {/* ===================================== */}
        {/* SECTION HEADER                       */}
        {/* ===================================== */}

        <div className="mx-auto mb-14 max-w-[850px] text-center sm:mb-18">

          {/* EYEBROW */}
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
              duration: reduceMotion ? 0 : 0.6,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0C9B97] sm:text-[12px]">
              WHAT WE DELIVER
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 28 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.1,
              ease: smoothEase,
            }}
            className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[54px]"
          >
            Medical Courier Services
            <span className="mt-2 block text-[#0C9B97]">
              Built Around Your Needs.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 22 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.2,
              ease: smoothEase,
            }}
            className="mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]"
          >
            From laboratory specimens and pharmacy shipments
            to medical supplies, confidential documents,
            scheduled routes, and urgent requests, Maximum Care
            LLC provides healthcare-focused courier solutions
            built around responsible handling and clear
            transportation coordination.
          </motion.p>

          {/* SMALL SECTION DIVIDER */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scaleX: 0 }
            }
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.3,
            }}
            className="mx-auto mt-8 h-[3px] w-20 origin-center rounded-full bg-[#0C9B97]"
          />
        </div>

        {/* ===================================== */}
        {/* SIX SERVICES GRID                    */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">

          {services.map((service, index) => (

            <motion.article
              key={service.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 45,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion
                  ? 0
                  : (index % 3) * 0.12,
                ease: smoothEase,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -7 }
              }
              className="
                group flex h-full flex-col
                overflow-hidden
                rounded-[24px]
                border border-[#E3EBF0]
                bg-white
                shadow-[0_12px_40px_rgba(7,30,52,0.055)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[#0C9B97]/35
                hover:shadow-[0_25px_65px_rgba(7,30,52,0.12)]
              "
            >

              {/* ================================= */}
              {/* CARD IMAGE                        */}
              {/* ================================= */}

              <div className="relative h-[240px] shrink-0 overflow-hidden bg-[#DDEBEF] sm:h-[260px]">

                <motion.img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { scale: 1.075 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: smoothEase,
                  }}
                />

                {/* IMAGE GRADIENT */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071E34]/65 via-[#071E34]/5 to-transparent" />

                {/* SERVICE NUMBER */}
                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#071E34]/80 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-white backdrop-blur-md">
                  SERVICE {service.number}
                </div>

                {/* BOTTOM IMAGE LABEL */}
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex max-w-full rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[10px] font-bold tracking-[0.08em] text-white backdrop-blur-md sm:text-[11px]">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* ================================= */}
              {/* CARD CONTENT                      */}
              {/* ================================= */}

              <div className="relative flex flex-1 flex-col px-6 pb-7 pt-9 sm:px-7 sm:pb-8 sm:pt-10">

                {/* ICON */}
                <div
                  className="
                    absolute -top-7 right-6
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    border-4 border-white
                    bg-[#0C9B97]
                    text-white
                    shadow-[0_10px_25px_rgba(12,155,151,0.2)]
                    transition-transform duration-300
                    group-hover:-rotate-6
                  "
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="max-w-[320px] text-[23px] font-extrabold leading-[1.3] tracking-[-0.025em] text-[#102A43] sm:text-[25px]">
                  {service.title}
                </h3>

                {/* TITLE ACCENT */}
                <div className="mb-6 mt-5 h-[3px] w-12 rounded-full bg-[#0C9B97]" />

                {/* FIRST PARAGRAPH */}
                <p className="text-[14px] leading-[1.9] text-[#526579]">
                  {service.description}
                </p>

                {/* SECOND PARAGRAPH */}
                <p className="mt-4 text-[14px] leading-[1.9] text-[#526579]">
                  {service.description2}
                </p>

                {/* DIVIDER */}
                <div className="my-7 h-px w-full bg-[#E5EDF2]" />

                {/* SERVICE DETAILS HEADING */}
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E6F7F5] text-[#0C9B97]">
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
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>

                  <h4 className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#102A43]">
                    Service Details
                  </h4>
                </div>

                {/* FOUR DETAILED POINTS */}
                <ul className="space-y-4">
                  {service.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#E6F7F5] text-[#0C9B97]">
                        <svg
                          width="12"
                          height="12"
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
                      </div>

                      <span className="text-[13px] leading-[1.8] text-[#526579]">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* ================================= */}
                {/* COORDINATION INFORMATION          */}
                {/* ================================= */}

                <div className="mt-8 rounded-2xl border border-[#D7EEEC] bg-[#F0FAF9] p-5">

                  <div className="mb-3 flex items-center gap-2 text-[#0A827E]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>

                    <h4 className="text-[12px] font-extrabold uppercase tracking-[0.07em]">
                      Important Coordination Notes
                    </h4>
                  </div>

                  <p className="text-[12px] leading-[1.9] text-[#45666B]">
                    {service.coordination}
                  </p>
                </div>

                {/* ================================= */}
                {/* REQUEST SERVICE BUTTON            */}
                {/* ================================= */}

                <div className="mt-auto pt-8">

                  <Link
                    to="/request-quote"
                    aria-label={`Request a quote for ${service.title}`}
                    className="
                      group/btn flex w-full
                      items-center justify-between
                      gap-3 rounded-xl
                      bg-[#071E34]
                      px-5 py-4
                      text-[13px] font-bold
                      text-white
                      transition-all duration-300
                      hover:bg-[#0C9B97]
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-[#0C9B97]
                    "
                  >
                    <span>Request This Service</span>

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
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ===================================== */}
        {/* BOTTOM SERVICE INFORMATION            */}
        {/* ===================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: smoothEase,
          }}
          className="
            relative mt-16 overflow-hidden
            rounded-[26px]
            bg-[#071E34]
            px-6 py-10
            text-white
            sm:mt-20
            sm:px-10
            lg:px-14
          "
        >

          {/* BACKGROUND GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#0C9B97]/20 blur-[90px]"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-[780px]">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#6DE0D3]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6DE0D3]">
                  SERVICE AVAILABILITY
                </span>
              </div>

              <h3 className="text-[25px] font-extrabold leading-[1.25] sm:text-[30px]">
                Need a Transportation Solution
                for Your Healthcare Facility?
              </h3>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#BDD0DD] sm:text-[15px]">
                Tell us what needs to be transported, where
                it needs to go, and when it is required.
                Our team can review your request and discuss
                suitable service arrangements.
              </p>

              <p className="mt-3 text-[12px] leading-[1.8] text-[#A8C0D0]">
                All services are subject to operational readiness,
                applicable transportation requirements,
                appropriate packaging, client-specific handling
                instructions, and confirmed availability.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/request-quote"
              className="
                inline-flex shrink-0
                items-center justify-center
                gap-3 self-start
                rounded-xl
                bg-[#0C9B97]
                px-7 py-4
                text-[14px] font-extrabold
                text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#0A8581]
                hover:shadow-[0_12px_30px_rgba(12,155,151,0.3)]
                lg:self-center
              "
            >
              Request a Quote

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
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection3;
