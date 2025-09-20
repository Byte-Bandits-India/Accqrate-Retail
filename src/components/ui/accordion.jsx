import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

import { cn } from "@/src/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
      <ChevronDown
        className="h-6 w-6 shrink-0 text-[#979797] text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export default function AccordionCard({ title, desc, video, isOpen, onToggle }) {
  return (
    <div
      className="bg-[#C2185B] text-white rounded-lg w-full
                 sm:h-[280px] md:h-[320px] lg:h-[340px]"
    >
      {/* Header */}
      <div
        className="flex justify-between items-center px-3 py-8 cursor-pointer"
        onClick={onToggle}
      >
        {/* Show title only when closed */}
        {!isOpen && (
          <p className="font-medium text-[18px] leading-snug text-left">
            {title}
          </p>
        )}

        {/* Chevron always on the right */}
        <div className="ml-auto">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>

      {/* Mobile: Accordion dropdown */}
      <div className="block sm:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: 600, opacity: 1 }} // pick a safe max height
              exit={{ maxHeight: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden px-[40px] pb-[40px] text-left"
            >
              <h1 className="font-medium text-[18px] leading-snug text-left mb-6">
                {title}
              </h1>
              <p className="text-sm mb-3">{desc}</p>

              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[200px] rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tablet & Desktop: Fixed-size content */}
      <div className="hidden sm:flex flex-col h-[calc(90%-56px)] px-4 pb-4">
        {isOpen ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <p className="text-sm">{desc}</p>
        )}
      </div>
    </div>
  );
}


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionCard }
