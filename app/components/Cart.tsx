import CartItems from "./CartItems";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();
  const total = cartItems
    .reduce((acc, item) => acc + Number(item.price), 0)
    .toFixed(2);

  return (
    <div className="mt-4 space-y-6">
      {cartItems.length === 0 ? (
        <h1 className="text-center text-xl"> Cart is empty</h1>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItems
              key={item._id}
              _id={item._id}
              alt={item.alt}
              title={item.title}
              src={item.src}
              price={item.price}
            />
          ))}
          <div className="space-y-4 text-center">
            <h2 className="text-end text-lg">Total Price:</h2>
            <p className="text-end italic">€{total}</p>
            <Link
              href="#"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </Link>
            <Link
              href="#"
              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
