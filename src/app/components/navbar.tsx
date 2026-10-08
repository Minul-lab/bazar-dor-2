import Image from "next/image";
 import Navlinks from "./navs/Navlinks";

const Navbar = () => {
  const banglaDate = new Date().toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });

  return (
    <nav className="bg-white">
      <section className="container mx-auto">
        <div className="flex items-center justify-between gap-4 p-4">
          <div className="flex gap-2">
            <div className="bg-[#05893E] p-2 rounded">
              <Image
                src="/logo-icon.png"
                alt="bazar logo"
                width={28}
                height={28}
              />
            </div>

            <div>
              <p className="font-bold text-lg text-gray-800">বাজার দর</p>
              <p>{banglaDate}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="">সাইন ইন</button>
            <button className="bg-[#05893E] p-2 rounded text-white text-sm ">
              সাইন আপ
            </button>
          </div>
        </div>
        <Navlinks></Navlinks>
      </section>
    </nav>
  );
};

export default Navbar;
