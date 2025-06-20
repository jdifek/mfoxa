/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import AboutButtons from "@/app/components/AboutButtons";
import Bread from "@/app/components/Bread";
import TermsOfRegistration from "@/app/components/termsOfRegistration";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";
import Dropdown from "@/app/ui/Dropdown";
import Image from "next/image";
import React, { useState } from "react";

const ratings = [
  { label: "Скорость выдачи", value: 4.8, color: "#00BDA5" },
  { label: "Прозрачные условия", value: 4.1, color: "#92C83E" },
  { label: "Служба поддержки", value: 3.8, color: "#CC9B00" },
  { label: "Удобство сайта", value: 2.8, color: "#EF3E4A" },
];

type CircleRatingProps = {
  value: any;
  color: any;
};

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
const reviews = Array(12)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    user: i % 2 === 0 ? "Инна" : "Александр",
    date: "20.10.2024",
    text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке...",
  }));


export default function CompanyRewiwsClient({ slug }: { slug: string }) {
  const INITIAL_COUNT = 3;
  const LOAD_MORE_COUNT = 3;

  // Стейт: сколько отзывов отображать
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Обработчик кнопки "Показать еще"
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, reviews.length));
  };
  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--second-family)" }}
        >
          Отзывы Швидко Гроші{" "}
        </h2>
      </div>

      <AboutButtons />
      <div className="px-0 md:px-[20px]">
        <div className="flex flex-col md:flex-row items-center justify-between md:mb-[20px] mb-[10px] sm:mb-[40px] mt-[30px] w-full rounded-lg bg-white p-[20px] shadow-md">
          {/* Логотип + 1 место + отзывы (остается как на ПК) */}
          <div className="flex gap-[14px] sm:gap-[16px] md:gap-[20px] items-center mb-4 md:mb-0">
            <Image
              src={"/image.png"}
              alt="img"
              width={100}
              height={50}
              className="w-[163px] md:w-[300px] h-[52px] md:h-[96px]"
            />
            <div className="flex flex-col gap-[1px] items-center">
              <p className="font-[var(--font-family)] text-nowrap font-medium text-[11px] leading-[145%] text-[#222]">
                их 125 МФО
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
                1 место
              </p>
            </div>
            <div className="flex flex-col gap-[1px] items-center">
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#222]">
                отзывов
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
                2 564
              </p>
            </div>
          </div>

          {/* Оценки пользователей (адаптация под мобилки) */}
          {/* Блок с рейтингами (адаптирован под мобилки) */}
          <div className="flex flex-col md:flex-row gap-[10px] items-center w-full md:w-auto">
            {/* На мобилках/планшетах иконка скрыта (появится позже в grid) */}
            <Image
              src={"/Frame 163 (1).png"}
              alt="png"
              width={74}
              height={74}
              className="hidden md:block w-[50px] md:w-[74px] h-[50px] md:h-[74px]"
            />

            <div className="flex flex-col gap-[8px] w-full">
              <p className="font-[var(--font3)] font-bold text-[12px] text-start text-nowrap  sm:text-[14px] md:text-[16px] leading-[100%] text-[#222] ">
                Оценки пользователей МФО Швидко гроші
              </p>

              <div className="grid grid-cols-[auto_1fr] md:grid-cols-4 gap-[10px] md:gap-[14px] items-center">
                {/* Иконка слева (на мобилках) */}
                <div className="md:hidden flex justify-center">
                  <Image
                    src="/Frame 163 (1).png"
                    alt="png"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  />
                </div>

                {/* Рейтинги (на мобилках и десктопах) */}
                <div className="grid grid-cols-2 gap-[10px] md:contents">
                  {ratings.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-[6px] md:gap-[10px]"
                    >
                      <CircleRating value={item.value} color={item.color} />
                      <span
                        className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#222]"
                        style={{ maxWidth: "70px" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="flex gap-[10px] justify-between  items-center">
          <Dropdown
            options={[
              "Сначала новые",
              "Сначала старые",
              "По популярности",
              "По рейтингу",
            ]}
          />

          <div className="bg-[#00ba9e] text-white font-bold text-[14px] rounded-[8px] px-[16px] py-[9.5px] w-full sm:w-[235px] text-center cursor-pointer">
            <p className="m-0 p-0"> Написать отзыв</p>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        {reviews.slice(0, visibleCount).map((review, i) => (
          <React.Fragment key={i}>
            <div className="p-[10px] md:p-[30px]   bg-white rounded-lg mt-[10px]">
              <div className="flex gap-[10px] mb-[14px]">
                <Image src="/logo (1).svg" alt="logo" width={34} height={34} />
                <div className="flex flex-col">
                  <p
                    className="font-[700] text-[12px] leading-[142%] text-[#222]"
                    style={{ fontFamily: "var(--font-family)" }}
                  >
                    Инна
                  </p>
                  <p
                    className="font-[500] text-[12px] leading-[100%] text-[#724dea]"
                    style={{ fontFamily: "var(--font3)" }}
                  >
                    <span className="text-[#67677a]">20.10.2024</span>
                  </p>
                </div>
              </div>

              <p
                className="mb-[10px]"
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "138%",
                  color: "#222",
                }}
              >
                Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее осмысленного текста
                рыбы на русском языке, а начинающему оратору отточить навык
                публичных выступлений в домашних условиях. При создании
                генератора мы использовали небезизвестный универсальный код
                речей. Текст генерируется абзацами случайным образом от двух до
                десяти предложений в абзаце, что позволяет сделать текст более
                привлекательным и живым для визуально-слухового восприятия.
              </p>
              <div className="rounded-lg p-2.5 w-full mb-[10px] bg-[#ebebf9]">
                <div className="flex gap-[10px]">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.4 3.96692H1V10.3669H4.2V13.5669H7.4V3.96692Z"
                      stroke="#724DEA"
                      stroke-width="2"
                    />
                    <path
                      d="M15 3.96692H8.6V10.3669H11.8V13.5669H15V3.96692Z"
                      stroke="#724DEA"
                      stroke-width="2"
                    />
                  </svg>
                  <p className="font-[var(--font-family)] font-bold text-[13px] leading-[138%] text-[#724dea]">
                    Александр
                  </p>
                </div>

                <p className="ml-[26px] font-[var(--font-family)] font-medium text-[13px] sm:text-[15px] leading-[133%] text-[#222]">
                  Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру
                  сгенерировать несколько абзацев более менее осмысленного
                  текста рыбы на русском языке, а начинающему оратору отточить
                  навык публичных выступлений в домашних условиях. При создании
                  генератора мы использовали небезизвестный универсальный код
                  речей. Текст генерируется абзацами случайным образом от двух
                  до десяти предложений в абзаце, что позволяет сделать текст
                  более привлекательным и живым для визуально-слухового
                  восприятия.
                </p>
              </div>

              <p className="mb-[14px] w-max md:mb-[18px] font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#724dea] underline [text-decoration-skip-ink:none] cursor-pointer hover:text-[#532bbf] hover:no-underline">
                Ответить
              </p>

              <div className="flex  justify-between items-center">
                <p className="font-[var(--font-family)] font-bold text-[13px] leading-[138%] text-[#222]">
                  Отзыв полезен?
                </p>
                <div className="flex gap-[10px] ">
                  <div
                    className="border border-[#00ba9e] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer
    text-[#00ba9e] hover:bg-[#00ba9e] hover:text-white hover:border-[#00ba9e] transition-colors duration-200"
                  >
                    <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-center m-0">
                      Да (5)
                    </p>
                  </div>

                  <div
                    className="border border-[#f22a52] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer
    text-[#f22a52] hover:bg-[#f22a52] hover:text-white hover:border-[#f22a52] transition-colors duration-200"
                  >
                    <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-center m-0">
                      Нет (15)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {visibleCount < reviews.length && (
        <div className="px-0 md:px-[20px]">
          <ButtonGreenBorder
            width="100%"
            text="Показать еще"
            className="mt-[20px] md:mt-[40px] mb-[20px] md:mb-[50px]"
            onClick={handleLoadMore}
          />
        </div>
      )}

      <TermsOfRegistration />
      <div className="px-0 md:px-[20px]">
        <p className="font-[var(--font-family)] font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025
        </p>
      </div>
    </>
  );
}
