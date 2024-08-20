import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          img={prod.img}
          name={prod.name}
          price={prod.price}
          className="item"
        />
      ))}
    </div>
  );
};

export default ItemList;
