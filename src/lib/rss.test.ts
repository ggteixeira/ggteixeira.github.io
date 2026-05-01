import { describe, it, expect } from "vitest";
import { isRssEligible } from "./rss";

const post = (draft: boolean | undefined, tags: string[]) => ({
  data: { draft, tags },
});

describe("isRssEligible", () => {
  describe("draft field", () => {
    it("includes posts without a draft field (the original bug)", () => {
      expect(isRssEligible(post(undefined, ["evergreen"]))).toBe(true);
    });

    it("includes posts with draft: false", () => {
      expect(isRssEligible(post(false, ["evergreen"]))).toBe(true);
    });

    it("excludes posts with draft: true", () => {
      expect(isRssEligible(post(true, ["evergreen"]))).toBe(false);
    });
  });

  describe("evergreen tag", () => {
    it("excludes posts tagged budding", () => {
      expect(isRssEligible(post(undefined, ["budding"]))).toBe(false);
    });

    it("excludes posts tagged seedling", () => {
      expect(isRssEligible(post(undefined, ["seedling"]))).toBe(false);
    });

    it("excludes posts with no tags", () => {
      expect(isRssEligible(post(undefined, []))).toBe(false);
    });

    it("includes posts with evergreen among other tags", () => {
      expect(isRssEligible(post(undefined, ["evergreen", "front-end"]))).toBe(
        true,
      );
    });
  });

  describe("combined", () => {
    it("excludes draft posts even when tagged evergreen", () => {
      expect(isRssEligible(post(true, ["evergreen"]))).toBe(false);
    });

    it("excludes non-draft posts that are not evergreen", () => {
      expect(isRssEligible(post(false, ["budding"]))).toBe(false);
    });
  });
});
