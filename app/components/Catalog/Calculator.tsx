"use client";

import { useState, useMemo } from "react";

interface Tariff {
  id: number;
  name: string;
  amount: string; // "100.00"
  rate: string; // "5.00" — ставка %
  term_days: number;
  real_annual_rate: string; // "1.00" — ПКС %
  get_money_url: string;
}

interface CalculatorProps {
  tariffs: Tariff[];
}

const Calculator = ({ tariffs }: CalculatorProps) => {
  const [amount, setAmount] = useState(50000);
  const [days, setDays] = useState(31);
  const [selectedTariffId] = useState(
    tariffs.length > 0 ? tariffs[0].id : null
  );

  const selectedTariff = tariffs.find((t) => t.id === selectedTariffId) ?? null;

  // Пример простой формулы возврата (замени на свою логику, если нужно)
  const repay = useMemo(() => {
    if (!selectedTariff) return 0;
    const rate = parseFloat(selectedTariff.rate);
    return amount + (amount * rate) / 100;
  }, [amount, selectedTariff]);

  return (
    <>
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

      {/* Здесь подставляем значения из состояния и выбранного тарифа */}
      <div className="mb-[19px]">
        <div className="flex justify-between">
          <p className="font-medium mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
            Ви берете
          </p>
          <p className="font-medium text-[14px] leading-[136%] text-right text-[#222]">
            {amount.toLocaleString("ru-RU")}₴
          </p>
        </div>
        <hr className="mb-[16px]" />
        <div className="flex justify-between">

        <p className="font-medium mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
          Повертаєте
        </p>
        <p className="font-medium text-[14px] leading-[136%] text-right text-[#222]">
          {repay.toLocaleString("ru-RU", { maximumFractionDigits: 2 })}₴
        </p>
        </div>
        <hr className="mb-[16px]" />
        <div className="flex justify-between">

        <p className="font-medium mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
          Ставка
        </p>
        <p className="font-medium text-[14px] leading-[136%] text-right text-[#222]">
          {selectedTariff?.rate ?? "-"}%
        </p>
        </div>
        <hr className="mb-[16px]" />
        <div className="flex justify-between">

        <p className="font-medium mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
          ПКС
        </p>
        <p className="font-medium text-[14px] leading-[136%] text-right text-[#222]">
          {selectedTariff?.real_annual_rate ?? "-"}%
        </p>
         </div>
         <hr className="mb-[16px]" />
      </div>
    </>
  );
};

export default Calculator;
