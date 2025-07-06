// app/[lang]/reviews/page.tsx
import { Metadata } from "next";
import ReviewsClient from "@/app/components/ReviewsPage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });

  return {
    title: t("reviewss.title") || "Отзывы об МФО Украины — Честные мнения клиентов",
    description:
      t("reviewss.description") ||
      "Читайте отзывы клиентов о микрофинансовых организациях Украины. Реальный опыт, оценки и советы от заемщиков.",
    keywords: ["отзывы МФО", "МФО Украина", "займы онлайн", "мнение клиентов"],
    openGraph: {
      title: t("reviewss.title") || "Отзывы об МФО Украины",
      description:
        t("reviewss.description") ||
        "Узнайте, что говорят клиенты о микрокредитных компаниях Украины.",
      url: "https://mfoxa.com.ua/reviews",
      type: "website",
    },
  };
}

export default async function ReviewsPageWrapper({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ count?: string; sort?: string }>;
}) {
  const { lang } = await params;
  const { count, sort } = await searchParams;
  const reviewsCount = count ? parseInt(count, 10) : 8;


  return (
    <ReviewsClient
      locale={lang}
      reviewsCount={reviewsCount}
      selectedSortKey={sort || ""}
    />
  );
}
