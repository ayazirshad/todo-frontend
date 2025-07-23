import React, { Suspense } from "react";
import Header from "./components/Header/Header";
const Detail = React.lazy(() => import("./components/Detail/Detail"));

const page = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Detail />
      </Suspense>
    </div>
  );
};

export default page;
