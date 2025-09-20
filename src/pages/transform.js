import React, { useContext, useEffect, useRef } from "react";
import Skeleton from "../components/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Transform() {
  const { loading } = useContext(LoadingContext);
  
  // Refs for animation elements
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);

  // Set up GSAP animations with ScrollTrigger
  useEffect(() => {
    if (loading) return;
    
    const elements = [
      headerRef.current,
      descriptionRef.current,
      quoteRef.current,
      authorRef.current,
      ...cardsRef.current
    ].filter(el => el !== null);

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loading]);

  const sectionPadding = "py-12 px-4 max-w-[1200px] mx-auto";

  if (loading) {
    return (
      <>
        <section id="transformSection" className={sectionPadding}>
          {/* Skeleton Header */}
          <div className="text-center mb-12">
            <Skeleton height="36px" width="60%" className="mx-auto mb-4" />
            <Skeleton height="20px" width="80%" className="mx-auto" />
          </div>

          {/* Skeleton Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-400 rounded-lg w-auto h-[250px] md:h-[320px] flex flex-col items-center justify-start p-4"
              >
                <Skeleton height="20px" width="70%" className="mb-3" />
                <Skeleton height="16px" width="80%" className="mb-2" />
                <Skeleton height="100px" width="100px" />
              </div>
            ))}
          </div>
        </section>

        <section id="ownerSection" className="bg-gray-200 w-full mt-8 py-16">
          <div className="flex items-center justify-center text-center">
            <div className="max-w-2xl">
              <Skeleton height="32px" width="80%" className="mb-4 rounded-md" />
              <Skeleton height="20px" width="40%" className="rounded-md" />
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Transform Section */}
      <section id="transformSection" className={sectionPadding}>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 ref={headerRef} className="text-fluid-h2 md:font-light font-medium mt-8 mb-8 md:max-w-[700px] mx-auto px-4 pt-1 pb-5">
              Transform Your Retail Operations with{" "}
              <span
                className="text-[#C2185B] px-2 py-3 relative top-1 sm:top-2 md:top-4"
              >
                Zero-Hassle
              </span>{" "}
              <span className="relative top-1 sm:top-2 md:top-4">
                Onboarding
              </span>
            </h2>
            <p ref={descriptionRef} className="text-[#000000B2] text-fluid-body font-light max-w-3xl mx-auto px-4 py-2">
              Get up and running in minutes, not days. Accqrate Retail's
              cloud-native architecture means you can onboard each outlet
              effortlessly—no dedicated POS hardware, no complex installations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "No POS hardware needed",
                desc: "Works instantly on Android, iOS, Windows, and Mac",
                video: "/videos/card1.mp4",
              },
              {
                title: "Zero hassle setup",
                desc: "Cloud-based and ready to use — no installations or IT assistance needed.",
                video: "/videos/card2.mp4",
              },
              {
                title: "Plug-and-Play Printers",
                desc: "No drivers, no manual setup—automatic detection and configuration",
                video: "/videos/card3.mp4",
              },
              {
                title: "Auto-Print & Cut",
                desc: "Receipts print, cut and display for customers instantly.",
                video: "/videos/card4.mp4",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                ref={el => cardsRef.current[idx] = el}
                className="bg-[#A1A1A1] text-white px-4 rounded-lg w-full h-[250px] md:h-[320px] flex flex-col items-center justify-start py-2 cursor-pointer transition-colors duration-300 hover:bg-[#C2185B] group"
              >
                <p className="text-fluid-body font-medium text-left mb-2">
                  {card.title}
                </p>
                <p className="text-fluid-small mt-6 text-left transition-opacity duration-300 group-hover:opacity-0">
                  {card.desc}
                </p>
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="hidden group-hover:block h-36 -mt-12 md:h-56 md:-mt-12 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section
        id="ownerSection"
        className="bg-[#F2F2F2] w-full md:w-[1266px] h-auto md:h-[190px] mx-auto flex items-center justify-center mt-2 rounded-lg px-4 py-8 md:py-0"
      >
        <div className="flex items-center justify-center">
          <div className="max-w-5xl px-2 md:px-6 text-center md:text-left">
            <p ref={quoteRef} className="font-light leading-tight text-lg sm:text-xl md:text-fluid-h3 lg:text-fluid-h2 mb-5">
              "We set up 5 new outlets in under an hour—no IT team needed."
            </p>
            <p ref={authorRef} className="text-gray-500 text-sm sm:text-base md:text-fluid-body flex justify-center md:justify-end">
              — Retail Owner, Jeddah
            </p>
          </div>
        </div>
      </section>
    </>
  );
}