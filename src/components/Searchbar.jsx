import React from "react";

export default function Searchbar() {
  return (
    <div className="mb-3 w-full">
      <input
        type="search"
        className="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none
  "
        id="exampleSearch"
        placeholder="Affiliate's name or email"
      />
    </div>
  );
}
