"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import OftenQuestions from "../components/OftenQuestions";
import Questions from "../components/Home/Questions";
import InfoHelpful from "../components/InfoHelpful";
import DetailsText from "../components/DetailsText";
import Dropdown from "../ui/Dropdown";
import Bread from "../components/Bread";

const ReviewsPage: React.FC = () => {
  const reviews = Array.from({ length: 16 }); // Массив из 16 элементов
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Пока windowWidth не определён (SSR или первый рендер) можно отдать дефолтное значение
  const buttonWidth =
    windowWidth !== null && windowWidth >= 640 ? "256px" : "100%";

  return (
    <>
      <Bread />

      <div className="p-[10px] sm:p-[20px] md:p-[30px]  mb-[20px] sm:mb-[50px] md:mb-[50px] bg-white rounded-lg  mt-[30px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--second-family)" }}
        >
          Все отзывы об МФО Украины
        </h2>
        <p
          className="
    text-[11px] sm:text-[12px] md:text-[13px] 
    font-[500] leading-[138%] 
    text-[#222] 
  "
          style={{ fontFamily: "var(--font-family)" }}
        >
          Клиенты микрокредитной компании «Екапуста» получают доступ в личный
          кабинет. Это сервис, через который можно управлять займом, оплачивать
          его, переносить даты возврата. ЛК работает бесплатно и доступен везде,
          где есть выход в интернет.
        </p>

        <div className="flex gap-[20px] mt-[20px]">
          <div className="flex flex-col">
            <p className="font-[var(--font3)] font-bold  text-[20px] sm:text-[28px] md:text-[36px] leading-[100%] text-[#222]">
              188
            </p>
            <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#222]">
              Компаний
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-[var(--font3)] font-bold  text-[20px] sm:text-[28px] md:text-[36px]  leading-[100%] text-[#222]">
              53 690
            </p>
            <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#222]">
              Отзывов
            </p>
          </div>
        </div>
      </div>

      <Dropdown
        options={[
          "Сначала новые",
          "Сначала старые",
          "По популярности",
          "По рейтингу",
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  py-[30px]">
        {reviews.map((_, index) => (
          <div
            key={index}
            className="h-[225px] w-full rounded-[20px] bg-white p-[16px] shadow-md"
          >
            <div className="flex gap-[10px] mb-[14px]">
              <Image
                src={"/logo (1).svg"}
                alt="logo (1).svg"
                width={100}
                height={100}
                style={{ width: "34px", height: "34px" }}
              />

              <div className="flex flex-col">
                <p
                  className="font-[700] text-[12px] leading-[142%] text-[#222]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  SlonCredit
                </p>
                <p
                  className="font-[700] text-[16px] leading-[100%] text-[#724dea]"
                  style={{ fontFamily: "var(--font3)" }}
                >
                  4,8 <span className="text-[#67677a]">из 5</span>
                </p>
              </div>
            </div>

            <p
              className="font-[700] text-[12px] md:text-[15px] leading-[142%] text-[#222] mb-[10px]"
              style={{ fontFamily: "var(--font-family)" }}
            >
              Инна
            </p>

            <DetailsText />
          </div>
        ))}
      </div>
      <ButtonGreenBorder
        text="Показать еще"
        className="mt-[20px] mx-auto"
        width={buttonWidth}
      />

      <OftenQuestions />

      <InfoHelpful />
      <Questions />
    </>
  );
};

export default ReviewsPage;
