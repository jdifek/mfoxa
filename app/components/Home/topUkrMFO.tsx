import Image from "next/image";
import React from "react";
import RatingDisplay from "./RatingDisplay";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";

export const TopUkrMFO: React.FC = () => {
  const tops = [
    {
      name: "Швидко гроші",
      img: "/2.svg",
    },
    {
      name: "Credit 7",
      img: "/1.svg",
    },
    {
      name: "SLON Credit",
      img: "/3.svg",
    },
  ];

  return (
    <div className="w-full mt-[50px] px-[20px]">
      <h2
        className="text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
        style={{ fontFamily: "var(--second-family)" }}
      >
        ТОП украинских МФО по мнению заемщиков
      </h2>

      <div className="flex justify-between flex-wrap gap-[20px] md:flex-nowrap md:overflow-x-auto">
        {tops.map((top, index) => (
          <div
            key={index}
            className=" h-[225px] w-full rounded-[20px] bg-white p-[16px] shadow-md"
          >
            <header className="flex gap-[10px] items-center">
              <Image
                src={top.img}
                alt=""
                width={10}
                height={10}
                style={{ height: "50px", width: "89px" }}
              />
              <p className="text-[#222] font-bold text-[16px] leading-[100%]">
                {top.name}
              </p>{" "}
            </header>
            <div className="mb-[10px] flex  gap-[10px]">
              <Image
                src={"/Frame 163.svg"}
                alt=""
                width={10}
                height={10}
                style={{ height: "74px", width: "74px" }}
              />
              <RatingDisplay />
            </div>

            <ButtonGreenBorder
            link="/mfo"
              className="mt-[20px]"
              width="100%"
              text="Показать еще"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
