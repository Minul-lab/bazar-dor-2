import Link from "next/link";
interface IProductDetail {
  params: Promise<{
    id: string;
  }>;
}

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
  markets: IMarket[];
}

const formatPrice = (price: number) =>
  price.toLocaleString("bn-BD", {
    maximumFractionDigits: 2,
  });

const Page = async ({ params }: IProductDetail) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product: IProduct = await res.json();

  const minPrice = Math.min(...product.markets.map((m) => m.min));
  const maxPrice = Math.max(...product.markets.map((m) => m.max));

  const averagePrice =
    product.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0,
    ) / product.markets.length;

  const isPriceUp = product.change.dir === "up";

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 text-[#172820] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="transition hover:text-green-700">
            হোম
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            href={`/category/${product.category}`}
            className="transition hover:text-green-700"
          >
            {product.categoryNameBn}
          </Link>
          <span className="text-gray-400">›</span>
          <span className="font-medium text-gray-800">{product.nameBn}</span>
        </nav>

        {/* Product overview */}
        <section className="flex flex-col justify-between gap-6 rounded-2xl border border-[#dfe8df] bg-[#fbfdfb] p-5 sm:flex-row sm:items-center sm:p-7">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-4xl sm:size-24 sm:text-5xl">
              {product.image || product.categoryIcon}
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
                {product.nameBn}
              </h1>

              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                প্রতি {product.unit === "kg" ? "কেজি" : product.unit} ·{" "}
                {product.categoryNameBn}
              </p>

              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                গতকালের তুলনায় আজ দাম{" "}
                <span
                  className={`font-semibold ${
                    isPriceUp ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {isPriceUp ? "বেড়েছে" : "কমেছে"}{" "}
                  {formatPrice(product.change.pct)}%
                </span>
              </p>
            </div>
          </div>

          <div className="w-full shrink-0 rounded-2xl bg-[#f0f5f0] px-6 py-4 text-center sm:w-40">
            <p className="text-sm text-gray-600">আজকের দাম</p>
            <p className="mt-1 text-3xl font-bold">
              {formatPrice(product.today)}
            </p>
            <p className="text-sm text-gray-600">টাকা / {product.unit}</p>
            <p
              className={`mt-1 text-sm font-semibold ${
                isPriceUp ? "text-red-600" : "text-green-700"
              }`}
            >
              {isPriceUp ? "▲" : "▼"} {formatPrice(product.change.pct)}%
            </p>
          </div>
        </section>

        {/* Price summary and market table */}
        <section className="rounded-2xl border border-[#dfe8df] bg-[#fbfdfb] p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Minimum */}
            <div className="rounded-2xl border border-[#e0e8e0] p-5">
              <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-2xl font-bold text-green-600">
                {formatPrice(minPrice)}{" "}
                <span className="text-base font-normal">টাকা</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            {/* Maximum */}
            <div className="rounded-2xl border border-[#e0e8e0] p-5">
              <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-2xl font-bold text-red-500">
                {formatPrice(maxPrice)}{" "}
                <span className="text-base font-normal">টাকা</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            {/* Average */}
            <div className="rounded-2xl border border-[#e0e8e0] p-5 sm:col-span-2 lg:col-span-1">
              <p className="text-sm text-gray-500">গড় দাম</p>
              <p className="mt-1 text-2xl font-bold text-green-600">
                {formatPrice(averagePrice)}{" "}
                <span className="text-base font-normal">টাকা</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                প্রতি {product.unit === "kg" ? "কেজি" : product.unit}-এর হিসাবে
              </p>
            </div>
          </div>

          {/* Market-wise prices */}
          <h2 className="mb-4 mt-7 text-xl font-bold sm:text-2xl">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-hidden rounded-2xl border border-[#e0e8e0]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-170 border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[#fbfdfb] text-gray-500">
                  <tr>
                    <th className="px-4 py-4 font-medium sm:px-5">বাজার</th>
                    <th className="px-4 py-4 font-medium sm:px-5">বিভাগ</th>
                    <th className="px-4 py-4 text-right font-medium sm:px-5">
                      সর্বনিম্ন
                    </th>
                    <th className="px-4 py-4 text-right font-medium sm:px-5">
                      সর্বোচ্চ
                    </th>
                    <th className="px-4 py-4 text-right font-medium sm:px-5">
                      গড়
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((market, index) => {
                    const marketAverage = (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${market.division}`}
                        className={`border-t border-[#e4ebe4] transition hover:bg-[#eaf3ea] ${
                          index % 2 === 0 ? "bg-[#f0f5f0]" : "bg-[#fbfdfb]"
                        }`}
                      >
                        <td className="whitespace-nowrap px-4 py-3.5 font-medium sm:px-5">
                          {market.market}
                        </td>

                        <td className="whitespace-nowrap px-4 py-3.5 text-gray-600 sm:px-5">
                          {market.division}
                        </td>

                        <td className="whitespace-nowrap px-4 py-3.5 text-right sm:px-5">
                          {formatPrice(market.min)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-4 py-3.5 text-right sm:px-5">
                          {formatPrice(market.max)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-4 py-3.5 text-right font-semibold sm:px-5">
                          {formatPrice(marketAverage)} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Category footer */}
        <div className="px-4 py-2 text-sm font-semibold text-gray-700">
          {product.categoryIcon} {product.categoryNameBn}
        </div>
      </div>
    </main>
  );
};

export default Page;
