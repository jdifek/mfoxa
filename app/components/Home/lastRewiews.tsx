import Image from "next/image";
import React from "react";

export const LastRewiews: React.FC = () => {
  return (
    <div className="w-full mt-[50px] px-[20px]">
      <h2
        className="text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
        style={{ fontFamily: "var(--second-family)" }}
      >
        Последние отзывы на портале
      </h2>

      <div className="flex justify-between flex-wrap gap-[20px] md:flex-nowrap md:overflow-x-auto">
        {[1, 2, 3, 4].map((el, index) => (
          <div
            key={index}
            className=" h-[225px] w-full rounded-[20px] bg-white p-[16px] shadow-md"
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
                <p className="font-[700] text-[16px] leading-[100%] text-[#724dea]" style={{ fontFamily: "var(--font3)" }}>
                  4,8 <span className="text-[#67677a]">из 5</span>
                </p>
              </div>
            </div>

            <p className="font-[700] text-[12px] leading-[142%] text-[#222] mb-[10px]" style={{ fontFamily: "var(--font-family)" }}>
              Инна
            </p>

            <p
              className="font-[500] text-[13px] leading-[138%] text-[#222] mb-[14px]"
              style={{ fontFamily: "var(--font-family)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>

            <p className="font-[500] text-[13px] leading-[138%] underline decoration-[#724dea] decoration-skip-ink-none text-[#724dea]" style={{ fontFamily: "var(--font-family)" }}>
              Показать полностью
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
