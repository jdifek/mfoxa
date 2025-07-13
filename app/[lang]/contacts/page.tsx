import React from "react";
import { Metadata } from "next";
import Bread from "../../components/Bread";
import { ContactStructuredData } from "../../structured-data/ContactStructuredData";
import { getTranslations } from "next-intl/server";
import ContactContent from "@/app/components/ContactContent";
import { getPageDates } from "@/app/services/PageDatesService";

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

type ContactPageProps = {
  params: { lang: string };
};

const ContactPage = async ({ params }: ContactPageProps) => {
  const { lang } = params;
  const t = await getTranslations({ locale: lang, namespace: "Contacts" });
  const dates = await getPageDates({ type: "contacts" });

  return (
    <>
      <ContactStructuredData />
      <Bread lang={lang as "ua" | "ru"} />
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[20px] sm:mb-[30px] md:mb-[50px] bg-white rounded-lg mt-[10px] md:mt-[30px]">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--Jakarta)" }}
          >
            {t("title") || "Контакты"}
          </h2>
          <p
            className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] leading-[138%] text-[#222]"
            style={{ fontFamily: "var(--Montserrat)" }}
          >
            {t("description") ||
              "Сервис предоставляет актуальную информацию о кредитных продуктах различных банков и микрофинансовых организаций Украины..."}
          </p>
        </div>
      </div>

      {/* Клиентский компонент с состоянием */}
      <ContactContent />

      <div className="px-0 md:px-[20px]">
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {t("metadata.addedDate") +
            ": " +
            new Date(dates.date_published).toLocaleDateString("ru-RU") ||
            "Дата добавления страницы 12.10.2025"}
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {t("metadata.updatedDate") +
            ": " +
            new Date(dates.date_modified).toLocaleDateString("ru-RU") ||
            "Дата изменения страницы 12.10.2025"}
        </p>
      </div>
    </>
  );
};

export default ContactPage;
