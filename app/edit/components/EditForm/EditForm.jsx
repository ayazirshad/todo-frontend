"use client";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const EditForm = () => {
  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  const data = JSON.parse(dataString);

  const [title, setTitle] = useState(data.title);
  const [detail, setDetail] = useState(data.detail);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`http://localhost:8080/task/update/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...data, title, detail }),
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    redirect("/");
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full sm:max-w-xl  px-5 py-8">
        <form action="submit" onSubmit={(e) => handleUpdate(e)}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="py-2 focus:outline-none border-b border-b-[#8B8787]/60 text-[#9395D3] w-full"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="py-2 focus:outline-none border-b border-b-[#8B8787]/60 text-[#101010]/80 w-full"
            />
          </div>
          <div className="flex w-full justify-between mt-12 text-[#FFF]">
            <button
              className="px-5 py-3 w-28 sm:w-36 rounded-xl bg-[#9395D3] capitalize text-sm shadow-xl cursor-pointer"
              type="submit"
            >
              {loading ? "updating..." : "update"}
            </button>
            <Link
              href={"/"}
              className="px-5 py-3 w-28 sm:w-36 rounded-xl bg-[#9395D3] capitalize text-sm shadow-xl text-center"
            >
              cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
