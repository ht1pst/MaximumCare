
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const faqs = [
  {
    question: "Which locations does Maximum Care LLC focus on?",
    answer:
      "Maximum Care LLC is based in Moorhead, Minnesota. Our primary regional service focus includes Moorhead and Dilworth in Minnesota, along with Fargo and West Fargo in North Dakota. Each transportation request is reviewed according to its location, shipment requirements, schedule, and availability.",
  },
  {
    question: "Can I request a delivery outside your primary service areas?",
    answer:
      "Yes. Healthcare organizations may inquire about transportation to surrounding communities or longer-distance destinations. Additional routes are considered individually and depend on route feasibility, shipment requirements, operational resources, and confirmed availability.",
  },
  {
    question: "Do you offer scheduled or recurring medical courier routes?",
    answer:
      "We welcome inquiries about scheduled pickups, recurring courier arrangements, and routine healthcare transportation needs. Proposed schedules and routes must be reviewed and agreed upon before service can be confirmed.",
  },
  {
    question: "Can I request an urgent or time-sensitive delivery?",
    answer:
      "You can contact Maximum Care LLC to discuss a time-sensitive transportation request. Acceptance depends on the type of shipment, required handling, pickup and delivery locations, timing, and available resources. Immediate or same-day service is not guaranteed.",
  },
  {
    question: "What types of healthcare shipments can I inquire about?",
    answer:
      "Organizations may inquire about laboratory specimens, pharmacy-related deliveries, medical supplies and equipment, confidential medical documents, and other eligible healthcare materials. Acceptance depends on appropriate packaging, applicable requirements, handling capabilities, and the specific delivery arrangement.",
  },
  {
    question: "How do I find out whether my facility can be served?",
    answer:
      "Use our Request a Quote page or contact us directly. Provide the pickup and delivery locations, a general description of the shipment, any relevant handling instructions, and your preferred date or schedule. We can then review the details and discuss whether an appropriate arrangement is available.",
  },
];

function AreasSection5() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 30 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.12,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="service-area-faq"
      className="relative w-full overflow-hidden bg-[#F3F8FB] py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[430px] w-[430px] rounded-full bg-[#0C9B97]/5 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-[#071E34]/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <motion.div
          {...reveal(0)}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#0C9B97]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0C9B97] sm:text-[12px]">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <span className="h-[2px] w-8 bg-[#0C9B97]" />
          </div>

          <h2 className="text-[35px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#071E34] sm:text-[44px] lg:text-[52px]">
            Your Questions.
            <span className="mt-2 block text-[#0C9B97]">
              Answered With Clarity.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[750px] text-[15px] leading-[1.9] text-[#617589] sm:text-[17px]">
            Have questions about our locations, medical
            courier arrangements, or transportation
            availability? Explore answers to some of the
            most common service area inquiries.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            {...reveal(0.1)}
            className="lg:sticky lg:top-32"
          >
            {/* ICON */}
            <div className="mb-7 flex h-[76px] w-[76px] items-center justify-center rounded-[20px] bg-[#E0F4F0] text-[#0C9B97]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4" />
                <path d="M12 17h.01" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>

            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0C9B97]">
              HERE TO HELP
            </p>

            <h3 className="max-w-[450px] text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#071E34] sm:text-[36px]">
              Understanding Your
              <span className="mt-1 block text-[#0C9B97]">
                Delivery Options.
              </span>
            </h3>

            <p className="mt-5 max-w-[460px] text-[14px] leading-[1.95] text-[#617589] sm:text-[15px]">
              Every healthcare organization has different
              transportation needs. Whether your facility
              is within our primary regional focus or
              located farther away, we encourage you to
              discuss your pickup, destination, schedule,
              and shipment requirements with us.
            </p>

            {/* CONTACT CARD */}
            <div className="relative mt-9 overflow-hidden rounded-[24px] bg-[#071E34] p-6 text-white sm:p-8">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0C9B97]/25 blur-[60px]"
              />

              <div className="relative z-10">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C9B97]/20 text-[#6DE0D3]">
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
                </div>

                <h4 className="text-[21px] font-extrabold text-white">
                  Still Have Questions?
                </h4>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#C2D3DE]">
                  Contact Maximum Care LLC to discuss
                  your facility location and specific
                  transportation requirements.
                </p>

                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-[#0C9B97] px-6 py-3.5 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#087F7B]"
                >
                  Contact Our Team

                  <svg
                    width="18"
                    height="18"
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
              </div>
            </div>
          </motion.div>

          {/* RIGHT — ACCORDION */}
          <div className="space-y-4">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  {...reveal(
                    reduceMotion ? 0 : (index % 3) * 0.07
                  )}
                  className={`overflow-hidden rounded-[20px] border bg-white shadow-[0_8px_25px_rgba(7,30,52,0.035)] transition-[border-color,box-shadow] duration-300 ${
                    isOpen
                      ? "border-[#0C9B97]/45 shadow-[0_15px_40px_rgba(7,30,52,0.09)]"
                      : "border-[#E0EAF0] hover:border-[#0C9B97]/25"
                  }`}
                >
                  {/* ACCORDION BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`area-faq-answer-${index}`}
                    id={`area-faq-question-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#0C9B97] sm:px-7"
                  >
                    <div className="flex items-center gap-4">

                      <span className="text-[12px] font-extrabold text-[#0C9B97]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[15px] font-extrabold leading-[1.5] text-[#071E34] sm:text-[17px]">
                        {faq.question}
                      </span>
                    </div>

                    {/* PLUS / MINUS ICON */}
                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.25,
                      }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isOpen
                          ? "bg-[#0C9B97] text-white"
                          : "bg-[#E5F5F2] text-[#0C9B97]"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.span>
                  </button>

                  {/* ACCORDION ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`area-faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`area-faq-question-${index}`}
                        initial={
                          reduceMotion
                            ? false
                            : { height: 0, opacity: 0 }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={
                          reduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{
                          duration: reduceMotion ? 0 : 0.3,
                          ease,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mx-5 border-t border-[#E6EFF2] px-0 pb-6 pt-5 sm:mx-7">

                          <p className="pl-0 text-[13px] leading-[1.95] text-[#526579] sm:pl-8 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <motion.p
          {...reveal(0.15)}
          className="mx-auto mt-12 max-w-[900px] text-center text-[12px] leading-[1.9] text-[#718398]"
        >
          Service information is provided for general
          guidance. Transportation requests are subject
          to applicable requirements, route feasibility,
          scheduling, and confirmed operational availability.
        </motion.p>

      </div>
    </section>
  );
}

export default AreasSection5;
