import { describe, expect, test } from "vitest";
import libgn from "../src";
import { PrefectureReferenceError } from "../src/libs/exceptions";

describe("Prefecture testing", () => {
	test("should receive all prefectures", () => {
		const prefectures = libgn.allPrefectureNames;
		expect(prefectures.length).toEqual(34);
	});

	test("should receive the sub-prefectures of passing prefecture", () => {
		const subPrefectures = libgn.getSubPrefecturesByPrefecture("Conakry");
		const expectedSubPrefectures = [
			"Kaloum",
			"Dixinn",
			"Matam",
			"Ratoma",
			"Matoto",
		];
		expect(subPrefectures.length).toEqual(expectedSubPrefectures.length);
		expect(subPrefectures).toEqual(
			expect.arrayContaining(expectedSubPrefectures),
		);
	});

	test("should fail when receiving sub-prefectures of invalid prefecture", () => {
		expect(() => libgn.getSubPrefecturesByPrefecture("Paris")).toThrow(
			PrefectureReferenceError,
		);
	});
});
