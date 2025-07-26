/**
 * Throws when a region is not found
 */
export class RegionReferenceError extends Error {
	constructor(name?: string) {
		super(`Region '${name}' not found. Please check the spelling.`);
		this.name = "RegionReferenceError";
	}
}

/**
 * Throws when a prefecture is not found
 */
export class PrefectureReferenceError extends Error {
	constructor(name?: string) {
		super(`Prefecture '${name}' not found. Please check the spelling.`);
		this.name = "PrefectureReferenceError";
	}
}

/**
 * Throws when a sub-prefecture is not found
 */
export class SubPrefectureReferenceError extends Error {
	constructor(name?: string) {
		super(`Sub-prefecture '${name}' not found. Please check the spelling.`);
		this.name = "SubPrefectureReferenceError";
	}
}
