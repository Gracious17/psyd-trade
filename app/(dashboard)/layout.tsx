import Image from "next/image";
import Link from "next/link";
// import Navbar from "../components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-black/90">
      {/* left  */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4  border-r-4  text-white">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <span className="hidden lg:block font-bold capitalize ">
            psyd-trade
          </span>
        </Link>
        {/* <Menu /> */}
        <div></div>
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        {children}
      </div>
    </div>
  );
}
