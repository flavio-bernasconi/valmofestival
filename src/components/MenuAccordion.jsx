import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const MenuAccordion = ({ trigger, children }) => {
  return (
    <AccordionItem
      value={trigger}
      className={"border-2 border-white px-4 cursor-pointer rounded-lg"}
    >
      <AccordionTrigger className="w-full uppercase text-3xl font-bold text-orange-400 mb-2">
        {trigger}
      </AccordionTrigger>
      <AccordionContent className={"py-5"}>{children}</AccordionContent>
    </AccordionItem>
  );
};
