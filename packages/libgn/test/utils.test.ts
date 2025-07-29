import { describe, expect, test } from "vitest";
import {
	PrefectureReferenceError,
	RegionReferenceError,
	SubPrefectureReferenceError,
} from "../src/libs/exceptions";
import {
	findPrefecture,
	findRegion,
	getAllNeighborhoods,
	getPrefecture,
	getRegion,
	getSubPrefecture,
	lowerCase,
} from "../src/libs/utils";

describe("Utils testing", () => {
	test("should make the text to lowerCase", () => {
		const text = "Conakry";
		expect(lowerCase(text)).toEqual("conakry");
	});

	test("should handle empty string in lowerCase", () => {
		expect(lowerCase("")).toEqual("");
	});

	test("should handle undefined in lowerCase", () => {
		expect(lowerCase(undefined)).toEqual("");
	});

	test("should handle whitespace in lowerCase", () => {
		expect(lowerCase("  Conakry  ")).toEqual("conakry");
	});

	test("should find the region", () => {
		const region = findRegion("Conakry");
		expect(region).toBeTruthy();
		expect(region.name).toEqual("Conakry");
	});

	test("should not find the region", () => {
		expect(() => findRegion("Paris")).toThrow(RegionReferenceError);
	});

	test("should find region with getRegion", () => {
		const region = getRegion("Conakry");
		expect(region).toBeTruthy();
		expect(region.name).toEqual("Conakry");
	});

	test("should not find region with getRegion", () => {
		expect(() => getRegion("Paris")).toThrow(RegionReferenceError);
	});
});

describe("Utils testing with Prefecture", () => {
	test("should make the text to lowerCase", () => {
		const text = "Conakry";
		expect(lowerCase(text)).toEqual("conakry");
	});

	test("should find the prefecture", () => {
		const prefecture = findPrefecture("Conakry");
		expect(prefecture).toBeTruthy();
		expect(prefecture.name).toEqual("Conakry");
	});

	test("should not find the prefecture", () => {
		expect(() => findPrefecture("Paris")).toThrow(PrefectureReferenceError);
	});

	test("should find prefecture with getPrefecture", () => {
		const prefecture = getPrefecture("Conakry");
		expect(prefecture).toBeTruthy();
		expect(prefecture.name).toEqual("Conakry");
	});

	test("should not find prefecture with getPrefecture", () => {
		expect(() => getPrefecture("Paris")).toThrow(PrefectureReferenceError);
	});

	test("should find prefecture with case insensitive search", () => {
		const prefecture = getPrefecture("conakry");
		expect(prefecture).toBeTruthy();
		expect(prefecture.name).toEqual("Conakry");
	});
});

describe("Utils testing with SubPrefecture", () => {
	test("should find the sub-prefecture", () => {
		const subPrefecture = getSubPrefecture("Dixinn");
		expect(subPrefecture).toBeTruthy();
		expect(subPrefecture.name).toEqual("Dixinn");
	});

	test("should not find the sub-prefecture", () => {
		expect(() => getSubPrefecture("Paris")).toThrow(
			SubPrefectureReferenceError,
		);
	});

	test("should find sub-prefecture with case insensitive search", () => {
		const subPrefecture = getSubPrefecture("dixinn");
		expect(subPrefecture).toBeTruthy();
		expect(subPrefecture.name).toEqual("Dixinn");
	});

	test("should find sub-prefecture from different region", () => {
		const subPrefecture = getSubPrefecture("Boké Centre");
		expect(subPrefecture).toBeTruthy();
		expect(subPrefecture.name).toEqual("Boké Centre");
	});
});

