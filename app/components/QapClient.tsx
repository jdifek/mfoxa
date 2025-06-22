"use client";

import AboutButtons from "@/app/components/AboutButtons";
import Bread from "@/app/components/Bread";
import TermsOfRegistration from "@/app/components/TermsOfRegistration";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";
import Dropdown from "@/app/ui/Dropdown";
import Image from "next/image";
import React from "react";

const QapClient = () => {
  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--Jakarta)" }}
        >
          Частые вопросы Швидко Гроші{" "}
        </h2>
      </div>

      <AboutButtons />
      <div className="px-0 md:px-[20px]">
        <div className="  md:mb-[20px] mb-[10px] mt-[30px] w-full rounded-lg bg-white p-[20px] shadow-md">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--Jakarta)" }}
          >
            {" "}
            Заголовок для страницы вопросы Швидко Гроші
          </h2>
          <p
            className="
    text-[11px] sm:text-[12px] md:text-[13px] 
    font-[500] leading-[138%] 
    text-[#222] 
  "
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            Клиенты микрокредитной компании «Екапуста» получают доступ в личный
            кабинет. Это сервис, через который можно управлять займом,
            оплачивать его, переносить даты возврата. ЛК работает бесплатно и
            доступен везде, где есть выход в интернет.
          </p>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="flex  gap-[10px] flex-row sm:justify-between items-center">
          <Dropdown
            options={[
              "Сначала новые",
              "Сначала старые",
              "По популярности",
              "По рейтингу",
            ]}
          />

          <div className="bg-[#00ba9e]  text-white font-bold text-[14px] rounded-[8px] px-[16px] py-[9.5px] w-full sm:w-[235px] text-center cursor-pointer">
            <p className="m-0 p-0"> Задать вопрос</p>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        {[1, 2, 3, 4, 5, 6].map((el, i) => (
          <React.Fragment key={i}>
            <div className="p-[10px] md:p-[30px] mb-[10px]  bg-white rounded-lg mt-[10px]">
              <div className="flex gap-[10px] mb-[14px]">
                <Image src="/logo (1).svg" alt="logo" width={34} height={34} />
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
                className="mb-[10px]"
                style={{
                  fontFamily: "var(--Montserrat)",
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
                  <p className=" font-bold text-[13px] leading-[138%] text-[#724dea]">
                    Александр
                  </p>
                </div>

                <p className="ml-[26px]  font-medium text-[13px] sm:text-[15px] leading-[133%] text-[#222]">
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

              <p className="mb-[14px] w-max md:mb-[18px]  font-medium text-[13px] leading-[138%] text-[#724dea] underline [text-decoration-skip-ink:none] cursor-pointer hover:text-[#532bbf] hover:no-underline">
                Ответить
              </p>

              <div className="flex justify-between items-center">
                <p className=" font-bold text-[13px]  leading-[138%] text-[#222]">
                  Вопрос полезен?
                </p>

                <div className="flex gap-[10px] ">
                  <div
                    className="border border-[#00ba9e] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer
    text-[#00ba9e] hover:bg-[#00ba9e] hover:text-white hover:border-[#00ba9e] transition-colors duration-200"
                  >
                    <p className=" font-medium text-[13px] leading-[138%] text-center m-0">
                      Да (5)
                    </p>
                  </div>

                  <div
                    className="border border-[#f22a52] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer
    text-[#f22a52] hover:bg-[#f22a52] hover:text-white hover:border-[#f22a52] transition-colors duration-200"
                  >
                    <p className=" font-medium text-[13px] leading-[138%] text-center m-0">
                      Нет (15)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="px-0 md:px-[20px]">
        <ButtonGreenBorder
          width="100%"
          text="Показать еще"
          className="mt-[40px] mb-[50px] "
        />
      </div>

      <TermsOfRegistration />

      <div className="px-0 md:px-[20px]">
        <p className=" font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className=" font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025
        </p>
      </div>
    </>
  );
};

export default QapClient;
