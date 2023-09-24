import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../../pages/Login";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

jest.mock("axios");

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  )
}

describe("Login", () => {
  beforeEach(() => {
    const mockResponse = {
      data: {
          "success": true,
          "data": "token"
      }
    }
    axios.get.mockResolvedValueOnce(mockResponse);
  })

  it("render login page", async () => {
    render(<MockLogin />);
  
    const login = await screen.findAllByText("Login");
    expect(login.length).toBe(2);
  
    const signup = await screen.findByText("Sign up");
    expect(signup).toBeInTheDocument();
  
  });

  it("should be able to type into input and click login button", async () => {
    render(<MockLogin />);  
  
    const emailInput = screen.getByLabelText("email");
    fireEvent.change(emailInput, { target: { value: "test@miu.edu" } });
    const passwordInput = screen.getByLabelText("password");
    fireEvent.change(passwordInput, { target: { value: "123" } });

    const loginBtn = screen.getByRole("button", {name: /Login/});
    fireEvent.click(loginBtn);  
  
  });
})

