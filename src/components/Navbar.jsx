import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import Button from "./Button";
import Input from "./Input";

const Navbar = () => {
  return (
    <header>
      <nav id="user-navigation">
        <Button
          rote={`/`}
          id="logo"
          icon={<AiOutlineShoppingCart />}
          text="NestShop"
        />
        <div id="search-bar">
          <Input
            type="text"
            id="search-products"
            text="Buscar na NestShop"
            icon={<AiOutlineSearch />}
          />
        </div>
        <Button
          rote={`/`}
          class_name="btn btn-svg"
          icon={<AiOutlineShoppingCart />}
        />
        <div id="user-options">
          <Button rote={`/`} class_name="btn" text="Cadastrar" />
          <Button rote={`/`} class_name="btn" text="Entre" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
