"use client";

import { useState } from "react";
import { IProducts } from "../../types/products";
import Link from "next/link";

interface CategoryProductsProps {
  products: IProducts[];
}

const CategoryProducts = ({ products }: CategoryProductsProps) => {
  const [sortBy, setSortBy] = useState("default");

  const SortedProducts = [...products].sort((a, b) => {
    if (sortBy === "low-high") {
      return a.today - b.today;
    }

    if (sortBy === "high-low") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <>
      <div className="flex my-3 items-center justify-between">
        <p className="text-gray-600 text-sm">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 outline-none focus:border-green-500"
        >
          <option value="default" className="text-sm">
            ডিফল্ট
          </option>
          <option value="low-high " className="text-sm">
            দামঃ কম থেকে বেশি
          </option>
          <option value="high-low" className="text-sm">
            দামঃ বেশি থেকে কম
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SortedProducts.map((d: IProducts) => (
          <Link href={`/product/${d.id}`} key={d.id}>
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm hover:border-[#05893E] hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                  {d.image}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold leading-tight">
                    {d.nameBn}
                  </h3>
                  <p className="text-sm text-gray-500">প্রতি কেজি</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">আজকের দাম</p>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">
                  {d.today} <span className="text-base font-normal">টাকা</span>
                </p>

                {d.change.dir === "up" ? (
                  <div className="relative group">
                    <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-red-600">
                      ▲ {d.change.pct}%
                    </span>

                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block whitespace-nowrap rounded bg-gray-900 px-3 py-1.5 text-xs text-white">
                      গতকাল এর তুলনায় বেড়েছে
                    </span>
                  </div>
                ) : (
                  <div className="relative group">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-[#05893E]">
                      ▼ {d.change.pct}%
                    </span>

                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block whitespace-nowrap rounded bg-gray-900 px-3 py-1.5 text-xs text-white">
                      গতকাল এর তুলনায় কমেছে
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
