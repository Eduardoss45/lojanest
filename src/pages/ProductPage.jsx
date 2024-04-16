import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductsDetails from "../components/ProductsDetails";

const productsURL = import.meta.env.VITE_API;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const getProduct = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setProduct(data);

    if (data.images && data.images.length > 0) {
      setThumbnail(data.images[0]);
    }
  };

  useEffect(() => {
    const productURL = `${productsURL}/${id}`;
    getProduct(productURL);
    console.log(productURL);
  }, [id]);

  const handleImageClick = (imgSrc) => {
    setThumbnail(imgSrc);
  };

  return (
    <div className="product-page">
      <div className="product-page-top">
        {product && (
          <ProductsDetails
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            thumbnail={thumbnail}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            stock={product.stock}
            brand={product.brand}
            category={product.category}
          />
        )}
      </div>
      <div className="product-page-bottom">
        {product &&
          product.images.map((img, index) => (
            <div key={index} id={index} onClick={() => handleImageClick(img)}>
              <img className="product-image" src={img} alt={product.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;