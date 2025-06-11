import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white w-full h-[50px] flex items-center justify-between px-[10px] sm:px-[120px]">
      <div className="flex items-center gap-[30px]">
        <Link href="/">
          <Image src="/logo.svg" alt="Company logo" width={132} height={30} />
        </Link>
        <p className="font-bold text-[13px] leading-[16px] tracking-[0%] align-middle text-[#222222]">
          Рейтинг МФО
        </p>
      </div>

      <Image src="/Frame 108.svg" alt="" width={24} height={24} />
    </header>
  );
};

export default Header;
