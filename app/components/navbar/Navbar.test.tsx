import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });

  test("all given categories", () => {
    render(<Navbar />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
  });
});
