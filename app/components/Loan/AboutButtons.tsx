"use client";

import { usePathname, useRouter } from "next/navigation";
import { GetCatalogListResponse } from "@/app/services/catalogService";
import { useState } from "react";

type AboutButtonsProps = {
	data: GetCatalogListResponse;
};

export const AboutButtons = ({ data }: AboutButtonsProps) => {
	const router = useRouter();
	const pathname = usePathname(); // получаем текущий путь

	const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

	const handleButtonClick = (slug?: string) => {
		if (slug) {
			setLoadingSlug(slug);
			router.push(`/${slug}`);
		}
	};

	const textColorMap: Record<string, string> = {
		black: "text-black",
		red: "text-red-500",
		teal: "text-teal-500",
	};
	return (
		<div className="w-full no-scrollbar overflow-x-auto px-0 md:px-[20px]">
			<div className="flex gap-[10px]">
				{data.data.map((key, index) => {
					const isActive = pathname.endsWith(`/${key.slug}`);
					// подсветка по текущему URL

					return (
						<button
							key={index}
							onClick={() => handleButtonClick(key.slug)}
							className={`cursor-pointer whitespace-nowrap ${
								textColorMap[key.color] || "text-black"
							} rounded-[35px] p-[8px_14px] flex items-center justify-center font-medium text-[15px] leading-[133%]
                ${
					isActive
						? "bg-[#d6d6f9] text-[#724dea]"
						: "bg-[#fff] text-[#000000]"
				}`}
						>
							<span className="flex items-center gap-2">
								{key.button_name}
								{loadingSlug === key.slug && (
									<svg
										className="animate-spin h-4 w-4 text-current"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
											fill="none"
										/>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
										/>
									</svg>
								)}
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};
