import CategoryProducts from "@/app/components/category/categoryProducts";


const AllProducts = async() => {
  
  const getAllProducts = async () => {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data;
  };

  const AllProducts = await getAllProducts();



  return (
    <div className="container mx-auto">
      <div className="text-3xl font-bold">সব পণ্য</div>
      <CategoryProducts products={AllProducts} />
    </div>
  );
};

export default AllProducts;
