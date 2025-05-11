import { describe, it, vi, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../component/routes/Context.jsx";
import Cart from "../component/routes/Cart.jsx";
import Order from "../component/cart/Order.jsx";
import Subtotal from "../component/cart/Subtotal.jsx";

//not importing/exporting this since only want tests from specific file
const customRender = (ui, { providerProps }) => {
  return render(
    <BrowserRouter>
      <Context.Provider {...providerProps}>{ui}</Context.Provider>
    </BrowserRouter>
  );
};

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
describe("Load Orders", () => {
  const mock = vi.fn();
  const cart = {
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops": 2,
    "Mens Cotton Jacket": 3,
  };
  const props = {
    value: {
      products: [productList, mock],
      cartItems: [cart, mock],
    },
  };
  it("displays orders (name) from cart", () => {
    customRender(<Cart />, { providerProps: props });
    const orders = screen.getAllByRole("order");
    expect(orders.length).toBe(2);

    //correct order of appearance
    orders.forEach((element, index) => {
      const { getByRole } = within(element);
      const name = Object.keys(cart)[index];
      expect(getByRole("productName").textContent).toBe(name);
    });
  });
});

//only test if cart state changes and displays correct value using a preset state
describe("Increment/Decrement and Change/Remove Amount of Item", () => {
  //mock should get called 4 times total (increment, decrement, change, remove)
  const mock = vi.fn();
  const cart = {
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops": 6,
    "Mens Cotton Jacket": 7,
  };
  const props = {
    value: {
      products: [productList, mock],
      cartItems: [cart, mock],
    },
  };

  it("updates cart state with increment", async () => {
    const user = userEvent.setup();
    customRender(<Order productName={"Mens Cotton Jacket"} />, {
      providerProps: props,
    });
    const button = screen.getByRole("button", { name: "+" });
    await user.click(button);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("updates cart state with decrement", async () => {
    const user = userEvent.setup();
    customRender(<Order productName={"Mens Cotton Jacket"} />, {
      providerProps: props,
    });
    const button = screen.getByRole("button", { name: "-" });
    await user.click(button);
    expect(mock).toHaveBeenCalledTimes(2);
  });

    it("updates cart state with change input", async () => {
      const user = userEvent.setup();
      customRender(<Order productName={"Mens Cotton Jacket"} />, {
        providerProps: props,
      });
    const input = screen.getByRole("spinbutton");
      await user.type(input, "5");
      expect(mock).toHaveBeenCalledTimes(3);
    });
  
  it("updates cart state with remove cart", async () => {
    const user = userEvent.setup();
    customRender(<Order productName={"Mens Cotton Jacket"} />, {
      providerProps: props,
    });
    const button = screen.getByRole("button", { name: "Remove from Cart" });
    await user.click(button);
    expect(mock).toHaveBeenCalledTimes(4);
  });

  it("displays correct number of items of product in cart", () => {
    customRender(<Order productName={"Mens Cotton Jacket"} />, {
      providerProps: props,
    });
    const input = screen.getByRole("spinbutton");
    expect(input.value).toBe("7");
  });
});

describe("Render correct total of certain item", () => {
    const mock = vi.fn();
    const cart = {
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops": 6,
      "Mens Cotton Jacket": 100,
    };
    const props = {
      value: {
        products: [productList, mock],
        cartItems: [cart, mock],
      },
    };
  
    const correctTotal = (55.99 * 100).toFixed(2);
  
  it("displays correct total", () => {
    customRender(<Order productName={"Mens Cotton Jacket"} />, { providerProps : props})
    const total = screen.getByRole("total");
    expect(total.textContent).toBe(`$${correctTotal}`);
  });
  
});

describe("Render correct Subtotal, Tax, and Total", () => {
  const mock = vi.fn();
   const cart = {
     "Mens Cotton Jacket": 7,
   };
  const props = {
     value: {
       products: [productList, mock],
       cartItems: [cart, mock],
     },
  };
  
  //each jacket is $55.99
  const correctSubtotal = (55.99 * 7).toFixed(2);
  const correctTax = (correctSubtotal * 0.105).toFixed(2); 
  //shipping is $10
  const correctTotal = (Number(correctSubtotal) + Number(correctTax) + 10).toFixed(2)
  
  it("renders subtotal", () => {
    customRender(<Subtotal />, { providerProps: props });
    const subtotal = screen.getByRole("subtotal");
    expect(subtotal.textContent).toBe(`Subtotal: $${correctSubtotal}`);
  });

  it("renders tax", () => {
    customRender(<Subtotal />, { providerProps: props });
    const tax = screen.getByRole("tax");
    expect(tax.textContent).toBe(`Tax: $${correctTax}`);
  });

  it("renders total", () => {
    customRender(<Subtotal />, { providerProps: props });
    const total = screen.getByRole("total");
    expect(total.textContent).toBe(`Total: $${correctTotal}`);
  });
});