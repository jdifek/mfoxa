"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface QuestionItem {
  name: string;
  key: string;
  links: { label: string; url: string }[];
}

const Questions: React.FC = () => {
  const t = useTranslations("Questions");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const questions: QuestionItem[] = [
    { key: "popular", name: t("popular"), links: [] },
    { key: "fast", name: t("fast"), links: [] },
    { key: "noCollateral", name: t("noCollateral"), links: [] },
    { key: "lowRate", name: t("lowRate"), links: [] },
    { key: "toCard", name: t("toCard"), links: [] },
    { key: "roundClock", name: t("roundClock"), links: [] },
    { key: "noRefusal", name: t("noRefusal"), links: [] },
    { key: "badHistory", name: t("badHistory"), links: [] },
  ].map((q) => ({
    ...q,
    links: Array(24).fill({
      label: "moneyman",
      url: "https://zaimi.ru/mfo/joymoney/",
    }),
  }));

  return (
    <div className="px-0 md:px-[20px]">
      {questions.map((question, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="w-full mb-[10px] rounded-lg bg-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:bg-gray-100"
          >
            <div
              className="flex justify-between items-center p-[16px] cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <p className="font-bold text-[14px] leading-[136%] text-[#222]">
                {question.name}
              </p>
              {isOpen ? (
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 7.5L6 3.25684L1.625 7.5"
                    stroke="#724DEA"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.87842 9.75342L7.12158 5.37842L2.87842 1.00342"
                    stroke="#724DEA"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
            {isOpen && (
              <div className="px-[16px] pb-[16px] grid grid-cols-2 gap-[10px] sm:grid-cols-6 sm:gap-[10px]">
                {question.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max"
                    style={{
                      fontFamily: "var(--Montserrat)",
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "138%",
                      textDecoration: "underline",
                      textDecorationSkipInk: "none",
                      color: "#00ba9e",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
