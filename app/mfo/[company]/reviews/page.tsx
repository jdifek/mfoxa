import CompanyRewiwsClient from "@/app/components/CompanyRewiwsClient";
import { Metadata } from "next";

interface Props {
  params: Promise<{ company: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.company || "sgroshi");
  const companyName = slug === "sgroshi"
    ? "Швидко Гроші"
    : slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `Отзывы ${companyName} — честные мнения клиентов`,
    description: `Реальные отзывы о работе микрофинансовой организации ${companyName}. Узнайте оценки скорости, условий и поддержки.`,
    keywords: ["отзывы", "МФО", companyName, "рейтинг", "займы"],
    openGraph: {
      title: `Отзывы ${companyName}`,
      description: `Отзывы и рейтинг компании ${companyName}.`,
      url: `https://mfoxa.com.ua/mfo/${slug}/reviews`, // Заменено на реальный домен
      siteName: "MFoxa", // Исправлено: Zaimi.ru → MFoxa
      type: "website",
    },
    alternates: {
      canonical: `https://mfoxa.com.ua/mfo/${slug}/reviews`, // Заменено на реальный домен
    },
  };
}

export default async function CompanyReviewsPage({ params }: Props) {
  const resolvedParams = await params;
  const companySlug = decodeURIComponent(resolvedParams.company || "sgroshi");
  return <CompanyRewiwsClient slug={companySlug} />;
}