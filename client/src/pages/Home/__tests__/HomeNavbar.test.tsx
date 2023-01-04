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

describe('Navbar Behavior', () => {
  const navOptions = ["Services","Health & Wellness"];

  it('Testing navbar expantion for Services option', async () => {

    const {user} = renderWithRouter(<App />)

    expect(screen.getByText(navOptions[0])).toBeInTheDocument()
  
    await user.click(screen.getByText(navOptions[0]))
  
    expect(screen.getByText("Exchange")).toBeInTheDocument()
  })

  it('Testing navbar expantion for Health And Services option', async () => {

    const {user} = renderWithRouter(<App />)

    expect(screen.getByText(navOptions[1])).toBeInTheDocument()
  
    await user.click(screen.getByText(navOptions[1]))
  
    expect(screen.getByText("Exchange")).toBeInTheDocument()
  })
});