/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import OftenQuestions from "../components/OftenQuestions";
import InfoHelpful from "../components/InfoHelpful";
import Questions from "../components/Home/Questions";
import DetailsText from "../components/DetailsText";
import Bread from "../components/Bread";

const ratings = [
  { label: "Скорость выдачи", value: 4.8, color: "#00BDA5" },
  { label: "Прозрачные условия", value: 4.1, color: "#92C83E" },
  { label: "Служба поддержки", value: 3.8, color: "#CC9B00" },
  { label: "Удобство сайта", value: 2.8, color: "#EF3E4A" },
];

const tops = [
  { name: "Швидко гроші", img: "/2.svg" },
  { name: "Credit 7", img: "/1.svg" },
  { name: "SLON Credit", img: "/3.svg" },
];

type CircleRatingProps = {
  value: any;
  color: any;
}
const CircleRating: React.FC<CircleRatingProps> = ({ value, color }) => (
  <svg width="32" height="32" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="23" stroke="#eee" strokeWidth="2" fill="none" />
    <circle
      cx="25"
      cy="25"
      r="23"
      stroke={color}
      strokeWidth="4"
      fill="none"
      strokeDasharray={`${(value / 5) * 144}, 144`}
      transform="rotate(-90 25 25)"
      strokeLinecap="round"
    />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill={color}
    >
      {value}
    </text>
  </svg>
);

const MfoPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
          <Bread />

      <div className="p-[30px] mb-[20px] sm:mb-[30px] md:mb-[50px] bg-white rounded-lg mx-[20px] mt-[30px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--second-family)" }}
        >
          Рейтинг МФО Украины по отзывам клиентов
        </h2>
        <p
          className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] leading-[138%] text-[#222]"
          style={{ fontFamily: "var(--font-family)" }}
        >
          Подберите и оформите лучший для себя займ на срочную покупку или
          хозяйственные нужды. Получение микрозайма от 1 000 до 100 000 рублей
          через сервис «Займи.ру»
        </p>
      </div>

      {isMobile ? (
        // === Mobile version (карточки) ===
        <div className="px-[20px] mb-[50px] flex flex-wrap gap-[20px]">
          {tops.map((top, i) => (
            <div
              key={i}
              className="w-full rounded-[20px] bg-white p-[16px] shadow-md"
            >
              <header className="flex gap-[10px] items-center mb-[10px]">
                <Image
                  src={top.img}
                  alt={top.name}
                  width={89}
                  height={50}
                  className="object-contain"
                />
                <p className="text-[#222] font-bold text-[16px]">
                  {top.name}
                </p>
              </header>
              <div className="grid grid-cols-2 gap-[16px]">
                {ratings.map((item, index) => (
                  <div key={index} className="flex gap-[10px] items-center">
                    <CircleRating value={item.value} color={item.color} />
                    <div>
                      <p className="text-[11px] font-medium text-[#222]">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-[#9393a3] font-medium">
                        12 место
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <ButtonGreenBorder
                className="mt-[20px]"
                width="100%"
                text="Показать еще"
              />
            </div>
          ))}
        </div>
      ) : (
        // === Desktop version (таблица) ===
        <div className="p-[30px] mb-[50px] bg-white rounded-lg mx-[20px] mt-[30px]">
          {[1, 2, 3].map((el, i) => (
            <React.Fragment key={i}>
              <div className="flex gap-[20px] items-center">
                <Image
                  className="w-[210px] h-[72px] object-contain"
                  src={"/Frame 163.png"}
                  width={210}
                  height={72}
                  alt="img"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="font-[var(--font-family)] font-medium text-[15px] leading-[133%] text-[#222]">
                    Оценки пользователей МФО {tops[i].name}
                  </p>
                  <div className="grid grid-cols-4 gap-[16px] text-black text-sm">
                    {ratings.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-[10px]"
                      >
                        <CircleRating value={item.value} color={item.color} />
                        <div className="flex flex-col">
                          <span
                            style={{
                              fontFamily: "var(--font-family)",
                              fontWeight: 500,
                              fontSize: "11px",
                              lineHeight: "145%",
                              color: "#222",
                            }}
                          >
                            {item.label}
                          </span>
                          <p
                            style={{
                              fontFamily: "var(--font-family)",
                              fontWeight: 500,
                              fontSize: "11px",
                              lineHeight: "145%",
                              color: "#9393a3",
                            }}
                          >
                            12 место
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr className="mt-[14px] mb-[20px]" />
            </React.Fragment>
          ))}
        </div>
      )}

      <ButtonGreenBorder
        width="100%"
        text="Показать еще"
        className="mt-[40px] mb-[50px]"
      />

      <DetailsText />
      <OftenQuestions />
      <InfoHelpful />
      <Questions />

      <p className="font-[var(--font-family)] font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
        Дата добавления страницы 12.10.2025
      </p>
      <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
        Дата изменения страницы 12.10.2025
      </p>
    </>
  );
};

export default MfoPage;
