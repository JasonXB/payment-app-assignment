import React from "react";

export default function ViewArrow() {
  return (
    <button
      type="button"
      className="flex flex-row items-center bg-none font-medium text-xs leading-normal rounded"
    >
      <span className="text-lightBlue">View</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#2585fc"
        className="bi bi-arrow-right-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    </button>
  );
}
