"use client";

import AboutButtons from "@/app/components/AboutButtons";
import Bread from "@/app/components/Bread";
import TermsOfRegistration from "@/app/components/TermsOfRegistration";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";
import Dropdown from "@/app/ui/Dropdown";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  getQuestions,
  helpfulQuestions,
  notHelpfulQuestions,
  QuestionsResponse,
} from "../services/questionsService";
import QapModal from "./Modals/QapModal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PageDatesResponse } from "../services/PageDatesService";
import { getMfoDetails } from "../services/getMfoDetailsService";
import { Mfo } from "../services/mfosService";

type Props = {
  company: string;
  dates?: PageDatesResponse | null;
  locale: string;
};
const QapClient: React.FC<Props> = ({ company, dates, locale }) => {
  const t = useTranslations("QapCompanyPage");
  const [data, setData] = useState<QuestionsResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mfo, setMfo] = useState<Mfo>();
  const options =
    locale === "ua"
      ? [
          { label: "Спочатку нові", value: "newest" },
          { label: "За корисністю", value: "helpful" },
          { label: "З відповідями", value: "answered" },
          { label: "Без відповідей", value: "unanswered" },
        ]
      : [
          { label: "Сначала новые", value: "newest" },
          { label: "По полезности", value: "helpful" },
          { label: "С ответами", value: "answered" },
          { label: "Без ответов", value: "unanswered" },
        ];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getQuestions({
          page: 1,
          per_page: 10,
          mfo_slug: company,
          sort: "newest",
        });
        const response = await getMfoDetails(
          company,
          locale === "ua" ? "uk" : "ru"
        );
        setMfo(response.data);
        setData(data);
      } catch (error) {
        console.error("Ошибка при загрузке вопросов:", error);
      }
    };

    fetchReviews();
  }, [company, locale]);

  const handleHelpful = async (id: number) => {
    try {
      await helpfulQuestions(id);
      setData((prevData) => {
        if (!prevData) return prevData;
        return {
          ...prevData,
          data: prevData.data.map((item) =>
            item.id === id
              ? { ...item, helpful_count: (item.helpful_count || 0) + 1 }
              : item
          ),
        };
      });
    } catch (error) {
      console.error(`Ошибка при отметке полезности вопроса с id ${id}:`, error);
    }
  };

  const handleNotHelpful = async (id: number) => {
    try {
      await notHelpfulQuestions(id);
      setData((prevData) => {
        if (!prevData) return prevData;
        return {
          ...prevData,
          data: prevData.data.map((item) =>
            item.id === id
              ? {
                  ...item,
                  not_helpful_count: (item.not_helpful_count || 0) + 1,
                }
              : item
          ),
        };
      });
    } catch (error) {
      console.error(
        `Ошибка при отметке неполезности вопроса с id ${id}:`,
        error
      );
    }
  };

  return (
    <>
     
      {data?.data && data?.data?.length > 0 && (
        <QapModal
          mfoId={data.data[0].mfo?.id || 0}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <Bread lang={locale as "ru" | "ua"} />

      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--Jakarta)" }}
        >
          <h1>
            {typeof data?.data?.[0]?.mfo?.name === "string"
              ? t("pageTitle") + " " + data.data[0].mfo.name
              : t("pageTitle")}
          </h1>
        </h2>
      </div>

      <AboutButtons />

      <div className="px-0 md:px-[20px]">
        <div className="md:mb-[20px] mb-[10px] mt-[30px] w-full rounded-lg bg-white p-[20px] shadow-md">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--Jakarta)" }}
          >
            {t("headerTitle")}
          </h2>
          <p
            className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] leading-[138%] text-[#222]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            {t("description")}
          </p>
        </div>
      </div>

      <div className="px-0 md:px-[20px]">
        <div className="flex gap-[10px] flex-row sm:justify-between items-center">
          <Dropdown
            mfoId={data?.data?.[0]?.mfo?.id ?? 0}
            endpoint="https://mfo.qissseee.tech/api/v1/questions"
            options={options}
          />

          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#00ba9e] text-white font-bold text-[14px] rounded-[8px] px-[16px] py-[9.5px] w-full sm:w-[235px] text-center cursor-pointer"
          >
            <p className="m-0 p-0">{t("askQuestionButton")}</p>
          </div>
        </div>
      </div>

      <div className="px-0 md:px-[20px]">
        {data?.data?.map((el, i) => (
          <React.Fragment key={i}>
            <div className="p-[10px] md:p-[30px] mb-[10px] bg-white rounded-lg mt-[10px]">
              <div className="flex gap-[10px] mb-[14px]">
                {el.mfo?.logo_url ? (
                  <Image
                    src={el.mfo.logo_url}
                    alt="logo"
                    width={34}
                    height={34}
                  />
                ) : (
                  <Skeleton width={34} height={34} />
                )}
                <div className="flex flex-col">
                  <p
                    className="font-[700] text-[12px] leading-[142%] text-[#222]"
                    style={{ fontFamily: "var(--Montserrat)" }}
                  >
                    {el.mfo?.name || <Skeleton width={100} />}
                  </p>
                  <p
                    className="font-[700] text-[16px] leading-[100%] text-[#724dea]"
                    style={{ fontFamily: "var(--Manrope)" }}
                  >
                    4,8{" "}
                    <span className="text-[#67677a]">
                      {t("ratingText", { value: "из 5" })}
                    </span>
                  </p>
                </div>
              </div>

              <p
                className="font-[700] text-[12px] md:text-[15px] leading-[142%] text-[#222] mb-[10px]"
                style={{ fontFamily: "var(--Montserrat)" }}
              >
                {el.author_name || <Skeleton width={100} />}
              </p>

              <p
                className="mb-[10px]"
                style={{
                  fontFamily: "var(--Montserrat)",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "138%",
                  color: "#222",
                }}
              >
                {el.question_text || <Skeleton count={2} />}
              </p>

              {el.answer_text && (
                <div className="rounded-lg p-2.5 w-full mb-[10px] bg-[#ebebf9]">
                  <div className="flex gap-[10px]">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.4 3.96692H1V10.3669H4.2V13.5669H7.4V3.96692Z"
                        stroke="#724DEA"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 3.96692H8.6V10.3669H11.8V13.5669H15V3.96692Z"
                        stroke="#724DEA"
                        strokeWidth="2"
                      />
                    </svg>
                    <p className="font-bold text-[13px] leading-[138%] text-[#724dea]">
                      {el.answer_author || <Skeleton width={80} />}
                    </p>
                  </div>
                  <p className="ml-[26px] font-medium text-[13px] sm:text-[15px] leading-[133%] text-[#222]">
                    {el.answer_text}
                  </p>
                </div>
              )}

              <p className="mb-[14px] w-max md:mb-[18px] font-medium text-[13px] leading-[138%] text-[#724dea] underline [text-decoration-skip-ink:none] cursor-pointer hover:text-[#532bbf] hover:no-underline">
                {t("replyText")}
              </p>

              <div className="flex justify-between items-center">
                <p className="font-bold text-[13px] leading-[138%] text-[#222]">
                  {t("questionUseful")}
                </p>
                <div className="flex gap-[10px]">
                  <div
                    onClick={() => handleHelpful(el.id)}
                    className="border border-[#00ba9e] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer text-[#00ba9e] hover:bg-[#00ba9e] hover:text-white hover:border-[#00ba9e] transition-colors duration-200"
                  >
                    <p className="font-medium text-[13px] leading-[138%] text-center m-0">
                      {t("yes", { count: el.helpful_count || 0 })}
                    </p>
                  </div>

                  <div
                    onClick={() => handleNotHelpful(el.id)}
                    className="border border-[#f22a52] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer text-[#f22a52] hover:bg-[#f22a52] hover:text-white hover:border-[#f22a52] transition-colors duration-200"
                  >
                    <p className="font-medium text-[13px] leading-[138%] text-center m-0">
                      {t("no", { count: el.not_helpful_count || 0 })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="px-0 md:px-[20px]">
        <ButtonGreenBorder
          width="100%"
          text={t("showMore")}
          className="mt-[40px] mb-[50px]"
        />
      </div>

      {mfo && <TermsOfRegistration mfo={mfo} />}

      <div className="px-0 md:px-[20px]">
        <p className="font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          {dates?.date_published
            ? t("dateAdded") +
              " " +
              new Date(dates.date_published).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : t("dateAdded")}
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {dates?.date_modified
            ? t("dateUpdated") +
              " " +
              new Date(dates?.date_modified).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : t("dateUpdated")}
        </p>
      </div>
    </>
  );
};

export default QapClient;
