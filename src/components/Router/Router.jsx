import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../ErrorPage/ErrorPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:name",
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
