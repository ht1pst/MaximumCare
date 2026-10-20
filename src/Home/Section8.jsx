
import { useState } from "react";
import img from "../assets/faqimg.jpg";

const faqs = [
  {
    question: "What areas does Maximum Care LLC serve?",
    answer:
      "Maximum Care LLC is based in Moorhead, Minnesota, and primarily serves Fargo, Moorhead, Dilworth, West Fargo, and surrounding communities. Additional routes throughout Minnesota and North Dakota may be considered based on distance, scheduling, and availability.",
  },
  {
    question: "What types of medical items do you transport?",
    answer:
      "We provide courier solutions for properly packaged laboratory specimens, prescription and pharmacy-related shipments, medical supplies, suitable medical equipment, and sealed confidential healthcare documents. All services are subject to applicable transportation requirements.",
  },
  {
    question: "Do you offer scheduled or recurring courier services?",
    answer:
      "Yes! Maximum Care LLC offers scheduled and routine courier arrangements for healthcare organizations with regular transportation needs. We work with clients to establish suitable pickup schedules, delivery locations, and recurring routes.",
  },
  {
    question: "How do I request a medical courier quote?",
    answer:
      "You can call us at 708-733-0065, email maximumcaree@gmail.com, or complete our online quote request form. Share your pickup and delivery locations, shipment type, and preferred schedule so we can discuss your needs.",
  },
  {
    question: "Can you handle urgent or STAT medical deliveries?",
    answer:
      "Maximum Care LLC offers time-sensitive and STAT courier solutions for urgent medical transportation needs. Pickup availability, delivery expectations, and specific handling requirements are confirmed before accepting each assignment.",
  },
  {
    question: "How do you handle confidential medical documents?",
    answer:
      "Our approach emphasizes responsible custody, appropriate confidentiality practices, and careful handling of sealed medical documents. Specific security and handoff requirements are discussed before accepting shipments.",
  },
];

function Section8() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#F3F8FB] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1250px] items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full">

          {/* SMALL HEADING */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#008C96]" />

            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#008C96]">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>

          {/* MAIN HEADING */}
          <h2 className="max-w-[480px] text-[34px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#102A43] sm:text-[40px] lg:text-[46px]">
            Got Questions?
            <span className="mt-2 block text-[#008C96]">
              We've Got Answers.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.9] text-[#526579] sm:text-[16px]">
            Have questions about our medical courier services?
            We've answered some of the most common questions
            about Maximum Care LLC, our delivery solutions,
            and the areas we serve.
          </p>

          <p className="mt-4 max-w-[460px] text-[15px] leading-[1.9] text-[#526579]">
            Can't find the answer you're looking for?
            Our team is happy to discuss your organization's
            transportation needs.
          </p>

          {/* CONTACT BUTTON */}
          <a
            href="mailto:maximumcaree@gmail.com"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-xl bg-[#102A43] px-7 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-[#173B5B]"
          >
            Contact Our Team
            <span aria-hidden="true">→</span>
          </a>

          {/* IMAGE */}
          <div className="relative mt-10 h-[250px] w-full overflow-hidden rounded-[20px] bg-[#DCECF3] sm:h-[320px]">
            <img
              src={img}
              alt="Healthcare and medical courier services"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-[20px] font-bold text-white sm:text-[23px]">
                Delivering Care With Precision.
              </h3>

              <p className="mt-2 text-[13px] text-white/85">
                Fast. Secure. Reliable.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - SMOOTH ACCORDION */}
        <div className="w-full space-y-4">

          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden rounded-[16px]
                  border bg-white

                  transition-[border-color,box-shadow]
                  duration-500 ease-in-out

                  ${
                    isActive
                      ? "border-[#0C9B97]/40 shadow-[0_12px_35px_rgba(16,42,67,0.09)]"
                      : "border-[#E3EDF2] shadow-[0_4px_20px_rgba(16,42,67,0.04)] hover:border-[#0C9B97]/30"
                  }
                `}
              >

                {/* QUESTION BUTTON */}
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isActive}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(index)}
                    className="
                      group flex min-h-[76px] w-full
                      items-center justify-between gap-4
                      px-5 py-5 text-left
                      transition-colors duration-300
                      sm:px-6
                    "
                  >
                    <span className="flex items-center gap-4">

                      {/* QUESTION ICON */}
                      <span
                        className={`
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-full

                          transition-all duration-500
                          ease-in-out

                          ${
                            isActive
                              ? "scale-105 bg-[#0C9B97] text-white"
                              : "scale-100 bg-[#E6F6F5] text-[#0C9B97]"
                          }
                        `}
                      >
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
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4" />
                          <path d="M12 17h.01" />
                        </svg>
                      </span>

                      {/* QUESTION TEXT */}
                      <span
                        className={`
                          text-[15px] font-bold
                          leading-[1.5]
                          transition-colors duration-300
                          sm:text-[16px]

                          ${
                            isActive
                              ? "text-[#0C9B97]"
                              : "text-[#102A43] group-hover:text-[#0C9B97]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </span>

                    {/* ANIMATED PLUS / MINUS ICON */}
                    <span
                      className={`
                        relative flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full

                        transition-all duration-500
                        ease-in-out

                        ${
                          isActive
                            ? "rotate-180 bg-[#E6F6F5] text-[#0C9B97]"
                            : "rotate-0 bg-[#F3F7F9] text-[#102A43]"
                        }
                      `}
                    >
                      {/* HORIZONTAL LINE */}
                      <span className="absolute h-[2px] w-3.5 rounded-full bg-current" />

                      {/* VERTICAL LINE */}
                      <span
                        className={`
                          absolute h-3.5 w-[2px]
                          rounded-full bg-current

                          transition-all duration-300
                          ease-in-out

                          ${
                            isActive
                              ? "rotate-90 opacity-0"
                              : "rotate-0 opacity-100"
                          }
                        `}
                      />
                    </span>
                  </button>
                </h3>

                {/* SMOOTH EXPANDING ANSWER */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isActive}
                  className={`
                    grid

                    transition-[grid-template-rows]
                    duration-[550ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    motion-reduce:transition-none

                    ${
                      isActive
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">

                    <div
                      className={`
                        px-5 pb-6
                        sm:pl-[80px] sm:pr-7

                        transition-[opacity,transform]
                        duration-[450ms]
                        ease-out
                        motion-reduce:transition-none

                        ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-2 opacity-0"
                        }
                      `}
                    >
                      {/* DIVIDER */}
                      <div className="mb-4 h-[1px] w-full bg-[#E3EDF2]" />

                      {/* ANSWER */}
                      <p className="text-[14px] leading-[1.9] text-[#526579] sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

          {/* BOTTOM CONTACT STRIP */}
          <div className="mt-7 rounded-[16px] border border-[#CBE7E6] bg-[#E6F6F5] p-6 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0C9B97]">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-17.64-17.64A2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.57 1.79L7.8 9.8a16 16 0 0 0 6.4 6.4l1.29-1.31a2 2 0 0 1 1.79-.57l3 .5A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>

              <div>
                <h3 className="text-[18px] font-extrabold text-[#102A43]">
                  Need More Information?
                </h3>

                <p className="mt-2 text-[14px] leading-7 text-[#526579]">
                  Speak with Maximum Care LLC about your
                  medical courier requirements.
                </p>

                <a
                  href="tel:+17087330065"
                  className="mt-3 inline-block text-[15px] font-bold text-[#0C9B97] transition-colors duration-300 hover:text-[#087F7C]"
                >
                  Call 708-733-0065 →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section8;
