"use client";

import { ChevronUp } from "lucide-react";

export default function GoToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2 px-4 py-2 bg-lime text-darkBg rounded-lg hover:bg-opacity-90 transition-all duration-300"
    >
      <ChevronUp size={16} />
      Go to Top
    </button>
  );
}
