import { beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { withDB } from "../testing.ts";
import type { Insight } from "$models/insight.ts";
import deleteInsight from "./delete-insight.ts";

describe("deleting insights in the database", () => {
  describe("specified insight delete not in the DB", () => {
    withDB((fixture) => {
      let result: number;

      beforeAll(() => {
        result = deleteInsight({ ...fixture, id: 0 });
      });

      it("returns nothing", () => {
        expect(result).toEqual(0);
      });
    });
  });

  describe("insight is in the DB and is deleted", () => {
    withDB((fixture) => {
      const insights: Insight[] = [
        { id: 1, brand: 0, createdAt: new Date(), text: "1" },
        { id: 2, brand: 0, createdAt: new Date(), text: "2" },
        { id: 3, brand: 1, createdAt: new Date(), text: "3" },
        { id: 4, brand: 4, createdAt: new Date(), text: "4" },
      ];

      let result: number;

      beforeAll(() => {
        fixture.insights.insert(
          insights.map((it) => ({
            ...it,
            createdAt: it.createdAt.toISOString(),
          })),
        );
        result = deleteInsight({ ...fixture, id: 3 });
      });

      it("returns the correct result code", () => {
        expect(result).toEqual(1);
      });
    });
  });
});
