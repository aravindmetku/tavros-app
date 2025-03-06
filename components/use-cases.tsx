"use client";

import React, { useState } from "react";
import SectionLabel from "./section-label";

type UseCaseType = "illegal" | "government" | "construction";

interface UseCaseContentProps {
  activeTab: UseCaseType;
}

const UseCaseContent: React.FC<UseCaseContentProps> = ({ activeTab }) => {
  const content = {
    illegal: {
      title:
        "Land Grabbing\nEncroachment\nIllegal Animal Grazing\nWaste Dumping",
      description:
        "Unchecked land grabbing and encroachment can cause irreversible financial losses, while illegal grazing and waste dumping degrade land value. Regular monitoring is a landowner’s shield, offering early detection and peace of mind against unauthorized intrusions",
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
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left column - Content with coral background for illegal tab */}
      <div className={`p-8 rounded-lg bg-coral`}>
        <div className="whitespace-pre-line text-2xl font-semibold mb-4">
          {activeContent.title}
        </div>
        <div className="mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 bg-lime text-darkBg font-medium rounded-full hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right column - Description */}
      <div className="p-8 bg-darkBg rounded-lg flex items-center">
        <p className="text-gray-400">{activeContent.description}</p>
      </div>
    </div>
  );
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState<UseCaseType>("illegal");

  return (
    <section
      id="use-cases"
      className="w-full bg-darkBg text-lightText py-16 px-60"
    >
      <div className="flex justify-center mb-8">
        <SectionLabel text="Use Cases" />
      </div>
      <div className="flex justify-center gap-8 mb-8">
        <button
          onClick={() => setActiveTab("illegal")}
          className={`px-4 py-2 text-lg font-medium transition-all ${activeTab === "illegal" ? "border-b-2 border-coral" : ""}`}
        >
          Illegal Activities
        </button>
        <button
          onClick={() => setActiveTab("government")}
          className={`px-4 py-2 text-lg font-medium transition-all ${activeTab === "government" ? "border-b-2 border-coral" : ""}`}
        >
          Government Policies
        </button>
        <button
          onClick={() => setActiveTab("construction")}
          className={`px-4 py-2 text-lg font-medium transition-all ${activeTab === "construction" ? "border-b-2 border-coral" : ""}`}
        >
          Under Construction
        </button>
      </div>
      <UseCaseContent activeTab={activeTab} />
    </section>
  );
}
