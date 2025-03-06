import React from "react";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const results = await searchParams;
  return <div>search</div>;
};

export default SearchPage;
