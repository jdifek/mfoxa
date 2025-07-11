"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

type FooterProps = {
  locale: string;
};

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const pathname = usePathname();
  const t = useTranslations("Footer");

  const getLangHref = (targetLang: string) => {
    const segments = pathname.split("/");
    segments[1] = targetLang;
    return segments.join("/") || "/";
  };

  const socialIcons = ["71", "70", "69", "68", "67"];
  const navLinks = [
    { name: t("nav.about"), href: `/${locale}/about` },
    { name: t("nav.contacts"), href: `/${locale}/contacts` },
    { name: t("nav.sitemap"), href: `/${locale}/sitemap` },
  ];

  return (
    <footer className="px-[10px] md:px-[100px] pt-[30px] md:pt-[50px] pb-[10px] md:pb-[20px]" style={{ textAlign: "center", backgroundColor: "#fff" }}>
      <div className="flex justify-between items-center mb-[20px] flex-col md:flex-row">
        <Image
          src="/logo.svg"
          alt={t("logoAlt")}
          width={132}
          height={30}
          className="mb-[20px] md:mb-0"
        />

        <div className="flex gap-[20px] md:gap-[30px] mb-[20px] md:mb-0 flex-col md:flex-row">
          {navLinks.map((el, i) => (
            <Link href={el.href} key={i}>
              <p className="font-medium text-[14px] leading-[136%] text-center text-[#222] cursor-pointer hover:text-[#724dea] transition-colors duration-200">
                {el.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Языковой переключатель для мобильных */}
        <div className="flex md:hidden mb-[20px] justify-center gap-[20px]">
          <Link href={getLangHref("ua")}>
            <p className={`font-medium text-[14px] leading-[136%] cursor-pointer transition-colors duration-200 ${locale === "ua" ? "text-[#724dea]" : "text-[#9393a3] hover:text-[#724dea]"}`}>
              {t("language.ukrainian")}
            </p>
          </Link>
          <Link href={getLangHref("ru")}>
            <p className={`font-medium text-[14px] leading-[136%] cursor-pointer transition-colors duration-200 ${locale === "ru" ? "text-[#724dea]" : "text-[#9393a3] hover:text-[#724dea]"}`}>
              {t("language.russian")}
            </p>
          </Link>
        </div>

        <div className="flex gap-[10px] mb-[20px] md:mb-0 md:flex-row justify-center">
          {socialIcons.map((num) => (
            <a
              key={num}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
              aria-label={t("socialIconAlt")}
            >
              <Image
                src={`/Frame ${num}.svg`}
                alt={t("socialIconAlt")}
                width={37}
                height={37}
                className="w-[30px] h-[30px] md:w-[37px] md:h-[37px]"
              />
            </a>
          ))}
        </div>
      </div>

      <p className="mb-[20px] font-medium text-[11px] leading-[145%] text-center text-[#67677a]">
        {t("description")}
      </p>

      <div className="hidden md:flex justify-between flex-col md:flex-row gap-[20px] md:gap-0">
        <p className="font-medium text-[11px] leading-[145%] text-center text-[#67677a]">
          {t("copyright")}
        </p>
        <div className="gap-[20px] flex flex-col md:flex-row justify-center">
          <Link href={getLangHref("ua")}>
            <p className={`font-medium text-[14px] leading-[136%] cursor-pointer ${locale === "ua" ? "text-[#724dea]" : "text-[#9393a3] hover:text-[#724dea] transition-colors duration-200"}`}>
              {t("language.ukrainian")}
            </p>
          </Link>
          <Link href={getLangHref("ru")}>
            <p className={`font-medium text-[14px] leading-[136%] cursor-pointer ${locale === "ru" ? "text-[#724dea]" : "text-[#9393a3] hover:text-[#724dea] transition-colors duration-200"}`}>
              {t("language.russian")}
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
