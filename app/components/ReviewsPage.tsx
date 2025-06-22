"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import OftenQuestions from "../components/OftenQuestions";
import Questions from "../components/Home/Questions";
import InfoHelpful from "../components/InfoHelpful";
import Dropdown from "../ui/Dropdown";
import Bread from "../components/Bread";

const ReviewsClient: React.FC = () => {
  const MAX_REVIEWS = 24;
  const INCREMENT = 8;

  const [reviewsCount, setReviewsCount] = useState(8);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonWidth =
    windowWidth !== null && windowWidth >= 640 ? "256px" : "100%";

  const reviews = Array.from({ length: reviewsCount });

  const loadMore = () => {
    setReviewsCount((prev) => Math.min(prev + INCREMENT, MAX_REVIEWS));
  };

  return (
    <>
      <Bread />

      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px]  mb-[20px] sm:mb-[50px] md:mb-[50px] bg-white rounded-lg ">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--Jakarta)" }}
          >
            Все отзывы об МФО Украины
          </h2>
          <p
            className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] leading-[138%] text-[#222]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            Клиенты микрокредитной компании «Екапуста» получают доступ в личный
            кабинет. Это сервис, через который можно управлять займом,
            оплачивать его, переносить даты возврата. ЛК работает бесплатно и
            доступен везде, где есть выход в интернет.
          </p>

          <div className="flex gap-[40px] mt-[20px]">
            <div className="flex flex-col">
              <p className=" font-bold  text-[20px] sm:text-[28px] md:text-[36px] leading-[100%] text-[#222]">
                188
              </p>
              <p className=" font-medium text-[11px] leading-[145%] text-[#222]">
                Компаний
              </p>
            </div>
            <div className="flex flex-col">
              <p className=" font-bold  text-[20px] sm:text-[28px] md:text-[36px]  leading-[100%] text-[#222]">
                53 690
              </p>
              <p className="font-medium text-[11px] leading-[145%] text-[#222]">
                Отзывов
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <Dropdown
          options={[
            "Сначала новые",
            "Сначала старые",
            "По популярности",
            "По рейтингу",
          ]}
        />
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((_, index) => (
            <div
              key={index}
              className="w-full rounded-lg bg-white p-[16px] shadow-md"
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
                    style={{ fontFamily: "var(--Montserrat)" }}
                  >
                    SlonCredit
                  </p>
                  <p
                    className="font-[700] text-[16px] leading-[100%] text-[#724dea]"
                    style={{ fontFamily: "var(--Manrope)" }}
                  >
                    4,8 <span className="text-[#67677a]">из 5</span>
                  </p>
                </div>
              </div>

              <p
                className="font-[700] text-[12px] md:text-[15px] leading-[142%] text-[#222] mb-[10px]"
                style={{ fontFamily: "var(--Montserrat)" }}
              >
                Инна
              </p>

              <p
                className="mb-[10px] text-[13px] md:text-[15px]"
                style={{
                  fontFamily: "var(--Montserrat)",
                  fontWeight: 500,
                  lineHeight: "138%",
                  color: "#222",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>

              <p
                className="underline cursor-pointer w-max text-[13px] md:text-[15px] transition-colors duration-200 text-[#6239e8] hover:text-[#9278ea]"
                style={{
                  fontFamily: "var(--Montserrat)",
                  fontWeight: 500,
                  lineHeight: "138%",
                  textDecorationSkipInk: "none",
                }}
              >
                Показать полностью
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Показываем кнопку только если не достигли максимума */}
      {reviewsCount < MAX_REVIEWS && (
        <ButtonGreenBorder
          text="Показать еще"
          className="mt-[20px] mx-auto"
          width={buttonWidth}
          onClick={loadMore}
        />
      )}

      <OftenQuestions />

      <InfoHelpful />
      <Questions />
    </>
  );
};

export default ReviewsClient;