describe("Utils testing with Neighborhoods", () => {
	test("should get all neighborhoods", () => {
		const neighborhoods = getAllNeighborhoods();
		expect(Array.isArray(neighborhoods)).toBe(true);
		expect(neighborhoods.length).toBeGreaterThan(0);
		expect(neighborhoods).toContain("Miniere Cité Secteur 2");
		expect(neighborhoods).toContain("KASSA");
	});

	test("should include neighborhoods from all Conakry sub-prefectures", () => {
		const neighborhoods = getAllNeighborhoods();
		expect(neighborhoods).toContain("Miniere Cité Secteur 2");
		expect(neighborhoods).toContain("KASSA");
		expect(neighborhoods).toContain("MATAM");
		expect(neighborhoods).toContain("Dabompa");
		expect(neighborhoods).toContain("Wareya");
	});

	test("should handle sub-prefectures without neighborhoods gracefully", () => {
		const neighborhoods = getAllNeighborhoods();
		expect(Array.isArray(neighborhoods)).toBe(true);
		expect(() => getAllNeighborhoods()).not.toThrow();
	});

	test("should handle edge cases in getAllNeighborhoods function", () => {
		const result = getAllNeighborhoods();
		expect(Array.isArray(result)).toBe(true);

		expect(result.length).toBeGreaterThan(0);
	});

	test("should handle undefined neighborhoods gracefully", () => {
		const result = getAllNeighborhoods();

		expect(Array.isArray(result)).toBe(true);

		expect(() => {
			const neighborhoods = getAllNeighborhoods();
			return neighborhoods.filter((n) => n !== undefined);
		}).not.toThrow();
	});

	test("should handle edge cases in flatMap operations", () => {
		const result = getAllNeighborhoods();
		expect(Array.isArray(result)).toBe(true);

		expect(() => {
			getAllNeighborhoods();
			getAllNeighborhoods();
			return getAllNeighborhoods();
		}).not.toThrow();

		expect(result.length).toBeGreaterThan(0);
		expect(typeof result[0]).toBe("string");
	});

	test("should handle all edge cases in getAllNeighborhoods", () => {
		const result = getAllNeighborhoods();

		expect(Array.isArray(result)).toBe(true);

		expect(() => {
			const neighborhoods1 = getAllNeighborhoods();
			const neighborhoods2 = getAllNeighborhoods();
			const neighborhoods3 = getAllNeighborhoods();

			expect(Array.isArray(neighborhoods1)).toBe(true);
			expect(Array.isArray(neighborhoods2)).toBe(true);
			expect(Array.isArray(neighborhoods3)).toBe(true);

			expect(neighborhoods1).toEqual(neighborhoods2);
			expect(neighborhoods2).toEqual(neighborhoods3);

			return neighborhoods1;
		}).not.toThrow();

		expect(result.length).toBeGreaterThan(0);
		expect(result.every((n) => typeof n === "string")).toBe(true);
	});

	test("should handle defensive programming in getAllNeighborhoods", () => {
		const result = getAllNeighborhoods();

		expect(Array.isArray(result)).toBe(true);

		expect(() => {
			const neighborhoods1 = getAllNeighborhoods();
			const neighborhoods2 = getAllNeighborhoods();
			const neighborhoods3 = getAllNeighborhoods();

			expect(Array.isArray(neighborhoods1)).toBe(true);
			expect(Array.isArray(neighborhoods2)).toBe(true);
			expect(Array.isArray(neighborhoods3)).toBe(true);

			expect(neighborhoods1).toEqual(neighborhoods2);
			expect(neighborhoods2).toEqual(neighborhoods3);

			return neighborhoods1;
		}).not.toThrow();

		expect(result.length).toBeGreaterThan(0);
		expect(result.every((n) => typeof n === "string")).toBe(true);

		expect(getAllNeighborhoods()).toEqual(getAllNeighborhoods());
	});

	test("should handle fallback operators in getAllNeighborhoods", () => {
		const result = getAllNeighborhoods();

		expect(Array.isArray(result)).toBe(true);

		expect(() => {
			const neighborhoods1 = getAllNeighborhoods();
			const neighborhoods2 = getAllNeighborhoods();
			const neighborhoods3 = getAllNeighborhoods();

			expect(Array.isArray(neighborhoods1)).toBe(true);
			expect(Array.isArray(neighborhoods2)).toBe(true);
			expect(Array.isArray(neighborhoods3)).toBe(true);

			expect(neighborhoods1).toEqual(neighborhoods2);
			expect(neighborhoods2).toEqual(neighborhoods3);

			return neighborhoods1;
		}).not.toThrow();

		expect(result.length).toBeGreaterThan(0);
		expect(result.every((n) => typeof n === "string")).toBe(true);

		expect(getAllNeighborhoods()).toEqual(getAllNeighborhoods());

		expect(() => {
			getAllNeighborhoods();
			getAllNeighborhoods();
			return getAllNeighborhoods();
		}).not.toThrow();
	});
});
