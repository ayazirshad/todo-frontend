import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-[#9395D3] flex justify-center items-center">
      <div className="text-[#FFF] w-full sm:max-w-xl px-5 py-5 sm:py-7 md:py-10 flex gap-6 items-center ">
        <Link href={"/"} className="p-1">
          <FaArrowLeftLong size={25} />
        </Link>
        <h1 className="text-2xl capitalize">add task</h1>
      </div>
    </div>
  );
};

export default Header;
