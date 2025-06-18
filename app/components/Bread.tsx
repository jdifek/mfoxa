const Bread = () => {
  return (
    <div className="p-[10px] md:pl-[20px] my-[10px] flex gap-[9px] text-[#222] text-[12px] font-medium leading-[142%]" style={{ fontFamily: "var(--font-family)" }}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00887 1.5L1 6.59091V15.5H6.35247L6.35235 11.0267H9.64753V15.5H15V6.59091L8.00887 1.5Z"
          stroke="#222222"
        />
      </svg>

      <p>/</p>

      <p>Каталог МФО</p>
      <p>/</p>

      <p>Швидко Гроші</p>
    </div>
  );
};

export default Bread;
