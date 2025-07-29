import { guinea } from "../dataset";
import type { Prefecture, Region, SubPrefecture } from "../types";
import {
	PrefectureReferenceError,
	RegionReferenceError,
	SubPrefectureReferenceError,
} from "./exceptions";

/**
 * Converts a string to lowercase and removes spaces
 */
export const lowerCase = (value?: string): string => {
	return value?.toLowerCase().trim() || "";
};

/**
 * Finds a region by its name
 */
export const findRegion = (name: string): Region => {
	const region = guinea.regions.find(
		(region) => lowerCase(region.name) === lowerCase(name),
	);
	if (!region) {
		throw new RegionReferenceError(name);
	}
	return region;
};

export function findPrefecture(prefectureName: string): Prefecture {
	const normalizedPrefectureName = lowerCase(prefectureName);
	for (const region of guinea.regions) {
		const prefecture = region.prefectures.find(
			(p) => lowerCase(p.name) === normalizedPrefectureName,
		);
		if (prefecture) {
			return prefecture;
		}
	}
	throw new PrefectureReferenceError(prefectureName);
}
export function getRegion(regionName: string): Region {
	const region = guinea.regions.find(
		(r) => lowerCase(r.name) === lowerCase(regionName),
	);
	if (!region) {
		throw new RegionReferenceError(regionName);
	}
	return region;
}

export function getPrefecture(prefectureName: string): Prefecture {
	const normalizedPrefectureName = lowerCase(prefectureName);
	for (const region of guinea.regions) {
		const prefecture = region.prefectures.find(
			(p) => lowerCase(p.name) === normalizedPrefectureName,
		);
		if (prefecture) {
			return prefecture;
		}
	}
	throw new PrefectureReferenceError(prefectureName);
}

export function getSubPrefecture(subPrefectureName: string): SubPrefecture {
	const normalizedSubPrefectureName = lowerCase(subPrefectureName);
	for (const region of guinea.regions) {
		for (const prefecture of region.prefectures) {
			const subPrefecture = prefecture.subPrefectures.find(
				(sp) => lowerCase(sp.name) === normalizedSubPrefectureName,
			);
			if (subPrefecture) {
				return subPrefecture;
			}
		}
	}
	throw new SubPrefectureReferenceError(subPrefectureName);
}

export function getAllNeighborhoods(): string[] {
	const conakry = guinea.regions.find((region) => region.name === "Conakry");
	if (!conakry) {
		throw new Error("Region 'Conakry' not found");
	}

	return conakry.prefectures.flatMap(
		(prefecture) =>
			prefecture.subPrefectures.flatMap(
				(subPrefecture) => subPrefecture.neighborhoods || [],
			) || [],
	);
}
