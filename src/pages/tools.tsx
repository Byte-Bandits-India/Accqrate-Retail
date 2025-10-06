"use client";

import React, { useContext, useState, useEffect, ReactNode, JSX } from "react";
import { Skeleton } from "../components/ui/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import FadeUp from "../components/ui/FadeUp";

interface Section {
  title?: string;
  text: string;
  video: string;
}

export default function Tools(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toolsElement = document.getElementById("toolsSection");
    const onboardingElement = document.getElementById("onboardingSection");

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    if (toolsElement) observer.observe(toolsElement);
    if (onboardingElement) observer.observe(onboardingElement);

    return () => {
      if (toolsElement) observer.unobserve(toolsElement);
      if (onboardingElement) observer.unobserve(onboardingElement);
    };
  }, []);

  if (loading || !isVisible) {
    return (
      <>
        {/* toolsSection Skeleton */}
        <section
          id="toolsSection"
          className="bg-white py-8 px-4 max-w-[1200px] mx-auto"
        >
          <Skeleton height="36px" width="60%" className="mx-auto mb-4" />
          <Skeleton height="20px" width="80%" className="mx-auto mb-8" />
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-4 mb-8"
            >
              <div className="flex-1">
                <Skeleton height="24px" width="60%" className="mb-2" />
                <Skeleton height="16px" width="80%" />
              </div>
              <div className="flex-1 flex justify-center">
                <Skeleton height="120px" width="100%" />
              </div>
            </div>
          ))}
        </section>

        {/* onboardingSection Skeleton */}
        <section
          id="onboardingSection"
          className="px-5 max-w-6xl mx-auto mt-12"
        >
          <Skeleton
            height="36px"
            width="60%"
            className="mx-auto mb-6 rounded-md"
          />
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-gray-100 border border-pink-700 rounded-xl p-8 mb-8 shadow-sm w-11/12 max-w-3xl mx-auto"
            >
              <Skeleton height="24px" width="40%" className="mb-3 rounded-md" />
              <Skeleton height="180px" width="100%" className="mb-3 rounded-lg" />
              <Skeleton height="20px" width="80%" className="rounded-md" />
            </div>
          ))}
        </section>
      </>
    );
  }

  const toolsSections: Section[] = [
    {
      title: "User-Level Access Controls",
      text: "Assign roles, limit functions and monitor activity logs.",
      video: "/videos/manageroles.mp4",
    },
    {
      title: "Day-End Closure & Auditor Reports",
      text: "Generate comprehensive financial summaries midnight, festival days, or anytime.",
      video: "/videos/dayclosure.mp4",
    },
    {
      title: "Sales Returns, Credit Notes & Advance Bookings",
      text: "Handle exchanges and pre-orders directly at the counter.",
      video: "/videos/productsearch.mp4",
    },
  ];

  const onboardingItems: Section[] = [
    {
      text: "Bulk uploads: Import your entire product catalog via Excel, fast",
      video: "/videos/Master Upload.mp4",
    },
    {
      text: "Organize categories: Structure your catalog for easy browsing and search.",
      video: "/videos/Add New Category.mp4",
    },
  ];

  return (
    <>
      <section
        id="toolsSection"
        className="bg-white mt-48px md:mt-[64px] px-24px md:px-[32px] max-w-[1200px] mx-auto text-[#333333]"
      >
        <FadeUp>
          <h2 className="text-center text-[24px] md:text-[32px] lg:text-fluid-h2 font-medium tracking-heading mb-[24px]"
          >
            Robust Control & <span className="text-[#C2185B] font-medium">Compliance <br className="md:hidden" /> Tools</span>
          </h2>
          <p className="text-center text-[#000000B2] tracking-para text-[14px] md:text-fluid-caption max-w-lg mb-[24px] md:mb-[48px] leading-tight mx-auto"
          >
            Maintain tight governance over your retail footprint,<br className="md:hidden" /> from <br className="hidden md:block" /> terminal permissions to financial integrity
          </p>
        </FadeUp>

        <div className="space-y-[24px] md:space-y-[32px] lg:space-y-[42px]">
          {toolsSections.map((section, idx) => (
            <FadeUp
              key={idx}
              className="flex flex-col lg:flex-row lg:items-start gap-[24px] tracking--5"
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-[#C2185B] text-[20px] md:text-[24px] font-semibold tracking-heading lg:text-fluid-h3 ">
                  {section.title}:
                </h3>
                <p className="text-[14px] md:text-[18px] lg:text-fluid-body leading-tight tracking-para">{section.text}</p>
              </div>
              <div className="flex-1 flex justify-center">
                <video
                  src={section.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section
        id="onboardingSection"
        className="px-6 md:px-[32px] max-w-6xl mx-auto md:mt-[56px] mt-48px text-[#333333]"
      >
        <FadeUp
          className="text-center font-medium md:text-[32px] text-fluid-h2 mb-[24px] md:mb-[62px] tracking-heading leading-tight"
        >
          Fast Data Onboarding & Customization
        </FadeUp>

        {onboardingItems.map((item, idx) => (
          <FadeUp
            key={idx}
            className="bg-gray-100 border border-pink-700 rounded-xl p-6 mb-[24px] md:mb-[32px] lg:mb-[40px] shadow-sm mx-auto"
          >
            <div className="video-wrapper overflow-hidden rounded-xl">
              <video
                src={item.video}
                muted
                autoPlay
                loop
                playsInline
                controls={false}
                preload="auto"
                className="w-full h-auto object-contain block"
              />
            </div>
            <p className="text-center font-semibold text-fluid-caption mt-12px tracking--2">
              {item.text}
            </p>
          </FadeUp>
        ))}
      </section>
    </>
  );
}
