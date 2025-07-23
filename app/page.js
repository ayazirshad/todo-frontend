import React from "react";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";

const page = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
};

export default page;
