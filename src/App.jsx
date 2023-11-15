import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((fetchedProducts) => {
        return setProducts(fetchedProducts);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

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
  const { name } = useParams();
  const { products, error, loading } = useProducts();
  const [productCount, setProductCount] = useState(0);
  const [productCounts, setProductCounts] = useState(initialProductCounts());

  return (
    <div>
      <Navbar name={name} productCount={productCount}></Navbar>
      {name === "shop" ? (
        <Shop
          productCount={productCount}
          setProductCount={setProductCount}
          products={products}
          error={error}
          loading={loading}
          productCounts={productCounts}
          setProductCounts={setProductCounts}
        />
      ) : name === "checkout" ? (
        <Checkout />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
