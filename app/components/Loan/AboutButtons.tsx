"use client";

import { useState } from "react";

export const AboutButtons = () => {
  const [activeButton, setActiveButton] = useState("Все займы"); // По умолчанию активна кнопка "О компании"

  const handleButtonClick = (text: string) => {
    setActiveButton(text);
  };

  return (
    <div className="w-full no-scrollbar overflow-x-auto px-0 md:px-[20px]">
      <div className="flex gap-[10px]">
        {[
          "Все займы",
          "Онлайн",
          "На карту",
          "Без отказа",
          "Все МФО",
          "Калькулятор",
          "До зарплаты",
          "Без процентов",
          "Срочные",
          "Лучшие",
        ].map((text, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(text)}
            className={`cursor-pointer  whitespace-nowrap rounded-[35px] p-[8px_14px]  flex items-center justify-center font-[var(--font-family)] font-medium text-[15px] leading-[133%] ${
              activeButton === text
                ? "bg-[#d6d6f9] text-[#724dea]"
                : text === "% Промокоды"
                ? "bg-[#fff] text-[#00ba9e]"
                : "bg-[#fff] text-[#000000]"
            }`}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};
