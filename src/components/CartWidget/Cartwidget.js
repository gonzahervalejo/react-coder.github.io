import cart from "./assets/cart.png";
import "./Cartwidget.css";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cartwidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="widget">
      <Link to="/cart" className="CartWidget">
        <img id="carrito" width="30px" src={cart} alt="Carrito" />
        {totalQuantity > 0 && (
          <span className="number" id="number">
            {totalQuantity}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Cartwidget;
