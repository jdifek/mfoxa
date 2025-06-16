import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonGreenBorderProps {
  text: string;
  width: string;
  className?: string;
  link?: string;
}

const ButtonGreenBorder: React.FC<ButtonGreenBorderProps> = ({
  text,
  link,
  width,
  className,
}) => {
  const commonClasses = clsx(
    "border border-[#00ba9e] text-[#00ba9e] rounded-[8px] flex items-center mx-auto justify-center font-[var(--font-family)] font-medium text-[14px] leading-[136%] text-center",
    className
  );

  const style = {
    width,
    height: "39px",
    padding: "12px 10px",
  };

  return (
    <>
      {link ? (
        <Link href={link} className={commonClasses} style={style}>
          {text}
        </Link>
      ) : (
        <div className={commonClasses} style={style}>
          {text}
        </div>
      )}
    </>
  );
};

export default ButtonGreenBorder;
