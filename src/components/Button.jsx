import React from "react";
import { Link } from "react-router-dom";

const Button = ({ rote, id, class_name, icon, text }) => {
  return (
    <>
      <Link to={rote}>
        <button id={id} className={class_name}>
          {icon && <span>{icon}</span>}
          {text && <span>{text}</span>}
        </button>
      </Link>
    </>
  );
};

export default Button;
