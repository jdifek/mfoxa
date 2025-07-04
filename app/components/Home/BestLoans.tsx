"use client";

import ButtonGreenBorder from "@/app/ui/ButtonGreenBorder";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Mfo } from "@/app/services/HomeService";

type Props = {
  best_credits: Mfo[];
};

const BestLoans: React.FC<Props> = ({ best_credits }) => {
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const t = useTranslations("BestLoans");

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  if (!best_credits || best_credits.length === 0) return null;

  return (
    <>
      <div className="w-full px-[0px] md:px-[20px]">
        <h2
          className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
          style={{ fontFamily: "var(--Jakarta)" }}
        >
          {t("title")}
        </h2>

        <div className="flex justify-between flex-col gap-[20px] md:grid md:grid-cols-2 lg:grid-cols-3 ">
          {best_credits.slice(0, visibleCount).map((loan, index) => (
            <div
              key={index}
              className="w-full h-auto rounded-[20px] bg-white p-[10px] md:p-[16px] shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
            >
              <header className="flex gap-[10px] items-center mb-[10px]">
                <Image
                  src={loan.logo_url || "/placeholder-logo.svg"}
                  alt={loan.name}
                  height={50}
                  width={50}
                  className="w-[89px] h-[50px] object-contain"
                />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[#222] font-bold text-[16px] leading-[100%]">
                    {loan.name}
                  </p>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/Frame 5.svg"
                      height={14}
                      width={14}
                      alt="star"
                      className="w-[14px] h-[14px]"
                    />
                    <p className="text-[13px] text-[#222] font-medium leading-[138%]">
                      {loan.rating_average ?? "-"}
                      <span className="text-[#67677a]">/5</span>
                    </p>
                    <p className="text-[13px] font-medium underline text-[#00ba9e] hover:text-[#009e88] cursor-pointer transition-colors duration-200">
                      {loan.rating_count ?? 0} {t("reviews")}
                    </p>
                  </div>
                </div>
              </header>

              <main className="flex flex-col gap-[10px]">
                {/* Новый клиент */}
                {loan.credit_offers?.new_client && (
                  <div className="border border-[#00ba9e] rounded-[8px] p-[7px] md:p-[12px] ">
                    <p className="text-[#00ba9e] text-[12px] font-bold">
                      {t("newLoan")}
                    </p>
                    <div className="border-t border-[#e0e0e0] mt-[10px] pt-[10px] flex justify-center gap-[10px] text-center">
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("amount")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.new_client.amount?.formatted ?? "-"}
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("term")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.new_client.term?.formatted ?? "-"}
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("rate")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.new_client.rate?.formatted ?? "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Повторный клиент */}
                {loan.credit_offers?.repeat_client && (
                  <div className="border border-[#724DEA] rounded-[8px] p-[7px] md:p-[12px] ">
                    <p className="text-[#724DEA] text-[12px] font-bold">
                      {t("repeatLoan")}
                    </p>
                    <div className="border-t border-[#e0e0e0] mt-[10px] pt-[10px] flex justify-center gap-[10px] text-center">
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("amount")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.repeat_client.amount?.formatted ?? "-"}
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("term")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.repeat_client.term?.formatted ?? "-"}
                        </p>
                      </div>
                      <div className="flex flex-col text-[12px]">
                        <p className="text-[#67677a] font-medium">
                          {t("rate")}
                        </p>
                        <p className="text-[#222] font-bold">
                          {loan.credit_offers.repeat_client.rate?.formatted ?? "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Детали */}
                <div className="space-y-[10px] text-[12px] text-[#9393a3]">
                  <div className="flex justify-between">
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">РРС</p>
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      {loan.quick_info?.rpc_range ?? "-"}
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">Юр. лицо</p>
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      {loan.legal_entity ?? "-"}
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">Лицензия НБУ</p>
                    <p className="text-[10px] font-medium leading-[120%] text-[#9393a3]">
                      {loan.nbu_license ?? "-"}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <Link
                      href={`/mfo/${loan.slug ?? ""}`}
                      className="underline text-[10px] font-medium leading-[120%] text-[#00ba9e]"
                      style={{
                        fontFamily: "var(--Montserrat)",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      {t("termsLink")}
                    </Link>
                  </div>
                  <hr />
                  <div>
                    <Link
                      href={`/loan`}
                      className="underline text-[10px] font-medium leading-[120%] text-[#00ba9e]"
                      style={{
                        fontFamily: "var(--Montserrat)",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      {t("warningLink")}
                    </Link>
                  </div>
                </div>
              </main>

              <footer className="mt-[10px] flex sm:flex-row gap-[10px] items-center justify-between flex-wrap">
                <ButtonGreenBorder
                  link="/loan"
                  width="100%"
                  text={t("details")}
                  className="flex-1"
                />
                <Link
                      href={`/loan`}
                      className="bg-[#00ba9e] hover:bg-[#009d85] transition-all duration-200 ease-in-out whitespace-nowrap flex-1 text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer"
                >
                  {t("getMoney")}
                </Link>
              </footer>
            </div>
          ))}
        </div>
      </div>

      {visibleCount < best_credits.length && (
        <div className="mt-[20px] flex justify-center">
          <ButtonGreenBorder
            text={t("showMore")}
            width="100%"
            className="sm:!w-[256px]"
            onClick={handleShowMore}
          />
        </div>
      )}
    </>
  );
};

export default BestLoans;
