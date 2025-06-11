import React from "react";

const ratings = [
  { label: "Скорость выдачи", value: 4.8, color: "#00BDA5" },
  { label: "Прозрачные условия", value: 4.1, color: "#92C83E" },
  { label: "Служба поддержки", value: 3.8, color: "#CC9B00" },
  { label: "Удобство сайта", value: 2.8, color: "#EF3E4A" },
];

const CircleRating = ({ value, color }) => (
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
      {value}
    </text>
  </svg>
);

export default function RatingDisplay() {
  return (
    <div className="grid grid-cols-2 gap-[10px] text-black text-sm">
      {ratings.map((item, index) => (
        <div key={index} className="flex items-center gap-[10px]">
          <CircleRating value={item.value} color={item.color} />
            <span
            style={{
              fontFamily: "var(--font-family)",
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
}
