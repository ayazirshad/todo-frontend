"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const AddForm = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const task = { title, detail, isDone: false };
    const response = await fetch(`${url}/task/addTask`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    // const data = await response.json();
    console.log(response.status);
    if (response.status === 201) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      redirect("/");
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full sm:max-w-xl  px-5 py-8">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="py-2 focus:outline-none border-b border-b-[#8B8787]/60 text-[#9395D3] w-full"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Detail"
              value={detail}
              required
              onChange={(e) => setDetail(e.target.value)}
              className="py-2 focus:outline-none border-b border-b-[#8B8787]/60 text-[#101010]/80 w-full"
            />
          </div>
          <div className="flex w-full justify-between mt-12 text-[#FFF]">
            <button
              className={`px-5 py-3 w-full text-[20px] rounded-xl bg-[#9395D3] capitalize text-sm shadow-xl hover:cursor-pointer ${
                loading && "cursor-not-allowed"
              }`}
              disabled={loading}
              type="submit"
            >
              {loading ? "adding..." : "add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
