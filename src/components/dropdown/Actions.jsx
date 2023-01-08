import React from "react";
import ListItem from "./ListItem";
import DownArrow from "../icons/DownArrow";
export default function Actions() {
  return (
    <div className="dropdown relative">
      <button
        className="dropdownPadding dropdown-toggle bg-blue font-medium text-xs leading-tight uppercase rounded flex items-center whitespace-nowrap"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="text-white">Actions</span>
        <DownArrow />
      </button>
      <ul
        className="dropdown-menu divide-y divide-lightGray min-w-max absolute hidden bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
        aria-labelledby="dropdownMenuButton1"
      >
        <ListItem text="Mark as paid" rounded="top" />
        <ListItem text="Reject" />
        <ListItem text="Send payouts" rounded="bottom" />
      </ul>
    </div>
  );
}
