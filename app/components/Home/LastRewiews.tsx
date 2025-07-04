"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Review } from "@/app/services/HomeService";

type Props = {
  recent_reviews: Review[];
};
export const LastReviews: React.FC<Props> = ({ recent_reviews }) => {
  const t = useTranslations("LastReviews");
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (paginationRef.current) {
      setIsSwiperReady(true);
    }
  }, []);

  return (
    <div className="w-full mb-[30px] md:mb-[60px] px-[0px] md:px-[20px] relative">
      <h2
        className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] md:mb-[30px]"
        style={{ fontFamily: "var(--Jakarta)" }}
      >
        {pathname.startsWith("/mfo/") && pathname.split("/").length === 3
          ? t("sectionTitleMFO")
          : t("sectionTitle")}
      </h2>

      <div className="relative">
        {isSwiperReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            spaceBetween={20}
            slidesPerGroup={1}
            className="pb-[100px] max-w-[1280px] mx-auto"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {recent_reviews.map((el, index) => (
              <SwiperSlide key={index} className="no-scrollbar">
                <div className="w-full rounded-lg bg-white p-[10px] md:p-[16px] shadow-md">
                  <div className="flex gap-[10px] mb-[14px]">
                    <Image
                      src={el.mfo.logo_url}
                      alt="logo"
                      width={34}
                      height={34}
                    />
                    <div className="flex flex-col">
                      <p
                        className="font-[700] text-[12px] leading-[142%] text-[#222]"
                        style={{ fontFamily: "var(--Montserrat)" }}
                      >
                        {el.mfo.name}
                      </p>
                      <p
                        className="font-[700] text-[16px] leading-[100%] text-[#724dea]"
                        style={{ fontFamily: "var(--Manrope)" }}
                      >
                        {el.rating} <span className="text-[#67677a]">из 5</span>
                      </p>
                    </div>
                  </div>
                  <p
                    className="font-[700] text-[12px] md:text-[15px] leading-[142%] text-[#222] mb-[10px]"
                    style={{ fontFamily: "var(--Montserrat)" }}
                  >
                    {el.author_name}
                  </p>
                  <p
                    className="mb-[10px] text-[13px] md:text-[15px]"
                    style={{
                      fontFamily: "var(--Montserrat)",
                      fontWeight: 500,
                      lineHeight: "138%",
                      color: "#222",
                    }}
                  >
                                      {el.review_text}

                  </p>

                  <p
                    className="text-[13px] w-max md:text-[15px] cursor-pointer underline text-[#6239e8] transition-colors duration-200 hover:text-[#9278ea]"
                    style={{
                      fontFamily: "var(--Montserrat)",
                      fontWeight: 500,
                      lineHeight: "138%",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    {t("showFull")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div
          ref={paginationRef}
          className="custom-pagination absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
        />

        <button
          className="custom-prev cursor-pointer absolute bottom-[-50px] left-0 z-10 bg-white border border-[#e3e3ea] rounded-full p-[10px] w-[32px] h-[32px] flex items-center justify-center shadow-sm transition-all duration-200 ease-in-out hover:bg-gray-100 hover:shadow-md"
          aria-label="Prev"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.74927 11.8721L1.74927 6.85188M6.74926 1.83168L1.74927 6.85188M1.74927 6.85188L12.2493 6.85188"
              stroke="#724DEA"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>

        <button
          className="custom-next cursor-pointer absolute bottom-[-50px] right-0 z-10 bg-white border border-[#e3e3ea] rounded-full p-[10px] w-[32px] h-[32px] flex items-center justify-center shadow-sm transition-all duration-200 ease-in-out hover:bg-gray-100 hover:shadow-md"
          aria-label="Next"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24902 11.8721L12.249 6.85188M7.24903 1.83168L12.249 6.85188M12.249 6.85188L1.74902 6.85188"
              stroke="#724DEA"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      <ButtonGreenBorder
        link="/reviews"
        width={"100%"}
        text={t("button")}
        className="mt-[70px]"
      />

      <style jsx global>{`
        .swiper {
          overflow-x: hidden;
        }
        .swiper-slide {
          width: calc((1280px - 40px - 60px) / 4);
        }
        @media (max-width: 1279px) {
          .swiper-slide {
            width: calc((100% - 40px - 60px) / 4);
          }
        }
        @media (max-width: 1023px) {
          .swiper-slide {
            width: calc((100% - 40px - 20px) / 2);
          }
        }
        @media (max-width: 639px) {
          .swiper-slide {
            width: calc(100% - 40px);
          }
        }
        .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }
        .custom-pagination {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          width: auto;
          display: inline-flex;
          gap: 8px;
          z-index: 10;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #e3e3ea;
          opacity: 1;
          margin: 0;
          border-radius: 50%;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active {
          background: #724dea;
        }
      `}</style>
    </div>
  );
};
