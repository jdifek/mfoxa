"use client";

import { useState } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState(50000);
  const [days, setDays] = useState(31);

  return (
    <div className="mb-[19px] flex gap-[10px] justify-between items-center">
      {/* Сумма займа */}
      <div className=" border-[#d6d6f9] border-2 rounded-lg px-4 pt-[13px] pb-[9px] w-[260px] h-[69px] relative">
        <p
          className="font-medium text-[12px] leading-[142%] text-[#222]"
          style={{ fontFamily: "var(--Montserrat)" }}
        >
          Сумма займа
        </p>
        <div className="flex gap-[5px] items-center">
          <p
            className="font-bold text-[20px] leading-[130%] text-[#222]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            {amount.toLocaleString("ru-RU")}
          </p>
          <p
            className="font-bold text-[20px] leading-[130%] text-[#67677a]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            ₴
          </p>
        </div>
        <input
          type="range"
          min="1000"
          max="100000"
          step="1000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="slider absolute bottom-[0px] left-0 w-full"
        />
      </div>

      {/* Сроки займа */}
      <div className=" border-[#d6d6f9] border-2 rounded-lg px-4 pt-[13px] pb-[9px] w-[260px] h-[69px] relative">
        <p
          className="font-medium text-[12px] leading-[142%] text-[#222]"
          style={{ fontFamily: "var(--Montserrat)" }}
        >
          Сроки займа
        </p>
        <div className="flex gap-[5px] items-center">
          <p
            className="font-bold text-[20px] leading-[130%] text-[#222]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            {days}
          </p>
          <p
            className="font-bold text-[20px] leading-[130%] text-[#67677a]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            дней
          </p>
        </div>
        <input
          type="range"
          min="7"
          max="31"
          step="1"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="slider absolute bottom-[0px] left-0 w-full"
        />
      </div>
    </div>
  );
};

export default Calculator;
