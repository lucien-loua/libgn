import { guinea } from "./dataset";
import {
	PrefectureReferenceError,
	RegionReferenceError,
	SubPrefectureReferenceError,
} from "./libs/exceptions";
import {
	getAllNeighborhoods,
	getPrefecture,
	getRegion,
	getSubPrefecture,
} from "./libs/utils";
import type { Prefecture, Region, SubPrefecture } from "./types";

const libgn = {
	get allRegions(): Region[] {
		return guinea.regions;
	},

	get allRegionNames(): string[] {
		return guinea.regions.map((region) => region.name);
	},

	get allRegionCodes(): string[] {
		return guinea.regions.map((region) => region.code);
	},

	getPrefecturesByRegion(regionName: string): string[] {
		const region = getRegion(regionName);
		return region.prefectures.map((prefecture) => prefecture.name);
	},

	getRegionPopulation(regionName: string): number {
		const { population } = getRegion(regionName);
		return population;
	},

	getRegionArea(regionName: string): number {
		const { area } = getRegion(regionName);
		return area;
	},

	get allPrefectureNames(): string[] {
		return guinea.regions.flatMap((region) =>
			region.prefectures.map((prefecture) => prefecture.name),
		);
	},

	getSubPrefecturesByPrefecture(prefectureName: string): string[] {
		const prefecture = getPrefecture(prefectureName);
		return prefecture.subPrefectures.map((subPrefecture) => subPrefecture.name);
	},

	getRegionOfPrefecture(prefectureName: string): string {
		const prefecture = getPrefecture(prefectureName);
		return prefecture.region;
	},

	get capital(): string {
		return guinea.capital;
	},

	get languages(): {
		official: string;
		national: string[];
	} {
		return {
			official: guinea.officialLanguage,
			national: guinea.nationalLanguages,
		};
	},

	get basicInfo() {
		return {
			name: guinea.name,
			capital: guinea.capital,
			motto: guinea.motto,
			flag: guinea.flag,
			isoCode: guinea.isoCode,
			callingCode: guinea.callingCode,
			population: guinea.population,
			area: guinea.area,
			currency: guinea.currency,
		};
	},

	getNeighborhoodsBySubPrefecture(subPrefectureName: string): string[] {
		const subPrefecture = getSubPrefecture(subPrefectureName);
		if (!subPrefecture.neighborhoods) {
			throw new SubPrefectureReferenceError(subPrefectureName);
		}
		return subPrefecture.neighborhoods;
	},

	get allNeighborhoods(): string[] {
		return getAllNeighborhoods();
	},
};

export default libgn;

export type { Region, Prefecture, SubPrefecture };
export {
	RegionReferenceError,
	PrefectureReferenceError,
	SubPrefectureReferenceError,
};
