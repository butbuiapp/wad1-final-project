import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home component when visiting the home route", () => {
  render(<App />);

  expect(screen.getByText("Sign up")).toBeInTheDocument();
});
