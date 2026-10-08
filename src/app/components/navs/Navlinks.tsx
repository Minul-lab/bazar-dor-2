import Link from "next/link";

interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data: Category[] = await res.json();
  console.log(data.length)

  return (
    <div className="flex gap-4 ml-4">
      {data.map((d, i) => (
        <Link className="text-xs " href={`https://api.abcz.workers.dev/api/bazardor/categories/${d.id}`} key={i}>{`${d.icon}${d.nameBn}`} </Link>
      ))}
    </div>
  );
};

export default Navlinks;
