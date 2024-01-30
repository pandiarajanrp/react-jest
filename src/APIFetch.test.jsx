import { render, screen } from "@testing-library/react";
import APIFetch from "./APIFetch";

describe("APIFetch", () => {
  it("should render components", () => {
    render(<APIFetch />)
    const titleEl = screen.getByText(/List of Todos/);
    expect(titleEl).toBeInTheDocument();
  });
  it("should not render error components", () => {
    render(<APIFetch />)
    const titleEl = screen.queryByText(/This is error/);
    expect(titleEl).not.toBeInTheDocument();
  });
  it("should render todos", async () => {
    render(<APIFetch />)
    const listEl = await screen.findAllByRole("listitem");
    expect(listEl.length).toEqual(200);
  });
  it("should render error", async () => {
    render(<APIFetch />)
    const errorEl = await screen.findByText(/This is error text/, undefined, {
      timeout: 2005
    });
    expect(errorEl).toBeInTheDocument();
  });
});
