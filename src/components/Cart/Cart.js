import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css"; // Asegúrate de importar el archivo CSS

const Cart = () => {
  const { cart, total, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="cart-container no-items">
        <p>No hay elementos en el carrito</p>
        <button className="Button">
          <Link to="/">Comenzar compra</Link>
        </button>
      </div>
    );

  return (
    <div className="cart-container">
      {cart.map((products) => (
        <ItemCart key={products.id} product={products} />
      ))}
      <p>Total a Pagar: $ {total}</p>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
      <button className="Button">
        <Link to="/checkout">Checkout</Link>
      </button>
    </div>
  );
};

export default Cart;
