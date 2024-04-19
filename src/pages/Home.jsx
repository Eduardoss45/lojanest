import React, { useState, useEffect } from "react";
import ProductsCard from "../components/ProductsCard";

const productsURL = import.meta.env.VITE_API;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${productsURL}?limit=100`);
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {loading && <h2>Loading...</h2>}
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          discountPercentage={product.discountPercentage}
          price={product.price}
          thumbnail={product.images[0]}
        />
      ))}
    </main>
  );
};

export default Home;