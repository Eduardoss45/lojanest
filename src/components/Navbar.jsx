import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Button from "./Button";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <Button text={<AiOutlineShoppingCart />} extra_text="NestShop" />
          </Link>
        </div>
        <div>
          <input
            type="text"
            name="search-products"
            id="search-products"
            placeholder="Buscar na NestShop"
          />
        </div>
        <div>
          <Button text={<AiOutlineShoppingCart />} />
          <Button text="Cadastrar" />
          <Button text="Entre" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
