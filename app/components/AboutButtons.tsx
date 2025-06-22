"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { routesMap } from "../config/routesMap";

export const AboutButtonsComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState("О компании");
  const buttonLabels = Object.keys(routesMap); // если нужно где-то использовать список

  useEffect(() => {
    const matched = Object.entries(routesMap).find(([, path]) =>
      pathname.endsWith(path)
    );
    setActiveButton(matched?.[0] || "О компании");
  }, [pathname]);
  
  const handleButtonClick = (text: string) => {
    const basePath = pathname.replace(/\/(reviews|promotion|qap|login)$/, "");
    const subPath = routesMap[text] ?? "";
    router.push(`${basePath}${subPath}`);
  };

  return (
    <div className="px-0 md:px-[20px]">
      <div className="flex gap-[10px] w-full my-[30px] md:my-[50px] overflow-x-auto no-scrollbar">
        {buttonLabels.map((text, index) => {
          const isActive = activeButton === text;

          return (
            <button
              key={index}
              onClick={() => handleButtonClick(text)}
              className={`cursor-pointer whitespace-nowrap rounded-[35px] p-[8px_10px] sm:p-[10px_12px] md:p-[14px_20px] flex items-center justify-center  font-medium text-[15px] leading-[133%] ${
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
