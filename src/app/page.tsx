import React from "react";

const Page = () => {
  return (
    <div>
      <h2 className="text-2xl">Hello</h2>

      <div className="flex justify-around">
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>
    </div>
  );
};

export default Page;
