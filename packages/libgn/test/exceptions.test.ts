import { describe, expect, test } from "vitest";
import {
	PrefectureReferenceError,
	RegionReferenceError,
	SubPrefectureReferenceError,
} from "../src/libs/exceptions";

describe("Exceptions testing", () => {
	describe("RegionReferenceError", () => {
		test("should create error with name", () => {
			const error = new RegionReferenceError("TestRegion");
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(RegionReferenceError);
			expect(error.name).toBe("RegionReferenceError");
			expect(error.message).toBe(
				"Region 'TestRegion' not found. Please check the spelling.",
			);
		});

		test("should create error without name", () => {
			const error = new RegionReferenceError();
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(RegionReferenceError);
			expect(error.name).toBe("RegionReferenceError");
			expect(error.message).toBe(
				"Region 'undefined' not found. Please check the spelling.",
			);
		});

		test("should create error with empty string", () => {
			const error = new RegionReferenceError("");
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(RegionReferenceError);
			expect(error.name).toBe("RegionReferenceError");
			expect(error.message).toBe(
				"Region '' not found. Please check the spelling.",
			);
		});
	});

	describe("PrefectureReferenceError", () => {
		test("should create error with name", () => {
			const error = new PrefectureReferenceError("TestPrefecture");
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(PrefectureReferenceError);
			expect(error.name).toBe("PrefectureReferenceError");
			expect(error.message).toBe(
				"Prefecture 'TestPrefecture' not found. Please check the spelling.",
			);
		});

		test("should create error without name", () => {
			const error = new PrefectureReferenceError();
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(PrefectureReferenceError);
			expect(error.name).toBe("PrefectureReferenceError");
			expect(error.message).toBe(
				"Prefecture 'undefined' not found. Please check the spelling.",
			);
		});

		test("should create error with empty string", () => {
			const error = new PrefectureReferenceError("");
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(PrefectureReferenceError);
			expect(error.name).toBe("PrefectureReferenceError");
			expect(error.message).toBe(
				"Prefecture '' not found. Please check the spelling.",
			);
		});
	});

	describe("SubPrefectureReferenceError", () => {
		test("should create error with name", () => {
			const error = new SubPrefectureReferenceError("TestSubPrefecture");
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(SubPrefectureReferenceError);
			expect(error.name).toBe("SubPrefectureReferenceError");
			expect(error.message).toBe(
				"Sub-prefecture 'TestSubPrefecture' not found. Please check the spelling.",
			);
		});

		test("should create error without name", () => {
			const error = new SubPrefectureReferenceError();
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(SubPrefectureReferenceError);
			expect(error.name).toBe("SubPrefectureReferenceError");
			expect(error.message).toBe(
				"Sub-prefecture 'undefined' not found. Please check the spelling.",
			);
		});

		test("should create error with empty string", () => {
			const error = new SubPrefectureReferenceError("");
			expect(error).toBeInstanceOf(Error);
			expect(error).toBeInstanceOf(SubPrefectureReferenceError);
			expect(error.name).toBe("SubPrefectureReferenceError");
			expect(error.message).toBe(
				"Sub-prefecture '' not found. Please check the spelling.",
			);
		});
	});
});
