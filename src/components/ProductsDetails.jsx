import React from "react";
import Button from "./Button";
import { BiStar } from "react-icons/bi";
import LazyLoad from "react-lazyload";

const ProductsDetails = ({
  id,
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
}) => {
  return (
    <>
      <article className="card-details" id={`product-${id}`}>
        <section className="card-details-content">
          <figure className="card-details-left">
            <LazyLoad height={200} offset={100}>
              <img src={thumbnail} alt={title} className="card-details-image" />
            </LazyLoad>
          </figure>
          <div className="card-details-right">
            <p className="card-detalis-stock">{stock} disponiveis</p>
            <h2 className="card-details-title">{title}</h2>
            <h3 className="card-details-price">${price}</h3>
            <h4 className="card-details-discount">-{discountPercentage}%</h4>
            <p className="description">Categoria: {category}</p>
            <p className="description">Marca: {brand}</p>
            <p className="description">Descrição: {description}</p>
            <p className="description">
              Avaliação: <BiStar /> {rating}
            </p>
            <Button text="Interessado" />
          </div>
        </section>
      </article>
    </>
  );
};

export default ProductsDetails;
