import ProductCards from "../components/ProductCards";
import { getProducts } from "@/sanity/sanity-utils";

type Product = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  price: string;
  alt: string;
};
const Products = async () => {
  const products = await getProducts();
  return (
    <>
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
    </>
  );
};

export default Products;
