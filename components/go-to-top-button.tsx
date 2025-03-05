"use client";

export default function GoToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-2 px-4 py-2 bg-[#e0fa60] text-[#1a1d1f] rounded-lg hover:bg-opacity-90 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
      Go to Top
    </button>
  );
}