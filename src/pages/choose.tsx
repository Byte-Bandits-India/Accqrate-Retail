"use client";

import { useContext, useState, useEffect } from "react";
import { Skeleton } from "../components/ui/skeleton";
import { LoadingContext } from "../utils/LoadingContext";
import Image from "next/image";
// import scrollreveal for text animations
import React from "react";
import FadeUp from "../components/ui/FadeUp";

const Choose: React.FC = () => {
  const { loading } = useContext(LoadingContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const chooseElement = document.getElementById("chooseSection");
    const readyElement = document.getElementById("readySection");

    if (!chooseElement || !readyElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { rootMargin: "0px", threshold: 0.3 }
    );

    observer.observe(chooseElement);
    observer.observe(readyElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const buttons: string[] = ["REQUEST A DEMO", "CONTACT SALES", "LEARN MORE"];

  if (loading || !isVisible) {
    return (
      <>
        <section
          id="chooseSection"
          className="bg-[#f2f2f2] text-center font-sans min-h-full m-0 py-8"
        >
          <Skeleton height="36px" width="60%" className="mb-6 mx-auto" />
          <Skeleton height="300px" width="700px" className="mb-6 mx-auto" />
          <Skeleton height="80px" width="80px" className="mb-6 mx-auto" />
          <Skeleton height="20px" width="80%" className="mb-3 mx-auto" />
          <Skeleton height="20px" width="80%" className="mb-3 mx-auto" />
          <Skeleton height="20px" width="80%" className="mb-3 mx-auto" />
        </section>

        <section
          id="readySection"
          className="bg-gray-200 mt-48px px-24px text-center min-h-full"
        >
          <Skeleton
            height="36px"
            width="60%"
            className="mb-8 mx-auto rounded-md"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((_, idx) => (
              <Skeleton
                key={idx}
                height="44px"
                width="180px"
                className="rounded-full"
              />
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section
        id="chooseSection"
        className="bg-[#F2F2F2] text-center font-sans min-h-full m-0 mt-48px md:mt-[64px] md:px-[32px] px-24px text-[#333333]"
      >
        <FadeUp>
          <h2
            className="text-fluid-h2 font-medium pb-6 md:pb-0 pt-6 lg:pt-[40px] tracking-heading"
          >
            Why Choose <span className="text-[#C2185B]">Accqrate Retail?</span>
          </h2>
        </FadeUp>

        <div
          className="flex flex-col gap-12 items-center md:flex-row md:justify-center md:items-center"
        >
          <FadeUp className="relative inline-block max-w-[600px] md:max-w-[400px]">
            <Image
              src="/images/choose.svg"
              alt="Why Choose Accqrate Retail"
              width={700}
              height={300}
              className="w-full h-auto md:h-[450px] block"
              loading="lazy"
            />
            <Image
              src="/gif/Shopping.gif"
              alt="Animated Character"
              width={80}
              height={80}
              className="absolute right-0 bottom-0 md:bottom-16 md:right-[-10px] w-[100px] h-auto pointer-events-none"
              loading="lazy"
            />
          </FadeUp>

          <FadeUp className="max-w-[600px] text-left md:max-w-[500px]">
            <p className="font-light text-fluid-h3 leading-tight">
              <span className="font-medium tracking--2">Compliance by design:</span>
            </p>
            <p className="text-fluid-small tracking-para mt-12px">
              Stay ready for every regulation no last-minute changes.
            </p>
            <ol className="md:pr-20 font-light tracking-para mb-8 space-y-4 text-fluid-small mt-12px">
              <li>1. Device & vendor freedom: Use any hardware, any printer, no lock-in.</li>
              <li>2. Future-proof scaling: Grow from single store POS to a full ERP suite, no re-implementation.</li>
              <li>3. Total control: See your data, operations, and compliance in real time.</li>
            </ol>
          </FadeUp>
        </div>
      </section>

      <section
        id="readySection"
        className="mt-48px px-24px text-center min-h-full md:mt-[64px] md:px-[32px] text-[#333333]"

      >
        <FadeUp>
          <h2 className="font-medium text-fluid-h2 tracking-heading leading-tight">
            Ready to accelerate your retail business?
          </h2>
        </FadeUp>
        <FadeUp
          className="flex flex-col md:flex-row md:max-w-[700px] mx-auto justify-center gap-[20px] mt-24px md:mt-[32px] lg:mt-[40px]"

        >
          {buttons.map((label, idx) => (
            <button
              key={idx}
              className="bg-[#C2185C] text-fluid-caption hover:bg-pink-800 text-white font-light rounded-[5px] md:rounded-[53px] px-6 py-4 w-[260px] md:w-[300px] mx-auto text-center transition-colors"
            >
              {label}
            </button>
          ))}
        </FadeUp>
      </section>
    </>
  );
};

export default Choose;
