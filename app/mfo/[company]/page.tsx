import Image from "next/image";
import DetailsText from "../../components/DetailsText";
import OftenQuestions from "../../components/OftenQuestions";
import Link from "next/link";
import AboutButtons from "../../components/AboutButtons";
import React from "react";
import Bread from "../../components/Bread";
import { LastReviews } from "../../components/Home/lastRewiews";
import Calculator from "../../components/Catalog/Calculator";
import TermsOfRegistration from "@/app/components/termsOfRegistration";
import { Metadata } from "next";

type PageParams = {
  company: string;
};

// Определяем тип для поисковых параметров
type SearchParams = {
  [key: string]: string | string[] | undefined;
};

// Основной тип для страницы
interface PageProps {
  params: PageParams;
  searchParams?: SearchParams;
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const companySlug = decodeURIComponent(params.company || "sgroshi");
  return {
    title: `${companySlug} - условия займа, отзывы, рейтинг`,
    description: `Полные условия займа в ${companySlug}. Требования к заемщикам, процентные ставки, отзывы клиентов.`,
    alternates: {
      canonical: `https://mfoxa.com.ua/mfo/${companySlug}`,
    },
    openGraph: {
      title: `${companySlug} - информация на MFoxa`,
      description: `Условия займов и отзывы о МФО ${companySlug}`,
      images: [`https://mfoxa.com.ua/og-${companySlug}.jpg`],
    },
  };
}

