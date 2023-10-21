import React from "react";

function CartWidget() {
  return (
    <div className="d-flex align-items-center">
      <img
        src="./src/img/carrito.png"
        alt="Carrito de Compras"
        width={30}
        height={30}
        className="mr-2"
      />
      <span className="badge badge-light">5</span>
    </div>
  );
}

export default CartWidget;
