"use client";
import React, { useState } from "react";
import Image from "next/image";
import RatingDisplay from "./RatingDisplay";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";
import clsx from "clsx";

export const TopUkrMFO: React.FC = () => {
  const tops = [
    { name: "Швидко гроші", img: "/2.svg" },
    { name: "Credit 7", img: "/1.svg" },
    { name: "SLON Credit", img: "/3.svg" },
    { name: "Moneyveo", img: "/4.svg" },
    { name: "CreditPlus", img: "/4.svg" },
    { name: "Miloan", img: "/6.svg" },
    { name: "Moneyveo", img: "/4.svg" },
    { name: "CreditPlus", img: "/4.svg" },
    { name: "Miloan", img: "/6.svg" },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="w-full mt-[50px] px-[0px] md:px-[20px]">
      <h2
        className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
        style={{ fontFamily: "var(--second-family)" }}
      >
        ТОП украинских МФО по мнению заемщиков
      </h2>

      <div
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]",
          visibleCount >= tops.length && "mb-[30px] md:mb-[50px]"
        )}
      >
        {" "}
        {tops.slice(0, visibleCount).map((top, index) => (
          <div
            key={index}
            className="h-[225px] w-full rounded-[20px] bg-white p-[16px] shadow-md"
          >
            <header className="flex gap-[10px] items-center">
              <Image
                src={top.img}
                alt=""
                width={89}
                height={50}
                className="object-contain"
              />
              <p className="text-[#222] font-bold text-[16px] leading-[100%]">
                {top.name}
              </p>
            </header>
            <div className="mb-[10px] flex gap-[10px]">
              <Image
                src={"/Frame 163.svg"}
                alt=""
                width={74}
                height={74}
                className="object-contain"
              />
              <RatingDisplay />
            </div>
            <ButtonGreenBorder
              link="/mfo"
              className="mt-[20px]"
              width="100%"
              text="Подробнее"
            />
          </div>
        ))}
      </div>

      {visibleCount < tops.length && (
        <div className="px-0 md:px-[20px]">
          <ButtonGreenBorder
            text="Показать еще"
            width="100%"
            className="mt-[20px] md:mt-[40px] mb-[30px] md:mb-[50px]"
            onClick={handleShowMore}
          />
        </div>
      )}
    </div>
  );
};
