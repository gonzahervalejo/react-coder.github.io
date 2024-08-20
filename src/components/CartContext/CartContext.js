import { useState, useEffect, createContext, useContext } from "react";
import "./CartContext.css";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalQty = cart.reduce((accu, prod) => accu + prod.quantity, 0);
    setTotalQuantity(totalQty);
  }, [cart]);

  useEffect(() => {
    const totalValue = cart.reduce(
      (accu, prod) => accu + prod.quantity * prod.price,
      0
    );
    setTotal(totalValue);
  }, [cart]);

  const addItem = (productToAdd, quantity) => {
    if (!isInCart(productToAdd.id)) {
      productToAdd.quantity = quantity;
      setCart([...cart, productToAdd]);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          return { ...prod, quantity: quantity };
        } else {
          return prod;
        }
      });
      setCart(cartUpdated);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutProduct);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity || 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        isInCart,
        totalQuantity,
        total,
        clearCart,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
