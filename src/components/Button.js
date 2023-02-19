import React from "react";

const Button = ({ children, handler }) => {
  return (
    <button
      class="bg-red-400 text-white px-3 py-2 rounded shadow"
      id="decrement"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
