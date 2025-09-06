import { render, screen } from "@testing-library/react"
import Home from "../app/page"

test("renders welcome text", () => {
  render(<Home />)
  expect(screen.getByText(/Welcome to Polling App/i)).toBeInTheDocument()
})

