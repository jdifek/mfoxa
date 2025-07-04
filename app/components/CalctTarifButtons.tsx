"use client";

import { useState } from "react";

type Tariff = {
  id: number;
  name: string;
  amount: string;
  rate: string;
  term_days: number;
  // другие поля если нужны
};

type Props = {
  tariffs: Tariff[];
  onSelect?: (tariff: Tariff) => void;
};

const CalctTarifButtonsts = ({ tariffs, onSelect }: Props) => {
  const [activeTariffId, setActiveTariffId] = useState<number | null>(
    tariffs.length > 0 ? tariffs[0].id : null
  );

  const handleClick = (tariff: Tariff) => {
    setActiveTariffId(tariff.id);
    if (onSelect) onSelect(tariff);
  };

  return (
    <div className="flex mb-[10px] gap-[10px]">
      {tariffs.map((tariff) => (
        <div
          onClick={() => handleClick(tariff)}
          key={tariff.id}
          style={{ fontFamily: "var(--Montserrat)" }}
          className={`px-[10px] py-[8px] rounded-[35px] h-[33px] flex items-center justify-center text-[11px] font-medium leading-[145%] text-center cursor-pointer
            ${
              activeTariffId === tariff.id
                ? "bg-[#724dea] text-white"
                : "bg-[#d6d6f9] text-[#9393a3] hover:bg-[#b0a9f7] hover:text-[#724dea] transition-colors duration-200"
            }`}
        >
          <p
            className={`text-[12px] leading-[142%] font-medium ${
              activeTariffId === tariff.id ? "text-white" : "text-[#724dea]"
            }`}
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            {tariff.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CalctTarifButtonsts;
