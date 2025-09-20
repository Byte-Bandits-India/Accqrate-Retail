"use client";

import { useState, useContext, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function AutomationSection() {
  const dropdowns = [
    {
      label: "AI Bank Reconciliation",
      content:
        "Automates the reconciliation of bank statements with transactions, saving hours of manual work.",
    },
    {
      label: "Auto-Invoice Conversion",
      content:
        "Automatically converts invoices into structured formats ready for compliance and accounting.",
    },
    {
      label: "Expense Classification",
      content:
        "Uses AI to classify and categorize expenses, ensuring accurate reporting and compliance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const { loading } = useContext(LoadingContext);
  const automationRef = useRef(null);
  const isVisible = useInView(automationRef, { threshold: 0 });

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (loading || !isVisible) {
    return (
      <div ref={automationRef} className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        {/* AI-Driven Automation Skeleton */}
        <section className="font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:items-center md:px-6 lg:px-10 md:mx-10 lg:mx-20 my-6">
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <Skeleton height="42px" width="60%" className="mb-4" />
            <Skeleton height="20px" width="90%" className="mb-6" />

            <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
              {[1, 2, 3].map((item) => (
                <div key={item} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                    <Skeleton height="16px" width="80%" />
                    <Skeleton height="16px" width="16px" className="rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-center">
            <Skeleton height="420px" className="rounded-lg w-full" />
          </div>
        </section>

        {/* Bottom Section Skeleton */}
        <div className="my-6 mx-auto px-2 font-inter md:max-w-5xl">
          <div className="text-center mb-10 md:mb-4 md:flex md:justify-center">
            <Skeleton height="38px" width="40%" className="mb-2 md:mr-2" />
            <Skeleton height="38px" width="30%" className="mb-6" />
          </div>

          <div>
            <Skeleton height="20px" width="80%" className="mb-8 mx-auto" />
          </div>

          {/* Unified Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative w-full max-w-[300px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
                <Skeleton height="100%" className="rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section Skeleton */}
        <div className="my-6 bg-[#F2F2F2] py-12">
          <div className="max-w-7xl mx-auto px-6 font-inter">
            <Skeleton height="38px" width="50%" className="mb-12 mx-auto" />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12">
              <div className="flex justify-center items-center">
                <Skeleton height="320px" width="100%" className="max-w-[480px]" />
              </div>

              <ul className="text-left space-y-4 md:space-y-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <li key={item}>
                    <Skeleton height="20px" width="100%" className="mb-1" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white mt-6 md:mt-8 lg:mt-10 px-6 sm:px-6  max-w-[1280px] mx-auto">
        {/* ================= AI-Driven Automation ================= */}
        <section className="border-[#CECECE] border font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto my-6
  md:flex md:items-center md:px-6 lg:px-10 md:mx-10 lg:mx-20">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[24px] pb-6 md:text-[30px] lg:text-[42px] font-semibold leading-snug lg:leading-tight">
              AI-Driven Automation
            </h2>
            <p className="pb-6 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] md:leading-relaxed md:tracking-wide break-words">
              Let AI handle the repetitive—free your team for what matters.
            </p>

            {/* Accordion */}
            <div className="">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {dropdowns.map((item, index) => (
                  <AccordionItem key={index} value={`rec-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
            >
              <source src="videos/Ai-driven_automation.mp4" type="video/mp4" />
            </video>
          </div>
        </section>


        {/* Bottom Section */}
        <div className="my-12 mx-auto font-inter md:max-w-5xl ">
          {/* Heading */}
          <div className="text-center mb-6 md:mb-4 md:flex md:justify-center">
            <h2 className="text-[24px] md:text-[38px] font-semibold">
              Support, Training, &
            </h2>
            <h2 className="text-[24px] md:text-[38px] font-semibold text-[#1976D2] mb-6 md:ml-2">
              Onboarding
            </h2>
          </div>

          <div>
            <p className="text-fluid-small lg:text-[20px] mb-6 md:mb-16 text-center text-base leading-relaxed">
              Expert onboarding for ZATCA compliance software— get your team ready for
              e-invoicing in KSA, fast.
            </p>
          </div>

          {/* Unified Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 - On Demand Training */}
            <div className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Mobile Video */}
                  <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-grey-400">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[125px] mt-8 object-cover rounded-t-lg"
                    >
                      <source src="/videos/on-demand-training.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Tablet & Desktop Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block w-full h-[200px] object-cover rounded-t-lg"
                  >
                    <source src="/videos/on-demand-training.mp4" type="video/mp4" />
                  </video>

                  {/* Content */}
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-fluid-body text-center">
                      On Demand Training
                    </h3>
                    <p className="text-[#737373] text-fluid-small mt-2 text-center">
                      Learn Accqrate Books in under 60 minutes; video modules for every type.
                    </p>
                    <p className="absolute bottom-2 left-4 text-fluid-body text-[#1976D2] font-bold leading-tight inline-block">
                      Book An Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Layer */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-[#1976D2] rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </div>


            {/* Box 2 - Local Support */}
            <div className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-grey-400">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[125px] mt-6 md:h-[200px] object-cover rounded-t-lg"
                    >
                      <source src="/videos/local-support.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <video autoPlay loop muted playsInline className="hidden md:block w-full h-[200px] object-cover rounded-t-lg">
                    <source src="/videos/local-support.mp4" type="video/mp4" />
                  </video>

                  <div className="p-4 flex-1">
                    <h3 className="font-bold text-fluid-body text-center">
                      24/7 Local Support
                    </h3>
                    <p className="text-[#737373] text-fluid-small mt-2 text-center">
                      In English & Arabic—phone, WhatsApp, email, or chat.
                    </p>
                    <p className="absolute bottom-2 left-4 text-[#1976D2] text-fluid-body text-left font-bold inline-block">
                      +971505515388
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-[#1976D2] rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </div>

            {/* Box 3 - Knowledge Center */}
            <div className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-grey-400">
                    <video autoPlay loop muted playsInline className="hidden md:block w-full h-[200px] object-cover rounded-t-lg">
                      <source src="/videos/knowledge-center.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <video autoPlay loop muted playsInline className="hidden md:block w-full h-[200px] object-cover rounded-t-lg">
                    <source src="/videos/knowledge-center.mp4" type="video/mp4" />
                  </video>

                  <div className="p-4 flex-1">
                    <h3 className="font-bold text-fluid-body text-center">
                      Knowledge Center
                    </h3>
                    <p className="text-[#737373] text-fluid-small mt-2 text-center">
                      Step-by-step Guides for every process.
                    </p>
                    <p className="absolute bottom-2 left-4 text-[#1976D2] text-fluid-body font-bold leading-tight inline-block">
                      Knowledge Center
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-[#1976D2] rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* Why Choose Section */}
      <div className="my-12 md:my-8 lg:my-10 bg-[#F2F2F2] w-full py-6">
        <div className="max-w-[1280px] mx-auto px-6 font-inter">
          <h2 className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-bold mb-6 text-center leading-snug">
            Why Choose Accqrate <span className="text-[#1976D2]"><br />Books</span>?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="flex  items-center justify-center">
              <img
                src="/images/why-choose.svg"
                alt="Why Choose Accqrate Books"
                className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto"
              />
            </div>

            {/* Text List */}
            <ul className="text-left list-disc list-inside text-[14px] leading-6 sm:text-[15px] md:text-[16px] lg:text-[18px] space-y-4 md:space-y-6">
              <li>Stay Ahead of ZATCA Compliance by Design: Never worry about last-minute regulations or audits.</li>
              <li>Modern Cloud Accounting: Access your accounting software anywhere. Simplify financial management for every team member.</li>
              <li>Device and Vendor Freedom: Use any device, integrate any bank, no hardware lock-in.</li>
              <li>Future-Proof Scaling: Move from startup to multi-entity enterprise—no reimplementation, no data loss.</li>
              <li>Total Business Control: Real-time insights, automation, and bulletproof security.</li>
              <li>Flexible price: Flexible plans for every business, from startups to enterprises. Your data stays secure on our Saudi e-invoicing platform with cloud accounting software benefits.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
