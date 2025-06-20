import { Metadata } from "next";
import DetailsText from "./components/DetailsText";
import BestLoans from "./components/Home/bestLoans";
import FinancialMarketplace from "./components/Home/FinancialMarketplace";
import { LastReviews } from "./components/Home/lastRewiews";
import Questions from "./components/Home/Questions";
import { TopUkrMFO } from "./components/Home/topUkrMFO";
import ButtonGreenBorder from "./ui/ButtonGreenBorder";
export const metadata: Metadata = {
  title: "Рейтинг МФО Украины 2024 | ТОП-10 микрофинансовых организаций",
  description:
    "Сравните условия займов в лучших МФО Украины. Одобрение 95% заявок. Займы до 100 000 грн за 15 минут без отказа и скрытых комиссий.",
  keywords: [
    "займы онлайн",
    "МФО Украина",
    "рейтинг микрофинансовых организаций",
    "срочные займы",
    "деньги в долг",
  ],

  openGraph: {
    title: "Рейтинг МФО Украины 2024 | ТОП микрофинансовых организаций",
    description:
      "Сравните и получите займ в лучшей МФО Украины. Быстрое одобрение и выдача денег",
    url: "https://mfoxa.com.ua",
    images: [
      {
        url: "https://mfoxa.com.ua/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Рейтинг МФО Украины",
      },
    ],
  },

  alternates: {
    canonical: "https://mfoxa.com.ua",
  },
};
export default function Home() {
  return (
    <div>
      <FinancialMarketplace />
      <BestLoans />
{/* 
      <ButtonGreenBorder
        width="100%"
        text="Показать еще"
        className="mt-[20px] mx-auto sm:!w-[256px]"
      /> */}

      <TopUkrMFO />
      

      <LastReviews />

      <DetailsText />

      <Questions />
    </div>
  );
}
