"use client";

import { useState } from "react";

export default function SortDropdown() {
  const [sortBy, setSortBy] = useState("default");

  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 outline-none focus:border-green-500"
    >
      <option value="default">Default</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
    </select>
  );
}
