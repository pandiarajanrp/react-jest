import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("should render form components", () => {
    render(<Form />);

    //role - heading 
    const headingEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingEl.textContent).toEqual("Job Application Form");
    const captionEl = screen.getByRole("heading", {
      level: 2,
    });
    expect(captionEl.textContent).toEqual("Please enter your details");

    //role - form inputs
    const textEl = screen.getByRole("textbox", {
      name: "Firstname",
    });
    expect(textEl).toBeInTheDocument();

    const commentsEl = screen.getByRole("textbox", {
      name: "Comments",
    });
    expect(commentsEl).toBeInTheDocument();

    const selectEl = screen.getByRole("combobox");
    expect(selectEl).toBeInTheDocument();

    const checkEl = screen.getByRole("checkbox");
    expect(checkEl).toBeInTheDocument();

    //getByPlaceholderText
    const phEl = screen.getByPlaceholderText("Firstname");
    expect(phEl).toBeInTheDocument();

    //getByText
    const pEl = screen.getByText(/All fields are Mandatory/i)
    expect(pEl).toBeInTheDocument();

    //getByDisplayValue
    const dvEl = screen.getByDisplayValue("Mexico City")
    expect(dvEl).toBeInTheDocument();

    //getByAltText
    const imgEl = screen.getByAltText("logo")
    expect(imgEl).toBeInTheDocument();

    //getByTitle
    const titleEl = screen.getByTitle("close")
    expect(titleEl).toBeInTheDocument();

    //getByTestId
    const testIdEl = screen.getByTestId("custom");
    expect(testIdEl).toBeInTheDocument();
  });

});
