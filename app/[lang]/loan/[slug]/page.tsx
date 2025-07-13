/* eslint-disable @typescript-eslint/no-explicit-any */
import LoanClientPage from "@/app/components/LoanClientPage";
import authorsService from "@/app/services/authorsService";
import { catalogService } from "@/app/services/catalogService";
import { getPageDates } from "@/app/services/PageDatesService";
import settingsService from "@/app/services/settingsService";
import { MicrodataLoanCatalog } from "@/app/structured-data/MicrodataLoanCatalog";
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
  let getAllSettings;

  try {
    getAllSettings = await settingsService.getSettingsByGroup(
      "loan_page",
      lang === "ua" ? "uk" : "ru"
    );
  } catch (error) {
    console.error("Ошибка при получении настроек:", error);
  }
  console.log(`Metadata loaded for lang: ${lang}`, {
    title: t("loans.title"),
    description: t("loans.description"),
  });


  return {
    title:
    getAllSettings?.settings.loan_page_meta_title ||
    
      (t("loans.title") ||
        "Займы онлайн – взять микрозайм до 100 000 рублей | Займи.ру"),
    description:
    getAllSettings?.settings.loan_page_meta_description ||
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
  let res;

  try {
    res = await catalogService.getBySlug({
      slug,
      lang: lang === "ua" ? "uk" : "ru",
    });
  } catch (error: any) {
    console.error("❌ Ошибка получения по slug:", slug);
    console.error("Axios message:", error.message);
    console.error("Axios response:", error?.response?.data || "Нет ответа");
  
    throw new Error(`Ошибка при запросе catalogService.getBySlug: ${error.message}`);
  }
  const dates = await getPageDates({ type: "loans" });
  const randomAuthor = await authorsService.getRandomAuthor(lang === 'ua' ? 'uk' : 'ru');  

  if (!res) {
    throw new Error(`Не удалось получить страницу по slug: ${slug}`);
  }
  let getAllSettings;

  try {
    getAllSettings = await settingsService.getSettingsByGroup(
      "loan_page",
      lang === "ua" ? "uk" : "ru"
    );
  } catch (error) {
    console.error("Ошибка при получении настроек:", error);
  }
  return (
    <>
      <MicrodataLoanCatalog data={data} locale={lang as 'ua' | 'ru'} slug={slug} />
      <LoanClientPage
        page={res.page}
        getAllSettings={getAllSettings}
        randomAuthor={randomAuthor}
        faqs={res.page.faqs}
        dates={dates}
        data={data}
        slug={slug}
        visibleCount={visibleCount}
        locale={lang}
      />
    </>
  );
}
