import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 animate-pulse">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* --- Header Skeleton --- */}
        <div className="flex items-center justify-between">
          {/* Logo/Title placeholder */}
          <div className="h-10 w-32 bg-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>

          {/* Nav/Action buttons placeholder */}
          <div className="flex gap-4">
            <div className="h-10 w-24 bg-gray-200 rounded-lg hidden sm:block"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* --- Hero / Main Content Skeleton --- */}
        <div className="space-y-4 pt-8">
          <div className="h-12 w-3/4 md:w-1/2 bg-gray-200 rounded-lg"></div>
          <div className="h-6 w-full md:w-2/3 bg-gray-200 rounded-lg"></div>
          <div className="h-6 w-5/6 md:w-1/2 bg-gray-200 rounded-lg"></div>

          {/* Call to Action Button Skeleton */}
          <div className="pt-4 flex gap-4">
            <div className="h-12 w-32 bg-gray-300 rounded-lg"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* --- Card Grid Skeleton (e.g., for products or posts) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-4"
            >
              {/* Image placeholder */}
              <div className="h-48 w-full bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </div>
              {/* Text placeholders */}
              <div className="space-y-3">
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
