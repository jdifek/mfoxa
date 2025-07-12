/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from "next/script";

type MicrodataCompanyProps = {
  company: string;
  data: any; // Замените на тип MfoDetails из getMfoDetailsService
};

export const MicrodataCompany = ({ company, data }: MicrodataCompanyProps) => {
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: data.legal_entity || (company === "sgroshi" ? "Швидко Гроші" : "Название компании"),
    url: `https://mfoxa.com.ua/mfo/${company}`,
    logo: data.logo_url || "https://mfoxa.com.ua/logo.png",
    identifier: data.nbu_license || "Не указана",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: data.phone || "+38 (063) 178-64-56",
      email: data.email || "support@mfoxa.com.ua",
      contactType: "customer service",
      areaServed: "UA",
      availableLanguage: ["Ukrainian", "Russian"]
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: data.legal_address || "ул. Прживальского 19б, стр. 17а",
      addressLocality: "Киев",
      addressCountry: "UA"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.rating_average?.toString() || "4.8",
      reviewCount: data.rating_count?.toString() || "119"
    }
  };

  return (
    <Script id="company-schema" type="application/ld+json">
      {JSON.stringify(companySchema, null, 2)}
    </Script>
  );
};