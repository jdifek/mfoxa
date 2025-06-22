"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [language, setLanguage] = useState<"uk" | "ru">("uk");

  const socialIcons = ["71", "70", "69", "68", "67"];

  return (
    <footer
      className="px-[10px] md:px-[100px] pt-[30px] md:pt-[50px] pb-[10px] md:pb-[20px]"
      style={{
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <div className="flex justify-between items-center mb-[20px] flex-col md:flex-row">
        <Image
          src={"/logo.svg"}
          alt="Company logo"
          width={132}
          height={30}
          className="mb-[20px] md:mb-0"
        />

        {/* НАВИГАЦИЯ */}
        <div className="flex gap-[20px] md:gap-[30px] mb-[20px] md:mb-0 flex-col md:flex-row">
          {[
            { name: "О нас", href: "/about" },
            { name: "Контакты", href: "/contacts" },
            { name: "Карта сайта", href: "/sitemap" },
          ].map((el, i) => (
            <Link href={el.href} key={i}>
              <p className=" font-medium text-[14px] leading-[136%] text-center text-[#222] cursor-pointer hover:text-[#724dea] transition-colors duration-200">
                {el.name}
              </p>
            </Link>
          ))}
        </div>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ для мобильных */}
        <div className="flex md:hidden mb-[20px] justify-center gap-[20px]">
          <p
            onClick={() => setLanguage("uk")}
            className={` font-medium text-[14px] leading-[136%] cursor-pointer transition-colors duration-200 ${
              language === "uk"
                ? "text-[#724dea]"
                : "text-[#9393a3] hover:text-[#724dea]"
            }`}
          >
            Українська
          </p>
          <p
            onClick={() => setLanguage("ru")}
            className={` font-medium text-[14px] leading-[136%] cursor-pointer transition-colors duration-200 ${
              language === "ru"
                ? "text-[#724dea]"
                : "text-[#9393a3] hover:text-[#724dea]"
            }`}
          >
            Русский
          </p>
        </div>

        {/* СОЦСЕТИ */}
        <div className="flex gap-[10px] mb-[20px] md:mb-0 md:flex-row justify-center">
          {socialIcons.map((num) => (
            <a
              key={num}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
              aria-label="Social media link"
            >
              <Image
                src={`/Frame ${num}.svg`}
                alt="Social media icon"
                width={37}
                height={37}
                className="w-[30px] h-[30px] md:w-[37px] md:h-[37px]"
              />
            </a>
          ))}
        </div>
      </div>

      {/* ОПИСАНИЕ */}
      <p className="mb-[20px]  font-medium text-[11px] leading-[145%] text-center text-[#67677a]">
        Ліцензія НБУ від 08.03.2024 р. на надання коштів та банківських металів
        у кредит, безстрокова. Перший сервіс онлайн-кредитів в Україні, в якому
        можна швидко отримати гроші на карту будь-якого українського банку.
      </p>

      {/* НИЖНЯЯ ЛИНИЯ */}
      <div className="hidden md:flex justify-between flex-col md:flex-row gap-[20px] md:gap-0">
        <p className=" font-medium text-[11px] leading-[145%] text-center text-[#67677a]">
          © 2013-2025 ТОВ «МАНІВЕО ШВИДКА ФІНАНСОВА ДОПОМОГА».
        </p>
        <div className="gap-[20px] flex flex-col md:flex-row justify-center">
          <p
            onClick={() => setLanguage("uk")}
            className={` font-medium text-[14px] leading-[136%] cursor-pointer ${
              language === "uk"
                ? "text-[#724dea]"
                : "text-[#9393a3] hover:text-[#724dea] transition-colors duration-200"
            }`}
          >
            Українська
          </p>
          <p
            onClick={() => setLanguage("ru")}
            className={` font-medium text-[14px] leading-[136%] cursor-pointer ${
              language === "ru"
                ? "text-[#724dea]"
                : "text-[#9393a3] hover:text-[#724dea] transition-colors duration-200"
            }`}
          >
            Русский
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
