import React from "react";

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="inline-block bg-white/30 rounded-full px-6 py-2">
      <span className="text-lime font-medium">{text}</span>
    </div>
  );
}
