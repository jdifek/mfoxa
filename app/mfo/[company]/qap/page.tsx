/* eslint-disable @typescript-eslint/no-unused-vars */
import QapClient from "@/app/components/QapClient";
import { Metadata } from "next";

interface Props {
  params: Promise<{ company: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.company || "sgroshi");
  const companyName =
    slug === "sgroshi"
      ? "Швидко Гроші"
      : slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `Вопросы и ответы ${companyName} — часто задаваемые вопросы`,
    description: `Ответы на часто задаваемые вопросы по ${companyName}. Узнайте больше о займах, условиях и сервисе.`,
    keywords: ["вопросы", "FAQ", companyName, "займы", "условия", "поддержка"],
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

export default async function Qap({ params }: Props) {
  return <QapClient />;
}
