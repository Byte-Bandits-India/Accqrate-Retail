"use client";

import React, { useContext, useState, useEffect, JSX } from "react";
import { Skeleton } from "../components/ui/skeleton"
import { LoadingContext } from "../utils/LoadingContext";
import { AccordionCard } from "../components/ui/accordion";
import FadeUp from "../components/ui/FadeUp";

interface Card {
  title: string;
  desc: string;
  video: string;
}

export default function Transform(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // INTERSECTION OBSERVER
  useEffect(() => {
    const transformEl = document.getElementById("transformSection");
    const ownerEl = document.getElementById("ownerSection");

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) setIsVisible(true);
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "0px",
      threshold: 0.3,
    });

    if (transformEl) observer.observe(transformEl);
    if (ownerEl) observer.observe(ownerEl);

    return () => {
      if (transformEl) observer.unobserve(transformEl);
      if (ownerEl) observer.unobserve(ownerEl);
    };
  }, []);

  const sectionPadding =
    "mt-24px md:mt-[32px] lg:mt-[40px] px-24px md:px-[32px] w-full max-w-[1350px] mx-auto";

  if (loading || !isVisible) {
    return (
      <>
        {/* HEADING & DESCRIPTION */}
        <section className="mt-48px px-24px text-center max-w-[1200px] mx-auto">
          <Skeleton height="36px" width="70%" className="mx-auto mb-6" />
          <Skeleton height="20px" width="90%" className="mx-auto mb-3" />
          <Skeleton height="20px" width="80%" className="mx-auto" />
        </section>

        {/* TRANSFORM SECTION (CARDS) */}
        <section id="transformSection" className={sectionPadding}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] text-[#333333]">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg w-full sm:h-[280px] md:h-[320px] lg:h-[340px] p-4 flex flex-col justify-start"
              >
                <Skeleton height="20px" width="70%" className="mb-4" />
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <Skeleton height="16px" width="80%" />
                  <Skeleton height="120px" width="100%" className="rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OWNER SECTION */}
        <section
          id="ownerSection"
          className="bg-[#F2F2F2] w-full max-w-[1280px] h-auto md:h-[190px] mx-auto flex items-center justify-center mt-24px rounded-lg px-24px py-8 md:py-0"
        >
          <div className="flex items-center justify-center text-center md:text-left max-w-2xl w-full">
            <div className="w-full">
              <Skeleton height="28px" width="90%" className="mb-5 mx-auto md:mx-0" />
              <Skeleton height="16px" width="40%" className="mx-auto md:mx-0" />
            </div>
          </div>
        </section>
      </>
    );
  }

  const cards: Card[] = [
    { title: "No POS hardware needed", desc: "Works instantly on Android, iOS, Windows, and Mac", video: "/videos/card1.mp4" },
    { title: "Zero hassle setup", desc: "Cloud-based and ready to use — no installations or IT assistance needed.", video: "/videos/card2.mp4" },
    { title: "Plug-and-Play Printers", desc: "No drivers, no manual setup—automatic detection and configuration", video: "/videos/card3.mp4" },
    { title: "Auto-Print & Cut", desc: "Receipts print, cut and display for customers instantly.", video: "/videos/card4.mp4" },
  ];

  return (
    <>
      <FadeUp className="md:max-w-5xl mx-auto text-[#333333]">
        <h1
          className="text-center text-[24px] md:text-[32px] lg:text-fluid-h2 tracking-heading leading-tight font-normal mt-48px md:mt-[56px] px-24px md:px-[32px]"
        >
          Transform Your Retail Operations with{" "} <br className="hidden md:block" />
          <span className="text-[#C2185B]"> Zero-Hassle </span> Onboarding
        </h1>
        <p className="text-center md:text-[16px] lg:text-fluid-body px-24px md:px-[32px] font-light tracking-para mt-[24px] md:mt-[32px] w-full max-w-[1280px] mx-auto text-[#000000]"
        >
          Get up and running in minutes, not days. Accqrate Retail’s cloud-native <br className="hidden md:block" /> architecture means you can onboard each outlet effortlessly—no dedicated POS <br className="hidden md:block" /> hardware, no complex installations.
        </p>
      </FadeUp>

      <section id="transformSection" className={sectionPadding}>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
          {cards.map((card, idx) => (
            <AccordionCard
              key={idx}
              title={card.title}
              desc={card.desc}
              video={card.video}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      <FadeUp className="px-6 md:px-[32px] max-w-[1350px] mx-auto">
        <section
          id="ownerSection"
          className="bg-[#F2F2F2] rounded-lg mx-auto px-6 sm:px-6 md:p-10 text-[#333333] h-[102px] sm:h-[110px] md:h-[129px] lg:h-[182px] flex flex-col items-center justify-center mt-6 md:mt-[32px] lg:mt-[40px]"
        >
          <div className="w-full">
            <div className="mx-auto text-left md:max-w-4xl">
              <p className="font-light leading-snug text-fluid-caption tracking-para md:text-fluid-body lg:text-fluid-h3 mb-5"
              >
                “We set up 5 new outlets in under an hour no IT team needed.”
              </p>
              <p className="text-gray-500 text-xs sm:text-base tracking-para md:text-fluid-body flex justify-end"
              >
                — Retail Owner, Jeddah
              </p>
            </div>
          </div>
        </section>
      </FadeUp>
    </>
  );
}
