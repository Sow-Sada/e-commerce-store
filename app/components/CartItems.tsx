import Image from "next/image";

type CartItemsProps = {
  _id: string;
  src: string;
  title: string;
  alt: string;
  price: string;
};

const CartItems = ({ _id, src, title, alt, price }: CartItemsProps) => {
  return (
    <ul className="space-y-4">
      <li className="flex items-center gap-4">
        <Image
          key={_id}
          src={src}
          alt={alt}
          className="h-16 w-16 rounded object-cover"
          height={150}
          width={150}
        />

        <div>
          <h3 className="text-sm text-gray-900">{title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Price</dt>
              <dd className="inline">{price}</dd>
            </div>
          </dl>
        </div>
      </li>
    </ul>
  );
};

export default CartItems;
