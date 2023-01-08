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
        className="dropdownPadding dropdown-toggle bg-blue font-medium text-xs leading-tight uppercase rounded flex items-center whitespace-nowrap"
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
          if (i === 0) rounded = "top";
          else if (i === lastListIndex) rounded = "bottom";
          return <ListItem key={uuidv4()} text={text} rounded={rounded} />;
        })}
        {/* <ListItem text="Mark as paid" rounded="top" />
        <ListItem text="Reject" />
        <ListItem text="Send payouts" rounded="bottom" /> */}
      </ul>
    </div>
  );
}
