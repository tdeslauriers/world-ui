import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders login page", () => {
  render(<Login />);
  const username = screen.getByText(/Username/i);
  const password = screen.getByText(/Password/i);

  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});
