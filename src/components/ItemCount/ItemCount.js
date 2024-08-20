import less from "./assets/less.png";
import more from "./assets/more.png";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock = 5, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  if (count > stock) {
    window.alert("No hay más stock");
  }

  return (
    <div className="contador">
      <h1 className="count-display"> {count} </h1>

      <div className="button-group">
        <button onClick={decrement} className="control-button">
          <img width="30px" src={less} alt="menos" />
        </button>
        <button onClick={increment} className="control-button">
          <img width="30px" src={more} alt="mas" />
        </button>
      </div>

      <button onClick={() => onAdd(count)} className="add-to-cart-button">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
