'use client';

import React, { useState } from 'react';
import SectionLabel from './section-label';

type UseCaseType = 'illegal' | 'government' | 'construction';

interface UseCaseContentProps {
  activeTab: UseCaseType;
}

const UseCaseContent: React.FC<UseCaseContentProps> = ({ activeTab }) => {
  const content = {
    illegal: {
      title: 'Land Grabbing\nEncroachment\nIllegal Animal Grazing\nWaste Dumping',
      description: 'Unchecked land grabbing and encroachment can cause irreversible financial losses, while illegal grazing and waste dumping degrade land value. Regular monitoring is a landowner\'s shield, offering early detection and peace of mind against unauthorized intrusions'
    },
    government: {
      title: 'Policy Compliance\nLand Use Regulations\nZoning Laws',
      description: 'Stay informed about local government policies affecting your land. Ensure compliance with zoning laws and land use regulations to avoid penalties and maintain property value.'
    },
    construction: {
      title: 'Development Planning\nConstruction Monitoring\nProject Tracking',
      description: 'Monitor construction progress, track development projects, and ensure building activities align with approved plans and permits.'
    }
  };

  const activeContent = content[activeTab];

  return (
    <div className="mt-8 p-8 bg-[#1a1d1f] rounded-lg">
      <div className="whitespace-pre-line text-2xl font-semibold mb-4">
        {activeContent.title}
      </div>
      <p className="text-gray-400">
        {activeContent.description}
      </p>
    </div>
  );
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState<UseCaseType>('illegal');

  return (
    <section id="use-cases" className="w-full bg-[#1a1d1f] text-[#FFFDFD] py-16 px-60">
      <div className="flex justify-center mb-8">
        <SectionLabel text="Use Cases" />
      </div>
      <div className="flex justify-center gap-8 mb-8">
        <button
          onClick={() => setActiveTab('illegal')}
          className={`px-4 py-2 text-lg font-medium transition-all ${activeTab === 'illegal' ? 'border-b-2 border-[#ff7f50]' : ''}`}
        >
          Illegal Activities
        </button>
        <button
          onClick={() => setActiveTab('government')}
          className={`px-4 py-2 text-lg font-medium transition-all ${activeTab === 'government' ? 'border-b-2 border-[#ff7f50]' : ''}`}
        >
          Government Policies
        </button>
        <button
          onClick={() => setActiveTab('construction')}
          className={`px-4 py-2 text-lg font-medium transition-all ${activeTab === 'construction' ? 'border-b-2 border-[#ff7f50]' : ''}`}
        >
          Under Construction
        </button>
      </div>
      <UseCaseContent activeTab={activeTab} />
    </section>
  );
}