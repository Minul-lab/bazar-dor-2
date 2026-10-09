import CategoryProducts from "@/app/components/category/categoryProducts";
import { IProducts } from "../../types/products";
interface IProductDetail {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: IProductDetail) => {
  const { id } = await params;
  const getAllProducts = async () => {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products",
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data;
  };

  const AllProducts = await getAllProducts();
  const CategorizedProducts = AllProducts.filter(
    (product: IProducts) => product.category === id,
  );
  console.log("ID from params:", id);
  console.log("First product:", CategorizedProducts[0]);
  const ctgIcon = CategorizedProducts[0]?.categoryIcon;
  const ctg = CategorizedProducts[0]?.categoryNameBn;

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-xl flex gap-4 items-center my-5 p-4">
        <div className="text-4xl">{ctgIcon}</div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">{ctg}</p>

          <p className="text-sm text-gray-600">
            {CategorizedProducts.length.toLocaleString("bn-BD")}টি পণ্যের আজকের
            দাম ও পরিবর্তন
          </p>
        </div>
      </div>
      <CategoryProducts products={CategorizedProducts} />
    </div>
  );
};

export default Page;
