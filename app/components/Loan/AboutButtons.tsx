"use client";

import { usePathname, useRouter } from "next/navigation";
import { GetCatalogListResponse } from "@/app/services/catalogService";

type AboutButtonsProps = {
  data: GetCatalogListResponse;
};

export const AboutButtons = ({ data }: AboutButtonsProps) => {
  const router = useRouter();
  const pathname = usePathname(); // получаем текущий путь

  const handleButtonClick = (slug?: string) => {
    if (slug) {
      router.push(`/${slug}`);
    }
  };

  return (
    <div className="w-full no-scrollbar overflow-x-auto px-0 md:px-[20px]">
      <div className="flex gap-[10px]">
        {data.data.map((key, index) => {
          const isActive = pathname.includes(key.slug); // подсветка по текущему URL
          return (
            <button
              key={index}
              onClick={() => handleButtonClick(key.slug)}
              className={`cursor-pointer whitespace-nowrap rounded-[35px] p-[8px_14px] flex items-center justify-center font-medium text-[15px] leading-[133%]
                ${isActive ? "bg-[#d6d6f9] text-[#724dea]" : "bg-[#fff] text-[#000000]"}`}
            >
              {key.button_name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
