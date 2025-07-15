"use client";
import React, { useState } from "react";
import Image from "next/image";
import RatingDisplay from "./RatingDisplay";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { Mfo } from "@/app/services/HomeService";

type TopUkrMFOProps = {
  top_mfos: Mfo[];
};

export const TopUkrMFO: React.FC<TopUkrMFOProps> = ({ top_mfos }) => {
  const t = useTranslations("TopUkrMFO");
  const lang = useLocale();

  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  const formatRating = (ratingStr: string | undefined) => {
    if (!ratingStr) return "";
    const rating = parseFloat(ratingStr);
    if (isNaN(rating)) return "";

    return rating.toFixed(1).replace(".", ",");
  };

  const getRatingColor = (ratingStr: string | undefined) => {
    if (!ratingStr) return "text-gray-500";
    const rating = parseFloat(ratingStr);
    if (isNaN(rating)) return "text-gray-500";

    if (rating >= 0 && rating <= 1) return "text-red-900"; // dark red
    if (rating === 2) return "text-red-600"; // red
    if (rating === 3) return "text-orange-500"; // orange
    if (rating === 4) return "text-green-600"; // green
    if (rating === 5) return "text-green-500"; // bright green

    if (rating > 1 && rating < 2) return "text-red-700";
    if (rating > 2 && rating < 3) return "text-red-500";
    if (rating > 3 && rating < 4) return "text-orange-400";
    if (rating > 4 && rating < 5) return "text-green-500";

    return "text-green-500";
  };

  return (
    <div className="w-full mt-[50px] px-[0px] md:px-[20px]">
      <h2
        className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
        style={{ fontFamily: "var(--Jakarta)" }}
      >
        {t("title")}
      </h2>

      <div
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]",
          visibleCount >= top_mfos.length && "mb-[30px] md:mb-[50px]"
        )}
      >
        {top_mfos.slice(0, visibleCount).map((top, index) => (
          <div
            key={index}
            className="w-full rounded-[20px] bg-white p-[16px] shadow-md"
          >
            <header className="flex gap-[10px] items-center mb-[10px]">
              <Image
                src={top.logo_url}
                alt={top.name}
                width={89}
                height={50}
                className="object-contain"
              />
              <p className="text-[#222] font-bold text-[16px] leading-[100%]">
                {top.name}
              </p>
            </header>
            <div className="mb-[10px] flex gap-[10px]">
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
                  <span
                    className={`${getRatingColor(
                      String(top?.rating_average)
                    )} text-[15px] font-bold leading-none`}
                  >
                    {formatRating(String(top?.rating_average))}
                  </span>
                  <span className="text-black text-[10px] font-bold">
                    {top?.rating_count} место
                  </span>
                </div>
              </div>

              <RatingDisplay
                ratings={[
                  {
                    label: top.ratings.speed.label,
                    value: top.ratings.speed.value,
                  },
                  {
                    label: top.ratings.conditions.label,
                    value: top.ratings.conditions.value,
                  },
                  {
                    label: top.ratings.support.label,
                    value: top.ratings.support.value,
                  },
                  {
                    label: top.ratings.website.label,
                    value: top.ratings.website.value,
                  },
                ]}
              />
            </div>
            <ButtonGreenBorder
              link={`/${lang}/mfo/${top.slug}`}
              className="mt-[20px]"
              width="100%"
              text={t("details")}
            />
          </div>
        ))}
      </div>

      <div className="px-0">
        <ButtonGreenBorder
          text={t("showMore")}
          link={`/${lang}/mfo`}
          width="100%"
          className="mt-[20px] md:mt-[40px] mb-[30px] md:mb-[50px]"
          onClick={handleShowMore}
        />
      </div>
    </div>
  );
};
