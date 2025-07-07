import "../globals.css";
import { ReactNode } from "react";
import { StructuredData } from "../structured-data/StructuredData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // Асинхронно получаем lang
  console.log("generateMetadata lang:", lang);
  try {
    const messages = (await import(`../messages/${lang}.json`)).default;
    return {
      title: messages.Metadata.root.title,
      description: messages.Metadata.root.description,
      keywords:
        "займы, кредиты, МФО, микрокредиты, деньги онлайн, Украина, быстрые займы",
      robots: "index, follow",
      openGraph: {
        title: messages.Metadata.root.title,
        description: messages.Metadata.root.description,
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
        locale: lang === "ua" ? "uk_UA" : "ru_UA",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: messages.Metadata.root.title,
        description: messages.Metadata.root.description,
        images: ["https://mfoxa.com.ua/og-image.jpg"],
      },
    } as Metadata;
  } catch (error) {
    console.error(`Failed to load metadata for lang ${lang}:`, error);
    return {
      title: "404 - Страница не найдена",
      description: "Запрашиваемая страница не существует.",
    } as Metadata;
  }
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  console.log("Layout lang:", lang);
  let messages;
  try {
    messages = (await import(`../messages/${lang}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for lang ${lang}:`, error);
    messages = (await import("../messages/ru.json")).default;
  }
  return (
    <html lang={lang}>
      <body>
      <Toaster position="top-right" reverseOrder={false} />

        <NextIntlClientProvider locale={lang} messages={messages}>
          <StructuredData />
          <Header lang={lang}/>
          <div className="px-[10px] min-h-[65vh] max-w-[1440px] mx-auto md:px-[50px] lg:px-[100px] pb-[20px] md:pb-[40px] lg:pb-[50px]">
            {children}
          </div>
          <Footer locale={lang} />{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "ua" }];
}
