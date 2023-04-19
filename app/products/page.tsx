import ProductCards from "../components/ProductCards";

const Products = () => {
  return (
    <>
      <h2 className="text-center text-3xl">Products</h2>
      <div className="grid grid-cols-2 grid-row-5">
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
    </>
  );
};

export default Products;
