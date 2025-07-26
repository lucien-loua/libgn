import { describe, expect, test } from "vitest";
import libgn from "../src";
import {
	PrefectureReferenceError,
	RegionReferenceError,
	SubPrefectureReferenceError,
} from "../src/libs/exceptions";

describe("libgn testing", () => {
	test("should receive all regions data", () => {
		const regionsData = libgn.allRegions;
		expect(regionsData.length).toEqual(8);
		expect(regionsData[0]).toHaveProperty("name");
		expect(regionsData[0]).toHaveProperty("code");
		expect(regionsData[0]).toHaveProperty("population");
		expect(regionsData[0]).toHaveProperty("area");
		expect(regionsData[0]).toHaveProperty("prefectures");
	});

	test("should receive the regions", () => {
		const regions = libgn.allRegionNames;
		expect(Array.isArray(regions)).toBe(true);
		expect(regions).toContain("Conakry");
	});

	test("should receive the prefectures of passing region", () => {
		const prefectures = libgn.getPrefecturesByRegion("Conakry");
		expect(Array.isArray(prefectures)).toBe(true);
		expect(prefectures).toEqual(["Conakry"]);
	});

	test("should fail when receiving prefectures of invalid region", () => {
		expect(() => libgn.getPrefecturesByRegion("Paris")).toThrow(
			RegionReferenceError,
		);
	});

	test("should receive the codes", () => {
		const codes = libgn.allRegionCodes;
		expect(codes).toContain("CK");
	});

	test("should receive the population of passing region", () => {
		const population = libgn.getRegionPopulation("Conakry");
		expect(typeof population).toBe("number");
		expect(population).toEqual(1667864);
	});

	test("should fail when receiving population of invalid region", () => {
		expect(() => libgn.getRegionPopulation("Paris")).toThrow(
			RegionReferenceError,
		);
	});

	test("should receive the area of passing region", () => {
		const area = libgn.getRegionArea("Conakry");
		expect(typeof area).toBe("number");
		expect(area).toEqual(450);
	});

	test("should fail when receiving area of invalid region", () => {
		expect(() => libgn.getRegionArea("Paris")).toThrow(RegionReferenceError);
	});

	test("should receive the gn information", () => {
		const gn = libgn.basicInfo;
		expect(gn.name).toBe("Guinée");
		expect(gn.capital).toBe("Conakry");
		expect(gn.currency.code).toBe("GNF");
	});

	test("should receive the capital", () => {
		const capital = libgn.capital;
		expect(capital).toBe("Conakry");
	});

	test("should receive the languages", () => {
		const languages = libgn.languages;
		expect(languages.official).toBe("Français");
		expect(Array.isArray(languages.national)).toBe(true);
		expect(languages.national).toContain("Pular");
		expect(languages.national).toContain("Maninka");
	});

	test("should receive the region of a prefecture", () => {
		const region = libgn.getRegionOfPrefecture("Conakry");
		expect(region).toBe("Conakry");
	});

	test("should fail when getting region of invalid prefecture", () => {
		expect(() => libgn.getRegionOfPrefecture("Paris")).toThrow(
			PrefectureReferenceError,
		);
	});

	test("should receive neighborhoods by sub-prefecture", () => {
		const neighborhoods = libgn.getNeighborhoodsBySubPrefecture("Dixinn");
		expect(Array.isArray(neighborhoods)).toBe(true);
		expect(neighborhoods.length).toBeGreaterThan(0);
		expect(neighborhoods).toContain("Miniere Cité Secteur 2");
	});

	test("should fail when getting neighborhoods of invalid sub-prefecture", () => {
		expect(() => libgn.getNeighborhoodsBySubPrefecture("Invalid")).toThrow(
			SubPrefectureReferenceError,
		);
	});

	test("should fail when getting neighborhoods of sub-prefecture without neighborhoods", () => {
		expect(() => libgn.getNeighborhoodsBySubPrefecture("Boké Centre")).toThrow(
			SubPrefectureReferenceError,
		);
	});

	test("should receive all neighborhoods", () => {
		const allNeighborhoods = libgn.allNeighborhoods;
		expect(Array.isArray(allNeighborhoods)).toBe(true);
		expect(allNeighborhoods.length).toBeGreaterThan(0);
		expect(allNeighborhoods).toContain("Miniere Cité Secteur 2");
		expect(allNeighborhoods).toContain("KASSA");
	});
});
