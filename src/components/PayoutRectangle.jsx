import React from "react";

export default function PayoutRectangle({
  total,
  label,
  includeButton = false, // decides whether to include a Pay All button component
  green = false, // makes the number green if set to true
}) {
  return (
    <div className="bg-white inline-block shadow-md px-4 py-3 w-full sm:w-[400px] lg:w-[290px] h-[100px] rounded-lg">
      <div className="flex flex-row items-center mb-[12px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 mr-2 bi bi-cash"
          viewBox="0 0 16 16"
        >
          <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
        </svg>
        <p className="font-bold">{label}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p
          className={`${
            green ? "text-green" : ""
          } font-bold text-2xl text-[1.65rem]`}
        >
          ${total}
        </p>
        {includeButton && (
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalXl"
            className="inline-block px-4 py-0 bg-blue text-white font-medium text-xs leading-tight rounded hover:shadow-lg "
          >
            Pay All
          </button>
        )}
      </div>
    </div>
  );
}
