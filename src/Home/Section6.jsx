
const steps = [
  {
    number: "1",
    title: "Request Service",
    description:
      "Contact us to request a quote or schedule a pickup.",
    icon: "clipboard",
  },
  {
    number: "2",
    title: "Confirm Details",
    description:
      "We'll confirm your pickup details, delivery location, and any special instructions.",
    icon: "document",
  },
  {
    number: "3",
    title: "Pickup & Transportation",
    description:
      "Our team will pick up your items and transport them safely to their destination.",
    icon: "truck",
  },
  {
    number: "4",
    title: "Delivery Confirmation",
    description:
      "We complete the delivery and confirm it has been successfully delivered.",
    icon: "check",
  },
];

// SVG ICONS
function StepIcon({ type }) {
  const icons = {
    clipboard: (
      <>
        <rect x="12" y="10" width="24" height="34" rx="2" />
        <path d="M20 10V7h8v3" />
        <rect x="18" y="5" width="12" height="8" rx="2" />
        <path d="m18 23 2 2 3-3" />
        <path d="M26 24h6" />
        <path d="m18 32 2 2 3-3" />
        <path d="M26 33h6" />
      </>
    ),

    document: (
      <>
        <path d="M14 5h18l8 8v30H14a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" />
        <path d="M32 5v9h8" />
        <path d="M19 22h13" />
        <path d="M19 28h13" />
        <path d="M19 34h9" />
      </>
    ),

    truck: (
      <>
        <path d="M5 13h25v23H5z" />
        <path d="M30 21h9l7 8v7H30" />
        <path d="M39 21v8h7" />
        <circle cx="15" cy="38" r="4" />
        <circle cx="38" cy="38" r="4" />
        <path d="M19 38h15" />
      </>
    ),

    check: (
      <>
        <circle cx="25" cy="25" r="20" />
        <path d="m15 25 7 7 14-15" />
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      stroke="#155487"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function Section6() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#FFFFFF] px-5 py-[75px] md:px-10 md:py-[90px]"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* SECTION HEADING */}
        <div className="mb-[55px] text-center">
          <p
            className="mb-3 text-[12px] font-bold uppercase tracking-[0.3em] text-[#008F9E]"
          >
            HOW IT WORKS
          </p>

          <h2
            className="mb-3 font-serif text-[32px] font-bold leading-tight text-[#071E3E] md:text-[44px]"
          >
            Simple. Responsive. Dependable.
          </h2>

          <p
            className="mx-auto max-w-[700px] text-[15px] leading-[1.7] text-[#64748B] md:text-[16px]"
          >
            Requesting a medical courier service is quick
            and easy. Here's how it works:
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* DESKTOP DOTTED LINE */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[24px] hidden border-t-[3px] border-dotted border-[#AEC8D8] md:block"
          />

          {/* MOBILE DOTTED LINE */}
          <div
            className="pointer-events-none absolute bottom-[65px] left-[23px] top-[24px] border-l-[3px] border-dotted border-[#AEC8D8] md:hidden"
          />

          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-y-0">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  relative flex flex-row items-start gap-5
                  md:flex-col md:items-center md:gap-0
                  md:px-6

                  ${
                    index !== steps.length - 1
                      ? "md:after:absolute md:after:right-0 md:after:top-[88px] md:after:h-[130px] md:after:w-[2px] md:after:bg-[#E4EDF4]"
                      : ""
                  }
                `}
              >

                {/* NUMBER CIRCLE */}
                <div
                  className="
                    relative z-10 flex h-[48px] w-[48px]
                    shrink-0 items-center justify-center
                    rounded-full bg-[#079BA8]
                    text-[20px] font-extrabold text-white
                    shadow-[0_3px_8px_rgba(0,153,169,0.15)]
                  "
                >
                  {step.number}
                </div>

                {/* ICON + CONTENT */}
                <div
                  className="
                    flex flex-1 flex-col items-start
                    md:mt-[22px] md:items-center
                    md:text-center
                  "
                >

                  {/* SVG ICON */}
                  <div className="mb-3 flex h-[52px] items-center justify-center">
                    <StepIcon type={step.icon} />
                  </div>

                  {/* STEP TITLE */}
                  <h3
                    className="
                      mb-3 text-[17px] font-extrabold
                      leading-snug text-[#071E3E]
                      md:text-[18px]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* STEP DESCRIPTION */}
                  <p
                    className="
                      max-w-[245px] text-[14px]
                      leading-[1.7] text-[#526579]
                    "
                  >
                    {step.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
