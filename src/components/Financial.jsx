"use client";
import { FaChevronDown } from "react-icons/fa";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";
import { useState, useContext, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function AccountSections() {
  const [openIndex, setOpenIndex] = useState(null);
  const { loading } = useContext(LoadingContext);
  const financialRef = useRef(null);
  const isVisible = useInView(financialRef, { threshold: 0 });

  const toggleDropdown = (key, index) => {
    setOpenIndex(openIndex === `${key}-${index}` ? null : `${key}-${index}`);
  };



  // Finance Operations
  const operationsDropdowns = [
    { title: "Live Financial Dashboards", content: "Sample content for Live Financial Dashboards." },
    { title: "Automated Bank Reconciliation", content: "Sample content for Automated Bank Reconciliation." },
    { title: "Advanced Reporting", content: "Sample content for Advanced Reporting." },
    { title: "Multi-Entity, Multi-Currency", content: "Sample content for Multi-Entity, Multi-Currency." },
    { title: "Customizable Chart of Accounts", content: "Sample content for Chart of Accounts." },
  ];

  // Seamless Integration
  const integrationDropdowns = [
    { title: "Instant ERP Integration", content: "Sample content for ERP Integration." },
    { title: "API & Marketplace", content: "Sample content for API & Marketplace." },
    { title: "No Vendor Lock-in", content: "Sample content for No Vendor Lock-in." },
  ];

  // Robust Control
  const controlDropdowns = [
    { title: "Role-Based Access", content: "Sample content for Role-Based Access." },
    { title: "Automated Audit Logs", content: "Sample content for Automated Audit Logs." },
    { title: "Disaster Recovery & Data Security", content: "Sample content for Disaster Recovery & Data Security." },
  ];

  if (loading || !isVisible) {
    return (
      <div ref={financialRef} className="rounded-[40px] max-w-[1440px] mx-auto">
        <div className="px-4">
          {/* Finance Operations Skeleton */}
          <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">
            <div className="flex-1 md:max-w-[520px]">
              <Skeleton height="38px" width="70%" className="mb-4" />
              <Skeleton height="24px" width="90%" className="mb-6" />
              <Skeleton height="20px" width="100%" className="mb-4" />

              <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[400px] my-6">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                      <Skeleton height="16px" width="80%" />
                      <Skeleton height="16px" width="16px" className="rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton height="420px" className="rounded-lg w-full" />
            </div>
          </section>

          {/* Seamless Integration Skeleton */}
          <section className="bg-[#E8F1FB] my-6 font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">

            <div className="flex-1 md:max-w-[520px]">
              <Skeleton height="38px" width="70%" className="mb-4" />
              <Skeleton height="24px" width="90%" className="mb-6" />
              <Skeleton height="20px" width="100%" className="mb-4" />

              <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[400px]">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                      <Skeleton height="16px" width="80%" />
                      <Skeleton height="16px" width="16px" className="rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton height="420px" className="rounded-lg w-full" />
            </div>
          </section>

          {/* Robust Control Skeleton */}
          <section className="bg-[#E8F1FB] my-6 font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">
            <div className="flex-1 md:max-w-[520px]">
              <Skeleton height="38px" width="70%" className="mb-4" />
              <Skeleton height="24px" width="90%" className="mb-6" />
              <Skeleton height="20px" width="100%" className="mb-4" />

              <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[400px]">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                      <Skeleton height="16px" width="80%" />
                      <Skeleton height="16px" width="16px" className="rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton height="420px" className="rounded-lg w-full" />
            </div>
          </section>
        </div>
      </div>
    );
  }



  return (
    <div className="px-6 py-[24px] bg-[#F2F2F2]">
      <div className="max-w-[1280px] mx-auto">
        {/* ================= Finance Operations ================= */}
        <section className="bg-[#E8F1FB] border-[#CECECE] border font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-6 rounded-xl md:rounded-2xl mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] pb-6 text-[22px] md:text-[38px] font-semibold leading-snug">
              Transform Your{" "}
              <span className="tracking-tight md:text-[38px] md:mb-10 block text-[#1976D2] font-normal">
                Finance Operations
              </span>
            </h2>
            <p className="pb-6 text-[14px] md:text-[20px] md:leading-relaxed md:tracking-wide">
              Modern accounting isn’t about debits and credits—it’s about business
              control, speed, and insight.
            </p>

            {/* Accordion */}
            <div className="">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {operationsDropdowns.map((item, index) => (
                  <AccordionItem key={index} value={`rec-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                      {item.title}
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
              <source src="videos/Transform_your_finance_operations.mp4" type="video/mp4" />
            </video>
          </div>
        </section>


        {/* ================= Seamless Integration ================= */}
        <section className="bg-[#E8F1FB] border-[#CECECE] border my-6 font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-6 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[22px] pb-6 md:text-[38px] font-semibold leading-snug">
              Seamless Integration{" "}
              <span className="tracking-tight md:text-[38px] md:mb-10 block text-[#1976D2] font-normal">
                Enterprise Scalability
              </span>
            </h2>
            <p className="pb-6 text-[14px] md:text-[20px] md:leading-relaxed md:tracking-wide">
              Grow with confidence - Accqrate Books is built for business evolution, not just accounting.
            </p>

            {/* Accordion */}
            <div className="">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {integrationDropdowns.map((item, index) => (
                  <AccordionItem key={index} value={`rec-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                      {item.title}
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
              <source src="videos/Seamless_integration.mp4" type="video/mp4" />
            </video>
          </div>
        </section>


        {/* ================= Robust Control ================= */}
        <section className="bg-[#E8F1FB] border-[#CECECE] border mt-6 font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-6 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] mb-6 text-[22px] md:text-[38px] font-semibold leading-snug">
              Robust Control,{" "}
              <span className="tracking-tight md:text-[38px] md:mb-10 block text-[#1976D2] font-normal">
                Total Compliance
              </span>
            </h2>
            <p className="pb-6 text-[14px] md:text-[20px] md:leading-relaxed md:tracking-wide">
              Mitigate risk, enforce policy, and maintain visibility.
            </p>

            {/* Accordion */}
            <div className="">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {controlDropdowns.map((item, index) => (
                  <AccordionItem key={index} value={`rec-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                      {item.title}
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
              <source src="videos/robust-control.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>

    </div>
  );
}
