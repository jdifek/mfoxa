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
  getReviews,
  markReviewHelpful,
  markReviewNotHelpful,
  ReviewsApiResponse,
} from "../services/reviewService";
import ReviewModal from "./Modals/ReviewModal";
import AnswerQap from "./Modals/AnswerQap";
import { PageDatesResponse } from "../services/PageDatesService";

const reviews = Array(12)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    date: "20.10.2024",
  }));

type CircleRatingProps = {
  value: number;
  color: string;
};

const CircleRating: React.FC<CircleRatingProps> = ({ value, color }) => (
  <svg width="32" height="32" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="23" stroke="#eee" strokeWidth="2" fill="none" />
    <circle
      cx="25"
      cy="25"
      r="23"
      stroke={color}
      strokeWidth="4"
      fill="none"
      strokeDasharray={`${(value / 5) * 144}, 144`}
      transform="rotate(-90 25 25)"
      strokeLinecap="round"
    />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill={color}
    >
      {value}
    </text>
  </svg>
);

export default function CompanyRewiwsClient({
  slug,
  dates,
  lang,
}: {
  slug: string;
  dates?: PageDatesResponse | null;
  lang: string;
}) {
  const t = useTranslations("Reviews");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formatRating = (ratingStr: string | undefined) => {
    if (!ratingStr) return "";
    const rating = parseFloat(ratingStr);
    if (isNaN(rating)) return "";

    return rating.toFixed(1).replace(".", ",");
  };
  // Меняем булево на id открытого отзыва или null
  const [openReplyId, setOpenReplyId] = useState<number | null>(null);

  const INITIAL_COUNT = 3;
  const LOAD_MORE_COUNT = 3;
  const [data, setData] = useState<ReviewsApiResponse | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, reviews.length));
  };
  const options =
    lang === "ua"
      ? [
          { label: "Спочатку нові", value: "newest" },
          { label: "За корисністю", value: "helpful" },
          { label: "За рейтингом ↓", value: "rating_desc" },
          { label: "За рейтингом ↑", value: "rating_asc" },
        ]
      : [
          { label: "Сначала новые", value: "newest" },
          { label: "По полезности", value: "helpful" },
          { label: "По рейтингу ↓", value: "rating_desc" },
          { label: "По рейтингу ↑", value: "rating_asc" },
        ];

  useEffect(() => {
    console.log("useEffect");

    const fetchReviews = async () => {
      try {
        const data = await getReviews({
          mfo_slug: slug,
          sort: "newest",
        });
        setData(data);
        console.log(data, "fetched questions");
      } catch (error) {
        console.error("Ошибка при загрузке вопросов:", error);
      }
    };

    fetchReviews();
  }, [slug]);

  const ratingsColors = {
    speed: "#00BDA5",
    conditions: "#92C83E",
    support: "#CC9B00",
    website: "#EF3E4A",
  };
  const getColorForKey = (key: string) =>
    ratingsColors[key as keyof typeof ratingsColors] || "#000";

  const handleVote = async (id: number, type: "helpful" | "not_helpful") => {
    if (!data) return;

    try {
      const voteFn =
        type === "helpful" ? markReviewHelpful : markReviewNotHelpful;
      const response = await voteFn(id);

      const updatedReviews = data.data.map((review) => {
        if (review.id === id) {
          return {
            ...review,
            helpful_count: response.helpful_count,
            not_helpful_count: response.not_helpful_count,
          };
        }
        return review;
      });

      setData({ ...data, data: updatedReviews });
    } catch (error) {
      console.error("Ошибка при голосовании:", error);
    }
  };

  // Функция для закрытия модалки ответа
  const closeAnswerModal = () => setOpenReplyId(null);

  return (
    <>
      <Bread />

      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--Jakarta)" }}
        >
          {t("title", {
            company: data?.mfo?.name || t(`company.${slug}.name`),
          })}
        </h2>
      </div>

      <AboutButtons />
      <div className="px-0 md:px-[20px]">
        <div className="flex flex-col md:flex-row items-center justify-between md:mb-[20px] mb-[10px] sm:mb-[40px] mt-[30px] w-full rounded-lg bg-white p-[20px] shadow-md">
          <div className="flex gap-[14px] sm:gap-[16px] md:gap-[20px] items-center mb-4 md:mb-0">
            {data?.mfo?.logo_url ? (
              <Image
                src={data.mfo.logo_url}
                alt={t("logoAlt")}
                width={100}
                height={50}
                className="w-[163px] md:w-[300px] h-[52px] md:h-[96px]"
              />
            ) : (
              <div className="w-[163px] md:w-[300px] h-[52px] md:h-[96px] bg-gray-200 animate-pulse rounded" />
            )}

            <div className="flex flex-col gap-[1px] items-center">
              <p className="text-nowrap font-medium text-[11px] leading-[145%] text-[#222]">
                {t("mfoCount")}
              </p>
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
                {data?.mfo?.rating_position || t("rank")}
              </p>
            </div>
            <div className="flex flex-col gap-[1px] items-center">
              <p className="font-medium text-[11px] leading-[145%] text-[#222]">
                {t("reviewsCountLabel")}
              </p>
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
                {data?.mfo?.rating_count || t("reviewsCount")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[10px] items-center w-full md:w-auto">
            <div className="relative w-[74px] h-[74px]">
              <Image
                src="/Frame 163.png"
                alt="rating"
                width={74}
                height={74}
                className="object-contain"
              />

              {/* Контент поверх PNG */}
              <div className="absolute inset-1 mt-2 flex flex-col items-center justify-center">
                <span className="text-[#82C600] text-[15px] font-bold leading-none">
                  {formatRating(String(data?.mfo?.rating_average ?? 0))}
                </span>
                <span className="text-black text-[10px] font-bold">
                  {data?.mfo?.rating_count} место
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] w-full">
              <p className="font-bold text-[12px] text-start text-nowrap sm:text-[14px] md:text-[16px] leading-[100%] text-[#222]">
                {t("ratingsTitle", {
                  company: data?.mfo?.name || t(`company.${slug}.name`),
                })}
              </p>

              <div className="grid grid-cols-[auto_1fr] md:grid-cols-4 gap-[10px] md:gap-[14px] items-center">
                <div className="md:hidden flex justify-center">
                  <Image
                    src="/Frame 163 (1).png"
                    alt={t("ratingIconAlt")}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-[10px] md:contents">
                  {data?.mfo?.ratings &&
                    Object.entries(data.mfo.ratings).map(
                      ([key, rating], index) => (
                        <div
                          key={key}
                          className="flex items-center gap-[6px] md:gap-[10px]"
                        >
                          <CircleRating
                            value={rating.value}
                            color={getColorForKey(key)}
                          />
                          <span
                            className="font-medium text-[11px] leading-[145%] text-[#222]"
                            style={{ maxWidth: "70px" }}
                          >
                            {t(`ratings.${index}.label`)}
                          </span>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="flex gap-[10px] justify-between items-center">
          <Dropdown
            endpoint="https://mfo.qissseee.tech/api/v1/reviews"
            mfoId={data?.mfo.id}
            options={options}
          />
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#00ba9e] text-white font-bold text-[14px] rounded-[8px] px-[16px] py-[9.5px] w-full sm:w-[235px] text-center cursor-pointer"
          >
            <p className="m-0 p-0">{t("writeReview")}</p>
          </div>
          {data?.mfo?.id && (
            <ReviewModal
              mfoId={data?.mfo?.id}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        {Array.isArray(data?.data) &&
          data.data.slice(0, visibleCount).map((review, i) => {
            // Лог отзыва для дебага
            console.log("Review:", review);

            return (
              <React.Fragment key={review.id}>
                <AnswerQap
                  parent_id={review.id}
                  author_name={review.author_name || t(`reviews.${i}.user`)}
                  date={new Date(review.created_at).toLocaleDateString()}
                  isOpen={openReplyId === review.id}
                  onClose={closeAnswerModal}
                />
                <div className="p-[10px] md:p-[30px] bg-white rounded-lg mt-[10px]">
                  <div className="flex gap-[10px] mb-[14px]">
                    <Image
                      src={review.mfo?.logo_url}
                      alt={t("reviewLogoAlt")}
                      width={34}
                      height={34}
                    />
                    <div className="flex flex-col">
                      <p
                        className="font-[700] text-[12px] leading-[142%] text-[#222]"
                        style={{ fontFamily: "var(--Montserrat)" }}
                      >
                        {review.author_name || t(`reviews.${i}.user`)}
                      </p>
                      <p
                        className="font-[500] text-[12px] leading-[100%] text-[#724dea]"
                        style={{ fontFamily: "var(--Manrope)" }}
                      >
                        <span className="text-[#67677a]">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>

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
                    {review.review_text}
                  </p>

                  {review.admin_response && (
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
                          {review.admin_response_author ||
                            t(`reviews.${i}.replyUser`)}
                        </p>
                      </div>

                      <p className="ml-[26px] font-medium text-[13px] sm:text-[15px] leading-[133%] text-[#222]">
                        {review.admin_response || t(`reviews.${i}.replyText`)}
                      </p>
                    </div>
                  )}

                  <p
                    onClick={() => setOpenReplyId(review.id)}
                    className="mb-[14px] w-max md:mb-[18px] font-medium text-[13px] leading-[138%] text-[#724dea] underline [text-decoration-skip-ink:none] cursor-pointer hover:text-[#532bbf] hover:no-underline"
                  >
                    {t("reply")}
                  </p>

                  <div className="flex justify-between items-center">
                    <p className="font-bold text-[13px] leading-[138%] text-[#222]">
                      {t("reviewUseful")}
                    </p>
                    <div className="flex gap-[10px]">
                      <div
                        onClick={() => handleVote(review.id, "helpful")}
                        className="border border-[#00ba9e] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer text-[#00ba9e] hover:bg-[#00ba9e] hover:text-white hover:border-[#00ba9e] transition-colors duration-200"
                      >
                        <p className="font-medium text-[13px] leading-[138%] text-center m-0">
                          {t("yes", { count: review.helpful_count })}
                        </p>
                      </div>

                      <div
                        onClick={() => handleVote(review.id, "not_helpful")}
                        className="border border-[#f22a52] rounded-lg px-[10px] py-[8px] whitespace-nowrap h-[34px] flex items-center justify-center cursor-pointer text-[#f22a52] hover:bg-[#f22a52] hover:text-white hover:border-[#f22a52] transition-colors duration-200"
                      >
                        <p className="font-medium text-[13px] leading-[138%] text-center m-0">
                          {t("no", { count: review.not_helpful_count })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
      {visibleCount < reviews.length && (
        <div className="px-0 md:px-[20px]">
          <ButtonGreenBorder
            width="100%"
            text={t("showMore")}
            className="mt-[20px] md:mt-[40px] mb-[20px] md:mb-[50px]"
            onClick={handleLoadMore}
          />
        </div>
      )}

      {data && data.mfo && <TermsOfRegistration mfo={data.mfo} />}
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
}
