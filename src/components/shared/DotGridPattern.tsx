import React from "react";

interface DotGridPatternProps {
  color?: string;
  className?: string;
  rows?: number;
  cols?: number;
  gap?: number;
  radius?: number;
  perspective?: boolean;
}

export function DotGridPattern({
  color = "#d2e3fc",
  className = "",
  rows = 14,
  cols = 16,
  gap = 48,
  radius = 16,
  perspective = true
}: DotGridPatternProps) {
  const width = cols * gap;
  const height = rows * gap;

  return (
    <div
      className={`overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={perspective ? "perspective-dot-grid" : ""}
        style={{ width: "100%", height: "100%" }}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`dot-pattern-${color.replace(/[^a-zA-Z0-9]/g, "")}`}
              width={gap}
              height={gap}
              patternUnits="userSpaceOnUse"
            >
              <circle cx={gap / 2} cy={gap / 2} r={radius} fill={color} />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#dot-pattern-${color.replace(/[^a-zA-Z0-9]/g, "")})`}
          />
        </svg>
      </div>
    </div>
  );
}
