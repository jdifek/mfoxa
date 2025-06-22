import AboutButtons from "@/app/components/AboutButtons";
import Bread from "@/app/components/Bread";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ company: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.company || "sgroshi";
  const companyName = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Компания";

  return {
    title: `Промокоды ${companyName} — актуальные акции и скидки`,
    description: `Самые выгодные промокоды для ${companyName}. Получите эксклюзивные скидки и бонусы. Актуальные акции с ограниченным сроком действия.`,
    keywords: ["промокоды", companyName, "скидки", "акции", "займы"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Промокоды ${companyName} — актуальные акции и скидки`,
      description: `Самые выгодные промокоды для ${companyName}. Получите эксклюзивные скидки и бонусы. Актуальные акции с ограниченным сроком действия.`,
      type: "website",
    },
  };
}

export default async function Promotion({ params }: Props) {
  const resolvedParams = await params;
  const companySlug = decodeURIComponent(resolvedParams.company || "sgroshi");
  const companyName = companySlug === "sgroshi"
    ? "Швидко Гроші"
    : companySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--Jakarta)" }}
        >
          Промокоды {companyName}
        </h2>
      </div>
      <AboutButtons />
      <div className="px-0 md:px-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
          {[1, 2, 3, 4].map((el) => (
            <div key={el} className="p-[30px] bg-white rounded-lg">
              <div className="flex gap-[10px] sm:gap-[15px] md:gap-[20px]">
                <Image
                  src="/image (2).png"
                  alt="img"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div className="flex flex-col gap-[10px]">
                  <p className="font-bold text-[16px] leading-[100%] text-[#222]">
                    {companyName}
                  </p>
                  <p className="font-medium text-[12px] xl:text-[14px] leading-[136%] text-[#222]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
              <hr className="my-[10px]" />
              <div className="flex justify-between">
                <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
                  Срок действия
                </p>
                <p className="font-bold text-[13px] leading-[138%] text-right text-[#222]">
                  12.10.2025
                </p>
              </div>
              <hr className="mt-[10px]" />
              <div className="flex justify-end">
                <div className="bg-[#00ba9e] mt-[20px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer">
                  Перейти на сайт
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <p className="font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025
        </p>
      </div>
    </>
  );
}