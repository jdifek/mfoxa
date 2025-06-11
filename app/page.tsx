import BestLoans from "./components/Home/bestLoans";
import FinancialMarketplace from "./components/Home/FinancialMarketplace";
import { LastRewiews } from "./components/Home/lastRewiews";
import Questions from "./components/Home/Questions";
import { TopUkrMFO } from "./components/Home/topUkrMFO";
import ButtonGreenBorder from "./ui/ButtonGreenBorder";

export default function Home() {
  return (
    <div>
      <FinancialMarketplace />
      <BestLoans />

      <ButtonGreenBorder
        width="256px"
        text="Показать еще"
        className="mt-[20px]"
      />

      <TopUkrMFO />
      <ButtonGreenBorder
        width="100%"
        text="Показать еще"
        className="mt-[40px] mb-[50px] "
      />

      <LastRewiews />

      <ButtonGreenBorder
        width="100%"
        text="Все отзывы"
        className="mt-[20px] mb-[50px] "
      />

      <p
        className="mb-[10px]"
        style={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "138%",
          color: "#222",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia{" "}
      </p>

      <p
        className="mb-[50px] underline"
        style={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "138%",
          textDecorationSkipInk: "none",
          color: "#222",
        }}
      >
        Показать полностью
      </p>

      <Questions/>
    </div>
  );
}
