import React from "react";

const Page = async () => {
  const res = await fetch("http://localhost:3000/users/4");
  const data = await res.json();
  console.log(data);
  return <div>users</div>;
};

export default Page;
