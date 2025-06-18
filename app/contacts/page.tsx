import { Metadata } from "next";
import React from "react";
import Bread from "../components/Bread";
export const metadata: Metadata = {
  title: "Контакты MFoxa | Свяжитесь с нами",
  description:
    "Контактная информация финансового маркетплейса MFoxa. Адрес, телефон, email для связи с поддержкой.",

  openGraph: {
    title: "Контакты MFoxa",
    description: "Как связаться с финансовым маркетплейсом MFoxa",
    url: "https://mfoxa.com.ua/contacts",
    images: [
      {
        url: "https://mfoxa.com.ua/og-contacts.jpg",
        width: 1200,
        height: 630,
        alt: "Контакты MFoxa",
      },
    ],
  },

  alternates: {
    canonical: "https://mfoxa.com.ua/contacts",
  },

  keywords: [
    "контакты MFoxa",
    "поддержка МФО",
    "связаться с финансовым маркетплейсом",
  ],
};
const ContactPage: React.FC = () => {
  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">

      <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[20px]  sm:mb-[30px] md:mb-[50px] bg-white rounded-lg   mt-[10px] md:mt-[30px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--second-family)" }}
        >
          Контакты
        </h2>
        <p
          className="
    text-[11px] sm:text-[12px] md:text-[13px] 
    font-[500] leading-[138%] 
    text-[#222] 
  "
          style={{ fontFamily: "var(--font-family)" }}
        >
          Сервис предоставляет актуальную информацию о кредитных продуктах
          различных банков и микрофинансовых организаций Украины. Все материалы,
          представленные на сайте, имеют исключительно ознакомительный характер.
          Подробные и точные условия кредитования необходимо уточнять на
          официальных сайтах соответствующих банков, МФО или других финансовых
          учреждений.
        </p>
      </div>
      </div>

    <div className="px-0 md:px-[20px]">
      <div className="p-[10px] sm:p-[20px] md:p-[20px] mb-[50px] bg-white rounded-lg ">
        <div className="flex justify-between flex-col sm:flex-row gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <p className="font-[var(--font-family)] font-medium text-[11px] sm:text-[12px] leading-[142%] text-[#67677a]">
              Адрес
            </p>
            <p className="font-[var(--font-family)] font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
              61174, Харківська обл., місто Харків, Архiтекторiв 32
            </p>
            <hr />
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="font-[var(--font-family)] font-medium text-[11px] sm:text-[12px] leading-[142%] text-[#67677a]">
              Email
            </p>
            <p className="font-[var(--font-family)] font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
              admin@mfoxa.com.ua
            </p>
            <hr />
          </div>

          <div className="flex flex-col gap-[10px]">
            <p className="font-[var(--font-family)] font-medium text-[11px] sm:text-[12px] leading-[142%] text-[#67677a]">
              Телефон
            </p>
            <p className="font-[var(--font-family)] font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
              +38 (093) 000-00-00
            </p>
            <hr />
          </div>
        </div>

        <div className="bg-[#00ba9e] mt-[10px] sm:mt-[20px] mb-[10px] sm:mb-[20px] md:mb-[20px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer">
          Написать нам
        </div>

        {/* 👇 Карта с рандомным адресом (Харьков) */}
        <div className="w-full h-[300px] overflow-hidden rounded-lg">
          <iframe
            src="https://maps.google.com/maps?q=Архитекторів%2032,%20Харьков&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
        
      </div>


      <div className="px-0 md:px-[20px]">
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025{" "}
        </p>{" "}
      </div>
    </>
  );
};

export default ContactPage;
