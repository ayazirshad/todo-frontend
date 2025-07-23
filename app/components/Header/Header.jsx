import React from "react";
import { SiTodoist } from "react-icons/si";

const Header = () => {
  return (
    <div className="bg-[#9395D3] flex justify-center items-center">
      <div className="text-[#FFF] w-full sm:max-w-xl px-5 py-5 sm:py-7 md:py-10 flex justify-between items-center ">
        <h1 className="text-2xl uppercase">todo app</h1>
        <button>
          <SiTodoist size={25} />
        </button>
      </div>
    </div>
  );
};

export default Header;
