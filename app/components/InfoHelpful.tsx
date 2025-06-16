import Image from "next/image";
import React from "react";

const InfoHelpful: React.FC = () => {
  return (
    <div className="p-[30px] mb-[50px] bg-white rounded-lg mt-[30px] flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left gap-[20px] sm:gap-0">
      {/* Автор */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-[10px] sm:gap-[20px] items-center">
        <Image src={"/photo.svg"} alt="photo" width={60} height={60} />
        <div className="flex flex-col gap-[5px] items-center sm:items-start">
          <p className="font-[var(--font3)] font-bold text-[20px] leading-[100%] text-[#222]">
            Инна
          </p>
          <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#67677a]">
            Автор страницы
          </p>
        </div>
      </div>

      {/* Оценка */}
      <div className="flex flex-col gap-[10px] items-center sm:items-start">
        <p className="font-[var(--font3)] font-bold text-[20px] leading-[100%] text-[#222]">
          Информация была полезна?
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-[10px]">
          <div className="flex gap-[10px]">
            {[1, 2, 3, 4].map((el, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
                  fill="#724DEA"
                />
              </svg>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M15.4434 9.1377L15.5557 9.48242H23.8252L17.4287 14.1299L17.1348 14.3438L17.2471 14.6885L19.6895 22.207L13.2939 17.5615L13 17.3477L12.7061 17.5615L6.30957 22.207L8.75293 14.6885L8.86523 14.3438L8.57129 14.1299L2.1748 9.48242H10.4443L10.5566 9.1377L13 1.61719L15.4434 9.1377Z"
                stroke="#BCBCCC"
              />
            </svg>
          </div>

          <p className="font-[var(--font-family)] font-medium text-[11px] leading-[145%] text-[#222]">
            19 оценок, среднее 4,1 из 5
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoHelpful;
