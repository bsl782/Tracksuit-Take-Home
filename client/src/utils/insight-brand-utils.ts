import { BRANDS } from "../lib/consts.ts";

export const returnBrandName = (id: number): string => {
  for (let i = 0; i < BRANDS.length; i++) {
    if (BRANDS[i].id === id) {
      return BRANDS[i].name;
    }
  }
  return "";
};
