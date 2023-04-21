"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  _id: string;
  qty: number;
};
type CartContext = {
  getItemQty: (_id: string) => number;
  increaseCartQty: (_id: string) => void;
  decreaseCartQty: (_id: string) => void;
  removeFromCart: (_id: string) => void;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQty(_id: string) {
    return cartItems.find((item) => item._id === _id)?.qty || 0;
  }

  function increaseCartQty(_id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === _id) == null) {
        return [...currItems, { _id, qty: 1 }];
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
      value={{ getItemQty, increaseCartQty, decreaseCartQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
