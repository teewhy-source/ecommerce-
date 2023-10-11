import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Replace with the path to your main App component
import { Userprovider } from "./contex/Contex";
import { CartProvider } from "./contex/Cart.context";
import { ProductsProvider } from "./contex/Product";
import "./index.scss";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Userprovider>
        <ProductsProvider>
          <CartProvider>
          <App />
          </CartProvider>
        </ProductsProvider>
      </Userprovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
