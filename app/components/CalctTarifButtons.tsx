"use client";

import { useState } from "react";

type Tariff = {
  id: number;
  name: string;
  amount: string; // будет преобразовано в число
  rate: string;   // процент в день
  term_days: number;
  get_money_url?: string;
};

type Props = {
  tariffs: Tariff[];
  onSelect?: (tariff: Tariff) => void;
};

const CalctTarifButtonsts = ({ tariffs, onSelect }: Props) => {
  const [activeTariffId, setActiveTariffId] = useState<number | null>(
    tariffs.length > 0 ? tariffs[0].id : null
  );

  const activeTariff = tariffs.find((t) => t.id === activeTariffId) || tariffs[0];

  const handleClick = (tariff: Tariff) => {
    setActiveTariffId(tariff.id);
    if (onSelect) onSelect(tariff);
  };

  const amount = parseFloat(activeTariff.amount);
  const rate = parseFloat(activeTariff.rate); // дневной %
  const days = activeTariff.term_days;

  const interest = (amount * (rate / 100)) * days;
  const total = amount + interest;

  return (
    <div className="p-4 max-w-xl mx-auto text-sm font-sans">
      {/* Кнопки тарифов */}
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

      {/* Расчёт по выбранному тарифу */}
      <div className="bg-[#f5f5fc] p-4 rounded-lg shadow-md space-y-2 text-sm text-gray-800">
        <div>
          <strong>Сумма займа:</strong> {amount.toFixed(2)} грн
        </div>
        <div>
          <strong>Ставка:</strong> {rate.toFixed(2)}% в день
        </div>
        <div>
          <strong>Срок:</strong> {days} дней
        </div>
        <div>
          <strong>Проценты:</strong> {interest.toFixed(2)} грн
        </div>
        <div>
          <strong>К возврату:</strong> {total.toFixed(2)} грн
        </div>

        {activeTariff.get_money_url && (
          <a
            href={activeTariff.get_money_url}
            target="_blank"
            className="inline-block mt-4 px-4 py-2 bg-[#724dea] text-white rounded-md text-sm hover:bg-[#5f3ed3] transition"
          >
            Перейти на сайт
          </a>
        )}
      </div>
    </div>
  );
};

export default CalctTarifButtonsts;
