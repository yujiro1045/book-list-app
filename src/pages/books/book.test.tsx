import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Books from "./Books";

describe("Books Component", () => {
  it("renders without crashing", () => {
    render(<Books />);
  });
});
