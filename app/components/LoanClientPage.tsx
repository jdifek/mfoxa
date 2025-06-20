"use client";

import React, { useState } from "react";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import Image from "next/image";
import OftenQuestions from "../components/OftenQuestions";
import InfoHelpful from "../components/InfoHelpful";
import Questions from "../components/Home/Questions";
import { LastReviews } from "../components/Home/lastRewiews";
import Dropdown from "../ui/Dropdown";
import Bread from "../components/Bread";
import { AboutButtons } from "../components/Loan/AboutButtons";
import Link from "next/link";

const LoanClientPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  const loans = [
    {
      name: "SLON Credit",
      img: "/3.svg",
    },
    {
      name: "CreditKasa",
      img: "/4.svg",
    },
    {
      name: "Miloan",
      img: "/6.svg",
    },
    {
      name: "SLON Credit",
      img: "/3.svg",
    },
    {
      name: "CreditKasa",
      img: "/4.svg",
    },
    {
      name: "Miloan",
      img: "/6.svg",
    },
    {
      name: "SLON Credit",
      img: "/3.svg",
    },
    {
      name: "CreditKasa",
      img: "/4.svg",
    },
    {
      name: "Miloan",
      img: "/6.svg",
    },
  ];

  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[20px] md:mb-[30px] bg-white rounded-lg mt-[10px] md:mt-[30px]">
          <h2 className="mb-[20px] font-[var(--font3)] font-bold text-[20px] md:text-[36px] leading-[100%] text-[#222]">
            Займы
          </h2>
          <p className="font-[var(--font-family)] font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
            Подберите и оформите лучший для себя займ на срочную покупку или
            хозяйственные нужды. Получение микрозайма от 1 000 до 100 000 рублей
            через сервис «Займи.ру»
          </p>
        </div>
      </div>

      <AboutButtons />
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
      <div className="px-0 md:px-[20px] mb-5">
        <div className="flex justify-between flex-col gap-[20px] md:grid md:grid-cols-2 lg:grid-cols-3 ">
          {loans.slice(0, visibleCount).map((loan, index) => (
            <div
              key={index}
              className="w-full h-auto rounded-[20px] bg-white p-[10px] md:p-[16px]  shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
            >
              <header className="flex gap-[10px] items-center mb-[10px]">
                <Image
                  src={loan.img}
                  alt={loan.img}
                  height={50}
                  width={50}
                  className="w-[89px] h-[50px] object-contain"
                />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[#222] font-bold text-[16px] leading-[100%]">
                    {loan.name}
                  </p>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="Frame 5.svg"
                      height={14}
                      width={14}
                      alt="star"
                      className="w-[14px] h-[14px]"
                    />
                    <p className="text-[13px] text-[#222] font-medium leading-[138%]">
                      4.8<span className="text-[#67677a]">/5</span>
                    </p>
                    <p className="text-[13px] font-medium underline text-[#00ba9e] hover:text-[#009e88] hover:underline-offset-4 transition-all duration-200 cursor-pointer">
  119 отзывов
</p>

                  </div>
                </div>
              </header>

              <main className="flex flex-col gap-[10px]">
                {/* Первый блок */}
                <div className="border border-[#00ba9e] rounded-[8px] p-[7px]  md:p-[12px] h-[101px]">
                  <p className="text-[#00ba9e] text-[12px] font-bold">
                    Новый кредит
                  </p>
                  <div className="border-t border-[#e0e0e0] mt-[10px]  pt-[10px]  flex justify-center gap-[10px] text-center">
                    <div className="flex flex-col text-[12px]">
                      <p className="text-[#67677a] font-medium">Сумма</p>
                      <p className="text-[#222] font-bold">
                        от 1000 до 100 000 грн.
                      </p>
                    </div>
                    <div className="flex flex-col text-[12px]">
                      <p className="text-[#67677a] font-medium">Срок</p>
                      <p className="text-[#222] font-bold ">от 1 до 30 дней</p>
                    </div>
                    <div className="flex flex-col text-[12px]">
                      <p className="text-[#67677a] font-medium">Ставка</p>
                      <p className="text-[#222] font-bold">3%</p>
                    </div>
                  </div>
                </div>

                {/* Второй блок — другой цвет */}
                <div className="border border-[#724DEA] rounded-[8px]   p-[7px]  md:p-[12px] h-[101px]">
                  <p className="text-[#724DEA] text-[12px] font-bold">
                    Повторный кредит
                  </p>
                  <div className="border-t border-[#e0e0e0] mt-[10px]  pt-[10px] flex justify-center gap-[10px] text-center">
                    <div className="flex flex-col text-[12px]">
                      <p className="text-[#67677a] font-medium ">Сумма</p>
                      <p
                        style={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 700,
                          fontSize: "12px",
                          lineHeight: "142%",
                          textAlign: "center",
                          color: "#222",
                        }}
                      >
                        от 1000 до 100 000 грн.
                      </p>
                    </div>
                    <div className="flex flex-col text-[12px]">
                      <p className="text-[#67677a] font-medium">Срок</p>
                      <p className="text-[#222] font-bold">от 1 до 30 дней</p>
                    </div>
                    <div className="flex flex-col text-[12px]">
                      <p className="text-[#67677a] font-medium">Ставка</p>
                      <p className="text-[#222] font-bold">3%</p>
                    </div>
                  </div>
                </div>

                {/* Детали */}
                <div className="space-y-[10px] text-[12px] text-[#9393a3]">
                  <div className="flex justify-between">
                    <p className=" text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      РРС
                    </p>
                    <p className=" text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      от 0,01 до 100000%
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <p className=" text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      Юр. лицо
                    </p>
                    <p className=" text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      ООО “Швидко Гроші”
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <p className=" text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      Лицензия НБУ
                    </p>
                    <p className=" text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      №0000 от 22.22.2222
                    </p>
                  </div>
                  <hr />
                  <div>
                    <Link
                      href="/"
                      className="underline text-[10px] font-medium leading-[120%] text-[#00ba9e]"
                      style={{
                        fontFamily: "var(--font-family)",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      Базовые характеристики услуги
                    </Link>{" "}
                  </div>
                  <hr />
                  <div>
                    <Link
                      href="/"
                      className="underline text-[10px] font-medium leading-[120%] text-[#00ba9e]"
                      style={{
                        fontFamily: "var(--font-family)",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      Предупреждение пользователя о последствиях
                    </Link>{" "}
                  </div>
                </div>
              </main>

              <footer className="mt-[10px] flex  sm:flex-row gap-[10px] items-center justify-between flex-wrap">
                <ButtonGreenBorder
                  link="/mfo/sgroshi"
                  width="100%"
                  text="Подробнее"
                  className="flex-1"
                />

                <Link
                  href={"/mfo/sgroshi"}
                  className="bg-[#00ba9e]   hover:bg-[#009d85] transition-all duration-200 ease-in-out    whitespace-nowrap
 flex-1 text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer"
                >
                  Получить деньги
                </Link>
              </footer>
            </div>
          ))}
        </div>
      </div>
      {visibleCount < loans.length && (
        <div className="px-0 mb-5 md:px-[20px]">
          <ButtonGreenBorder
            text="Показать еще"
            width="100%"
            className="sm:!w-[256px]"
            onClick={handleShowMore}
          />
        </div>
      )}

      <LastReviews />

      <OftenQuestions />
      <InfoHelpful />

      <Questions />
      <div className="px-0 md:px-[20px]">
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] mt-[30px] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025{" "}
        </p>
      </div>
    </>
  );
};

export default LoanClientPage