export default function CatalogPage({ params }: PageProps) {
  // остальной код компонента остается без изменений
  const companySlug = decodeURIComponent(params.company || "sgroshi");
  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] md:p-[30px] sm:p-[20px] mb-[30px] md:mb-[50px] bg-white rounded-lg mt-[10px]">
          <div className="flex justify-between flex-col md:flex-row md:items-center">
            <div className="flex gap-[10px] md:p-[30px] sm:p-[20px] mb-[16px]  md:mb-[40px]">
              <Image
                src={"/1.png"}
                alt="png"
                width={210}
                height={50}
                className="md:w-[219px] md:h-[70px] w-[89px] h-[50px]"
              />
              <div className="flex flex-col">
                <p className="font-[var(--font3)] font-bold text-[16px] md:text-[30px] leading-[100%] mb-[10px] text-[#222]">
                  {companySlug === "sgroshi" ? "Швидко Гроші" : "Компания"}
                </p>
                <div className="flex  gap-[5px] items-center">
                  <div className="flex ">
                    {[1, 2, 3, 4, 5].map((el, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 1.99988L8.5716 6.83676H13.6574L9.5429 9.82612L11.1145 14.663L7 11.6736L2.8855 14.663L4.4571 9.82612L0.342604 6.83676H5.4284L7 1.99988Z"
                          fill="#00BA9E"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#222]">
                    4.8<span className="text-[#67677a]">/5</span>
                  </p>
                  <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] underline underline-offset-0 text-right text-[#00ba9e]">
                    119 отзывов
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-[#00ba9e]   mb-[20px] md:mb-0   whitespace-nowrap
 h-[40px] w-full md:w-[200px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] sm:w-[235px] text-center cursor-pointer"
            >
              Получить деньги
            </div>
          </div>

          <h2 className="mb-[14px] md:mb-[30px] font-[var(--font3)] font-bold text-[20px] md:text-[36px] leading-[100%] text-[#222]">
            О компании {companySlug === "sgroshi" ? "Швидко Гроші" : "Компания"}
          </h2>

          <hr className="mb-[14px] md:mb-[30px] " />

          <div className="grid grid-cols-2 mb-[10px]">
            <div className="flex flex-col gap-[10px]">
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
                Юридическое лицо
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                ООО Финансовая организация “{" "}
                {companySlug === "sgroshi" ? "Швидко Гроші" : "Компания"}”
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
                Телефон
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                +38 (063) 178-64-56
              </p>
            </div>
          </div>
          <hr className="mb-[14px] md:mb-[30px] " />

          <div className="grid grid-cols-2 mb-[10px]">
            <div className="flex flex-col gap-[10px]">
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
                Юридический адрес
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                г. Киев, ул. Прживальского 19б. стр. 17а
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
                Электронная почта
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                info@sgroshi.com.ua
              </p>
            </div>
          </div>
          <hr className="mb-[14px] md:mb-[30px] " />

          <div className="grid grid-cols-2 mb-[10px]">
            <div className="flex flex-col gap-[10px]">
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
                Лицензия НБУ
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                №1200124-65 от 22.05.2024
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
                Официальный сайт
              </p>
              <p
                className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] underline underline-offset-0 text-[#00ba9e]"
                style={{ textDecorationSkipInk: "none" }}
              >
                www.sgroshi.com.ua
              </p>
            </div>
          </div>

          <p className="mb-[10px] font-[var(--font-family)] font-medium text-[10px] leading-[140%] text-[#67677a]">
            Полезные материалы
          </p>

          <Link
            href="https://sgroshi.com.ua/storage/app/public/docs/pravila_nadannya_koshtiv_u_pozyku_v_tomu_chysli_na_umovah_fin_credytu_zatvertdsheni(16-05-2023).pdf"
            className="block font-[var(--font-family)] font-medium text-[14px] leading-[136%] underline underline-offset-0 text-[#00ba9e]"
          >
            Базовые характеристики и услуги
          </Link>
          <Link
            href="https://sgroshi.com.ua/storage/app/public/docs/pravila_nadannya_koshtiv_u_pozyku_v_tomu_chysli_na_umovah_fin_credytu_zatvertdsheni(16-05-2023).pdf"
            className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] underline underline-offset-0 text-[#00ba9e]"
          >
            Предупреждение пользователя о последствиях
          </Link>
        </div>
      </div>

      <AboutButtons />

      <TermsOfRegistration />
      <div className="px-0 md:px-[20px]">
        <div className=" flex flex-col md:flex-row w-full gap-[20px]">
          <div className="p-[10px] md:p-[30px] sm:p-[20px] w-full md:w-1/2 mb-[0px] md:mb-[50px] bg-white rounded-lg mt-[10px]">
            <h2
              className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
              style={{ fontFamily: "var(--second-family)" }}
            >
              Требования к заемщику{" "}
              {companySlug === "sgroshi" ? "Швидко Гроші" : "Компания"}
            </h2>
            {[
              { title: "Возраст", description: "от 18 до 75 лет" },
              { title: "Документы", description: "Паспорт, ИНН" },
              { title: "Гражданство", description: "Украина" },
              { title: "Залог", description: "не требуется" },
              { title: "Поручитель", description: "не требуется" },
              {
                title: "Официальное трудоустройство",
                description: "не требуется",
              },
            ].map((el, i) => (
              <React.Fragment key={i}>
                <div className="flex justify-between">
                  <p className="font-medium mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
                    {el.title}
                  </p>
                  <div className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-right text-[#222]">
                    {el.description}
                  </div>
                </div>
                <hr className="mb-[16px]" />
              </React.Fragment>
            ))}
          </div>

          <div className="p-[10px] md:p-[30px] sm:p-[20px]  w-full md:w-1/2 mb-[0px] md:mb-[50px] bg-white rounded-lg mt-[10px]">
            <h2
              className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
              style={{ fontFamily: "var(--second-family)" }}
            >
              Способы получения денег{" "}
              {companySlug === "sgroshi" ? "Швидко Гроші" : "Компания"}
            </h2>
            {[
              { title: "Наличными в центре выдачи" },
              { title: "На карту любого банка" },
              { title: "На банковский счет" },
              { title: "NovaPay / Нова Пошта (наличные или на карту NovaPay)" },
              { title: "Денежные переводы (Western Union / RIA / MoneyGram)" },
            ].map((el, i) => (
              <React.Fragment key={i}>
                <div key={i} className="flex gap-[10px]">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3.91357L5.66667 12.4916L1 8.2026"
                      stroke="#00BA9E"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="font-medium  mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
                    {el.title}
                  </p>
                </div>
                <hr className="mb-[16px]" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className=" flex flex-col md:flex-row w-full gap-[20px] ">
          <div className="p-[10px] md:p-[30px] sm:p-[20px]  w-full md:w-1/2 mb-[0px] md:mb-[50px] bg-white rounded-lg ">
            <h2
              className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
              style={{ fontFamily: "var(--second-family)" }}
            >
              Калькулятор процентов{" "}
              {companySlug === "sgroshi" ? "Швидко Гроші" : "Компания"}
            </h2>
            <p className="font-medium  mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
              Выберите тариф
            </p>
            <div className="flex mb-[10px] gap-[10px]">
              {["Новый", "Повторный", "Акция"].map((el, i) => (
                <div
                  key={i}
                  className={`px-[10px] py-[8px] rounded-[35px] h-[33px] flex items-center justify-center text-[11px] font-medium leading-[145%] text-center ${
                    i === 0
                      ? "bg-[#724dea] text-white"
                      : "bg-[#d6d6f9] text-[#9393a3]"
                  }`}
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  <p
                    className={`text-[12px] leading-[142%] font-medium ${
                      i === 0 ? "text-white" : "text-[#724dea]"
                    }`}
                    style={{ fontFamily: "var(--font-family)" }}
                  >
                    {el}
                  </p>
                </div>
              ))}
            </div>

            <Calculator />

            {[
              { title: "Вы берете", description: "50 000₴" },
              { title: "Возвращаете", description: "57 000₴" },
              { title: "Ставка", description: "292%" },
              { title: "ПКС", description: "0-292%" },
            ].map((el, i) => (
              <>
                <div key={i} className="flex justify-between">
                  <p className="font-medium  mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
                    {el.title}
                  </p>
                  <div className="font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-right text-[#222]">
                    {el.description}
                  </div>
                </div>
                <hr className="mb-[16px]" />
              </>
            ))}
            <p
              className="font-medium text-[11px] leading-[145%] mb-[10px] text-center text-[#9393a3]"
              style={{ fontFamily: "var(--font-family)" }}
            >
              Расчет носит справочный характер и не включает в себя другие
              комиссии компании. Точные значения рассчитываются только после
              подачи заявки.
            </p>

            <div className="bg-[#00ba9e] mx-auto h-[40px] w-full text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] sm:w-[235px] text-center cursor-pointer">
              Получить деньги
            </div>
          </div>
          <div className="p-[10px] md:p-[30px] sm:p-[20px] mb-[0px] md:mb-[50px]  w-full md:w-1/2  bg-white rounded-lg mt-[10px]">
            <h2
              className="text-[20px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[30px]"
              style={{ fontFamily: "var(--second-family)" }}
            >
              Способы погашения займа{" "}
              {companySlug === "sgroshi" ? "Швидко Гроші" : "Компания"}
            </h2>
            {[
              { title: "У мобільному додатку ApplePay та GooglePay" },
              { title: "В особистому кабінеті" },
              { title: "У терміналах самообслуговування" },
              { title: "В інтернет-банкінгу" },
              { title: "У відділенні банку" },
            ].map((el, i) => (
              <>
                <div key={i} className="flex gap-[10px]">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3.91357L5.66667 12.4916L1 8.2026"
                      stroke="#00BA9E"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="font-medium  mb-[13px] text-[14px] leading-[136%] text-[#67677a]">
                    {el.title}
                  </p>
                </div>
                <hr className="mb-[16px]" />
              </>
            ))}
          </div>
        </div>
      </div>

      <OftenQuestions />
      <div className="h-[30px]"></div>
      <LastReviews />
      <DetailsText />
      <div className="px-0 md:px-[20px]">
        <p className="font-[var(--font-family)] font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025
        </p>
      </div>
    </>
  );
}
