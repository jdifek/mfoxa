import AboutButtons from "@/app/components/AboutButtons";
import Bread from "@/app/components/Bread";
import Image from "next/image";
type Props = { params: { company: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.company || "";  // Вместо params.slug
  const companyName = slug ? slug.replace(/-/g, " ").toUpperCase() : "КОМПАНИЯ";

  return {
    title: `Промокоды ${companyName} — актуальные акции и скидки`,
    description:
      `Самые выгодные промокоды для ${companyName}. Получите эксклюзивные скидки и бонусы. Актуальные акции с ограниченным сроком действия.`,
    keywords: ["промокоды", `${companyName}`, "скидки", "акции", "займы"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Промокоды ${companyName} — актуальные акции и скидки`,
      description:
        `Самые выгодные промокоды для ${companyName}. Получите эксклюзивные скидки и бонусы. Актуальные акции с ограниченным сроком действия.`,
      type: "website",
    },
  };
}

const Promotion = () => {
  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <h2
          className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
          style={{ fontFamily: "var(--second-family)" }}
        >
          Промокоды Швидко Гроші{" "}
        </h2>
      </div>
      <AboutButtons />
      <div className="px-0 md:px-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-[20px]">
          {[1, 2, 3, 4].map((el, i) => (
            <div key={i} className="p-[30px]  bg-white rounded-lg ">
              <div className="flex gap-[10px] sm:gap-[15px]  md:gap-[20px] ">
                <Image
                  src={"/image (2).png"}
                  alt="img"
                  width={50}
                  height={50}
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="flex flex-col  gap-[10px]">
                  <p className="font-[var(--font3)] font-bold text-[16px] leading-[100%] text-[#222]">
                    Швидко Гроші
                  </p>
                  <p className="font-[var(--font-family)] font-medium text-[12px]   xl:text-[14px]  leading-[136%] text-[#222]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>

              <hr className="mb-[10px] mt-[10px]" />

              <div className="flex justify-between">
                <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
                  Срок действия
                </p>
                <p className="font-[var(--font-family)] font-bold text-[13px] leading-[138%] text-right text-[#222]">
                  12.10.2025
                </p>
              </div>
              <hr className="mt-[10px]" />

              <div className="flex justify-end">
                <div className="bg-[#00ba9e]  mt-[20px]  text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer">
                  Перейти на сайт
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
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
};

export default Promotion;
