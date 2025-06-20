
import { Metadata } from "next";
import ReviewsClient from "../components/ReviewsPage";

export const metadata: Metadata = {
  title: "Отзывы об МФО Украины — Честные мнения клиентов",
  description:
    "Читайте отзывы клиентов о микрофинансовых организациях Украины. Реальный опыт, оценки и советы от заемщиков.",
  keywords: ["отзывы МФО", "МФО Украина", "займы онлайн", "мнение клиентов"],
  openGraph: {
    title: "Отзывы об МФО Украины",
    description:
      "Узнайте, что говорят клиенты о микрокредитных компаниях Украины.",
    url: "https://ваш-домен.ua/reviews",
    type: "website",
  },
};

export default function ReviewsPageWrapper() {
  return <ReviewsClient />;
}
