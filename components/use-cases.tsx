"use client";

import React, { useState } from "react";
import SectionLabel from "./section-label";

type UseCaseType = "illegal" | "government" | "construction";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState<UseCaseType>("illegal");

  const content = {
    illegal: {
      title:
        "Land Grabbing\nEncroachment\nIllegal Animal Grazing\nWaste Dumping",
      description:
        "Unchecked land grabbing and encroachment can cause irreversible financial losses, while illegal grazing and waste dumping degrade land value. Regular monitoring is a landowner's shield, offering early detection and peace of mind against unauthorized intrusions",
    },
    government: {
      title: "HYDRAA\nPolicy Compliance\nLand Use Regulations\nZoning Laws",
      description:
        "Government regulations, expanding roads, and unforeseen infrastructure projects often burden landowners with uncertainty. These factors can shrink usable land or affect value. Staying informed through regular inspections to protect assets, plan ahead, and address concerns before they escalate into costly issues",
    },
    construction: {
      title: "Development Planning\nConstruction Monitoring\nProject Tracking",
      description:
        "Frequent site visits during construction can cause stress for landowners, especially when workers provide inaccurate or incomplete information. Unaddressed issues may escalate into costly errors.",
    },
  };

  const activeContent = content[activeTab];

  return (
    <section
      id="use-cases"
      className="w-full bg-darkBg text-lightText py-8 md:py-16 px-4 md:px-60"
    >
      <div className="flex justify-center mb-6 md:mb-8">
        <SectionLabel text="Use Cases" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-6 md:mb-8">
        <button
          onClick={() => setActiveTab("illegal")}
          className={`px-3 md:px-4 py-2 text-base md:text-lg font-medium transition-all ${activeTab === "illegal" ? "border-b-2 border-coral" : ""}`}
        >
          Illegal Activities
        </button>
        <button
          onClick={() => setActiveTab("government")}
          className={`px-3 md:px-4 py-2 text-base md:text-lg font-medium transition-all ${activeTab === "government" ? "border-b-2 border-coral" : ""}`}
        >
          Government Policies
        </button>
        <button
          onClick={() => setActiveTab("construction")}
          className={`px-3 md:px-4 py-2 text-base md:text-lg font-medium transition-all ${activeTab === "construction" ? "border-b-2 border-coral" : ""}`}
        >
          Under Construction
        </button>
      </div>
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-6 md:p-8 rounded-lg bg-coral">
          <div className="whitespace-pre-line text-xl md:text-2xl font-semibold mb-4">
            {activeContent.title}
          </div>
          <div className="mt-4 md:mt-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-6 md:px-8 py-2 md:py-3 bg-lime text-darkBg font-medium rounded-full hover:bg-opacity-90 transition-colors text-sm md:text-base"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="p-6 md:p-8 bg-darkBg rounded-lg flex items-center">
          <p className="text-gray-400 text-sm md:text-base">{activeContent.description}</p>
        </div>
      </div>
    </section>
  );
}
