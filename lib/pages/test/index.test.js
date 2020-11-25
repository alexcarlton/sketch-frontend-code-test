import { render } from "@testing-library/react";
import { Home } from "../index";

describe("index", () => {
  it("should pass", () => {
    const { getByText } = render(<Home />);

    getByText("Hello");
  });
});
