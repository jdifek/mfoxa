import QapClient from "@/app/components/QapClient";
import { Metadata } from "next";

type Props = { params: { company: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.company || "";
  const companyName = slug ? slug.replace(/-/g, " ").toUpperCase() : "КОМПАНИЯ";

  return {
    title: `Вопросы и ответы ${companyName} — часто задаваемые вопросы`,
    description: `Ответы на часто задаваемые вопросы по ${companyName}. Узнайте больше о займах, условиях и сервисе.`,
    keywords: [
      "вопросы",
      "FAQ",
      `${companyName}`,
      "займы",
      "условия",
      "поддержка",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Вопросы и ответы ${companyName} — часто задаваемые вопросы`,
      description: `Ответы на часто задаваемые вопросы по ${companyName}. Узнайте больше о займах, условиях и сервисе.`,
      type: "website",
    },
  };
}

export default function Qap() {
  return <QapClient />;
}
