"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const CompletedTodos = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const response = await fetch(`${url}/task/getTasks`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setTodos(data.filter((item) => item.isDone === true));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleMarkPending = async (todo) => {
    await fetch(`${url}/task/update/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...todo, isDone: false }),
    });
    fetchTodos();
  };

  const trimDetail = (detail) => {
    let trimmedDetail;
    let maxLength = 60;
    if (detail.length > maxLength) {
      trimmedDetail = detail.slice(0, maxLength) + "...";
    } else {
      return detail;
    }
    return trimmedDetail;
  };

  return (
    <div className="bg-[#d6d7ef] flex justify-center items-center h-[83vh]">
      <div className="px-3 py-5 w-full sm:max-w-xl flex flex-col gap-3 h-full overflow-y-auto">
        {todos?.map((todo, index) => {
          return (
            todo.isDone && (
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
                <div
                  className="flex items-center text-[#2ec5ac]/80 "
                  title="Mark as pending"
                >
                  <button
                    className="p-1 hover:cursor-pointer"
                    onClick={() => handleMarkPending(todo)}
                  >
                    <FaRegCircleCheck size={17} />
                  </button>
                </div>
              </div>
            )
          );
        })}
        {todos?.length > 0 ? (
          <p className="capitalize my-16 text-sm text-gray-500 w-full text-center">
            that's all !
          </p>
        ) : (
          <p className="capitalize my-16 text-sm text-gray-500 w-full text-center">
            no task completed
          </p>
        )}
      </div>
    </div>
  );
};

export default CompletedTodos;
