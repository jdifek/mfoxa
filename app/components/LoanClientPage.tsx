"use client";

import React, { useState } from "react";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import OftenQuestions from "../components/OftenQuestions";
import Questions from "../components/Home/Questions";
import Dropdown from "../ui/Dropdown";
import Bread from "../components/Bread";
import { AboutButtons } from "../components/Loan/AboutButtons";
import { useTranslations } from "next-intl";
import {
  GetCatalogListResponse,
  CatalogPageFull,
} from "../services/catalogService";
import CreditsList from "./CreditsList";
import { MfoDetails } from "../services/getMfoDetailsService";

type LoanClientPageProps = {
  visibleCount: number;
  locale: string;
  data: GetCatalogListResponse;
  page?: CatalogPageFull;
  mfos?: MfoDetails[];
};

const LoanClientPage: React.FC<LoanClientPageProps> = ({
  visibleCount,
  locale,
  data,
  page,
  mfos,
}) => {
  const [currentVisibleCount, setVisibleCount] = useState(visibleCount);
  const t = useTranslations("Loans");
  const options =
    locale === "ua"
      ? [
          { label: "За рейтингом ↓", value: "rating" },
          { label: "За сумою ↑", value: "amount_asc" },
          { label: "За сумою ↓", value: "amount_desc" },
          { label: "За ставкою ↑", value: "rate_asc" },
          { label: "За ставкою ↓", value: "rate_desc" },
        ]
      : [
          { label: "По рейтингу ↓", value: "rating" },
          { label: "По сумме ↑", value: "amount_asc" },
          { label: "По сумме ↓", value: "amount_desc" },
          { label: "По ставке ↑", value: "rate_asc" },
          { label: "По ставке ↓", value: "rate_desc" },
        ];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Bread lang={locale as "ru" | "ua"} />
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[20px] md:mb-[30px] bg-white rounded-lg mt-[10px] md:mt-[30px]">
          <h1 className="mb-[20px] font-bold text-[20px] md:text-[36px] leading-[100%] text-[#222]">
            {page?.h1_title ? page.h1_title : t("title") || "Займы"}
          </h1>
          <p className="font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
            {page?.description_under_title ||
              t("description") ||
              "Подберите и оформите лучший для себя займ на срочную покупку или хозяйственные нужды. Получение микрозайма принять 1 000 до 100 000 рублей через сервис «Займи.ру»"}
          </p>
        </div>
      </div>

      <AboutButtons data={data} />

      <div className="px-0 md:px-[20px]">
        <Dropdown options={options} lang={locale as "ua" | "ru"} />
      </div>

      <CreditsList
        mfos={mfos}
        locale={locale}
        visibleCount={currentVisibleCount}
      />

      {currentVisibleCount < (data.data.length || 100) && (
        <div className="px-0 mb-5 md:px-[20px]">
          <ButtonGreenBorder
            text={t("showMore") || "Показать еще"}
            width="100%"
            className="sm:!w-[256px]"
            onClick={handleShowMore}
          />
        </div>
      )}

      <OftenQuestions />
      <Questions />
      <div className="px-0 md:px-[20px]">
        <p className="font-medium text-[13px] leading-[138%] mt-[30px] text-[#67677a]">
          {t("metadata.addedDate") || "Дата добавления страницы 12.10.2025"}
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {t("metadata.updatedDate") || "Дата изменения страницы 12.10.2025"}
        </p>
      </div>
    </>
  );
};

export default LoanClientPage;
