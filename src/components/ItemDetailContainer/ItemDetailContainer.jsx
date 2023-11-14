import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import style from "./ItemDetailContainer.module.css";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({
    name: "",
    img: "",
    price: 0,
    categoryId: "",
    description: "",
    stock: 0,
  });

  const [count, setCount] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((resp) => {
        {
          setProduct(resp);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const canAddElements = product.stock > count ? true : false;
  const canRemoveElements = count > 0 ? true : false;
  
  function handleAddElements() {
    if (canAddElements) {
      setCount(count + 1);
    }
  }

  function handleRemoveElements() {
    if (canRemoveElements) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <p className="card-text">{product.description}</p>
          <img
            src={product.img}
            className={`${style["max-width-img"]} img-fluid mb-3`}
          />
          <p>
            Stock Disponible: <span id="stockCantidad">{product.stock}</span>
          </p>
          <div className="input-group mb-3" style={{ maxWidth: 200 }}>
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="botonRestar"
                onClick={handleRemoveElements}
              >
                -
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              placeholder="Cantidad"
              aria-label="Cantidad"
              aria-describedby="botonRestar botonSumar"
              value={count}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="botonSumar"
                onClick={handleAddElements}
              >
                +
              </button>
            </div>
          </div>
          <button className="btn btn-primary" id="botonAgregarCarrito">
            Agregar al Carrito
          </button>

          <Link to={"/"}>
            <button className="btn btn-secondary" id="botonAgregarCarrito">
              Volver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
