import React from "react";

export default function ListItem({ text, rounded = "" }) {
  // The rounded prop creates a rounded corner for a list item
  // It should only be used for the top or bottom item in a list
  if (rounded === "top") rounded = "rounded-t-lg";
  else if (rounded === "bottom") rounded = "rounded-b-lg";
  return (
    <li className="w-44">
      <button
        className={
          rounded +
          " dropdown-item text-sm text-left py-4 px-6 w-full font-normal block whitespace-nowrap bg-transparent hover:bg-lightGray"
        }
      >
        {text}
      </button>
    </li>
  );
}
