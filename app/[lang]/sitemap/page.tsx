// app/[lang]/sitemap/page.tsx

import sitemapService, { SitemapEntry } from "@/app/services/sitemapService";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function SitemapPage({ params }: Props) {
  const { lang } = await params;
  
  const t = await getTranslations({ locale: lang, namespace: "Sitemap" });
  const sitemap = await sitemapService.getSitemap(lang === 'ua' ? 'uk' : 'ru');

  const alphabet = Object.keys(sitemap.categories).sort((a, b) =>
    a.localeCompare(b, lang)
  );

  return (
    <main className="px-4 md:px-20 py-10">
      <h1 className="text-black text-3xl md:text-5xl font-bold mb-6 text-center">
        {t("title")}
      </h1>
      {alphabet.map((letter) => (
        <div key={letter} className="mb-8">
          <h2 className="text-xl text-black font-semibold mb-4">{letter}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sitemap.categories[letter].map((item: SitemapEntry, index) => (
              <li
                key={index}
                className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Link href={item.url} className="text-[#724dea] hover:underline">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </Link>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.rating && (
                  <p className="text-xs text-yellow-500 mt-1">
                    ⭐ {item.rating} ({item.rating_count})
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
