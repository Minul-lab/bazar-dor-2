"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinksClient = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 overflow-x-auto px-4 pb-2 whitespace-nowrap">
      {categories.map((c) => {
        const href = `/category/${c.id}`;
        const isActive = pathname === href;

        return (
          <Link
            key={c.id}
            href={href}
            className={`shrink-0 rounded-full px-3 py-1 text-xs transition ${
              isActive
                ? "bg-[#05893E] font-semibold text-white"
                : "text-gray-700 hover:bg-[#05893E]/10"
            }`}
          >
            {c.icon} {c.nameBn}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinksClient;
