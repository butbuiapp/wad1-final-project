import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

test("render login page", async () => {
  render(
    <Router initialEntries={["/login"]}>
      <Login />
    </Router>
  );

  const login = await screen.findAllByText("Login");
  expect(login.length).toBe(2);

  const signup = await screen.findByText("Sign up");
  expect(signup).toBeInTheDocument();

});
