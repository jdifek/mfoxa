/* eslint-disable @typescript-eslint/no-explicit-any */
// components/MfoPageClient.tsx
import Image from "next/image";
import React from "react";
import ButtonGreenBorder from "../ui/ButtonGreenBorder";
import OftenQuestions from "../components/OftenQuestions";
import InfoHelpful from "../components/InfoHelpful";
import Questions from "../components/Home/Questions";
import DetailsText from "../components/DetailsText";
import Bread from "../components/Bread";
import { MfoListStructuredData } from "../structured-data/MfoListStructuredData";
import { PageDatesResponse } from "../services/PageDatesService";

const ratings = [
  { key: "speed", value: 4.8, color: "#00BDA5" },
  { key: "transparency", value: 4.1, color: "#92C83E" },
  { key: "support", value: 3.8, color: "#CC9B00" },
  { key: "usability", value: 2.8, color: "#EF3E4A" },
];

const tops = [
  { name: "Швидко гроші", img: "/2.svg" },
  { name: "Credit 7", img: "/1.svg" },
  { name: "SLON Credit", img: "/3.svg" },
  { name: "Швидко гроші", img: "/2.svg" },
  { name: "Credit 7", img: "/1.svg" },
  { name: "SLON Credit", img: "/3.svg" },
  { name: "Швидко гроші", img: "/2.svg" },
  { name: "Credit 7", img: "/1.svg" },
  { name: "SLON Credit", img: "/3.svg" },
];

type CircleRatingProps = {
  value: number;
  color: string;
};

const CircleRating: React.FC<CircleRatingProps> = ({ value, color }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 50 50"
    role="img"
    aria-label={`Rating: ${value}`}
  >
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

type MfoPageClientProps = {
  translations: {
    mfo: (key: string, params?: any) => string;
    ratings: (key: string, params?: any) => string;
  };
  visibleCount?: number;
  isMobile: boolean;
  locale: string;
  dates: PageDatesResponse;
};

export default async function MfoPageClient({
  translations,
  visibleCount = 3,
  isMobile,
  locale,
  dates,
}: MfoPageClientProps) {
  const { mfo, ratings: ratingsT } = translations;

  const companies = tops.slice(0, visibleCount).map((top, index) => ({
    name: top.name,
    url: `https://mfoxa.com.ua/mfo/${encodeURIComponent(
      top.name.toLowerCase().replace(/\s+/g, "-")
    )}`,
    ratingValue: 4.5,
    reviewCount: 100 + index * 10,
    position: index + 1,
  }));

  return (
    <>
      <MfoListStructuredData companies={companies} />
      <Bread />

      <div className="p-[10px] md:p-[30px] mb-[20px] sm:mb-[30px] md:mb-[50px] bg-white rounded-lg mx-[0px] md:mx-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--Jakarta)" }}
        >
          {mfo("title")}
        </h2>
        <p
          className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] leading-[138%] text-[#222]"
          style={{ fontFamily: "var(--Montserrat)" }}
        >
          {mfo("subtitle")}
        </p>
      </div>

      {isMobile ? (
        <div className="px-[0px] md:px-[20px] mb-[20px] flex flex-wrap gap-[20px]">
          {tops.slice(0, visibleCount).map((top, i) => (
            <div
              key={i}
              className="w-full rounded-[20px] bg-white p-[10px] md:p-[16px] shadow-md"
            >
              <header className="flex gap-[10px] items-center mb-[10px]">
                <Image
                  src={top.img}
                  alt={top.name}
                  width={89}
                  height={50}
                  className="object-contain"
                />
                <p className="text-[#222] font-bold text-[16px]">{top.name}</p>
              </header>
              <div className="flex gap-[10px]">
                <Image
                  src={"/Frame 163.svg"}
                  alt=""
                  width={10}
                  height={10}
                  style={{ height: "74px", width: "74px" }}
                />
                <div className="grid grid-cols-2 gap-[16px]">
                  {ratings.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-[10px] items-center"
                      aria-label={`${ratingsT(item.key)}: ${item.value}`}
                    >
                      <CircleRating value={item.value} color={item.color} />
                      <div>
                        <p className="text-[11px] font-medium text-[#222]">
                          {ratingsT(item.key)}
                        </p>
                        <p className="text-[11px] text-[#9393a3] font-medium">
                          {mfo("rank", { rank: 12 })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ButtonGreenBorder
                className="mt-[20px]"
                width="100%"
                text={mfo("readMore")}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="p-[30px] mb-[50px] bg-white rounded-lg mx-[20px] mt-[30px]">
          {tops.slice(0, visibleCount).map((top, i) => (
            <React.Fragment key={i}>
              <div className="flex gap-[20px] items-center">
                <Image
                  className="w-[210px] h-[72px] object-contain"
                  src={"/Frame 163.png"}
                  width={210}
                  height={72}
                  alt="img"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="font-medium text-[15px] leading-[133%] text-[#222]">
                    {mfo("ratingsTitle", { name: top.name })}
                  </p>
                  <div className="grid grid-cols-4 gap-[16px] text-black text-sm">
                    {ratings.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-[10px]"
                        aria-label={`${ratingsT(item.key)}: ${item.value}`}
                      >
                        <CircleRating value={item.value} color={item.color} />
                        <div className="flex flex-col">
                          <span
                            style={{
                              fontFamily: "var(--Montserrat)",
                              fontWeight: 500,
                              fontSize: "11px",
                              lineHeight: "145%",
                              color: "#222",
                            }}
                          >
                            {ratingsT(item.key)}
                          </span>
                          <p
                            style={{
                              fontFamily: "var(--Montserrat)",
                              fontWeight: 500,
                              fontSize: "11px",
                              lineHeight: "145%",
                              color: "#9393a3",
                            }}
                          >
                            {mfo("rank", { rank: 12 })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr className="mt-[14px] mb-[20px]" />
            </React.Fragment>
          ))}
        </div>
      )}

      {visibleCount < tops.length && (
        <div className="px-0 md:px-[20px]">
          <a href={`?count=${visibleCount + 3}`}>
            <ButtonGreenBorder
              width="100%"
              text={mfo("showMore")}
              className="mt-[20px] mb-[30px]"
            />
          </a>
        </div>
      )}

      <DetailsText />
      <OftenQuestions />
      <InfoHelpful locale={locale} />
      <Questions />
      <div className="px-0 md:px-[20px]">
        <p
          className="font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]"
          aria-label="Дата додавання"
        >
          {dates.date_published
            ?  mfo("dateAdded") + new Date(dates.date_published).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : mfo("dateAdded")}
        </p>
        <p
          className="font-medium text-[13px] leading-[138%] text-[#67677a]"
          aria-label="Дата оновлення"
        >
           {dates.date_modified
            ?  mfo("dateUpdated") + new Date(dates.date_modified).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : mfo("dateUpdated")}
        </p>
      </div>
    </>
  );
}
