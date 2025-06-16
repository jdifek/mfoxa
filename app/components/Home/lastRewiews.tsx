"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import DetailsText from "../DetailsText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";

export const LastReviews: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setIsSwiperReady(true); // Устанавливаем готовность Swiper только после привязки paginationRef
    }
  }, []);

  return (
    <div className="w-full mt-[50px] mb-[92px] px-[20px] relative">
      <h2
        className="text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
        style={{ fontFamily: "var(--second-family)" }}
      >
        Последние отзывы на портале
      </h2>

      <div className="relative">
        {isSwiperReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              el: paginationRef.current, // Пагинация привязывается к элементу
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
            {[1, 2, 3, 4, 5, 6, 7].map((el, index) => (
              <SwiperSlide key={index}>
                <div className=" w-full rounded-lg bg-white p-[16px] shadow-md">
                  <div className="flex gap-[10px] mb-[14px]">
                    <Image
                      src="/logo (1).svg"
                      alt="logo"
                      width={34}
                      height={34}
                    />
                    <div className="flex flex-col">
                      <p
                        className="font-[700] text-[12px] leading-[142%] text-[#222]"
                        style={{ fontFamily: "var(--font-family)" }}
                      >
                        SlonCredit
                      </p>
                      <p
                        className="font-[700] text-[16px] leading-[100%] text-[#724dea]"
                        style={{ fontFamily: "var(--font3)" }}
                      >
                        4,8 <span className="text-[#67677a]">из 5</span>
                      </p>
                    </div>
                  </div>
                  <p
                    className="font-[700] text-[12px] md:text-[15px] leading-[142%] text-[#222] mb-[10px]"
                    style={{ fontFamily: "var(--font-family)" }}
                  >
                    Инна
                  </p>
                  <DetailsText />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        

        {/* Кастомный контейнер для пагинации */}
        <div
          ref={paginationRef}
          className="custom-pagination absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
        />

        {/* Кнопка ВЛЕВО */}
        <button
          className="custom-prev absolute bottom-[-60px] left-0 z-10 bg-white border border-[#e3e3ea] rounded-full p-[10px] w-[32px] h-[32px] flex items-center justify-center shadow-sm"
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

        {/* Кнопка ВПРАВО */}
        <button
          className="custom-next absolute bottom-[-60px] right-0 z-10 bg-white border border-[#e3e3ea] rounded-full p-[10px] w-[32px] h-[32px] flex items-center justify-center shadow-sm"
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
        width={"100%"}
        text="Все отзывы"
        className="mt-[90px]"
      />

      {/* Стили для точного отображения 4 элементов и позиционирования пагинации */}
      <style jsx global>{`
        .swiper {
          overflow-x: hidden; /* Убираем горизонтальный скролл */
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
          gap: 8px; /* Увеличил gap для лучшей видимости */
          z-index: 10;
        }
        .swiper-pagination-bullet {
          width: 10px; /* Увеличил размер для видимости */
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
