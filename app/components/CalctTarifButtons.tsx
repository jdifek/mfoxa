"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Tariff = {
  id: number;
  name: string;
  amount: string;
  rate: string;
  term_days: number;
  real_annual_rate: string;
  get_money_url: string;
};

type Props = {
  tariffs: Tariff[];
  onSelect?: (tariff: Tariff) => void;
};

const CalctTarifButtonsts = ({ tariffs, onSelect }: Props) => {
  const t = useTranslations("Catalog");
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
          key={tariff.id}
          itemScope
          itemType="https://schema.org/LoanOrCredit"
        >
          <meta itemProp="name" content={tariff.name} />
          <div itemProp="amount" itemScope itemType="https://schema.org/MonetaryAmount">
            <meta itemProp="currency" content="UAH" />
            <span itemProp="value">{tariff.amount}</span>
          </div>
          <span itemProp="interestRate">{tariff.rate}</span>
          <div itemProp="loanTerm" itemScope itemType="https://schema.org/QuantitativeValue">
            <span itemProp="value">{tariff.term_days}</span>
            <meta itemProp="unitText" content="DAY" />
          </div>
          <div itemProp="provider" itemScope itemType="https://schema.org/FinancialService">
            <span itemProp="name">{tariff.name}</span>
          </div>
          <meta itemProp="description" content={tariff.name} />
          <span itemProp="annualPercentageRate">{tariff.real_annual_rate}</span>
          <a itemProp="url" href={tariff.get_money_url}>{t("getMoney")}</a>
          <div
            onClick={() => handleClick(tariff)}
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
        </div>
      ))}
    </div>
  );
};

export default CalctTarifButtonsts;