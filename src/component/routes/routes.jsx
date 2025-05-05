import App from '../App.jsx'
import ErrorPage from './Error.jsx';
import Cart from './Cart.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
