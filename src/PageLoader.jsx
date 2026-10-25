
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { useLocation } from "react-router-dom";

import logo from "./assets/MaximumCarelogooriginal.webp";

const ease = [0.22, 1, 0.36, 1];

// Change these values if you want a longer or shorter loader.
const FIRST_LOAD_MS = 4000;
const PAGE_CHANGE_MS = 2500;

function PageLoader() {
  const { pathname } = useLocation();

  const reduceMotion = useReducedMotion();

  const firstVisit = useRef(true);

  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(FIRST_LOAD_MS);

  // ==========================================
  // SHOW LOADER ON FIRST VISIT & ROUTE CHANGE
  // ==========================================

  useLayoutEffect(() => {
    const loadingTime = reduceMotion
      ? 0
      : firstVisit.current
      ? FIRST_LOAD_MS
      : PAGE_CHANGE_MS;

    setDuration(loadingTime);
    setLoading(true);

    firstVisit.current = false;

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname, reduceMotion]);

  // ==========================================
  // DISABLE SCROLLING WHILE LOADING
  // ==========================================

  useEffect(() => {
    if (!loading) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="maximum-care-loader"
          role="status"
          aria-label="Loading Maximum Care website"
          aria-live="polite"
          initial={false}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.35,
            ease,
          }}
          className="
  fixed inset-0 z-[9999]
  flex h-screen h-[100dvh]
  w-full items-center justify-center
  overflow-hidden bg-[#071E34] px-5
"
        >
          {/* ====================================== */}
          {/* BACKGROUND EFFECTS                     */}
          {/* ====================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#0C9B97]/15 blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-44 -right-40 h-[550px] w-[550px] rounded-full bg-[#6DE0D3]/10 blur-[120px]"
          />

          {/* DECORATIVE RINGS */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
          />

          {/* ====================================== */}
          {/* MAIN LOADING CONTENT                   */}
          {/* ====================================== */}

          <div className="relative z-10 flex w-full max-w-[440px] flex-col items-center text-center">

            {/* ====================================== */}
            {/* COMPANY LOGO                         */}
            {/* ====================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 15,
                      scale: 0.9,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease,
              }}
              className="mb-8 bg-transparent"
            >
              <div className="flex min-h-[105px] items-center justify-center rounded-[24px] bg-transparent  shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">

                <img
                  src={logo}
                  alt="Maximum Care LLC"
                  className="max-h-[85px] w-auto max-w-[210px] object-contain rounded-xl"
                />
              </div>
            </motion.div>

            {/* ====================================== */}
            {/* ANIMATED COURIER GRAPHIC                */}
            {/* ====================================== */}

            <div className="relative mb-9 flex h-[125px] w-[285px] max-w-full items-center justify-center">

              {/* MOVING BACKGROUND LINE */}
              <div
                aria-hidden="true"
                className="absolute bottom-[28px] left-1/2 h-[2px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6DE0D3]/50 to-transparent"
              />

              {/* LEFT LOCATION */}
              <motion.div
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.4, 1, 0.4],
                        scale: [0.9, 1.1, 0.9],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[19px] left-3 h-5 w-5 rounded-full border-[4px] border-[#6DE0D3] bg-[#071E34]"
              />

              {/* RIGHT LOCATION */}
              <motion.div
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [1, 0.4, 1],
                        scale: [1.1, 0.9, 1.1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[19px] right-3 h-5 w-5 rounded-full border-[4px] border-[#6DE0D3] bg-[#071E34]"
              />

              {/* ANIMATED TRUCK */}
              <motion.div
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [-18, 18, -18],
                        y: [0, -3, 0],
                      }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-[90px] w-[150px] items-center justify-center"
              >
                {/* COURIER TRUCK SVG */}
                <svg
                  viewBox="0 0 180 100"
                  width="180"
                  height="100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* TRUCK SHADOW */}
                  <ellipse
                    cx="89"
                    cy="92"
                    rx="68"
                    ry="5"
                    fill="#000000"
                    opacity="0.17"
                  />

                  {/* CARGO BODY */}
                  <rect
                    x="13"
                    y="25"
                    width="105"
                    height="51"
                    rx="8"
                    fill="#0C9B97"
                  />

                  {/* CARGO HIGHLIGHT */}
                  <path
                    d="M20 32H110"
                    stroke="#6DE0D3"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* MEDICAL CROSS */}
                  <rect
                    x="61"
                    y="35"
                    width="12"
                    height="30"
                    rx="2"
                    fill="white"
                  />

                  <rect
                    x="52"
                    y="44"
                    width="30"
                    height="12"
                    rx="2"
                    fill="white"
                  />

                  {/* CABIN */}
                  <path
                    d="M118 39H145C149 39 152 42 155 47L167 64V76H118V39Z"
                    fill="#6DE0D3"
                  />

                  {/* FRONT WINDOW */}
                  <path
                    d="M145 45L158 62H125V45H145Z"
                    fill="#071E34"
                  />

                  {/* FRONT LIGHT */}
                  <rect
                    x="160"
                    y="67"
                    width="8"
                    height="5"
                    rx="2"
                    fill="white"
                  />

                  {/* LOWER FRAME */}
                  <path
                    d="M17 76H167"
                    stroke="#D8F5F0"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  {/* WHEELS */}
                  <circle
                    cx="46"
                    cy="80"
                    r="14"
                    fill="#061626"
                  />
                  <circle
                    cx="46"
                    cy="80"
                    r="6"
                    fill="#A4C7D0"
                  />

                  <circle
                    cx="138"
                    cy="80"
                    r="14"
                    fill="#061626"
                  />
                  <circle
                    cx="138"
                    cy="80"
                    r="6"
                    fill="#A4C7D0"
                  />
                </svg>
              </motion.div>
            </div>

            {/* ====================================== */}
            {/* COMPANY NAME                         */}
            {/* ====================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 12 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : 0.15,
              }}

              className="bg-transparent"

            >
              <h2 className="text-[27px] font-extrabold tracking-[0.12em] text-white sm:text-[32px]">
                MAXIMUM CARE
              </h2>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#6DE0D3] sm:text-[11px]">
                MEDICAL COURIER SERVICES
              </p>
            </motion.div>

            {/* ====================================== */}
            {/* PROGRESS BAR                          */}
            {/* ====================================== */}

            <div className="mt-9 w-full max-w-[270px]">

              <div className="h-[5px] w-full overflow-hidden rounded-full bg-white/15">

                <motion.div
                  key={pathname}
                  initial={
                    reduceMotion
                      ? false
                      : { scaleX: 0 }
                  }
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: reduceMotion
                      ? 0
                      : duration / 1000,
                    ease: "easeInOut",
                  }}
                  className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-[#C7FFF4]"
                />
              </div>

              {/* LOADING TEXT */}
              <motion.p
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.5, 1, 0.5],
                      }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-5 text-[12px] font-medium tracking-[0.04em] text-[#B8CDDA]"
              >
                Preparing your experience...
              </motion.p>
            </div>

            {/* SMALL BOTTOM MESSAGE */}
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#789BAC]">
              Care • Responsibility • Reliability
            </p>
          </div>

          {/* BOTTOM ACCENT LINE */}
          <div className="absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r from-[#0C9B97] via-[#6DE0D3] to-[#0C9B97]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
