import LoanClientPage from "@/app/components/LoanClientPage";
import { catalogService } from "@/app/services/catalogService";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const t = await getTranslations({ locale: lang, namespace: "Metadata" });
  const res = await catalogService.getBySlug({
    slug,
    lang: lang === "ua" ? "uk" : "ru",
  });
  console.log(`Metadata loaded for lang: ${lang}`, {
    title: t("loans.title"),
    description: t("loans.description"),
  });

  return {
    title:
      res.page.meta_title ??
      (t("loans.title") ||
        "Займы онлайн – взять микрозайм до 100 000 рублей | Займи.ру"),
    description:
      res.page.meta_description ??
      (t("loans.description") ||
        "Оформите займ до 100 000 рублей на срочные нужды через Займи.ру. Быстро, удобно и безопасно. Сравните условия МФО и выберите лучшее предложение."),
    keywords: [
      lang === "uk" ? "позики онлайн" : "займы онлайн",
      "микрозайм",
      "МФО Украина",
      lang === "uk" ? "взяти позику" : "взять займ",
      "быстрые займы",
    ],
    openGraph: {
      title:
        res.page.meta_title ??
        (t("loans.title") ||
          "Займы онлайн – взять микрозайм до 100 000 рублей | Займи.ру"),
      description:
        res.page.meta_description ??
        (t("loans.description") ||
          "Оформите займ до 100 000 рублей на срочные нужды через Займи.ру. Быстро, удобно и безопасно. Сравните условия МФО и выберите лучшее предложение."),
      url: "https://mfoxa.com.ua/loans",
      siteName: "Займи.ру",
      type: "website",
    },
  };
}
type LoanDescriptionProps = {
  params: Promise<{ lang: string; slug: string }>;
  searchParams: Promise<{ count?: string }>;
};
export default async function LoanDescription({
  params,
  searchParams,
}: LoanDescriptionProps) {
  const { lang, slug } = await params;
  const { count } = await searchParams;
  const visibleCount = count ? parseInt(count, 10) : 3;

  const data = await catalogService.getAll({
    lang: lang === "ua" ? "uk" : "ru",
    type: "loan",
  });
  console.log(data, "data");
  const res = await catalogService.getBySlug({
    slug,
    lang: lang === "ua" ? "uk" : "ru",
  });

  console.log(res);

  return (
    <LoanClientPage
      page={res.page}
      data={data}
      visibleCount={visibleCount}
      locale={lang}
    />
  );
}
