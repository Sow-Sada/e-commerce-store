"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  _id: string;
  title: string;
  price: string;
  src: string;
  alt: string;
  qty: number;
};
type CartContext = {
  cartItems: CartItem[];
  getItemQty: number;
  increaseCartQty: (
    _id: string,
    title: string,
    price: string,
    src: string,
    alt: string
  ) => void;
  decreaseCartQty: (_id: string) => void;
  removeFromCart: (_id: string) => void;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQty = cartItems.reduce((qty, item) => item.qty + qty, 0);

  function increaseCartQty(
    _id: string,
    title: string,
    price: string,
    src: string,
    alt: string
  ) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === _id) == null) {
        return [...currItems, { _id, qty: 1, title, price, src, alt }];
      } else {
        return currItems.map((item) => {
          if (item._id === _id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQty(_id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === _id)?.qty === 1) {
        return currItems.filter((item) => item._id !== _id);
      } else {
        return currItems.map((item) => {
          if (item._id === _id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(_id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item._id !== _id);
    });
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
