import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "MFoxa - Финансовый маркетплейс Украины",
  description:
    "Сравнение и получение лучших кредитных предложений от МФО Украины. Быстрые займы онлайн с низкими ставками.",
  keywords:
    "займы, кредиты, МФО, микрокредиты, деньги онлайн, Украина, быстрые займы",
  robots: "index, follow",

  // Open Graph / Facebook
  openGraph: {
    title: "MFoxa - Финансовый маркетплейс Украины",
    description:
      "Сравнение и получение лучших кредитных предложений от МФО Украины",
    url: "https://mfoxa.com.ua",
    siteName: "MFoxa",
    images: [
      {
        url: "https://mfoxa.com.ua/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MFoxa - Финансовый маркетплейс",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "MFoxa - Финансовый маркетплейс Украины",
    description:
      "Сравнение и получение лучших кредитных предложений от МФО Украины",
    images: ["https://mfoxa.com.ua/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="px-[10px] max-w-[1440px] mx-auto md:px-[50px] lg:px-[100px] pb-[20px] md:pb-[40px] lg:pb-[50px]">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
