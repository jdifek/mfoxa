import React from "react";

const DetailsText = () => {
  return (
    <>
      <div className="px-0 md:px-[20px]">
        <p
          className="mb-[10px] text-[13px] md:text-[15px]"
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            lineHeight: "138%",
            color: "#222",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>

        <p
          className="mb-[30px] w-max md:mb-[50px] text-[13px] md:text-[15px] cursor-pointer underline text-[#724dea] transition-colors duration-200 hover:text-[#9278ea]"
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            lineHeight: "138%",
            textDecorationSkipInk: "none",
          }}
        >
          Показать полностью
        </p>
      </div>
    </>
  );
};

export default DetailsText;
