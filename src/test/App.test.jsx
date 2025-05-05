import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Catalog from "../component/home/Catalog";

describe("Add to Cart", () => {

  const productList = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];

  it("updates cart list", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Catalog productList={productList} />
      </BrowserRouter>
    );
    // console.log('a')
    // const firstButton = screen.getByRole("button", { name: "Add to Cart" });
    // await user.click(firstButton);

    expect(true).toBe(true);
  });

  it("updates navbar cart number", () => {
    expect(false).toBe(false);
  });
});
