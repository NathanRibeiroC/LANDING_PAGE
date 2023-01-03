// app.test.js
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../../../App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { describe, it, expect } from 'vitest';

const renderWithRouter = (ui:any, {route = '/home'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

test('Testing navbar expantion for Services option', async () => {
  const {user} = renderWithRouter(<App />)
  expect(screen.getByText("Services")).toBeInTheDocument()

  await user.click(screen.getByText("Services"))

  expect(screen.getByText("Exchange")).toBeInTheDocument()
})

// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });