import React from "react";
import Button from "./Button";
import LazyLoad from "react-lazyload";

const ProductsCard = ({
  id,
  title,
  description,
  thumbnail,
  showLink = true,
}) => {
  return (
    <>
      <article className="card" id={`product-${id}`}>
        <h2 className="card-title">{title}</h2>
        <section className="card-content">
          <LazyLoad height={200} offset={100}>
            <img src={thumbnail} alt={title} className="card-image" />
          </LazyLoad>
          <p className="description">{description}</p>
          <nav className="card-btn">
            {showLink && <Button rote={`/product/${id}`} text="Saiba mais" />}
          </nav>
        </section>
      </article>
    </>
  );
};

export default ProductsCard;
