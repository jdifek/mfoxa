"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export const AboutButtonsComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState("О компании");

  useEffect(() => {
    if (pathname.endsWith("/reviews")) {
      setActiveButton("Отзывы");
    } else if (pathname.endsWith("/promotion")) {
      setActiveButton("% Промокоды");
    } else if (pathname.endsWith("/qap")) {
      setActiveButton("Частые вопросы");
    } else if (pathname.endsWith("/login")) {
      setActiveButton("Личный кабинет");
    } else {
      setActiveButton("О компании");
    }
  }, [pathname]);

  const handleButtonClick = (text: string) => {
    const basePath = pathname.replace(/\/(reviews|promotion|qap|login)$/, "");

    if (text === "Отзывы") {
      router.push(`${basePath}/reviews`);
    } else if (text === "% Промокоды") {
      router.push(`${basePath}/promotion`);
    } else if (text === "Частые вопросы") {
      router.push(`${basePath}/qap`);
    } else if (text === "Личный кабинет") {
      router.push(`${basePath}/login`);
    } else {
      router.push(basePath);
    }
  };

  return (
    <div className="px-0 md:px-[20px]">
      <div className="flex gap-[10px] w-full my-[30px] md:my-[50px] overflow-x-auto">
        {[
          "О компании",
          "Отзывы",
          "% Промокоды",
          "Личный кабинет",
          "Частые вопросы",
        ].map((text, index) => {
          const isActive = activeButton === text;

          return (
            <button
              key={index}
              onClick={() => handleButtonClick(text)}
              className={`cursor-pointer whitespace-nowrap rounded-[35px] p-[8px_10px] sm:p-[10px_12px] md:p-[14px_20px] flex items-center justify-center font-[var(--font-family)] font-medium text-[15px] leading-[133%] ${
                isActive
                  ? "bg-[#d6d6f9] text-[#724dea]"
                  : text === "% Промокоды"
                  ? "bg-[#fff] text-[#00ba9e]"
                  : "bg-[#fff] text-[#000000]"
              }`}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default function AboutButtons() {
  return <AboutButtonsComponent />;
}
