
"use client";

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
    title: "Careful Medical Handling",
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
    title: "Flexible Courier Solutions",
    description:
      "Scheduled and time-sensitive delivery arrangements serving Fargo–Moorhead and surrounding communities.",
  },
];

export default function WhyChooseUsTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(
    new Set()
  );

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleItems(new Set(benefits.map((_, index) => index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(
            (entry.target as HTMLElement).dataset.index
          );

          setVisibleItems((previous) => {
            if (previous.has(index)) return previous;

            const next = new Set(previous);
            next.add(index);
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    itemRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose-us"
      className="overflow-hidden bg-[#F4F7FB] px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mb-16 text-center">
          <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.3em] text-[#00A9BC]">
            THE MAXIMUM CARE DIFFERENCE
          </p>

          <h2 className="font-heading text-[34px] font-extrabold leading-tight text-[#0D223B] sm:text-[42px] lg:text-[48px]">
            Why Choose{" "}
            <span className="text-[#00A9BC]">
              Maximum Care?
            </span>
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative mx-auto max-w-[900px]">

          {/* CENTER CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 top-0 left-[36px] w-[2px] -translate-x-1/2 bg-[#23B5C6] md:left-1/2"
          />

          {benefits.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(index);

            const position = isLeft
              ? "md:col-start-1 md:justify-self-end md:text-right"
              : "md:col-start-3 md:justify-self-start md:text-left";

            const entrance = isLeft
              ? "-translate-x-8"
              : "translate-x-8";

            const circleColor =
              index % 2 === 0
                ? "bg-[#0D223B]"
                : "bg-[#00A9BC]";

            return (
              <div
                key={item.number}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-index={index}
                className="relative grid min-h-[150px] grid-cols-[72px_minmax(0,1fr)] items-center gap-x-5 pb-10 last:pb-0 md:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)] md:gap-x-6 md:pb-12"
              >
                {/* TIMELINE TEXT */}
                <div
                  className={`
                    col-start-2 row-start-1 max-w-[345px]
                    transition-[opacity,transform]
                    duration-700 ease-out
                    motion-reduce:transform-none
                    motion-reduce:opacity-100
                    ${position}
                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : `${entrance} opacity-0`
                    }
                  `}
                  style={{ transitionDelay: "120ms" }}
                >
                  <h3 className="mb-2 text-[19px] font-extrabold leading-snug text-[#0D223B] sm:text-[21px]">
                    {item.title}
                  </h3>

                  <p className="text-[14px] leading-[1.8] text-[#496178]">
                    {item.description}
                  </p>
                </div>

                {/* NUMBERED CIRCLE */}
                <div
                  className={`
                    relative z-10 col-start-1 row-start-1
                    flex justify-self-center
                    transition-[opacity,transform]
                    duration-700 ease-out
                    motion-reduce:transform-none
                    motion-reduce:opacity-100
                    md:col-start-2
                    ${
                      isVisible
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-0"
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
                      ${circleColor}
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
