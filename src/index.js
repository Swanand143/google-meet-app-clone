import ReactDOM from "react-dom/client";

import Google from "../src/View/Google";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Google />,
  },

  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
