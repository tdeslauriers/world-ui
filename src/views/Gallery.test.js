import { render, screen } from "@testing-library/react";
import Gallery from "./Gallery";

test("renders Gallery page", () => {
  render(<Gallery />);
  const title = screen.getByText(/Gallery/i);
  expect(title).toBeInTheDocument();
});
