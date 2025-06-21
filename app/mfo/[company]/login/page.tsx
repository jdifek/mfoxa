import AboutButtons from "@/app/components/AboutButtons";
import Bread from "@/app/components/Bread";
import Image from "next/image";
import { Metadata } from "next";
import type { NextPage } from "next";

// Типизация для параметров, учитывающая только Promise
type Props = {
  params: Promise<{ company: string }>;
};

// Функция генерации метаданных
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Разрешаем Promise
  const slug = resolvedParams.company || "";
  const companyName = slug.replace(/-/g, " ").toUpperCase();

  return {
    title: `Личный кабинет ${companyName} — вход и регистрация`,
    description: `Инструкция по входу в личный кабинет ${companyName}. Как зарегистрироваться и использовать сервис.`,
    keywords: ["личный кабинет", companyName, "вход", "регистрация", "сервис"],
    robots: { index: true, follow: true },
    openGraph: {
      title: `Личный кабинет ${companyName} — вход и регистрация`,
      description: `Инструкция по входу в личный кабинет ${companyName}. Как зарегистрироваться и использовать сервис.`,
      type: "website",
    },
  };
}

// Компонент страницы
const Login: NextPage<Props> = async ({ params }) => {
  console.log("Params:", params);
  const resolvedParams = await params;
  console.log("Resolved Params:", resolvedParams);
  const companyName = resolvedParams.company
    ? resolvedParams.company.replace(/-/g, " ").toUpperCase()
    : "Швидко Гроші";

  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--second-family)" }}
        >
          Личный кабинет {companyName}
        </h2>
      </div>
      <AboutButtons />
      <div className="px-0 md:px-[20px]">
        <div className="border border-[#d6d6f9] rounded-lg p-[30px] w-full bg-white">
          <p className="mb-[20px] font-medium text-[13px] leading-[138%] text-[#222]">
            Содержание
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="rounded-[70px] p-[10px] w-[24px] h-[24px] bg-[#ebebf9] flex items-center justify-center">
              <p className=" font-medium text-[12px] leading-[142%] text-[#724dea]">
                1
              </p>
            </div>
            <p className=" font-bold text-[13px] leading-[138%] text-[#222]">
              Как войти в личный кабинет {companyName}
            </p>
          </div>
          <p className="ml-[34px] mt-[10px]  font-medium text-[13px] leading-[138%] text-[#222]">
            Вход по паролю
          </p>
          <p className="ml-[34px] mb-[10px] mt-[10px]  font-medium text-[13px] leading-[138%] text-[#222]">
            Вход по СМС
          </p>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <div className="rounded-[70px] p-[10px] w-[24px] h-[24px] bg-[#ebebf9] flex items-center justify-center">
              <p className=" font-medium text-[12px] leading-[142%] text-[#724dea]">
                2
              </p>
            </div>
            <p className=" font-bold text-[13px] leading-[138%] text-[#222]">
              Как пройти регистрацию
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="rounded-[70px] p-[10px] w-[24px] h-[24px] bg-[#ebebf9] flex items-center justify-center">
              <p className=" font-medium text-[12px] leading-[142%] text-[#724dea]">
                3
              </p>
            </div>
            <p className=" font-bold text-[13px] leading-[138%] text-[#222]">
              Что делать при проблемах со входом
            </p>
          </div>
          <p className="mb-[10px] mt-[10px] ml-[34px]  font-medium text-[13px] leading-[138%] text-[#222]">
            Забыт пароль
          </p>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <div className="rounded-[70px] p-[10px] w-[24px] h-[24px] bg-[#ebebf9] flex items-center justify-center">
              <p className=" font-medium text-[12px] leading-[142%] text-[#724dea]">
                4
              </p>
            </div>
            <p className=" font-bold text-[13px] leading-[138%] text-[#222]">
              Телефон сменен на другой
            </p>
          </div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <div className="rounded-[70px] p-[10px] w-[24px] h-[24px] bg-[#ebebf9] flex items-center justify-center">
              <p className=" font-medium text-[12px] leading-[142%] text-[#724dea]">
                5
              </p>
            </div>
            <p className=" font-bold text-[13px] leading-[138%] text-[#222]">
              Что можно делать в ЛК
            </p>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="border mt-[30px] md:mt-[50px] border-[#d6d6f9] rounded-lg p-[30px] w-full bg-white">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--second-family)" }}
          >
            Как войти в личный кабинет {companyName}
          </h2>
          <p className=" font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
            Клиенты микрокредитной компании «{companyName}» получают доступ в
            личный кабинет. Это сервис, через который можно управлять займом,
            оплачивать его, переносить даты возврата. ЛК работает бесплатно и
            доступен везде, где есть выход в интернет.
          </p>
          <div className="bg-[#00ba9e] whitespace-nowrap mb-[20px] mt-[20px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer">
            Вход в личный кабинет
          </div>
          <div className="p-[10px] w-full mb-[20px] bg-[#ebebf9]">
            <p className=" font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
              Клиенты микрокредитной компании «{companyName}» получают доступ в
              личный кабинет. Это сервис, через который можно управлять займом,
              оплачивать его, переносить даты возврата. ЛК работает бесплатно и
              доступен везде, где есть выход в интернет.
            </p>
          </div>
          <p className=" mb-[20px] font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
            Вход в личный кабинет МКК {companyName} доступен тем, кто когда-либо
            подавал заявку на заем этой организации. Даже если ему отказала,
            клиент все равно получает доступ к системе: спустя время он сможет
            войти в нее, подать заявку на новый микрокредит без повторного
            заполнения анкеты.
          </p>
          <p className=" mb-[20px] font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
            Чтобы войти в личный кабинет {companyName}, откройте официальный
            сайт микрокредитной компании. Здесь увидите кнопку «Войти» — это и
            есть ссылка на вход в систему.
          </p>
          <Image
            src="/image 1.png"
            alt="img"
            width={400}
            height={208}
            className="mb-[14px]"
          />
          <p className="mb-[20px]  font-medium text-[11px] leading-[145%] text-[#222]">
            Здесь находится кнопка на вход в личный кабинет {companyName}
          </p>
          <h3 className="mb-[20px] font-bold text-[16px] sm:text-[24px] md:text-[30px] leading-[100%] text-[#222]">
            Вход по паролю
          </h3>
          <p className=" mb-[20px] font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
            Войти в систему можно по паролю. Его клиент придумает при
            регистрации, которая происходит параллельно с оформлением займа.
          </p>
          <Image
            src="/image (3).png"
            alt="img"
            width={400}
            height={208}
            className="mb-[14px]"
          />
          <p className="mb-[20px]  font-medium text-[11px] leading-[145%] text-[#222]">
            Здесь находится кнопка на вход в личный кабинет {companyName}
          </p>
          <div className="p-[10px] w-full mb-[20px] bg-[#d6d6f9]">
            <p className=" font-medium text-[13px] md:text-[15px] leading-[133%] text-[#222]">
              Для удобства сохраните ссылку на вход в ЛК {companyName} в
              закладках на вашем устройстве. Сможете входить в него, минуя сайт
              МКК.
            </p>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <p className=" font-medium text-[13px] mt-[50px] leading-[138%] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className=" font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025
        </p>
      </div>
    </>
  );
};

export default Login;
