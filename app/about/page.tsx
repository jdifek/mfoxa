import Image from "next/image";
import React from "react";
import Bread from "../components/Bread";

const About: React.FC = () => {
  return (
    <>
      <Bread />
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[30px] sm:mb-[40px] md:mb-[50px] bg-white rounded-lg mt-[10px] md:mt-[30px]">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] 
font-[700] leading-[100%] 
text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--second-family)" }}
          >
            {" "}
            Наша команда экспертов
          </h2>
          <p
            className="
    text-[11px] sm:text-[12px] md:text-[13px] 
    font-[500] leading-[138%] 
    text-[#222] 
  "
          >
            Маркетплейс mfoxa.com.ua создан командой профессионалов финансовой
            сферы, которые обладают обширными знаниями и опытом, необходимыми
            для того, чтобы предоставлять достоверную и проверенную информацию о
            финансовых компаниях Украины.
          </p>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[20px]">
      {[1, 2, 3].map((el, i) => (
            <div
              key={i}
              className="bg-white p-[10px] sm:p-[20px] md:p-[30px] rounded-lg flex-1"
            >
              <div className="flex gap-[10px] mb-[10px]">
                <Image src={"/photo.svg"} alt="photo" width={64} height={64} />
                <div className="flex flex-col gap-[5px]">
                  <h3 className="font-[var(--font3)] font-bold text-[16px] sm:md:text-[17px] md:text-[20px] leading-[100%] text-[#222]">
                    Бондаренко Ольга Владимировна
                  </h3>
                  <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
                    СЕО mfoxa.com.ua
                  </p>
                </div>
              </div>
              <hr className="mb-[10px]" />
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a] mb-[10px]">
                Образование{" "}
              </p>
              <p className="mb-[10px] font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                Магистр финансов и банковского дела, Киевский национальный
                экономический университет им. Вадима Гетьмана, 2012 г.
              </p>
              <hr className="mb-[10px]" />
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a] mb-[10px]">
                Опыт работы
              </p>
              <p className="mb-[10px] font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                Более 10 лет опыта в банковском секторе Украины, работала в ПАО
                &#34;ПриватБанк&#34; на позиции старшего кредитного аналитика.
              </p>

              <hr className="mb-[10px]" />
              <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a] mb-[10px]">
                Дополнительная квалификация
              </p>
              <p className="font-[var(--font-family)] font-bold text-[14px] leading-[136%] text-[#222]">
                Сертификат Национального банка Украины по программе «Кредитный
                риск и управление портфелем», № KR-2019-128 от 15.09.2019 г.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] bg-white rounded-lg h-[100px] mb-[30px] sm:mb-[50px] mt-[30px] sm:mt-[50px]">
          <p className="font-[var(--font-family)] font-medium text-[13px] sm:text-[14px] md:text-[14px] leading-[133%] text-[#222]">
            Наши эксперты регулярно проходят повышение квалификации и обучение,
            чтобы предоставлять вам актуальные рекомендации и обеспечивать
            высокий уровень доверия и профессионализма
          </p>
        </div>
      </div>

      <div className="px-0 md:px-[20px]">
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата добавления страницы 12.10.2025
        </p>
        <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
          Дата изменения страницы 12.10.2025{" "}
        </p>{" "}
      </div>
    </>
  );
};

export default About;
