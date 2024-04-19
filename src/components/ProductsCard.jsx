import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ProductsCard = ({
  id,
  title,
  description,
  thumbnail,
  discountPercentage,
  price,
}) => {
  return (
    <>
      <Link to={`/product/${id}`} className="product-link" id={id}>
        <article className="card">
          <div className="product-image">
            <LazyLoad height={200} offset={100}>
              <img src={thumbnail} alt={title} className="card-image" />
            </LazyLoad>
            <span>-{discountPercentage}%</span>
          </div>
          <section className="card-content">
            <div className="card-description">
              <p className="description">{description}</p>
            </div>
            <div>
              <h3 className="card-details-price">
                <span>${price}</span>
              </h3>
            </div>
          </section>
        </article>
      </Link>
    </>
  );
};

export default ProductsCard;
