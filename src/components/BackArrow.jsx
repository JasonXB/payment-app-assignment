import React from "react";

export default function BackArrow() {
  return (
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalXl"
      className="flex flex-row items-center bg-none font-medium text-xs leading-normal rounded absolute left-4 top-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4"
        viewBox="0 0 24 24"
      >
        <path
          fill="#3257f3"
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        />
      </svg>
      <span className="text-blue text-xl ml-3">Back</span>
    </button>
  );
}
