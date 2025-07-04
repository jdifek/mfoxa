import { Metadata } from "next";
import React from "react";
import Bread from "../../components/Bread";
import { ContactStructuredData } from "../../structured-data/ContactStructuredData";
import { getTranslations } from "next-intl/server";

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
  params: Promise<{ lang: string }>;
};

const ContactPage: React.FC<ContactPageProps> = async ({ params }) => {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "Contacts" });

  // Debug: Log translations
  console.log("Contact translations:", {
    lang,
    title: t("title"),
    description: t("description"),
    addressLabel: t("addressLabel"),
    address: t("address"),
    emailLabel: t("emailLabel"),
    email: t("email"),
    phoneLabel: t("phoneLabel"),
    phone: t("phone"),
    button: t("button"),
    mapQuery: t("mapQuery"),
    addedDate: t("metadata.addedDate"),
    updatedDate: t("metadata.updatedDate"),
  });

  return (
    <>
      <ContactStructuredData />
      <Bread />
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

      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[20px] mb-[50px] bg-white rounded-lg">
          <div className="flex justify-between flex-col sm:flex-row gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <p className="font-medium text-[11px] sm:text-[12px] leading-[142%] text-[#67677a]">
                {t("addressLabel") || "Адрес"}
              </p>
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
                {t("address") || "61174, Харьковская обл., город Харьков, ул. Архитекторов 32"}
              </p>
              <hr />
            </div>

            <div className="flex flex-col gap-[10px]">
              <p className="font-medium text-[11px] sm:text-[12px] leading-[142%] text-[#67677a]">
                {t("emailLabel") || "Email"}
              </p>
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
                {t("email") || "admin@mfoxa.com.ua"}
              </p>
              <hr />
            </div>

            <div className="flex flex-col gap-[10px]">
              <p className="font-medium text-[11px] sm:text-[12px] leading-[142%] text-[#67677a]">
                {t("phoneLabel") || "Телефон"}
              </p>
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[133%] text-[#222]">
                {t("phone") || "+38 (093) 000-00-00"}
              </p>
              <hr />
            </div>
          </div>

          <div className="bg-[#00ba9e] mt-[10px] sm:mt-[20px] mb-[10px] sm:mb-[20px] md:mb-[20px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer">
            {t("button") || "Написать нам"}
          </div>

          <div className="w-full h-[300px] overflow-hidden rounded-lg">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                t("mapQuery") || "Архитекторов 32, Харьков"
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
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
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {t("metadata.addedDate") || "Дата добавления страницы 12.10.2025"}
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {t("metadata.updatedDate") || "Дата изменения страницы 12.10.2025"}
        </p>
      </div>
    </>
  );
};

export default ContactPage;