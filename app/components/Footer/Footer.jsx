import React from "react";
import { CiCircleList } from "react-icons/ci";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 bg-red w-full flex justify-center items-center z-10 bg-[#FFF]">
      <div className="w-full sm:max-w-xl p-5 sm:py-7 flex items-center justify-around relative">
        <div className="text-[#9395D3] gap-1 flex flex-col items-center hover:cursor-pointer">
          <p className="w-max">
            <CiCircleList size={25} />
          </p>
          <p className="text-[12px] capitalize w-max">all</p>
        </div>
        <Link
          href={"/completed"}
          className="text-[#8B8787] gap-1 flex flex-col items-center"
        >
          <p className="w-max">
            <IoCheckmarkSharp size={25} />
          </p>
          <p className="text-[12px] capitalize w-max">completed</p>
        </Link>
        <Link
          href={"/add"}
          title="Add a task"
          className="w-16 aspect-square rounded-full bg-[#9395D3] flex justify-center items-center text-[#FFF] text-2xl absolute -top-20 right-5 sm:right-10 shadow-2xl hover:scale-[105%] transition-all duration-300"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
