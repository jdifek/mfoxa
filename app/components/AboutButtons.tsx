"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { routesMap } from "../config/routesMap";

export const AboutButtonsComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("AboutButtons");

  const keys = Object.keys(routesMap); // ['about', 'reviews', ...]
  const [activeKey, setActiveKey] = useState("about");

  useEffect(() => {
    const currentPath = pathname;
    const matchedEntry = Object.entries(routesMap).find(
      ([, path]) => currentPath.endsWith(path) && path !== ""
    );

    if (matchedEntry) {
      setActiveKey(matchedEntry[0]);
    } else {
      setActiveKey("about"); // если ничего не найдено — считаем "about"
    }
  }, [pathname]);

  const handleButtonClick = (key: string) => {
    const basePath = pathname.replace(/\/(reviews|promotion|qap|login)$/, "");
    const subPath = routesMap[key] ?? "";
    router.push(`${basePath}${subPath}`);
  };

  return (
    <div className="px-0 md:px-[20px]">
      <div className="flex gap-[10px] w-full my-[30px] md:my-[50px] overflow-x-auto no-scrollbar">
        {keys.map((key) => {
          const isActive = activeKey === key;

          return (
            <button
              key={key}
              onClick={() => handleButtonClick(key)}
              className={`cursor-pointer whitespace-nowrap rounded-[35px] p-[8px_10px] sm:p-[10px_12px] md:p-[14px_20px] flex items-center justify-center font-medium text-[15px] leading-[133%] ${
                isActive
                  ? key === "promotion"
                    ? "bg-[#e3fffb] text-[#00ba9e]"
                    : "bg-[#d6d6f9] text-[#724dea]"
                  : key === "promotion"
                    ? "bg-[#fff] text-[#00ba9e]"
                    : "bg-[#fff] text-[#000000]"
              }`}
                            
              
            >
              {t(key)}
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
