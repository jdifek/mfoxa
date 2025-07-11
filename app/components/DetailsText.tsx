"use client";

import React, { useState } from "react";

const DetailsText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const fullText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";

  const previewCharCount = 300;
  const shouldTruncate = fullText.length > previewCharCount;
  const displayedText = isExpanded || !shouldTruncate
    ? fullText
    : fullText.slice(0, previewCharCount) + "...";

  return (
    <div className="px-0 md:px-[20px]">
      <p
        className="mb-[10px] text-[13px] md:text-[15px]"
        style={{
          fontFamily: "var(--Montserrat)",
          fontWeight: 500,
          lineHeight: "138%",
          color: "#222",
        }}
      >
        {displayedText}
      </p>

      {shouldTruncate && (
        <p
          className="mb-[30px] w-max md:mb-[50px] text-[13px] md:text-[15px] cursor-pointer underline text-[#724dea] transition-colors duration-200 hover:text-[#9278ea]"
          style={{
            fontFamily: "var(--Montserrat)",
            fontWeight: 500,
            lineHeight: "138%",
            textDecorationSkipInk: "none",
          }}
          onClick={toggleExpanded}
        >
          {isExpanded ? "Скрыть" : "Показать полностью"}
        </p>
      )}
    </div>
  );
};

export default DetailsText;
