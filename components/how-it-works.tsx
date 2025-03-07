"use client";

import React from "react";
import SectionLabel from "./section-label";

interface Step {
  number: number;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Schedule a Visit",
      description: "Simply schedule a for your property visit through our easy-to-use platform.",
    },
    {
      number: 2,
      title: "Pilot Inspection",
      description: "We will initiate pilot to visit your property to collect comprehensive information and imagery.",
    },
    {
      number: 3,
      title: "Get Insights",
      description: "Receive notification with the latest imagery of your property and valuable insights about its condition.",
    },
  ];

  return (
    <section className="w-full bg-darkBg text-lightText py-8 md:py-16 px-4 md:px-60">
      <div className="flex justify-center mb-6 md:mb-8">
        <SectionLabel text="How it Works" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative p-6 md:p-8 bg-coral rounded-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-lime text-darkBg rounded-full flex items-center justify-center font-semibold text-xl mb-4">
              {step.number}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-sm md:text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}