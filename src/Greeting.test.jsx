import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("should not render logged in message", () => {
    render(<Greeting />);

    //role - heading 
    const welcomeEl = screen.queryByText(/Hello/);
    expect(welcomeEl).not.toBeInTheDocument();
  });

  it("should render logged in message", () => {
    render(<Greeting />);
    const btnEl = screen.queryByRole("button", {
        name: 'SignIn'
    })
    userEvent.click(btnEl);
    const welcomeEl = screen.queryByText(/Hello/);
    expect(welcomeEl).toBeInTheDocument();
  });
});
