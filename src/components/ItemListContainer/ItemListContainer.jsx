import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts } from "../../asyncMock";
import { useParams } from "react-router-dom";
import style from "./ItemListContainer.module.css";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    
    if (!categoryId) {
      getProducts()
        .then((resp) => {
          {
            setProducts(resp);
          }
        })
        .catch((error) => console.log(error));
    } else {
      getProductsByCategory(categoryId)
        .then((resp) => {
          {
            setProducts(resp);
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className="container mt-4 ">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-3">
            <div className="card">
              <img
                src={product.img}
                className={style.image}
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p>Stock Disponible: {product.stock}</p>
                <Link to={"/item/" + product.id} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;