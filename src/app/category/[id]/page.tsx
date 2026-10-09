
import { IProducts } from "../../types/products";
interface IProductDetail {
  params: Promise<{
    id: string;
  }>;
}
const getAllProducts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data;
};
const Page = async ({ params }: IProductDetail) => {
  const { id } = await params;

  const AllProducts = await getAllProducts();
  const CategorizedProducts = AllProducts.filter((product:IProducts)=>product.category=== id)
  console.log(CategorizedProducts.length);

  return (
    <div>
      <div className="bg-white rounded-xl flex gap-2 items-center">
        <div>{CategorizedProducts.image}</div>
        <div>
          <p>{CategorizedProducts.category}</p>
          <p>{CategorizedProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
