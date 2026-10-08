import React from "react";
import { IProducts } from "../types/products";

const PriceDown = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: IProducts[] = await res.json();
  const downs = data
    .filter((d) => d.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="container mx-auto px-4 py-4 ">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
        <span className="text-[#05893E]">▲</span>
        আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {downs.map((d) => (
          <div
            key={d.id}
            className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm hover:border-[#05893E] hover:shadow-xl"
          >
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
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-red-600">
                ▲ {d.change.pct}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceDown;
