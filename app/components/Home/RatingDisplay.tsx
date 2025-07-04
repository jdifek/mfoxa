"use client";

import React from "react";

type RatingData = {
  label: string;
  value: number;
};

type RatingDisplayProps = {
  ratings: RatingData[];
};

const CircleRating: React.FC<{ value: number; color: string }> = ({ value, color }) => (
  <svg width="32" height="32" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="23" stroke="#eee" strokeWidth="2" fill="none" />
    <circle
      cx="25"
      cy="25"
      r="23"
      stroke={color}
      strokeWidth="4"
      fill="none"
      strokeDasharray={`${(value / 5) * 144}, 144`}
      transform="rotate(-90 25 25)"
      strokeLinecap="round"
    />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill={color}
    >
      {value.toFixed(1)}
    </text>
  </svg>
);

function getColor(value: number): string {
  if (value >= 4.5) return "#00BDA5";
  if (value >= 4) return "#92C83E";
  if (value >= 3) return "#CC9B00";
  return "#EF3E4A";
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({ ratings }) => {
  return (
    <div className="grid grid-cols-2 gap-[10px] text-black text-sm">
      {ratings.map((item, index) => (
        <div key={index} className="flex items-center gap-[10px]">
          <CircleRating value={item.value} color={getColor(item.value)} />
          <span
            style={{
              fontFamily: "var(--Montserrat)",
              fontWeight: 500,
              fontSize: "11px",
              lineHeight: "145%",
              color: "#222",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RatingDisplay;
