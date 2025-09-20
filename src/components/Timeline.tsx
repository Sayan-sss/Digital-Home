// components/Timeline.tsx
"use client";

import { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="absolute top-1/2 left-20 -translate-y-1/2 flex flex-col items-center justify-end h-full z-20 ">
      <div className="relative  h-[70vh] w-10 flex flex-col items-center justify-center z-10">
        {/* Top circular icon */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 bg-transparent">
          <svg
            width="40"
            height="40"
            viewBox="0 -3 24 24"
            className="text-purple-500"
          >
            <circle
              cx="12"
              cy="6"
              r="5"
              stroke="currentColor"
              strokeWidth="1"
              fill="#0e0e14"
            />
            <circle cx="12" cy="6" r="2" fill="currentColor" />
          </svg>
        </div>
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-purple-500"></div>
        {/* Mouse icon */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 z-20 ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="text-purple-500"
          >
            <rect x="8" y="8" width="8" height="8" rx="4" fill="none" />
            <rect
              x="8"
              y="4"
              width="8"
              height="16"
              rx="4"
              stroke="currentColor"
              strokeWidth="1"
              fill="#0e0e14"
            />
            <circle cx="12" cy="8" r="2" fill="currentColor" />
          </svg>
        </div>
        {/* Pill-shaped rotated scroll text */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-50">
          <span className="block rounded-full border-2 border-purple-500 text-purple-500 px-3 py-1 -rotate-90 font-serif bg-[#0e0e14]">
            Scroll
          </span>
        </div>
      </div>
    </div>
  );
}
