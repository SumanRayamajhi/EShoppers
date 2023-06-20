import { render } from "@testing-library/react";
import Products from "./products";

describe("Products", () => {
  it("Should render successfully", () => {
    const { baseElement } = render(
      <Products
        id={0}
        title={""}
        price={{
          amount: 0,
          currency: "EUR",
        }}
        desc={""}
        catagories={""}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
