"use client";

import { useState } from "react";

const CalctTarifButtonsts = () => {
  const [activeTariff, setActiveTariff] = useState("Новый");

  const tariffs = ["Новый", "Повторный", "Акция"];
  return (
    <div className="flex mb-[10px] gap-[10px]">
      {tariffs.map((el, i) => (
        <div
          onClick={() => setActiveTariff(el)} // меняем выбранный тариф при клике
          key={i}
          style={{ fontFamily: "var(--Montserrat)" }}
          className={`px-[10px] py-[8px] rounded-[35px] h-[33px] flex items-center justify-center text-[11px] font-medium leading-[145%] text-center cursor-pointer
            ${
              activeTariff === el
                ? "bg-[#724dea] text-white"
                : "bg-[#d6d6f9] text-[#9393a3] hover:bg-[#b0a9f7] hover:text-[#724dea] transition-colors duration-200"
            }`}
        >
          <p
            className={`text-[12px] leading-[142%] font-medium ${
              activeTariff === el ? "text-white" : "text-[#724dea]"
            }`}
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            {el}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CalctTarifButtonsts;
