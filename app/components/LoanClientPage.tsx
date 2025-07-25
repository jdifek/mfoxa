"use client";

import React, { useState } from "react";
import OftenQuestions from "../components/OftenQuestions";
import Questions from "../components/Home/Questions";
import Dropdown from "../ui/Dropdown";
import Bread from "../components/Bread";
import { AboutButtons } from "../components/Loan/AboutButtons";
import { useTranslations } from "next-intl";
import {
  GetCatalogListResponse,
  CatalogPageFull,
  FaqItem,
  GetCatalogBySlugResponse,
} from "../services/catalogService";
import CreditsList from "./CreditsList";
import { MfoDetails } from "../services/getMfoDetailsService";
import { PageDatesResponse } from "../services/PageDatesService";
import InfoHelpfulClient from "./InfoHelpfulClient";
import { AuthorRandomResponse } from "../services/authorsService";
import { SettingsGroupResponse } from "../services/settingsService";
import DetailsText from "./DetailsText";
import { LastReviews } from "./Home/LastRewiews";
import { HomeData } from "../services/HomeService";

type LoanClientPageProps = {
  visibleCount: number;
  homeData?: HomeData;
  locale: string;
  data: GetCatalogListResponse;
  page?: CatalogPageFull;
  mfos?: MfoDetails[];
  dates?: PageDatesResponse;
  slug?: string;
  faqs?: FaqItem[];
  randomAuthor: AuthorRandomResponse;
  getAllSettings: SettingsGroupResponse | undefined;
  dataBySlug?: GetCatalogBySlugResponse;
};

const LoanClientPage: React.FC<LoanClientPageProps> = ({
  visibleCount,
  locale,
  data,
  dates,
  slug,
  faqs,
  homeData,
  randomAuthor,
  getAllSettings,
  page,
}) => {
  const [currentVisibleCount, setVisibleCount] = useState(visibleCount);
  const t = useTranslations("Loans");
  console.log(faqs);

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
            {page?.h1_title
              ? page.h1_title
              : getAllSettings?.settings.loan_page_title
              ? getAllSettings.settings.loan_page_title
              : t("title") || "Займы"}
          </h1>
          {page?.description_under_title ? (
            <div
              className="font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]"
              dangerouslySetInnerHTML={{ __html: page.description_under_title }}
            />
          ) : (
            <p className="font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
              {getAllSettings?.settings.loan_page_description ||
                t("description") ||
                "Подберите и оформите лучший для себя займ на срочную покупку или хозяйственные нужды. Получение микрозайма принять 1 000 до 100 000 рублей через сервис «Займи.ру»"}
            </p>
          )}
        </div>
      </div>

      <AboutButtons data={data} />

      <div className="px-0 md:px-[20px]">
        <Dropdown options={options} lang={locale as "ua" | "ru"} />
      </div>

      <CreditsList
        slug={slug}
        locale={locale}
        visibleCount={currentVisibleCount}
        handleShowMore={handleShowMore}
      />

      {homeData && <LastReviews recent_reviews={homeData.recent_reviews} />}

      <DetailsText html={getAllSettings?.settings.loan_page_text} />
      {faqs && faqs.length > 0 ? (
        <OftenQuestions faqs={faqs} />
      ) : (
        <OftenQuestions />
      )}
      <InfoHelpfulClient randomAuthor={randomAuthor} />

      <Questions />
      <div className="px-0 md:px-[20px]">
        <p className="font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          {dates?.date_published
            ? t("metadata.addedDate") +
              " " +
              new Date(dates.date_published).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : t("metadata.addedDate")}
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {dates?.date_modified
            ? t("metadata.updatedDate") +
              " " +
              new Date(dates?.date_modified).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : t("metadata.updatedDate")}
        </p>
      </div>
    </>
  );
};

export default LoanClientPage;
