import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="p-[30px] mb-[50px] bg-white rounded-lg  mt-[30px]">
        <h2 className="mb-[20px] font-[var(--font3)] font-bold text-[36px] leading-[100%] text-[#222]">
          Контакты
        </h2>
        <p className="font-[var(--font-family)] font-medium text-[15px] leading-[133%] text-[#222]">
          Сервис предоставляет актуальную информацию о кредитных продуктах
          различных банков и микрофинансовых организаций Украины. Все материалы,
          представленные на сайте, имеют исключительно ознакомительный характер.
          Подробные и точные условия кредитования необходимо уточнять на
          официальных сайтах соответствующих банков, МФО или других финансовых
          учреждений.
        </p>
      </div>

      <div className="p-[30px] mb-[50px] bg-white rounded-lg mt-[30px]">
  <div className="flex justify-between flex-col sm:flex-row gap-[20px]">
    <div className="flex flex-col gap-[10px]">
      <p className="font-[var(--font-family)] font-medium text-[12px] leading-[142%] text-[#67677a]">
        Адрес
      </p>
      <p className="font-[var(--font-family)] font-bold text-[18px] leading-[133%] text-[#222]">
        61174, Харківська обл., місто Харків, Архiтекторiв 32
      </p>
      <hr />
    </div>

    <div className="flex flex-col gap-[10px]">
      <p className="font-[var(--font-family)] font-medium text-[12px] leading-[142%] text-[#67677a]">
        Email
      </p>
      <p className="font-[var(--font-family)] font-bold text-[18px] leading-[133%] text-[#222]">
        admin@mfoxa.com.ua
      </p>
      <hr />
    </div>

    <div className="flex flex-col gap-[10px]">
      <p className="font-[var(--font-family)] font-medium text-[12px] leading-[142%] text-[#67677a]">
        Телефон
      </p>
      <p className="font-[var(--font-family)] font-bold text-[18px] leading-[133%] text-[#222]">
        +38 (093) 000-00-00
      </p>
      <hr />
    </div>
  </div>

  <div className="bg-[#00ba9e] mt-[20px] mb-[30px] text-white font-bold text-[14px] rounded-[8px] px-[32px] py-[10px] w-full sm:w-[235px] text-center cursor-pointer">
    Написать нам
  </div>

  {/* 👇 Карта с рандомным адресом (Харьков) */}
  <div className="w-full h-[300px] overflow-hidden rounded-lg">
    <iframe
      src="https://maps.google.com/maps?q=Архитекторів%2032,%20Харьков&t=&z=15&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>



      <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
        Дата добавления страницы 12.10.2025
      </p>
      <p className="font-[var(--font-family)] font-medium text-[13px] leading-[138%] text-[#67677a]">
        Дата изменения страницы 12.10.2025{" "}
      </p>
    </>
  );
};

export default ContactPage;
