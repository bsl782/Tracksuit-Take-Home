import { describe, expect, it } from "vitest";
import { AddInsight } from "./add-insight.tsx";
import { render } from "@testing-library/react";

describe("add-insight", () => {
  it("renders", () => {
    const { getByText } = render(<AddInsight open={true} onClose={() => { }} />);
    expect(getByText("Add a new insight")).toBeTruthy();
  });
});
