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

  const offers = mfo?.catalog_offers;
  const creditTypes = Object.entries(offers);

  console.log(mfo);

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
                    320: { slidesPerView: 1.1, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                  }}
                >
                  {creditTypes.map(([, offer], index) => (
                    <SwiperSlide key={index}>
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
                          <div className="rounded-[8px] px-[10px] py-[3px] w-max h-[25px] bg-[#e2ffe6] text-[#00ba9e] font-medium text-[14px]">
                            {offer.client_type}
                          </div>
                        </div>
                        <hr className="mb-[16px]" />

                        {["amount", "term", "rate", "rrs"].map((key, i) => {
                          const value =
                            key === "amount"
                              ? offer?.amount_from + " - " + offer?.amount_to
                              : key === "term"
                              ? offer?.term_from + " - " + offer?.term_to
                              : key === "rate"
                              ? offer?.rate
                              : offer?.real_annual_rate_from +
                                " - " +
                                offer?.real_annual_rate_to;

                          return (
                            <React.Fragment key={i}>
                              <div className="flex justify-between">
                                <p className="font-medium mb-[13px] text-[14px] text-[#67677a]">
                                  {t(key)}
                                </p>
                                <p className="text-[14px] font-medium text-[#222] text-right">
                                  {value || "—"}
                                </p>
                              </div>
                              <hr className="mb-[16px]" />
                            </React.Fragment>
                          );
                        })}

                        <a
                          href={
                            mfo?.apply_url || mfo?.get_money_button_url || "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#00ba9e] hover:bg-[#009d85] block mx-auto h-[40px] w-full text-white font-bold text-[13px] rounded-[8px] px-[17px] md:px-[32px] py-[10px] sm:w-[235px] text-center cursor-pointer"
                        >
                          {t("getMoney")}
                        </a>
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
