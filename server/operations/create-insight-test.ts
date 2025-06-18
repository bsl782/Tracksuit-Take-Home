import { expect } from "jsr:@std/expect";
import { beforeAll, describe, it } from "jsr:@std/testing/bdd";
import type { Insert } from "$tables/insights.ts";
import { withDB } from "../testing.ts";
import createInsight from "./create-insight.ts";

describe("creating insight in the database", () => {
  describe("creating insight correctly", () => {
    withDB((fixture) => {
      const insert: Insert = {
        brand: 0,
        createdAt: "01/01/2001",
        text: "1",
      };

      let result: number;

      beforeAll(() => {
        result = createInsight({ ...fixture, insert });
      });

      it("returns successful result", () => {
        expect(result).toEqual(1);
      });
    });
  });
});
