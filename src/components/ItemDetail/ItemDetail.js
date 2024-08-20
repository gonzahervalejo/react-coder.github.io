import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { useCart } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { NotificationContext } from "../Notification/NotificationService";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, price, img, description, stock, category }) => {
  const { addItem, isInCart, getProductQuantity } = useCart();
  const { setNotification } = useContext(NotificationContext);

  const onAdd = (count) => {
    const productToAdd = {
      id,
      name,
      img,
      price,
      category,
      description,
    };

    if (count > 0) {
      addItem(productToAdd, count);
      setNotification("success", `Se agregó correctamente ${count} ${name}`);
    } else {
      setNotification("error", `Tienes que agregar algún elemento`);
    }
  };

  const quantityAdded = getProductQuantity(id);

  return (
    <div className="item-detail-container">
      <picture className="item-detail-image">
        <img src={img} alt={name} />
      </picture>
      <div className="item-detail-info">
        <header className="item-detail-header">
          <h2>{name}</h2>
        </header>
        <section className="item-detail-description">
          <p className="item-category">{category}</p>
          <p className="item-price">Price: $ {price}</p>
          <p className="item-description">{description}</p>
        </section>
        <footer className="item-detail-footer">
          {stock !== 0 ? (
            <ItemCount onAdd={onAdd} stock={stock} initial={quantityAdded} />
          ) : (
            <p className="out-of-stock">No hay stock</p>
          )}
          {isInCart(id) && (
            <Link to="/cart" className="finalize-purchase-button">
              Finalizar compra
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;
