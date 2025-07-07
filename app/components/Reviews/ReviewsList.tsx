"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type ReviewsListProps = {
  locale: string;
  reviewsCount: number;
  selectedSortKey: string;
};

const ReviewsList: React.FC<ReviewsListProps> = ({
  locale,
  reviewsCount,
  selectedSortKey,
}) => {
  const searchParams = useSearchParams();
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const sortMap: Record<string, SortType> = {
    ["Сначала новые" || "newest"]: "newest",
    ["Сначала старые" || "rating_asc"]: "rating_asc",
    ["По популярности" || "helpful"]: "helpful",
    ["По рейтингу" || "rating_desc"]: "rating_desc",
  };

  const selectedSort = sortMap[selectedSortKey] || "newest";

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      const data = await getReviews({ page: 1, sort: selectedSort });
      setReviews(data.data);
      setLoading(false);
    };
    fetchReviews();
  }, [selectedSort]);

  return (
    <div className="px-0 md:px-[20px]">
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.slice(0, reviewsCount).map((review) => (
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
                    {review.rating} <span className="text-[#67677a]">из 5</span>
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
                Показать полностью
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsList;
