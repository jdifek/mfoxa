import { Metadata } from "next";
import MfoPageClient from "../components/MfoPageClient";

export const metadata: Metadata = {
  title: "Рейтинг МФО Украины – отзывы клиентов",
  description:
    "Выбирайте МФО по реальным отзывам клиентов. Удобный рейтинг микрофинансовых организаций Украины: скорость, условия, поддержка, сайт.",
  keywords: [
    "МФО Украина",
    "отзывы МФО",
    "рейтинг микрофинансовых организаций",
    "лучшие МФО",
    "взять займ онлайн",
  ],
  openGraph: {
    title: "Рейтинг МФО Украины – отзывы клиентов",
    description:
      "Ознакомьтесь с отзывами и рейтингами украинских МФО. Подберите лучший вариант по условиям, скорости и удобству.",
    url: "https://ваш-домен.ua/mfo",
    siteName: "Займи.ру",
    type: "website",
  },
};

export default function MfoPage() {
  return <MfoPageClient />;
}
