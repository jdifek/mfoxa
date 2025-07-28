/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import AboutButtons from "@/app/components/AboutButtons";
import Bread from "@/app/components/Bread";
import { getMfoDetails } from "@/app/services/getMfoDetailsService";
import { Key } from "react";
import { getPageDates } from "@/app/services/PageDatesService";
import { MicrodataPromocodes } from "@/app/structured-data/MicrodataPromocodes";

interface Props {
  params: Promise<{ lang: string; company: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, company } = await params;
  const slug = decodeURIComponent(company || "sgroshi");

  // Преобразуем slug в название: "moneyveo-online" → "Moneyveo Online"
  const companyName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Загружаем нужный lang
  let messages;
  try {
    messages = (await import(`@/app/messages/${lang}.json`)).default;
  } catch {
    messages = (await import(`@/app/messages/ru.json`)).default;
  }

  const template = messages?.Metadata?.promotion || {
    title: "Промокоды {company}",
    description: "Скидки и бонусы {company}",
  };

  const title = template.title.replace("{company}", companyName);
  const description = template.description.replace("{company}", companyName);

  return {
    title,
    description,
    keywords: [
      lang === "uk" ? "промокоди" : "промокоды",
      companyName,
      lang === "uk" ? "знижки" : "скидки",
      lang === "uk" ? "акції" : "акции",
      lang === "uk" ? "позики" : "займы",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://mfoxa.com.ua/${lang}/mfo/${slug}/promotion`,
      siteName: "MFoxa",
    },
  };
}

function formatDate(dateStr?: string, locale: string = "uk") {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "ua" ? "uk-UA" : "ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function Promotion({ params }: Props) {
  const { lang, company } = await params;
  const companySlug = decodeURIComponent(company || "sgroshi");
  const t = await getTranslations({ locale: lang, namespace: "Promotion" });
  const tCompany = await getTranslations({
    locale: lang,
    namespace: "Promotion.company",
  });

  const { data } = await getMfoDetails(
    companySlug,
    lang === "ua" ? "uk" : "ru"
  );

  const companyName = tCompany(`${companySlug}.name`);
  const promocodes = data?.promocodes ?? [];

  const dates = await getPageDates({
    type: "promocodes",
    mfo_slug: companySlug,
  });

  console.log(promocodes, "promocodes");

  return (
    <>
      <MicrodataPromocodes
        promocodes={promocodes}
        companyName={data.name || t(`company.${companySlug}.name`)}
        companySlug={companySlug}
        locale={lang as "ua" | "ru"}
      />
      <Bread lang={lang as "ru" | "ua"} />
      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222]"
          style={{ fontFamily: "var(--Jakarta)" }}
        >
          {t("title", { company: data.name })}
        </h2>
      </div>
      <AboutButtons />

      {promocodes.length > 0 && (
        <div className="px-0 md:px-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
            {promocodes.map(
              (promo: {
                id: Key | null | undefined;
                mfo: { logo_url: any; name: any };
                title: any;
                description: any;
                valid_until: string | undefined;
                redirect_url: any;
                image_url: any;
              }) => (
                <div key={promo.id} className="p-[30px] bg-white rounded-lg">
                  <div className="flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px]">
                    <Image
                      src={promo?.image_url || "/default-logo.png"}
                      alt={promo?.mfo?.name || companyName}
                      width={100}
                      height={100}
                      className="object-contain flex-shrink-0 w-full"
                    />
                    <div className="flex flex-col gap-[10px] min-w-0 flex-1">
                      <p className="font-bold text-[16px] leading-[100%] text-[#222] line-clamp-1 overflow-hidden">
                        {promo?.title || companyName}
                      </p>
                      <p className="font-medium text-[12px] xl:text-[14px] leading-[136%] text-[#222] line-clamp-4 overflow-hidden">
                        {promo?.description || t("card.descriptionFallback")}
                      </p>
                    </div>
                  </div>

                  <hr className="my-[10px]" />

                  <div className="flex justify-between">
                    <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
                      {t("card.expiryLabel")}
                    </p>
                    <p className="font-bold text-[13px] leading-[138%] text-right text-[#222]">
                      {formatDate(promo?.valid_until, lang)}
                    </p>
                  </div>

                  <hr className="mt-[10px]" />

                  <div className="flex justify-end">
                    <a
                      href={promo?.redirect_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#00ba9e] mt-[20px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer block"
                    >
                      {t("card.button")}
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}

      <div className="px-0 md:px-[20px]">
        <p className="font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          {dates?.date_published
            ? t("metadata.addedDate") +
              " " +
              new Date(dates.date_published).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : t("metadata.addedDate")}
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {dates?.date_modified
            ? t("metadata.updatedDate") +
              " " +
              new Date(dates?.date_modified).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : t("metadata.updatedDate")}
        </p>
      </div>
    </>
  );
}
