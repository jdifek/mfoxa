"use client";

import React, { useState, useEffect } from "react";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import Image from "next/image";
import OftenQuestions from "../components/OftenQuestions";
import Questions from "../components/Home/Questions";
import Dropdown from "../ui/Dropdown";
import Bread from "../components/Bread";
import { AboutButtons } from "../components/Loan/AboutButtons";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getMFOs } from "../services/mfosService";
import { MfoDetails } from "../services/getMfoDetailsService";

type LoanClientPageProps = {
  visibleCount: number;
  locale: string;
};

const LoanClientPage: React.FC<LoanClientPageProps> = ({
  visibleCount,
  locale,
}) => {
  const [currentVisibleCount, setVisibleCount] = useState(visibleCount);
  const [credits, setCredits] = useState<MfoDetails[]>([]);
  const t = useTranslations("Loans");
  const options = locale === "ua"
  ? [
      { label: "За рейтингом ↓", value: "rating" },      // рейтинг по убыванию
      { label: "За сумою ↑", value: "amount_asc" },      // сумма по возрастанию
      { label: "За сумою ↓", value: "amount_desc" },     // сумма по убыванию
      { label: "За ставкою ↑", value: "rate_asc" },      // ставка по возрастанию
      { label: "За ставкою ↓", value: "rate_desc" },     // ставка по убыванию
    ]
  : [
      { label: "По рейтингу ↓", value: "rating" },
      { label: "По сумме ↑", value: "amount_asc" },
      { label: "По сумме ↓", value: "amount_desc" },
      { label: "По ставке ↑", value: "rate_asc" },
      { label: "По ставке ↓", value: "rate_desc" },
    ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMFOs({ lang: locale === "ua" ? "uk" : "ru" });
      console.log(data, "data.best_credits");

      setCredits(data);
    };
    fetchData();
  }, [locale]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[20px] md:mb-[30px] bg-white rounded-lg mt-[10px] md:mt-[30px]">
          <h2 className="mb-[20px] font-bold text-[20px] md:text-[36px] leading-[100%] text-[#222]">
            {t("title") || "Займы"}
          </h2>
          <p className="font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
            {t("description") ||
              "Подберите и оформите лучший для себя займ на срочную покупку или хозяйственные нужды. Получение микрозайма от 1 000 до 100 000 рублей через сервис «Займи.ру»"}
          </p>
        </div>
      </div>

      <AboutButtons locale={locale} />

      <div className="px-0 md:px-[20px]">
        <Dropdown options={options} endpoint="https://mfo.qissseee.tech/api/v1/mfos" />
      </div>

      <div className="px-0 md:px-[20px] mb-5">
        <div className="flex justify-between flex-col gap-[20px] md:grid md:grid-cols-2 lg:grid-cols-3 ">
          {credits.slice(0, currentVisibleCount).map((loan, index) => (
            <div
              key={index}
              className="w-full h-auto rounded-[20px] bg-white p-[10px] md:p-[16px] shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
            >
              <header className="flex gap-[10px] items-center mb-[10px]">
                <Image
                  src={loan.logo_url || "/placeholder-logo.svg"}
                  alt={loan.name}
                  height={50}
                  width={50}
                  className="w-[89px] h-[50px] object-contain"
                />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[#222] font-bold text-[16px] leading-[100%]">
                    {loan.name}
                  </p>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/Frame 5.svg"
                      height={14}
                      width={14}
                      alt="star"
                      className="w-[14px] h-[14px]"
                    />
                    <p className="text-[13px] text-[#222] font-medium leading-[138%]">
                      {loan.rating_average ?? "-"}
                      <span className="text-[#67677a]">/5</span>
                    </p>
                    <p className="text-[13px] font-medium underline text-[#00ba9e] hover:text-[#009e88] cursor-pointer transition-colors duration-200">
                      {loan.rating_count ?? 0} {t("reviews")}
                    </p>
                  </div>
                </div>
              </header>

              <main className="flex flex-col gap-[10px]">
                {/* Новый клиент */}
                {loan.catalog_offers?.map((offer, i) => (
                  <div
                    key={i}
                    className={`border ${
                      offer.client_type === "new"
                        ? "border-[#00ba9e]"
                        : "border-[#724DEA]"
                    } rounded-[8px] p-[7px] md:p-[12px]`}
                  >
                    <p
                      className={`text-[12px] font-bold ${
                        offer.client_type === "new"
                          ? "text-[#00ba9e]"
                          : "text-[#724DEA]"
                      }`}
                    >
                      {offer.client_type === "new"
                        ? t("newLoan")
                        : t("repeatLoan")}
                    </p>
                    <div className="border-t border-[#e0e0e0] mt-[10px] pt-[10px] flex justify-center gap-[10px] text-center">
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("amount")}
                        </p>
                        <p className="text-[#222] font-bold">
                          від {offer.amount_from} до {offer.amount_to}
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("term")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {offer.term_from} - {offer.term_to} днів
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("rate")}
                        </p>
                        <p className="text-[#222] font-bold">{offer.rate}%</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Повторный клиент */}
                {loan.credit_offers?.repeat_client && (
                  <div className="border border-[#724DEA] rounded-[8px] p-[7px] md:p-[12px] ">
                    <p className="text-[#724DEA] text-[12px] font-bold">
                      {t("repeatLoan")}
                    </p>
                    <div className="border-t border-[#e0e0e0] mt-[10px] pt-[10px] flex justify-center gap-[10px] text-center">
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("amount")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.repeat_client.amount?.formatted ??
                            "-"}
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("term")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.repeat_client.term?.formatted ??
                            "-"}
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("rate")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.repeat_client.rate?.formatted ??
                            "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Детали */}
                <div className="space-y-[10px] text-[12px] text-[#9393a3]">
                  <div className="flex justify-between">
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      РРС
                    </p>
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      {loan.quick_info?.rpc_range ?? "-"}
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      Юр. лицо
                    </p>
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      {loan.legal_entity ?? "-"}
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      Лицензия НБУ
                    </p>
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      {loan.nbu_license ?? "-"}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <Link
                      href={`/mfo/${loan.slug ?? ""}`}
                      className="underline text-[10px] font-medium leading-[120%] text-[#00ba9e]"
                      style={{
                        fontFamily: "var(--Montserrat)",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      {t("termsLink")}
                    </Link>
                  </div>
                  <hr />
                  <div>
                    <Link
                      href={`/loan`}
                      className="underline text-[10px] font-medium leading-[120%] text-[#00ba9e]"
                      style={{
                        fontFamily: "var(--Montserrat)",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      {t("warningLink")}
                    </Link>
                  </div>
                </div>
              </main>

              <footer className="mt-[10px] flex sm:flex-row gap-[10px] items-center justify-between flex-wrap">
                <ButtonGreenBorder
                  link={`/mfo/${loan.slug}`}
                  width="100%"
                  text={t("details")}
                  className="flex-1"
                />
                <Link
                  href={`/mfo/${loan.slug}`}
                  className="bg-[#00ba9e] hover:bg-[#009d85] transition-all duration-200 ease-in-out whitespace-nowrap flex-1 text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer"
                >
                  {t("getMoney")}
                </Link>
              </footer>
            </div>
          ))}
        </div>
      </div>

      {currentVisibleCount < credits.length && (
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
