import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Shop from "../Shop/Shop";
import Checkout from "../Checkout/Checkout";
import ErrorPage from "../ErrorPage/ErrorPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
