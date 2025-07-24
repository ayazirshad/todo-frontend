"use client";
import React, { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";

const Todos = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const response = await fetch(`${url}/task/getTasks`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setTodos(data.filter((item) => item.isDone === false));
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${url}/task/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    fetchTodos();
  };

  const handleMarkDone = async (todo) => {
    await fetch(`${url}/task/update/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...todo, isDone: true }),
    });
    fetchTodos();
  };

  const trimDetail = (detail) => {
    let trimmedDetail;
    let maxLength = 40;
    if (detail.length > maxLength) {
      trimmedDetail = detail.slice(0, maxLength) + "...";
    } else {
      return detail;
    }
    return trimmedDetail;
  };

  return (
    <div className="bg-[#d6d7ef] flex justify-center items-center h-[80vh] sm:h-[75vh] z-0">
      <div className="px-3 py-5 w-full sm:max-w-xl flex flex-col gap-3 h-full overflow-y-auto">
        {todos?.map((todo, index) => {
          return (
            !todo.isDone && (
              <div
                key={index}
                className="flex justify-between items-center bg-[#FFF] rounded-xl shadow-xl hover:shadow-2xl hover:scale-[101%] transition-all duration-300 px-5 p-3"
              >
                <div>
                  <Link
                    href={{
                      pathname: "/detail",
                      query: { data: JSON.stringify(todo) },
                    }}
                    className="uppercase text-[16px] font-semibold text-[#9395D3]"
                  >
                    {todo.title}
                  </Link>
                  <p className="text-[#101010] text-sm capitalize">
                    {trimDetail(todo.detail)}
                  </p>
                </div>
                <div className="flex gap-3 items-center text-[#B3B7EE]">
                  <Link
                    href={{
                      pathname: "/edit",
                      query: { data: JSON.stringify(todo) },
                    }}
                    className="p-1"
                    title="Edit"
                  >
                    <FiEdit3 size={20} />
                  </Link>
                  <button
                    className="p-1 cursor-pointer"
                    onClick={() => handleDelete(todo._id)}
                    title="Delete"
                  >
                    <MdDeleteOutline size={21} />
                  </button>
                  <button
                    className="p-1 cursor-pointer"
                    onClick={() => handleMarkDone(todo)}
                    title="Mark as Done"
                  >
                    <FaRegCircleCheck size={17} />
                  </button>
                </div>
              </div>
            )
          );
        })}
        {loading ? (
          <p className="capitalize my-16 text-sm text-gray-500 w-full text-center">
            loading...
          </p>
        ) : todos?.length > 0 ? (
          <p className="capitalize my-16 text-sm text-gray-500 w-full text-center">
            that's all !
          </p>
        ) : (
          <p className="capitalize my-16 text-sm text-gray-500 w-full text-center">
            no tasks to do
          </p>
        )}
      </div>
    </div>
  );
};

export default Todos;
