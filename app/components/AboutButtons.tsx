"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { routesMap } from "../config/routesMap";

export const AboutButtonsComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("aboutButtons");

  // Связка ключей с путями и переводами
  const keys = Object.keys(routesMap);
  const [activeKey, setActiveKey] = useState("about");

  useEffect(() => {
    const matched = Object.entries(routesMap).find(([, path]) =>
      pathname.endsWith(path)
    );
    setActiveKey(matched?.[0] || "about");
  }, [pathname]);

  const handleButtonClick = (key: string) => {
    const basePath = pathname.replace(/\/(reviews|promotion|qap|login)$/, "");
    const subPath = routesMap[key] ?? "";
    router.push(`${basePath}${subPath}`);
  };

  return (
    <div className="px-0 md:px-[20px]">
      <div className="flex gap-[10px] w-full my-[30px] md:my-[50px] overflow-x-auto no-scrollbar">
        {keys.map((key, index) => {
          const isActive = activeKey === key;
          const label = t(key); // локализованный текст

          return (
            <button
              key={index}
              onClick={() => handleButtonClick(key)}
              className={`cursor-pointer whitespace-nowrap rounded-[35px] p-[8px_10px] sm:p-[10px_12px] md:p-[14px_20px] flex items-center justify-center font-medium text-[15px] leading-[133%] ${
                isActive
                  ? "bg-[#d6d6f9] text-[#724dea]"
                  : key === "promotion"
                  ? "bg-[#fff] text-[#00ba9e]"
                  : "bg-[#fff] text-[#000000]"
              }`}
            >
              {label}
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
