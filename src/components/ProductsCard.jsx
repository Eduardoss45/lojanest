import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

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
          <img src={thumbnail} alt={title} className="card-image" />
          <p className="description">{description}</p>
          <nav className="card-btn">
            {showLink && (
              <Link to={`/product/${id}`}>
                <Button text="Saiba mais" />
              </Link>
            )}
          </nav>
        </section>
      </article>
    </>
  );
};

export default ProductsCard;