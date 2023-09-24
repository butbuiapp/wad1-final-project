import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../../pages/Login";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

jest.mock("axios");

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )
}

describe("Login", () => {

  it("render login page", async () => {
    render(<MockLogin />);

    const login = await screen.findAllByText("Login");
    expect(login.length).toBe(2);

    const signup = await screen.findByText("Sign up");
    expect(signup).toBeInTheDocument();

  });

  it("should be able to type into input and click Login button", async () => {
    render(<MockLogin />);

    const emailInput = screen.getByLabelText("email");
    fireEvent.change(emailInput, { target: { value: "test@miu.edu" } });
    const passwordInput = screen.getByLabelText("password");
    fireEvent.change(passwordInput, { target: { value: "123" } });

    const loginBtn = screen.getByRole("button", { name: /Login/ });
    fireEvent.click(loginBtn);

  });

  it("should call post API when click Login button", async () => {
    const mockResponse = {
      data: {
        "success": false,
        "error": "Wrong email"
    }
    }
    axios.post.mockResolvedValueOnce(mockResponse);

    render(<MockLogin />);

    const email = "test@miu.edu";
    const password = "123";

    const emailInput = screen.getByLabelText("email");
    fireEvent.change(emailInput, { target: { value: email } });
    const passwordInput = screen.getByLabelText("password");
    fireEvent.change(passwordInput, { target: { value: password } });

    const loginBtn = screen.getByRole("button", { name: /Login/ });
    fireEvent.click(loginBtn);

    // Wait for Axios POST request to resolve
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/login', { email, password });
    });

  });

})

