
import { Metadata } from "next";
import LoanClientPage from "@/app/components/LoanClientPage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });

  console.log(`Metadata loaded for lang: ${lang}`, {
    title: t("loans.title"),
    description: t("loans.description"),
  });

  return {
    title: t("loans.title") || "Займы онлайн – взять микрозайм до 100 000 рублей | Займи.ру",
    description:
      t("loans.description") ||
      "Оформите займ до 100 000 рублей на срочные нужды через Займи.ру. Быстро, удобно и безопасно. Сравните условия МФО и выберите лучшее предложение.",
    keywords: [
      lang === "uk"
        ? "позики онлайн"
        : "займы онлайн",
      "микрозайм",
      "МФО Украина",
      lang === "uk"
        ? "взяти позику"
        : "взять займ",
      "быстрые займы",
    ],
    openGraph: {
      title: t("loans.title") || "Займы онлайн – взять микрозайм до 100 000 рублей | Займи.ру",
      description:
        t("loans.description") ||
        "Оформите займ до 100 000 рублей на срочные нужды через Займи.ру. Быстро, удобно и безопасно. Сравните условия МФО и выберите лучшее предложение.",
      url: "https://mfoxa.com.ua/loans",
      siteName: "Займи.ру",
      type: "website",
    }
  };
}

type LoanPageProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ count?: string }>;
};

export default async function LoanPageWrapper({
  params,
  searchParams,
}: LoanPageProps) {
  const { lang } = await params;
  const { count } = await searchParams;
  const visibleCount = count ? parseInt(count, 10) : 3;

 

  return (
    <LoanClientPage
      visibleCount={visibleCount}
      locale={lang}
    />
  );
}