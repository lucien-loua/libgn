import { describe, expect, test } from "vitest";
import * as libs from "../src/libs";

describe("Libs index testing", () => {
	test("should export all exceptions", () => {
		expect(libs.RegionReferenceError).toBeDefined();
		expect(libs.PrefectureReferenceError).toBeDefined();
		expect(libs.SubPrefectureReferenceError).toBeDefined();

		expect(typeof libs.RegionReferenceError).toBe("function");
		expect(typeof libs.PrefectureReferenceError).toBe("function");
		expect(typeof libs.SubPrefectureReferenceError).toBe("function");
	});

	test("should export all utils functions", () => {
		expect(libs.lowerCase).toBeDefined();
		expect(libs.findRegion).toBeDefined();
		expect(libs.findPrefecture).toBeDefined();
		expect(libs.getRegion).toBeDefined();
		expect(libs.getPrefecture).toBeDefined();
		expect(libs.getSubPrefecture).toBeDefined();
		expect(libs.getAllNeighborhoods).toBeDefined();

		// Test that they are actually functions
		expect(typeof libs.lowerCase).toBe("function");
		expect(typeof libs.findRegion).toBe("function");
		expect(typeof libs.findPrefecture).toBe("function");
		expect(typeof libs.getRegion).toBe("function");
		expect(typeof libs.getPrefecture).toBe("function");
		expect(typeof libs.getSubPrefecture).toBe("function");
		expect(typeof libs.getAllNeighborhoods).toBe("function");
	});

	test("should export all expected items", () => {
		// Test that all expected exports are available
		expect(libs.RegionReferenceError).toBeDefined();
		expect(libs.PrefectureReferenceError).toBeDefined();
		expect(libs.SubPrefectureReferenceError).toBeDefined();
		expect(libs.lowerCase).toBeDefined();
		expect(libs.findRegion).toBeDefined();
		expect(libs.findPrefecture).toBeDefined();
		expect(libs.getRegion).toBeDefined();
		expect(libs.getPrefecture).toBeDefined();
		expect(libs.getSubPrefecture).toBeDefined();
		expect(libs.getAllNeighborhoods).toBeDefined();
	});
});
