import CompanyRewiwsClient from "@/app/components/CompanyRewiwsClient";
import { Metadata } from "next";

type Props = { params: { company: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.company || "";  // Вместо params.slug
  const companyName = slug ? slug.replace(/-/g, " ").toUpperCase() : "КОМПАНИЯ";

  return {
    title: `Отзывы ${companyName} — честные мнения клиентов`,
    description: `Реальные отзывы о работе микрофинансовой организации ${companyName}. Узнайте оценки скорости, условий и поддержки.`,
    keywords: ["отзывы", "МФО", companyName, "рейтинг", "займы"],
    openGraph: {
      title: `Отзывы ${companyName}`,
      description: `Отзывы и рейтинг компании ${companyName}.`,
      url: `https://ваш-домен.ua/reviews/${slug}`,
      siteName: "Zaimi.ru",
      type: "website",
    },
    alternates: {
      canonical: `https://ваш-домен.ua/reviews/${slug}`,
    },
  };
}

export default function CompanyReviewsPage({ params }: Props) {
  return <CompanyRewiwsClient slug={params.company} />;  // Аналогично здесь
}
