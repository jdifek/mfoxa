import React from 'react';
import clsx from 'clsx';

interface ButtonGreenBorderProps {
  text: string;
  width: string;
  className?: string;
}

const ButtonGreenBorder: React.FC<ButtonGreenBorderProps> = ({ text, width, className }) => {
  return (
    <div
      className={clsx(
        "border-[#00ba9e] mx-auto text-[#00ba9e] rounded-[8px] flex items-center justify-center",
        className
      )}
      style={{
        border: "1px solid #00ba9e",
        borderRadius: "8px",
        padding: "12px 10px",
        height: "39px",
        width: width,
      }}
    >
      {text}
    </div>
  );
};

export default ButtonGreenBorder;