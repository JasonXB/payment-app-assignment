import React from "react";
import ListItem from "./ListItem";
import DownArrow from "../../icons/DownArrow";
import { v4 as uuidv4 } from "uuid";

// list items should be an array of strings
export default function DropdownMaker({ listItems, text }) {
  const lastListIndex = listItems.length - 1;
  return (
    <div className="dropdown relative">
      <button
        className="dropdownPadding dropdown-toggle bg-blue font-medium text-xs leading-tight rounded flex items-center whitespace-nowrap"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="text-white">{text}</span>
        <DownArrow />
      </button>
      <ul
        className="dropdown-menu divide-y divide-lightGray min-w-max absolute hidden bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
        aria-labelledby="dropdownMenuButton1"
      >
        {listItems.map((text, i) => {
          // Apply rounded edges to first and last list items
          let rounded = "";
          i === 0 ? (rounded = "top") : (rounded = "");
          i === lastListIndex ? (rounded = "bottom") : (rounded = "");
          // Apply an onClick function for the Send Payouts button specifically
          return (
            <ListItem
              key={uuidv4()}
              text={text}
              rounded={rounded}
              revealModal={text === "Send payouts" ? true : false}
            />
          );
        })}
      </ul>
    </div>
  );
}
