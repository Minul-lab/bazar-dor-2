"use client";

const ScrollButton = () => {
  const handleClick = () => {
    document
      .getElementById("all-products")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-lg bg-[#05893E] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 active:scale-95 sm:text-base"
    >
      সব পণ্য দেখুন
    </button>
  );
};

export default ScrollButton;
