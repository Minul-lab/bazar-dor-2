import Link from "next/link";

export default function NotFound() {
  return (
    <div className="my-auto flex flex-col items-center justify-center  px-4 text-center">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto animate-fade-in-up">
        {/* Basket Icon */}
        <div className="text-7xl mb-6 drop-shadow-sm hover:scale-110 transition-transform duration-300 cursor-default">
          🧺
        </div>

        {/* Main Heading (Bengali) */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-sans">
          পাতাটি খুঁজে পাওয়া যায়নি
        </h1>

        {/* Subtext (Bengali) */}
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button: Home */}
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            হোম পেজে যান
          </Link>

          {/* Secondary Button: Market Comparison */}
          <Link
            href="/sign-in"
            className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-slate-800 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            বাজার তুলনা দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
