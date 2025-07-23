"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Detail = () => {
  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  const data = JSON.parse(dataString);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full sm:max-w-xl px-5 py-5 sm:py-7 md:py-10 bg-[#d6d7ef36] mt-5 rounded-2xl">
        <h1 className="uppercase text-[20px] font-semibold text-[#9395D3]">
          {data.title}
        </h1>
        <p className="mt-3 text-[16px] text-[#101010] capitalize">
          {data.detail}
        </p>
        <p
          className={`${
            data.isDone ? "text-[#9395D3]" : "text-[#f77069]"
          } uppercase text-sm mt-6`}
        >
          <span className="capitalize">this task is</span>
          <span>{!data.isDone && " not"}</span> completed
        </p>
      </div>
    </div>
  );
};

export default Detail;
