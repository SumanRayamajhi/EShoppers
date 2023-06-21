import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar";
import NavbarCatagories from "./NavbarCatagories";

describe("Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });

  test("all given categories", () => {
    render(
      <NavbarCatagories
        onClickMenuButton={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
  });
});
