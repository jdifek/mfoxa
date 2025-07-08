// app/structured-data/MicrodataLoanOrCredit.tsx
import Script from "next/script";

interface Tariff {
  id: number;
  name: string;
  amount: string; // "100.00"
  rate: string; // "5.00"
  term_days: number;
  real_annual_rate: string; // "1.00"
  get_money_url: string;
}

type MicrodataLoanOrCreditProps = {
  tariffs: Tariff[];
  companyName: string;
  companySlug: string;
  locale: "ru" | "ua";
};

export const MicrodataLoanOrCredit = ({ tariffs, companyName }: MicrodataLoanOrCreditProps) => {
  const loanOrCreditSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tariffs.map((tariff, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LoanOrCredit",
        name: tariff.name,
        amount: {
          "@type": "MonetaryAmount",
          currency: "UAH",
          value: tariff.amount,
        },
        interestRate: tariff.rate,
        loanTerm: {
          "@type": "QuantitativeValue",
          value: tariff.term_days,
          unitText: "DAY",
        },
        provider: {
          "@type": "Organization",
          name: companyName,
        },
        annualPercentageRate: tariff.real_annual_rate,
        url: tariff.get_money_url,
      },
    })),
  };

  return (
    <Script id="loan-or-credit-schema" type="application/ld+json">
      {JSON.stringify(loanOrCreditSchema, null, 2)}
    </Script>
  );
};