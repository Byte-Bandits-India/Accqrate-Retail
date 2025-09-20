"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

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
        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
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

export default function AccordionCard({ value, icon, title, content }) {
  return (
    <AccordionItem
      value={value}
      className="flex flex-col justify-center bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8]
        w-full h-auto rounded-lg px-4 py-4"
    >
      <AccordionTrigger className="flex justify-between items-start w-full hover:no-underline">
        <div className="flex flex-col items-start gap-[20px] px-4">
          <img src={icon} alt={`${title} Icon`} className="w-[40px] h-[40px]" />
          <span className="text-black text-left text-[18px] font-normal">{title}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-1 pb-2 text-gray-700 text-sm">
        {content}
      </AccordionContent>
    </AccordionItem>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionCard }
