// app/[lang]/mfo/page.tsx
import { Metadata } from "next";
import MfoPageClient from "../../components/MfoPageClient";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { getPageDates } from "@/app/services/PageDatesService";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });

  console.log(`Metadata loaded for lang: ${lang}`, {
    title: t("home.title"),
    description: t("home.description"),
  });

  return {
    title: t("home.title"),
    description: t("home.description"),
    keywords: [
      "МФО Украина",
      "отзывы МФО",
      "рейтинг микрофинансовых организаций",
      "лучшие МФО",
      "взять займ онлайн",
    ],
    openGraph: {
      title: t("home.title"),
      description: t("home.description"),
      url: "https://mfoxa.com.ua/mfo",
      siteName: "Займи.ру",
      type: "website",
    },
  };
}

export default async function MfoPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ count?: string }>;
}) {
  const { lang } = await params;
  const { count } = await searchParams;
  const visibleCount = count ? parseInt(count, 10) : 3;

  // Получение переводов
  const mfoT = await getTranslations({ locale: lang, namespace: "MfoPage" });
  const ratingsT = await getTranslations({ locale: lang, namespace: "RatingDisplay" });

  // Отладка: вывести переводы
  console.log(`MfoPage translations for lang: ${lang}`, {
    mfoTitle: mfoT("title"),
    mfoSubtitle: mfoT("subtitle"),
    ratingsSpeed: ratingsT("speed"),
    ratingsTransparency: ratingsT("transparency"),
  });

  // Определение мобильного устройства
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const parser = new UAParser(userAgent);
  const isMobile = parser.getDevice().type === "mobile";
 
  const dates = await getPageDates({ type: "mfo" });

  console.log(dates, 'dates');
  

  return (
    <MfoPageClient
    dates={dates}
      translations={{ mfo: mfoT, ratings: ratingsT }}
      visibleCount={visibleCount}
      isMobile={isMobile}
      locale={lang}
    />
  );
}