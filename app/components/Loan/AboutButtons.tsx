"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type AboutButtonsProps = {
  locale: string;
};

export const AboutButtons = ({ locale }: AboutButtonsProps) => {
  const t = useTranslations("AboutButtons");
  const [activeButton, setActiveButton] = useState(t("allLoans") || "Все займы");
console.log(locale);

  const handleButtonClick = (text: string) => {
    setActiveButton(text);
  };

  const buttons = [
    "allLoans",
    "online",
    "toCard",
    "noRefusal",
    "allMFO",
    "calculator",
    "payday",
    "zeroPercent",
    "urgent",
    "best",
  ];

  return (
    <div className="w-full no-scrollbar overflow-x-auto px-0 md:px-[20px]">
      <div className="flex gap-[10px]">
        {buttons.map((key, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(t(key) || key)}
            className={`cursor-pointer whitespace-nowrap rounded-[35px] p-[8px_14px] flex items-center justify-center font-medium text-[15px] leading-[133%] ${
              activeButton === (t(key) || key)
                ? "bg-[#d6d6f9] text-[#724dea]"
                : key === "% Промокоды"
                ? "bg-[#fff] text-[#00ba9e]"
                : "bg-[#fff] text-[#000000]"
            }`}
          >
            {t(key) || key}
          </button>
        ))}
      </div>
    </div>
  );
};
