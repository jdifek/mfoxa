import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="px-[100px] pt-[50px] pb-[20px]"
      style={{
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <div className="flex justify-between items-center mb-[20px] flex-col md:flex-row">
        <Image src={"/logo.svg"} alt="Company logo" width={132} height={30} className="mb-[20px] md:mb-0" />

        {/* НАВИГАЦИЯ */}
        <div className="flex gap-[30px] mb-[20px] md:mb-0 flex-col md:flex-row">
          {[
            { name: "О нас", href: "/about" },
            { name: "Контакты", href: "/contacts" },
            { name: "Карта сайта", href: "/sitemap" },
          ].map((el, i) => (
            <Link href={el.href} key={i}>
              <p className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-center text-[#222] cursor-pointer hover:text-[#724dea] transition-colors duration-200">
                {el.name}
              </p>
            </Link>
          ))}
        </div>

        {/* СОЦСЕТИ */}
        <div className="flex gap-[10px] mb-[20px] md:mb-0  md:flex-row">
          {["71", "70", "69", "68", "67"].map((num) => (
            <Image
              key={num}
              src={`/Frame ${num}.svg`}
              alt="Social media icon"
              width={37}
              height={37}
              className="w-[30px] h-[30px] md:w-[37px] md:h-[37px]"
            />
          ))}
        </div>
      </div>

      {/* ОПИСАНИЕ */}
      <p className="mb-[20px] font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-center text-[#67677a]">
        Ліцензія НБУ від 08.03.2024 р. на надання коштів та банківських металів
        у кредит, безстрокова. Перший сервіс онлайн-кредитів в Україні, в якому
        можна швидко отримати гроші на карту будь-якого українського банку.
      </p>

      {/* НИЖНЯЯ ЛИНИЯ */}
      <div className="flex justify-between flex-col md:flex-row gap-[20px] md:gap-0">
        <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-center text-[#67677a]">
          © 2013-2025 ТОВ «МАНІВЕО ШВИДКА ФІНАНСОВА ДОПОМОГА».
        </p>
        <div className="gap-[20px] flex flex-col md:flex-row">
          <p className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-[#724dea]">
            Українська
          </p>
          <p className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-[#9393a3]">
            Русский
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;