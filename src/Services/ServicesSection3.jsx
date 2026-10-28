
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

import laboratoryImg from "../assets/service1.webp";
import pharmacyImg from "../assets/service2.webp";
import suppliesImg from "../assets/service3.webp";
import documentsImg from "../assets/service4.webp";
import scheduledImg from "../assets/service5.webp";
import statImg from "../assets/service6.webp";

// ==========================================
// SIX MEDICAL COURIER SERVICES
// ==========================================

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

// ==========================================
// SHORT CARD SUMMARIES
// ==========================================

const summaries = [
  "Properly packaged specimens between authorized collection sites, labs and healthcare facilities.",
  "Eligible pharmacy shipments with coordinated pickups and authorized delivery arrangements.",
  "Packaged medical supplies and suitable equipment delivered between healthcare locations.",
  "Sealed healthcare documents transported with attention to confidentiality and handoffs.",
  "Recurring pickups and delivery routes planned around agreed schedules and destinations.",
  "Urgent and STAT requests reviewed individually for timing, suitability and availability.",
];

// ==========================================
// SERVICES SECTION
// ==========================================

function ServicesSection3() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-services"
      className="scroll-mt-28 bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADING */}
        <div className="mb-8 max-w-[780px] sm:mb-10">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
            WHAT WE DELIVER
          </p>

          <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.035em] text-[#102A43] sm:text-[40px]">
            Our Medical Courier Services
          </h2>

          <p className="mt-3 text-[14px] leading-[1.75] text-[#526579] sm:text-[15px]">
            Six practical services for healthcare organizations.
            Select "View details" to explore handling
            considerations for each.
          </p>
        </div>

        {/* SIX COMPACT SERVICE CARDS */}
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 22 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion
                  ? 0
                  : (index % 3) * 0.06,
              }}
              className="group overflow-hidden rounded-[19px] border border-[#DEEAF0] bg-white shadow-[0_10px_28px_rgba(7,30,52,0.055)]"
            >
              {/* SERVICE IMAGE */}
              <div className="relative h-[135px] overflow-hidden bg-[#DCE8EF] sm:h-[155px]">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <span className="absolute left-4 top-3 rounded-lg bg-[#071E34]/85 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.1em] text-white">
                  {service.number}
                </span>
              </div>

              {/* SERVICE CONTENT */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-[#0C9B97]">
                  <span aria-hidden="true">
                    {service.icon}
                  </span>

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em]">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-3 min-h-[43px] text-[17px] font-extrabold leading-[1.3] text-[#102A43]">
                  {service.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-[#526579]">
                  {summaries[index]}
                </p>

                {/* EXPANDABLE FULL DETAILS */}
                <details className="group/details mt-4 border-t border-[#E5EDF2] pt-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[12px] font-extrabold text-[#0C9B97] marker:hidden focus-visible:rounded focus-visible:outline-2 focus-visible:outline-[#0C9B97] [&::-webkit-details-marker]:hidden">
                    View full service details

                    <span
                      aria-hidden="true"
                      className="text-[17px] transition-transform group-open/details:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="mt-4 space-y-3 text-[12px] leading-[1.7] text-[#526579]">
                    <p>{service.description}</p>

                    <p>{service.description2}</p>

                    <h4 className="font-extrabold text-[#102A43]">
                      Service considerations
                    </h4>

                    <ul className="list-disc space-y-1.5 pl-5">
                      {service.highlights.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="rounded-xl bg-[#EAF7F5] p-3 text-[#315B5F]">
                      {service.coordination}
                    </p>
                  </div>
                </details>
              </div>
            </motion.article>
          ))}
        </div>

        {/* QUOTE CTA */}
        <div className="mt-9 flex flex-col items-start justify-between gap-4 rounded-[18px] bg-[#071E34] px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <h3 className="text-[19px] font-extrabold">
              Need a medical courier arrangement?
            </h3>

            <p className="mt-1 text-[13px] leading-6 text-[#C6D8E1]">
              Tell us about your route, shipment and timing.
              We'll review your request.
            </p>
          </div>

          <Link
            to="/request-quote"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-[#0C9B97] px-6 text-[13px] font-extrabold text-white transition-colors hover:bg-[#087F7C]"
          >
            Request a Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection3;
