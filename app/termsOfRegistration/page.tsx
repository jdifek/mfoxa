"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Bread from "../components/Bread";

const TermsOfRegistrationComponent: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setIsSwiperReady(true); // Устанавливаем готовность Swiper только после привязки paginationRef
    }
  }, []);

  return (
    <>

    <div className="w-full mt-[20px] md:mt-[50px] mb-[92px] px-[0px] md: relative">
      <h2
        className="text-[20px] sm:text-[28px] md:text-[36px] font-bold leading-none text-[#222] mb-5 sm:mb-6 md:mb-7"
        style={{ fontFamily: "var(--second-family)" }}
      >
        Условия оформления займа в Швидко Гроші
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
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((el, index) => (
              <SwiperSlide key={index}>
                <div className=" w-full rounded-lg bg-white p-[16px] shadow-md">
                  <Image
                    className="flex justify-center mx-auto mb-[16px]"
                    src={"/image.png"}
                    alt="photo"
                    style={{ width: "333px", height: "107px" }}
                    width={333}
                    height={107}
                  />

                  <p
                    className="mb-[16px]"
                    style={{
                      fontFamily: "var(--font3)",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "100%",
                      color: "#222",
                    }}
                  >
                    Швидко Гроші
                  </p>

                  <hr className="mb-[16px]" />
                  <div className="flex justify-between">
                    <p className="font-medium  mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
                      Тариф
                    </p>
                    <div className="rounded-[8px] px-[10px] py-[3px] w-[71px] h-[25px] bg-[#e2ffe6] font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-[#00ba9e]">
                      Новый
                    </div>
                  </div>
                  <hr className="mb-[16px]" />

                  {[
                    { title: "Сумма", description: "до 50000₴" },
                    { title: "Срок", description: "до 30 дней" },
                    { title: "Ставка", description: "3%" },
                    { title: "РРС", description: "до 100000%" },
                  ].map((el, i) => (
                    <>
                      <div key={i} className="flex justify-between">
                        <p className="font-medium  mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
                          {el.title}
                        </p>
                        <div className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-right text-[#222]">
                          {el.description}
                        </div>
                      </div>
                      <hr className="mb-[16px]" />
                    </>
                  ))}
                  <div className="bg-[#00ba9e] mx-auto h-[40px] w-[200px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] sm:w-[235px] text-center cursor-pointer">
                    Получить деньги
                  </div>
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
    </>
  );
};


export default function TermsOfRegistration() {
  return <TermsOfRegistrationComponent />;
}