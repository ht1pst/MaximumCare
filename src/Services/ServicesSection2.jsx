import { motion, useReducedMotion } from "motion/react";
import overviewImg from "../assets/servicessection2img.webp";

const benefits = [
  {
    title: "Healthcare-Focused",
    description:
      "Courier arrangements designed around healthcare workflows.",
  },
  {
    title: "Responsible Handling",
    description:
      "Attention to agreed packaging, handling and handoff instructions.",
  },
  {
    title: "Coordinated Scheduling",
    description:
      "Planned routes and urgent requests reviewed for availability.",
  },
];

function ServicesSection2() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services-overview"
      className="bg-[#F3F8FB]  absolute py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-5 sm:px-8 md:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12">
        {/* IMAGE */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -24 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="overflow-hidden rounded-[22px] shadow-[0_16px_40px_rgba(16,42,67,0.1)]"
        >
          <img
            src={overviewImg}
            alt="Healthcare courier logistics and delivery coordination"
            loading="lazy"
            className="h-[210px] w-full object-cover sm:h-[275px]"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
          }}
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97]">
            OUR APPROACH
          </p>

          <h2 className="mt-3 max-w-[660px] text-[27px] font-extrabold leading-tight tracking-[-0.035em] text-[#102A43] sm:text-[36px]">
            More Than Moving Packages.
          </h2>

          <p className="mt-3 max-w-[720px] text-[14px] leading-[1.75] text-[#526579] sm:text-[15px]">
            We work with healthcare organizations to plan
            suitable pickups, deliveries and shipment handoffs
            around their operational needs.
          </p>

          {/* THREE KEY BENEFITS */}
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#DCE9ED] bg-white p-3.5"
              >
                <div className="mb-2 h-1 w-7 rounded bg-[#0C9B97]" />

                <h3 className="text-[13px] font-extrabold text-[#102A43]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[12px] leading-[1.6] text-[#617589]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection2;