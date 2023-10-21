import style from "./ItemListContainer.module.css"

function ItemListContainer({message}) {
  return (
    <div className="center-content">
      <h1>{message}</h1>
    </div>
  );
}

export default ItemListContainer;
