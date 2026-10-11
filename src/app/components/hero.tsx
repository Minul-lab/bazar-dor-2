import Image from "next/image";
import ScrollButton from "./ctaBtn";

const Hero = () => {
  const banglaDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="container mx-auto flex flex-col-reverse items-center justify-between gap-6 rounded-4xl border bg-white p-6 shadow-sm md:flex-row md:gap-10 md:px-12 md:py-6">
      <div className="flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left">
        <div className="w-fit rounded-full bg-[#05893E]/30 px-4 py-1.5 text-sm font-medium text-[#05893E]">
          {banglaDate}
        </div>

        <h1 className="text-xl font-bold leading-tight sm:text-3xl lg:text-3xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="text-base text-gray-600 leading-relaxed sm:text-lg">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <ScrollButton />
      </div>

      <div className="w-full max-w-55 shrink-0 sm:max-w-70 md:max-w-80 lg:max-w-100">
        <Image
          src="/bazar-hero.png"
          alt="বাজারের ছবি"
          width={500}
          height={500}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
