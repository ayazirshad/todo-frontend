import React from "react";
import CompletedTodos from "./CompletedTodos/CompletedTodos";
import Header from "./Header/Header";

const page = () => {
  return (
    <div>
      <Header />
      <CompletedTodos />
    </div>
  );
};

export default page;
