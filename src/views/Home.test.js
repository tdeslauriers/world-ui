import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home page", () => {
  render(<Home />);
  const title = screen.getByText(/Welcome to Des Lauriers World/i);
  expect(title).toBeInTheDocument();
});
