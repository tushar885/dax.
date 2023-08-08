import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client.js";
import AppLayout from "./components/AppLayout.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import TransactionForm from "./components/TransactionForm.js";
// import OrderForm from "./components/OrderForm.js";
import HomeMain from "./components/HomeMain.js";

const TransactionForm = lazy(() => import("./components/TransactionForm?.js"));
const OrderForm = lazy(() => import("./components/OrderForm.js"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomeMain /> },
      {
        path: "/transaction",
        element: (
          <Suspense>
            <TransactionForm />
          </Suspense>
          // <TransactionForm />
        ),
      },
      {
        path: "/store/order",
        element: (
          <Suspense>
            <OrderForm />
          </Suspense>
          // <OrderForm />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
