"use client";
import Image from "next/image";
import React from "react";

const categories = [
  { title: "На карту", image: "Frame 137.svg" },
  { title: "Под 0%", image: "Frame 137 (1).svg" },
  { title: "Новые МФО", image: "Frame 137 (2).svg" },
  { title: "Наличными", image: "Frame 137 (3).svg" },
  { title: "С 18 лет", image: "Frame 137 (4).svg" },
  { title: "24/7", image: "Frame 137 (5).svg" },
  { title: "Пенсионерам", image: "Frame 137 (6).svg" },
  { title: "С плохой кредитной историей", image: "Frame 137 (7).svg" },
  { title: "Через BankID", image: "Frame 137 (8).svg" },
];

const FinancialMarketplace: React.FC = () => {
  return (
    <section className="w-full mt-[20px] md:mt-[50px] px-[0px] md:px-[20px] mb-[30px] md:mb-[30px]">
      <h2
        className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[20px] sm:mb-[25px] md:mb-[30px]"
        style={{ fontFamily: "var(--second-family)" }}
      >
        Финансовый маркетплейс МФО в Украине
      </h2>
      <p
        className="
    text-[11px] sm:text-[12px] md:text-[13px] 
    font-[500] leading-[138%] 
    text-[#222] mb-[20px] sm:mb-[25px] md:mb-[30px]
  "
        style={{ fontFamily: "var(--font-family)" }}
      >
        Подберите и оформите лучший для себя займ на срочную покупку или
        хозяйственные нужды. Получение микрозайма от 1 000 до 100 000 рублей
        через сервис «Займи.ру»
      </p>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-2.5 rounded-lg  ${
              index === 0 ? "md:col-span-2" : ""
            }`}
            style={{
              fontFamily: "var(--font3)",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "100%",
            }}
          >
            {/* mobile layout */}
            <div className="flex flex-col items-center md:hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="mb-[10px] h-[50px]"
              />
              <p
                className="text-center"
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 500,
                  fontSize: "10px",
                  lineHeight: "120%",
                  color: "#222",
                }}
              >
                {item.title === "С плохой кредитной историей" ? (
                  <>
                    <span className="block md:hidden">С плохой КИ</span>
                    <span className="hidden md:block">{item.title}</span>
                  </>
                ) : (
                  item.title
                )}
              </p>
            </div>

            {/* desktop (md+) layout */}
            <div className="hidden md:flex flex-col h-full justify-between">
              <p className="mb-[10px] text-[#724dea]">{item.title}</p>
              <div className="flex justify-end">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="mb-2 "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialMarketplace;
