// components/About.tsx
import Bread from "@/app/components/Bread";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import authorsService from "@/app/services/authorsService";
import { getPageDates } from "@/app/services/PageDatesService";

type AboutProps = {
  params: Promise<{ lang: string }>;
};

const About: React.FC<AboutProps> = async ({ params }) => {
  const { lang } = await params;

  const t = await getTranslations({ locale: lang, namespace: "About" });

  // Debug: Log translations
  console.log("About translations:", {
    lang,
    teamTitle: t("team.title"),
    teamDescription: t("team.description"),
    memberName: t("members[0].name"),
    trainingText: t("training.text"),
    addedDate: t("metadata.addedDate"),
  });

  const { data } = await authorsService.getAllAuthors(
    lang === "ua" ? "uk" : "ru"
  );

  const dates = await getPageDates({ type: "about" });

  console.log(data, "daaaa");

  return (
    <>
      <Bread lang={lang as "ua" | "ru"} />
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] mb-[30px] sm:mb-[40px] md:mb-[50px] bg-white rounded-lg mt-[10px] md:mt-[30px]">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] leading-[100%] text-[#222] mb-[14px] sm:mb-[25px] md:mb-[30px]"
            style={{ fontFamily: "var(--Jakarta)" }}
          >
            {t("team.title") || "Наша команда експертів"}
          </h2>
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] leading-[138%] text-[#222]">
            {t("team.description") ||
              "Маркетплейс mfoxa.com.ua створений командою професіоналів фінансової сфери..."}
          </p>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[20px]">
          {data.map((author, i) => (
            <div
              key={i}
              className="bg-white p-[10px] sm:p-[20px] md:p-[30px] rounded-lg flex-1"
            >
              <div className="flex gap-[10px] mb-[10px]">
                <Image
                  src={author.avatar}
                  alt={t("members.0.photoAlt") || "Фото Ольга Бондаренко"}
                  width={64}
                  height={64}
                />
                <div className="flex flex-col gap-[5px]">
                  <h3 className="font-bold text-[16px] sm:md:text-[17px] md:text-[20px] leading-[100%] text-[#222]">
                    {author.name}
                  </h3>
                  <p className="font-medium text-[11px] leading-[145%] text-[#67677a]">
                    {author.role}
                  </p>
                </div>
              </div>
              <hr className="mb-[10px]" />
              <p className="font-medium text-[11px] leading-[145%] text-[#67677a] mb-[10px]">
                {t("members.0.educationLabel") || "Образование"}{" "}
              </p>
              <p className="mb-[10px] font-bold text-[14px] leading-[136%] text-[#222]">
                {author.education}
              </p>
              <hr className="mb-[10px]" />
              <p className="font-medium text-[11px] leading-[145%] text-[#67677a] mb-[10px]">
                {t("members.0.experienceLabel") || "Опыт работы"}
              </p>
              <p className="mb-[10px] font-bold text-[14px] leading-[136%] text-[#222]">
                {author.work_experience}
              </p>
              <hr className="mb-[10px]" />
              <p className="font-medium text-[11px] leading-[145%] text-[#67677a] mb-[10px]">
                {t("members.0.qualificationLabel") ||
                  "Дополнительная квалификация"}
              </p>
              <p className="font-bold text-[14px] leading-[136%] text-[#222]">
                {author.additional_qualification}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <div className="p-[10px] sm:p-[20px] md:p-[30px] bg-white rounded-lg h-[100px] mb-[30px] sm:mb-[50px] mt-[30px] sm:mt-[50px]">
          <p className="font-medium text-[13px] sm:text-[14px] md:text-[14px] leading-[133%] text-[#222]">
            {t("training.text") ||
              "Наші експерти регулярно проходять підвищення кваліфікації та навчання..."}
          </p>
        </div>
      </div>
      <div className="px-0 md:px-[20px]">
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {t("metadata.addedDate") +
            ": " +
            new Date(dates.date_published).toLocaleDateString("ru-RU") ||
            "Дата додавання сторінки 12.10.2025"}
        </p>
        <p className="font-medium text-[13px] leading-[138%] text-[#67677a]">
          {t("metadata.updatedDate") +
            ": " +
            new Date(dates.date_modified).toLocaleDateString("ru-RU") ||
            "Дата зміни сторінки 12.10.2025"}
        </p>
      </div>
    </>
  );
};

export default About;
