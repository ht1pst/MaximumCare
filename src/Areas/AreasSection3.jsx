
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

// ==========================================
// SERVICE AREAS FAQ
// ==========================================

const faqs = [
  {
    question: "What areas does Maximum Care serve?",
    answer:
      "We serve Moorhead, Fargo, West Fargo, Dilworth, and surrounding communities in Minnesota and North Dakota.",
  },
  {
    question: "Can I request delivery outside these areas?",
    answer:
      "Yes. Additional routes may be arranged depending on location, scheduling, and availability.",
  },
  {
    question: "Do you offer scheduled and urgent deliveries?",
    answer:
      "Yes. We review both scheduled and time-sensitive requests based on the delivery requirements and available resources.",
  },
];

// ==========================================
// SERVICE AREAS SECTION 3
// ==========================================

function AreasSection3() {
  const reduceMotion = useReducedMotion();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="additional-routes"
      className="
        bg-[#F3F8FB]
        px-5 py-12
        sm:px-8 sm:py-14
        lg:py-16
      "
    >
      <div className="mx-auto max-w-[900px]">

        {/* ====================================== */}
        {/* COMPACT FAQ */}
        {/* ====================================== */}

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
        >
          {/* FAQ HEADING */}
          <div className="mb-6 text-center">
            <p
              className="
                text-[11px] font-extrabold
                uppercase tracking-[0.2em]
                text-[#0C9B97]
              "
            >
              QUICK ANSWERS
            </p>

            <h2
              className="
                mt-2 text-[26px]
                font-extrabold leading-tight
                text-[#102A43]
                sm:text-[32px]
              "
            >
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ ACCORDION */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={index}
                  className={`
                    overflow-hidden rounded-xl
                    border bg-white
                    transition-all duration-300
                    ${
                      isOpen
                        ? "border-[#0C9B97]/40 shadow-[0_8px_24px_rgba(16,42,67,0.06)]"
                        : "border-[#E3EDF2]"
                    }
                  `}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`area-faq-${index}`}
                    className="
                      flex w-full items-center
                      justify-between gap-4
                      px-5 py-4 text-left
                      focus-visible:outline-2
                      focus-visible:outline-offset-[-2px]
                      focus-visible:outline-[#0C9B97]
                    "
                  >
                    <span
                      className="
                        text-[13px] font-bold
                        leading-[1.5] text-[#102A43]
                        sm:text-[14px]
                      "
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS ICON */}
                    <span
                      className={`
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-lg text-[19px]
                        font-medium
                        transition-all duration-300
                        ${
                          isOpen
                            ? "bg-[#0C9B97] text-white"
                            : "bg-[#EAF7F5] text-[#0C9B97]"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    id={`area-faq-${index}`}
                    className={`
                      grid transition-[grid-template-rows,opacity]
                      duration-300 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          border-t border-[#EAF0F3]
                          px-5 pb-4 pt-3
                          text-[13px] leading-[1.75]
                          text-[#526579]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ====================================== */}
        {/* SHORT FINAL CTA */}
        {/* ====================================== */}

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
          className="
            mt-10 text-center
            sm:mt-12
          "
        >
          <p
            className="
              text-[11px] font-extrabold
              uppercase tracking-[0.2em]
              text-[#0C9B97]
            "
          >
            ADDITIONAL ROUTES
          </p>

          <h2
            className="
              mt-3 text-[25px]
              font-extrabold leading-tight
              text-[#102A43]
              sm:text-[32px]
            "
          >
            Need a Delivery Outside These Areas?
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[570px]
              text-[14px] leading-[1.75]
              text-[#526579]
            "
          >
            Share your pickup and delivery locations,
            and we'll discuss available options.
          </p>

          <Link
            to="/request-quote"
            className="
              mt-6 inline-flex min-h-[46px]
              items-center justify-center
              rounded-xl bg-[#0C9B97]
              px-7 text-[13px]
              font-extrabold text-white
              shadow-[0_8px_24px_rgba(12,155,151,0.15)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#087F7C]
            "
          >
            Request a Quote
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AreasSection3;
