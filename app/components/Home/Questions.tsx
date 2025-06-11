'use client'
import React, { useState } from "react";

const Questions: React.FC = () => {
  const questionsMOK = [
    {
      name: "Популярные МФО",
      content: "Контент про популярные МФО.",
    },
    {
      name: "Быстрая выплата",
      content: "Контент про быструю выплату.",
    },
    {
      name: "Без залога",
      content: "Контент про отсутствие залога.",
    },
    {
      name: "Низкий процент",
      content: "Контент про низкий процент.",
    },
    {
      name: "На карту",
      content: "Контент про перевод на карту.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <React.Fragment>
      {questionsMOK.map((question, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="w-full mb-[10px] rounded-lg bg-white shadow-md"
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
              <div className="px-[16px] pb-[16px] text-[14px] text-[#444] leading-[1.5]">
                {question.content}
              </div>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Questions;
