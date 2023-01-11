import React from "react";

export default function ListItem({ text, rounded = "", revealModal = null }) {
  // The rounded prop creates a rounded corner for a list item
  // It should only be used for the top or bottom item in a list
  if (rounded === "top") rounded = "rounded-t-lg";
  else if (rounded === "bottom") rounded = "rounded-b-lg";
  return (
    <li className="listItemWidth">
      <button
        // Give button properties that let it show the modal (if we provide an revealModal truthy value)
        data-bs-toggle={revealModal ? "modal" : ""}
        data-bs-target={revealModal ? "#exampleModalXl" : ""}
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
