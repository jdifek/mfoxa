// app/structured-data/FAQPage.tsx
import { useTranslations } from "next-intl";

const QUESTIONS_COUNT = 5;

type FAQPageProps = {
  namespace: string;
};

export const FAQPage = ({ namespace }: FAQPageProps) => {
  const t = useTranslations(namespace);

  const questions = Array.from({ length: QUESTIONS_COUNT }).map((_, i) => ({
    name: t(`questions.${i}.name`),
    content: t(`questions.${i}.content`),
  }));

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((question) => ({
      "@type": "Question",
      name: question.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: question.content,
      },
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(faqData)}</script>;
};