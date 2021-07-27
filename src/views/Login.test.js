import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders login page", () => {
  render(<Login />);
  const username = screen.getByText(/Username/i);
  const password = screen.getByText(/Password/i);

  expect(username).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Username/email")).toBeInTheDocument();

  expect(password).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
});
