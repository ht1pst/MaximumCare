
import { motion, useReducedMotion } from "motion/react";

// ==========================================
// SPECIALIZED SOLUTIONS
// ==========================================

const solutions = [
  {
    number: "01",
    title: "Custom Scheduling",
    description:
      "Pickup windows, destinations and frequency discussed around your workflow.",
  },
  {
    number: "02",
    title: "Recurring Routes",
    description:
      "Daily, weekly and multi-location routes planned when capacity allows.",
  },
  {
    number: "03",
    title: "Shipment Coordination",
    description:
      "Packaging, authorized recipients and handoff instructions reviewed in advance.",
  },
  {
    number: "04",
    title: "Time-Sensitive Requests",
    description:
      "Urgent pickup and delivery windows evaluated before an assignment is accepted.",
  },
];

function ServicesSection5() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="specialized-solutions"
      className="bg-[#F3F8FB] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
          }}
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
            FLEXIBLE SERVICE PLANNING
          </p>

          <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="text-[26px] font-extrabold leading-tight text-[#102A43] sm:text-[34px]">
              Arrangements Built Around Your Needs
            </h2>

            <p className="max-w-[420px] text-[13px] leading-[1.7] text-[#526579]">
              Every request is reviewed for shipment suitability,
              timing and available resources.
            </p>
          </div>
        </motion.div>

        {/* FOUR COMPACT SOLUTION CARDS */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <motion.div
              key={item.number}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion
                  ? 0
                  : index * 0.05,
              }}
              className="rounded-[16px] border border-[#DCE8ED] bg-white p-4"
            >
              <span className="text-[11px] font-extrabold text-[#0C9B97]">
                {item.number}
              </span>

              <h3 className="mt-2 text-[15px] font-extrabold text-[#102A43]">
                {item.title}
              </h3>

              <p className="mt-1.5 text-[12px] leading-[1.65] text-[#617589]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AVAILABILITY NOTE */}
        <p className="mt-4 text-[12px] leading-[1.7] text-[#617589]">
          Service is subject to operational availability,
          applicable transportation requirements and
          agreement on shipment-specific instructions.
        </p>
      </div>
    </section>
  );
}

export default ServicesSection5;
