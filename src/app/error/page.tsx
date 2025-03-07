import React from "react";
import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ErrorPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;

  const errorMessage = atob(searchParams.data as string);

  return (
    <>
      <Link
        className="flex flex-col gap-3 btn btn-soft btn-error text-xl h-max p-4"
        href={"/"}
      >
        <h2>{errorMessage}</h2>
        <p>Click here, check your username and password and try again.</p>
      </Link>
    </>
  );
};

export default ErrorPage;
