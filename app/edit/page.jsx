import React, { Suspense } from "react";
import Header from "./components/Header/Header";
const EditForm = React.lazy(() => import("./components/EditForm/EditForm"));

const page = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <EditForm />
      </Suspense>
    </div>
  );
};

export default page;
