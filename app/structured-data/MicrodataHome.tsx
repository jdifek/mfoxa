// app/structured-data/MicrodataHome.tsx
import Script from "next/script";
import { getHomeData } from "@/app/services/HomeService";

type MicrodataHomeProps = {
  locale: "ru" | "ua";
  homeData: Awaited<ReturnType<typeof getHomeData>>;
};

export const MicrodataHome = async ({ locale, homeData }: MicrodataHomeProps) => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MFoxa - Финансовый маркетплейс",
    url: `https://mfoxa.com.ua/${locale}`,
    description: "Подберите и оформите лучшие займы онлайн в Украине.",
  };

  const bestLoansSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Лучшие кредиты",
    itemListElement: homeData.best_credits.map((credit, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "FinancialService",
        name: credit.name,
        url: `https://mfoxa.com.ua/${locale}/mfo/${credit.slug}`,
      },
    })),
  };

  const topMfoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Топ МФО Украины",
    itemListElement: homeData.top_mfos.map((mfo, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "FinancialService",
        name: mfo.name,
        url: `https://mfoxa.com.ua/${locale}/mfo/${mfo.slug}`,
      },
    })),
  };

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Последние отзывы",
    itemListElement: homeData.recent_reviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author_name || "Аноним",
        },
        datePublished: review.created_at,
        reviewBody: review.review_text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating || 0,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: {
          "@type": "FinancialService",
          name: review.mfo.name,
          url: `https://mfoxa.com.ua/${locale}/mfo/${review.mfo.slug}`,
        },
      },
    })),
  };

  return (
    <>
      <Script id="home-webpage-schema" type="application/ld+json">
        {JSON.stringify(webPageSchema, null, 2)}
      </Script>
      <Script id="best-loans-schema" type="application/ld+json">
        {JSON.stringify(bestLoansSchema, null, 2)}
      </Script>
      <Script id="top-mfo-schema" type="application/ld+json">
        {JSON.stringify(topMfoSchema, null, 2)}
      </Script>
      <Script id="recent-reviews-schema" type="application/ld+json">
        {JSON.stringify(reviewsSchema, null, 2)}
      </Script>
    </>
  );
};