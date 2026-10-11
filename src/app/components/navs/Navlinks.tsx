import NavLinksClient from "./NavsLinksClient";

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

  return <NavLinksClient categories={data} />;
};

export default Navlinks;
