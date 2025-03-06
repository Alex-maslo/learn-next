import React from "react";
import Form from "next/form";

const SearchComponent = () => {
  return (
    <div>
      <Form action="/search">
        <input
          name="query"
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto text-black"
        />
      </Form>
    </div>
  );
};

export default SearchComponent;
