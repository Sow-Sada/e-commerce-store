"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/sanity/sanity-utils";
import ProductCards from "../components/ProductCards";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

type Product = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  price: string;
  alt: string;
};

const Products = () => {
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="relative">
        <h2 className="text-center text-[#57C5B6] text-3xl">Products</h2>
        <div className="grid gap-4 py-6 lg:gap-10 max-w-full grid-cols-2 md:grid-cols-fluid">
          {products.map(
            (product: Product) =>
              product.image && (
                <ProductCards
                  key={product._id}
                  _id={product._id}
                  src={product.image}
                  title={product.name}
                  alt={product.alt}
                  price={product.price}
                />
              )
          )}
        </div>
        <div className="font-sans sticky bottom-0 right-0  mt-4 inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <button onClick={() => setShowCart(true)}>
            <svg className="w-10 h-10 fill-[#B1F8EE]" viewBox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              5
            </span>
          </button>
        </div>
      </div>
      {showCart ? (
        <div
          className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
          aria-modal={true}
          role="dialog"
          tabIndex={-1}
        >
          <button
            onClick={() => setShowCart(false)}
            className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
          >
            <span className="sr-only">Close cart</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Cart />
        </div>
      ) : undefined}
    </>
  );
};

export default Products;
