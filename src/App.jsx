import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "./hooks/useProducts";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

const initialProductCounts = () => {
  let index = 1;
  const max = 21;
  const productCounts = [];
  while (index < max) {
    productCounts.push({ id: index, productCount: "0" });
    index += 1;
  }

  return productCounts;
};

function App() {
  const [productCount, setProductCount] = useState(0);
  const [productCounts, setProductCounts] = useState(initialProductCounts());
  const { name } = useParams();
  const { products, error, loading } = useProducts();
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <Navbar
        name={name}
        productCount={productCount}
        onClick={checkout}
      ></Navbar>
      {name === "shop" ? (
        <Shop
          setProductCount={setProductCount}
          products={products}
          error={error}
          loading={loading}
          productCounts={productCounts}
          setProductCounts={setProductCounts}
        />
      ) : name === "checkout" ? (
        <Checkout productCount={productCount} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
