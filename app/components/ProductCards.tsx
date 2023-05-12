import Image from "next/image";
import { useCart } from "../context/CartContext";

type ProductCardsProps = {
  _id: string;
  src: string;
  title: string;
  alt: string;
  price: string;
};

const ProductCards = ({ src, title, alt, price, _id }: ProductCardsProps) => {
  const { increaseCartQty } = useCart();

  return (
    <div className="px-4 w-fit lg:w-full bg-white shadow rounded">
      <div className="h-48 lg:w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
        <div className="flex justify-center">
          <Image
            src={src}
            alt={alt}
            height={150}
            width={150}
            className="min-h-[150px] object-contain max-h-[150px]"
          />
        </div>
        <div>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            available
          </span>
        </div>
      </div>
      <div className="p-3 lg:p-4 min-h-[184px] flex flex-col justify-between items-center">
        <h1 className="text-gray-800 md:min-h-[24px] text-center mt-1">
          {title}
        </h1>
        <p className="text-center text-gray-800 mt-1">€{price}</p>
        {/* <div className="lg:inline-flex hidden items-center mt-2">
          <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="bg-gray-100 border-t border-b  border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            2
          </div>
          <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div> */}
        <button
          onClick={() => increaseCartQty(_id, title, price, src, alt)}
          className="py-2 px-4 bg-[#57C5B6] text-white rounded hover:bg-green-500 disabled:opacity-50 mt-4 w-full flex self-end items-center justify-center"
        >
          Add
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
