import CartItems from "./CartItems";
import Link from "next/link";
export type CartProps = {
  _id: string;
  src: string;
  title: string;
  alt: string;
  price: string;
};

const Cart = ({ _id, src, title, alt, price }: CartProps) => {
  return (
    <div className="mt-4 space-y-6">
      <CartItems _id={_id} src={src} title={title} alt={alt} price={price} />

      <div className="space-y-4 text-center">
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
    </div>
  );
};

export default Cart;
