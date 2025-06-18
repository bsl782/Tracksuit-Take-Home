import type { HasDBClient } from "../shared.ts";
import { deleteStatement } from "$tables/insights.ts";

type Input = HasDBClient & {
  id: number;
};

export default (input: Input) => {
  console.log("Deleting insight record");
  const result = input.db.exec(deleteStatement(input.id));
  console.log("Insight record deleted");
  return result;
};
