import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

test("render login page", () => {
  render(
    <Router initialEntries={["/login"]}>
      <Login />
    </Router>
  );

  expect(screen.getAllByText("Login").length).toBe(2);

});
