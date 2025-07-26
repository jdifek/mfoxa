/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { Mfo } from "../services/mfosService";

const TermsOfRegistrationComponent: React.FC<{ mfo: Mfo }> = ({ mfo }) => {
  const t = useTranslations("terms");
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setIsSwiperReady(true);
    }
  }, []);

  console.log(mfo);

  const offers = mfo?.tariffs || [];

  const getClientTypeClass = (type: string) => {
    switch (type) {
      case "new":
        return "bg-[#e2ffe6] text-[#00ba9e] w-[60px] h-[22px] font-medium text-[11px] leading-[145%] px-[10px] py-[3px] rounded-[8px] font-[var(--font-family)]";
      case "repeat":
        return "bg-[#f5f5ff] text-[#724dea] w-[87px] h-[22px] font-medium text-[11px] leading-[145%] px-[10px] py-[3px] rounded-[8px] font-[var(--font-family)]";
      case "sale":
        return "bg-[#ffece2] text-[#f22a52] w-[57px] h-[22px] font-medium text-[11px] leading-[145%] px-[10px] py-[3px] rounded-[8px] font-[var(--font-family)]";
      default:
        return "bg-gray-200 text-gray-700 px-[10px] py-[3px] rounded-[8px] text-[11px]";
    }
  };

  const getClientTypeLabel = (type: string) => {
    switch (type) {
      case "new":
        return "Новый";
      case "repeat":
        return "Повторный";
      case "sale":
        return "Акция";
      default:
        return "Неизвестно";
    }
  };

  return (
    <>
      {offers.length > 0 && (
        <div className="px-0 md:px-[20px]">
          <div className="w-full mt-[20px] md:mt-[50px] mb-[92px] px-[0px] md:relative">
            <h2 className="text-[20px] sm:text-[28px] md:text-[36px] font-bold leading-none text-[#222] mb-5 sm:mb-6 md:mb-7">
              {t("title") + " " + mfo?.name || t("title")}
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
                  loop
                  spaceBetween={20}
                  slidesPerGroup={1}
                  className="pb-[100px] max-w-[1280px] mx-auto"
                  breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 }, // ✅ теперь на телефоне 2 карточки
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                  }}
                >
                  {offers.map((offer: any) => {
                    // Пример логики для client_type — можно заменить на более точную, если есть данные
                    let client_type: "new" | "repeat" | "sale" = "new";
                    if (offer.name.toLowerCase().includes("повтор"))
                      client_type = "repeat";
                    else if (offer.name.toLowerCase().includes("акци"))
                      client_type = "sale";

                    return (
                      <SwiperSlide key={offer.id}>
                        <div className="w-full rounded-lg bg-white p-[10px] md:p-[16px] shadow-md">
                          <Image
                            className="flex w-[152px] h-[49px] md:w-[333px] md:h-[107px] justify-center mx-auto mb-[16px]"
                            src={mfo?.logo_url || "/image.png"}
                            alt="photo"
                            width={333}
                            height={107}
                          />

                          <p className="mb-[16px] font-bold text-[16px] leading-[100%] text-[#222]">
                            {mfo?.name || "—"}
                          </p>

                          <hr className="mb-[16px]" />

                          <div className="flex justify-between">
                            <p className="font-medium mb-[13px] text-[14px] text-[#67677a]">
                              {t("tariff")}
                            </p>
                            <div className={getClientTypeClass(client_type)}>
                              {getClientTypeLabel(client_type)}
                            </div>
                          </div>

                          <hr className="mb-[16px]" />

                          {/* amount */}
                          <div className="flex justify-between">
                            <p className="font-medium mb-[13px] text-[14px] text-[#67677a]">
                              {t("amount")}
                            </p>
                            <p className="text-[14px] font-medium text-[#222] text-right truncate whitespace-nowrap overflow-hidden">
                              {offer.amount || "—"} ₴
                            </p>
                          </div>
                          <hr className="mb-[16px]" />

                          {/* term */}
                          <div className="flex justify-between">
                            <p className="font-medium mb-[13px] text-[14px] text-[#67677a]">
                              {t("term")}
                            </p>
                            <p className="text-[14px] font-medium text-[#222] text-right truncate whitespace-nowrap overflow-hidden">
                              {offer.term_days || "—"} дней
                            </p>
                          </div>
                          <hr className="mb-[16px]" />

                          {/* rate */}
                          <div className="flex justify-between">
                            <p className="font-medium mb-[13px] text-[14px] text-[#67677a]">
                              {t("rate")}
                            </p>
                            <p className="text-[14px] font-medium text-[#222] text-right truncate whitespace-nowrap overflow-hidden">
                              {offer.rate || "—"}%
                            </p>
                          </div>
                          <hr className="mb-[16px]" />

                          {/* RRS */}
                          <div className="flex justify-between">
                            <p className="font-medium mb-[13px] text-[14px] text-[#67677a]">
                              {t("rrs")}
                            </p>
                            <p className="text-[14px] font-medium text-[#222] text-right truncate whitespace-nowrap overflow-hidden">
                              {offer.real_annual_rate || "—"}%
                            </p>
                          </div>
                          <hr className="mb-[16px]" />

                          <a
                            href={offer.get_money_url || "#"}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="bg-[#00ba9e] hover:bg-[#009d85] block mx-auto h-[40px] w-full text-white font-bold text-[13px] rounded-[8px] px-[17px] md:px-[32px] py-[10px] sm:w-[235px] text-center cursor-pointer"
                          >
                            {t("getMoney")}
                          </a>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}

              <div
                ref={paginationRef}
                className="custom-pagination absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
              />

              <button
                className="custom-prev absolute bottom-[-60px] left-0 z-10 bg-white border border-[#e3e3ea] rounded-full p-[10px] w-[32px] h-[32px] flex items-center justify-center shadow-sm hover:bg-gray-100 hover:shadow-md"
                aria-label="Prev"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M6.74927 11.8721L1.74927 6.85188M6.74926 1.83168L1.74927 6.85188M1.74927 6.85188L12.2493 6.85188"
                    stroke="#724DEA"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </button>

              <button
                className="custom-next absolute bottom-[-60px] right-0 z-10 bg-white border border-[#e3e3ea] rounded-full p-[10px] w-[32px] h-[32px] flex items-center justify-center shadow-sm hover:bg-gray-100 hover:shadow-md"
                aria-label="Next"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7.24902 11.8721L12.249 6.85188M7.24903 1.83168L12.249 6.85188M12.249 6.85188L1.74902 6.85188"
                    stroke="#724DEA"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

type Props = {
  mfo: Mfo;
};

export default function TermsOfRegistration({ mfo }: Props) {
  return <TermsOfRegistrationComponent mfo={mfo} />;
}
