"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getReviews, SortType } from "../services/reviewService";
import { useTranslations } from "next-intl";
import { MicrodataAllReviews } from "../structured-data/MicrodataAllReviews";
import Link from "next/link";

type Review = {
  id: number;
  mfo: { name: string; logo_url: string; slug: string };
  rating: number;
  author_name: string;
  review_text: string;
  created_at: string;
};

type ReviewsListProps = {
  locale: string;
  reviewsCount: number;
  selectedSortKey: string;
};

const ReviewsList: React.FC<ReviewsListProps> = ({
  reviewsCount,
  selectedSortKey,
  locale,
}) => {
  const t = useTranslations("ReviewsPage");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const sortMap: Record<string, SortType> = {
    newest: "newest",
    helpful: "helpful",
    rating_desc: "rating_desc",
    rating_asc: "rating_asc",
  };

  const selectedSort = sortMap[selectedSortKey] || "newest";

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const data = await getReviews({ page: 1, sort: selectedSort });
        console.log("data", data);
        setReviews(data.data || []);
        console.log(data.data);
      } catch (error) {
        console.error("Ошибка загрузки отзывов:", error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [selectedSort]);

  return (
    <>
      <MicrodataAllReviews reviews={reviews} locale={locale as "ru" | "ua"} />
      <div className="px-0 md:px-[20px]">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.isArray(reviews) &&
              reviews.slice(0, reviewsCount).map((review) => (
                <div
                  key={review.id}
                  className="w-full  border-[1px] border-[#d6d6f9] rounded-lg  h-[243px] bg-white p-[16px] shadow-md"
                >
                  <div className="flex gap-[10px] mb-[14px]">
                    <Image
                      src={review.mfo.logo_url}
                      alt={review.mfo.name}
                      className="w-[34px] h-[34px] object-contain"
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
                  <p className="mb-[10px] text-[13px] md:text-[15px] font-[500] text-[#222] leading-[138%] line-clamp-5">
                    {review.review_text}
                  </p>
                  <Link href={`/${locale}/mfo/${review.mfo.slug}/reviews`}>
                    <p className="underline cursor-pointer w-max text-[13px] md:text-[15px] text-[#6239e8] hover:text-[#9278ea]">
                      {t("showFull")}
                    </p>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewsList;
