
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Reliable Service",
    description:
      "Dependable pickup and delivery arrangements designed to support your healthcare operations.",
  },
  {
    number: "02",
    title: "Careful Handling",
    description:
      "We prioritize responsible custody, appropriate handling, and attention to every medical shipment.",
  },
  {
    number: "03",
    title: "Professional Communication",
    description:
      "Clear, responsive communication throughout the delivery process to keep your organization informed.",
  },
  {
    number: "04",
    title: "Local Service",
    description:
      "Proudly serving Fargo, Moorhead, Dilworth, and surrounding communities.",
  },
  {
    number: "05",
    title: "Flexible Courier Solutions",
    description:
      "Scheduled and time-sensitive delivery arrangements tailored to your organization's needs.",
  },
];

function Section5() {
  const [visible, setVisible] = useState([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(benefits.map((_, index) => index));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            // Show when entering the viewport
            setVisible((prev) =>
              prev.includes(index)
                ? prev
                : [...prev, index]
            );
          } else {
            // Hide when leaving the viewport
            setVisible((prev) =>
              prev.includes(index)
                ? prev.filter((item) => item !== index)
                : prev
            );
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose-us"
      className="overflow-hidden bg-[#F4F7FB] px-5 py-10 h-auto pb-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADING */}
<div className="w-full max-w-[1200px] mx-auto px-5 pt-8  ">

  {/* SMALL SECTION HEADING */}
  <p className="text-[#0C9B97] font-bold text-[12px] md:text-[14px] tracking-[0.25em] uppercase text-center mb-4">
    WHY CHOOSE US
  </p>

  {/* MAIN HEADING */}
  <h2 className="text-[#102A43] text-[30px] sm:text-[36px] md:text-[45px] font-extrabold leading-[1.15] tracking-[-0.03em] text-center max-w-[950px] mx-auto mb-5">
   Why Healthcare Organizations Choose Maximum Care
  </h2>

  {/* DESCRIPTION */}
  <p className="text-[#526579] text-[15px] md:text-[16px] leading-[1.8] text-center max-w-[720px] mx-auto">
  We go beyond delivery we're a trusted partner in your healthcare mission.
  </p>

</div>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-[900px] mt-10">

          {/* VERTICAL CENTER LINE */}
          <div
            aria-hidden="true"
            className="absolute bottom-9 top-9 left-[36px] w-[2px] -translate-x-1/2 bg-[#23B5C6] md:left-1/2"
          />

          {benefits.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visible.includes(index);

            return (
              <div
                key={item.number}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                data-index={index}
                className="relative grid min-h-[155px] grid-cols-[72px_minmax(0,1fr)] items-center gap-x-5 pb-10 last:pb-0 md:grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)] md:gap-x-6 md:pb-12"
              >

                {/* ANIMATED TEXT */}
                <div
                  className={`
                    col-start-2 row-start-1 max-w-[350px]
                    transition-all duration-700 ease-out
                    motion-reduce:transform-none
                    motion-reduce:opacity-100

                    ${
                      isLeft
                        ? "md:col-start-1 md:justify-self-end md:text-right"
                        : "md:col-start-3 md:justify-self-start md:text-left"
                    }

                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : isLeft
                        ? "-translate-x-10 opacity-0"
                        : "translate-x-10 opacity-0"
                    }
                  `}
                >
                  <h3 className="mb-2 text-[20px] font-extrabold text-[#0D223B]">
                    {item.title}
                  </h3>

                  <p className="text-[14px] leading-[1.8] text-[#496178]">
                    {item.description}
                  </p>
                </div>

                {/* ANIMATED NUMBER CIRCLE */}
                <div
                  className={`
                    relative z-10 col-start-1 row-start-1
                    flex justify-self-center
                    transition-all duration-700 ease-out
                    motion-reduce:transform-none
                    motion-reduce:opacity-100
                    md:col-start-2

                    ${
                      isVisible
                        ? "scale-100 opacity-100"
                        : "scale-50 opacity-0"
                    }
                  `}
                >
                  <div
                    className={`
                      flex h-[72px] w-[72px]
                      items-center justify-center
                      rounded-full border-[5px] border-white
                      text-[20px] font-extrabold text-white
                      shadow-[0_10px_24px_rgba(13,34,59,0.13)]

                      ${
                        isLeft
                          ? "bg-[#0D223B]"
                          : "bg-[#00A9BC]"
                      }
                    `}
                  >
                    {item.number}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Section5;
