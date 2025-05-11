import App from "../App.jsx";
import ErrorPage from "./Error.jsx";
import Cart from "./Cart.jsx";
import { ContextProvider } from "./ContextProvider.jsx";

const routes = [
  {
    path: "/",
    element: (
      <ContextProvider>
        <App />
      </ContextProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: (
      <ContextProvider>
        <Cart />
      </ContextProvider>
    ),
  },
];

export default routes;
