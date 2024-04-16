import React from "react";

const Button = ({ text, extra_text }) => {
  return (
    <>
      <button>
        <span>{text}</span>
        {extra_text && <span>{extra_text}</span>}
      </button>
    </>
  );
};

export default Button;
