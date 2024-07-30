import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./Components/ProductPage.js";
import CreateProductPage from "./pages/CreateProductPage.js";
// import { CartProvider } from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products/:productId", element: <ProductPage /> },
  { path: "/create", element: <CreateProductPage /> },
]);

root.render(
  <React.StrictMode>
    {/* <CartProvider> */}
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
    {/* </CartProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
