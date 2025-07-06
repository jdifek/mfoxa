// components/ReviewsPage.tsx
import Image from "next/image";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import OftenQuestions from "../components/OftenQuestions";
import Questions from "../components/Home/Questions";
import InfoHelpful from "../components/InfoHelpful";
import Dropdown from "../ui/Dropdown";
import Bread from "../components/Bread";
import { getTranslations } from "next-intl/server";
import { getReviews, SortType } from "../services/reviewService";

type ReviewsClientProps = {
  locale: string;
  reviewsCount: number;
  selectedSortKey: string; // из URL
};

const MAX_REVIEWS = 24;
const INCREMENT = 8;

const ReviewsClient: React.FC<ReviewsClientProps> = async ({
  locale,
  reviewsCount,
  selectedSortKey,
}) => {
  const t = await getTranslations({ locale, namespace: "ReviewsPage" });

  const sortMap: Record<string, SortType> = {
    [t("sort.newest") || "Сначала новые" || "newest"]: "newest",
    [t("sort.oldest") || "Сначала старые" || "rating_asc"]: "rating_asc",
    [t("sort.popularity") || "По популярности" || " helpful"]: "helpful",
    [t("sort.rating") || "По рейтингу" || "rating_desc"]: "rating_desc",
  };
  const options =
    locale === "ua"
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

  const selectedSort = sortMap[selectedSortKey] || "newest";

  const reviews = await getReviews({ page: 1, sort: selectedSort });

  console.log(reviews, "rew");

  return (
    <>
      <Bread />
     

      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[20px] sm:mb-[50px] md:mb-[50px] bg-white rounded-lg">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--Jakarta)" }}
          >
            {t("title") || "Все отзывы об МФО Украины"}
          </h2>
          <p
            className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] leading-[138%] text-[#222]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            {t("description") ||
              "Клиенты микрокредитной компании «Екапуста» получают доступ в личный кабинет. Это сервис, через который можно управлять займом, оплачивать его, переносить даты возврата. ЛК работает бесплатно и доступен везде, где есть выход в интернет."}
          </p>

          <div className="flex gap-[40px] mt-[20px]">
            <div className="flex flex-col">
              <p className="font-bold text-[20px] sm:text-[28px] md:text-[36px] leading-[100%] text-[#222]">
                {t("companiesCount") || "188"}
              </p>
              <p className="font-medium text-[11px] leading-[145%] text-[#222]">
                {t("companies") || "Компаний"}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[20px] sm:text-[28px] md:text-[36px] leading-[100%] text-[#222]">
                {t("reviewsCount") || "53 690"}
              </p>
              <p className="font-medium text-[11px] leading-[145%] text-[#222]">
                {t("reviews") || "Отзывов"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <Dropdown
          endpoint="https://mfo.qissseee.tech/api/v1/reviews"
          options={options}
        />
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.data.slice(0, reviewsCount).map((review) => (
            <div
              key={review.id}
              className="w-full rounded-lg bg-white p-[16px] shadow-md"
            >
              <div className="flex gap-[10px] mb-[14px]">
                <Image
                  src={review.mfo.logo_url}
                  alt={review.mfo.name}
                  width={34}
                  height={34}
                />
                <div className="flex flex-col">
                  <p className="font-[700] text-[12px] leading-[142%] text-[#222]">
                    {review.mfo.name}
                  </p>
                  <p className="font-[700] text-[16px] leading-[100%] text-[#724dea]">
                    {review.rating}{" "}
                    <span className="text-[#67677a]">{t("outOf5")}</span>
                  </p>
                </div>
              </div>
              <p className="font-[700] text-[12px] md:text-[15px] leading-[142%] text-[#222] mb-[10px]">
                {review.author_name}
              </p>
              <p className="mb-[10px] text-[13px] md:text-[15px] font-[500] text-[#222] leading-[138%]">
                {review.review_text}
              </p>
              <p className="underline cursor-pointer w-max text-[13px] md:text-[15px] text-[#6239e8] hover:text-[#9278ea]">
                {t("showFull")}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Show "Load More" button only if not at maximum */}
      {reviewsCount < MAX_REVIEWS && (
        <div className="px-0 md:px-[20px]">
          <a href={`?count=${reviewsCount + INCREMENT}`}>
            <ButtonGreenBorder
              text={t("showMore") || "Показать еще"}
              className="mt-[20px] mx-auto"
              width="256px"
            />
          </a>
        </div>
      )}
      <OftenQuestions />
      <InfoHelpful locale={locale} />
      <Questions />
    </>
  );
};

export default ReviewsClient;
