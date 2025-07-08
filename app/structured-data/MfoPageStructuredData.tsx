// app/structured-data/MfoPageStructuredData.tsx
import { getTranslations } from "next-intl/server";

type MfoPageStructuredDataProps = {
  lang: "ru" | "ua";
};

export const MfoPageStructuredData = async ({ lang }: MfoPageStructuredDataProps) => {
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });

  const reviewData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("mfo.title") || "Рейтинг МФО",
    url: `https://mfoxa.com.ua/${lang}/mfo`,
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Мария П.", // Замените на реального автора, если есть
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
  };

  return <script type="application/ld+json">{JSON.stringify(reviewData)}</script>;
};