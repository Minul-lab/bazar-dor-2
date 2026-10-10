import Image from "next/image";
 import Navlinks from "./navs/Navlinks";
 import Link from "next/link";
import UserInfo from "./navs/userInfo";

const Navbar = () => {
  const banglaDate = new Date().toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });

  return (
    <nav className="bg-white">
      <section className="container mx-auto">
        <div className="flex items-center justify-between gap-4 p-4">
          <Link href={"/"}>
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
          </Link>
          <UserInfo/>
        </div>
        <Navlinks></Navlinks>
      </section>
    </nav>
  );
};

export default Navbar;
