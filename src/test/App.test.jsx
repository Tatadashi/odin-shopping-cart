import { describe, it, vi, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../component/routes/Context.jsx";
import Catalog from "../component/home/Catalog";
import Navbar from "../component/routes/Navbar.jsx";

//not importing/exporting this since only want tests from specific file
const customRender = (ui, { providerProps }) => {
  return render(
    <BrowserRouter>
      <Context.Provider {...providerProps}>{ui}</Context.Provider>
    </BrowserRouter>
  );
};

describe("Load Catalog", () => {
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
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ];

  const mock = vi.fn();
  const cart = {};
  const props = {
    value: {
      products: [productList, mock],
      cartItems: [cart, mock],
    },
  };
  it("displays products (name) from productList", () => {
    const productNames = [
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "Mens Casual Premium Slim Fit T-Shirts",
      "Mens Cotton Jacket",
    ];
    customRender(<Catalog />, { providerProps: props });
    const productElements = screen.getAllByRole("productName");
    expect(productElements.length).toBe(3);

    //correct order of appearance
    productElements.forEach((element, index) => {
      const { getByText } = within(element);
      const name = productNames[index];
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});

//only test if cart state changes and displays correct value using a preset state
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

  const mock = vi.fn();
  const cart = { stuff: 4 };
  const props = {
    value: {
      products: [productList, mock],
      cartItems: [cart, mock],
    },
  };

  it("updates cart state", async () => {
    const user = userEvent.setup();
    customRender(<Catalog />, { providerProps: props });
    const firstButton = screen.getByRole("button", { name: "Add to Cart" });
    await user.click(firstButton);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("displays correct number of items in navbar cart", () => {
    customRender(<Navbar />, { providerProps: props });
    const cartDisplay = screen.getByTitle("Items in Cart");
    expect(cartDisplay.textContent).toBe("4");
  });
});
