import React from "react";

const DetailsText = () => {
  return (
    <>
      <p
        className="mb-[10px] text-[13px] md:text-[15px]"
        style={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          lineHeight: "138%",
          color: "#222",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud 
      </p>

      <p
        className=" underline mb-[20px] md:mb-[50px] text-[13px] md:text-[15px]"
        style={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          lineHeight: "138%",
          textDecorationSkipInk: "none",
          color: "#222",
        }}
      >
        Показать полностью
      </p>
    </>
  );
};

export default DetailsText;
