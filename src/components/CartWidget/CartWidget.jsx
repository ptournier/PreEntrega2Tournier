const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        src="/carrito.png"
        alt="Carrito de Compras"
        width={30}
        height={30}
        className="mr-2"
      />
      <span className="badge badge-light">5</span>
    </div>
  );
};

export default CartWidget;
