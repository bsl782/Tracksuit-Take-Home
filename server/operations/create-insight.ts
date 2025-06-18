import type { HasDBClient } from "../shared.ts";
import { insertStatement } from "$tables/insights.ts";
import type { Insert } from "$tables/insights.ts";

type Input = HasDBClient & {
  insert: Insert;
};

export default (input: Input): number => {
  console.log("Creating insight record");
  const result = input.db.exec(insertStatement(input.insert));
  console.log("Insight record created");
  return result;
};
