import Image from "next/image";
import React from "react";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import OftenQuestions from "../components/OftenQuestions";
import Questions from "../components/Home/Questions";

const ReviewsPage: React.FC = () => {
  const reviews = Array.from({ length: 16 }); // Массив из 16 элементов

  return (
    <>
      <div className="p-[30px] mb-[50px] bg-white rounded-lg  mt-[30px]">
        <h2 className="mb-[20px] font-[var(--font3)] font-bold text-[36px] leading-[100%] text-[#222]">
          Все отзывы об МФО Украины
        </h2>
        <p className="font-[var(--font-family)] font-medium text-[15px] leading-[133%] text-[#222]">
          Клиенты микрокредитной компании «Екапуста» получают доступ в личный
          кабинет. Это сервис, через который можно управлять займом, оплачивать
          его, переносить даты возврата. ЛК работает бесплатно и доступен везде,
          где есть выход в интернет.
        </p>

        <div className="flex gap-[20px] mt-[20px]">
          <div className="flex flex-col">
            <p className="font-[var(--font3)] font-bold text-[36px] leading-[100%] text-[#222]">
              188
            </p>
            <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#222]">
              Компаний
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-[var(--font3)] font-bold text-[36px] leading-[100%] text-[#222]">
              53 690
            </p>
            <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#222]">
              Отзывов
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  py-[30px]">
      {reviews.map((_, index) => (
        <div
          key={index}
          className="h-[225px] w-full rounded-[20px] bg-white p-[16px] shadow-md"
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
                style={{ fontFamily: "var(--font-family)" }}
              >
                SlonCredit
              </p>
              <p
                className="font-[700] text-[16px] leading-[100%] text-[#724dea]"
                style={{ fontFamily: "var(--font3)" }}
              >
                4,8 <span className="text-[#67677a]">из 5</span>
              </p>
            </div>
          </div>

          <p
            className="font-[700] text-[12px] leading-[142%] text-[#222] mb-[10px]"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Инна
          </p>

          <p
            className="font-[500] text-[13px] leading-[138%] text-[#222] mb-[14px]"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p
            className="font-[500] text-[13px] leading-[138%] underline decoration-[#724dea] decoration-skip-ink-none text-[#724dea]"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Показать полностью
          </p>
        </div>
      ))}
    </div>
    <ButtonGreenBorder
        width="256px"
        text="Показать еще"
        className="mt-[20px]"
      />

      <OftenQuestions />
      <Questions />
    </>
  );
};

export default ReviewsPage;
