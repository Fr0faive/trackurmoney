import React from "react";

const DynamicPage = ({ params }) => {
  return <div>This page : {params.id}</div>;
};

export default DynamicPage;
