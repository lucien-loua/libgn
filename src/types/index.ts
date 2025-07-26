export interface Currency {
	name: string;
	code: string;
	symbol: string;
}

export interface Guinea {
	name: string;
	capital: string;
	officialLanguage: string;
	nationalLanguages: string[];
	currency: Currency;
	motto: string;
	flag: string;
	isoCode: string;
	callingCode: number;
	population: number;
	area: number;
	regions: Region[];
}

export interface Region {
	name: string;
	code: string;
	population: number;
	area: number;
	prefectures: Prefecture[];
}

export interface Prefecture {
	name: string;
	region: string;
	subPrefectures: SubPrefecture[];
}

export interface SubPrefecture {
	name: string;
	neighborhoods?: string[];
}
