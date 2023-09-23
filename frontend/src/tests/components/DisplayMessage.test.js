import React from "react";
import { render, screen } from "@testing-library/react";
import DisplayMessage from "../../components/DisplayMessage";

test("display message", () => {
  const component = render(<DisplayMessage type="error" message="Invalid email" />);

  expect(screen.getByText("Invalid email")).toBeInTheDocument();

});
