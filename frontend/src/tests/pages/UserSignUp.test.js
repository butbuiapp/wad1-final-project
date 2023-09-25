import React from 'react';
import { render, screen } from '@testing-library/react';
import UserSignUp from '../../pages/UserSignUp';
import { BrowserRouter } from "react-router-dom";

const MockUserSignUp = () => {
  return (
    <BrowserRouter>
      <UserSignUp />
    </BrowserRouter>
  )
}

describe('User Sign up suits', () => {
  it('Renders without issues', async () => {
    render(<MockUserSignUp />);
    const signupTitle = await screen.findAllByText('Create account');
    expect(signupTitle.length).toBe(2);
  })
})


