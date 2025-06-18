import type { HasDBClient } from "../shared.ts";
import { createTable } from "$tables/insights.ts";

type Input = HasDBClient;

export default (input: Input): void => {
  console.log("Creating insights table");
  input.db.exec(createTable);
  console.log("Created insights table successfully");
};
