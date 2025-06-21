"use client";
import React, { useState } from "react";

type DropdownProps = {
  options: string[];
};
const DropdownComponent: React.FC<DropdownProps> = ({ options }) => {
  const [selected, setSelected] = useState("Сначала новые");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative my-5 w-full sm:w-[170px] group">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className=" cursor-pointer h-[40px] w-full px-[10px] py-[11px] bg-white border border-[#BCBCCC] rounded-[8px] flex justify-between items-center text-[12px] font-medium text-[#222] leading-[142%]
        group-hover:bg-[#f0f0f0] transition-colors duration-200"
    >
      {selected}
      <svg
        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.25 1.9082L7 7L1.75 1.9082"
          stroke="#BCBCCC"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  
    {isOpen && (
      <ul className="absolute left-0 top-[110%] w-full bg-white border border-[#BCBCCC] rounded-[8px] shadow-md z-10">
        {options.map((option) => (
          <li
            key={option}
            onClick={() => {
              setSelected(option);
              setIsOpen(false);
            }}
            className={`px-[10px] py-[8px] text-[12px] text-[#222] font-normal hover:bg-[#f0f0f0] cursor-pointer leading-[142%] ${
              selected === option ? "bg-[#f0f0f0]" : ""
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
  </div>
  
  );
};

export default function Dropdown({ options }: DropdownProps) {
  return <DropdownComponent options={options} />;
}
