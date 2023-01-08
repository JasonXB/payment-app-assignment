import React from "react";
import DownArrow from "../icons/DownArrow";
import RightArrow from "../icons/RightArrow";

export default function SortBy() {
  const btnStyles =
    "dropdown-item text-sm text-left py-4 px-6 w-full font-normal block whitespace-nowrap bg-transparent hover:bg-lightGray";
  // #0b2c53
  return (
    <div className="dropdown relative">
      <button
        className="dropdownPadding dropdown-toggle bg-blue font-medium text-xs leading-tight rounded flex items-center whitespace-nowrap"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="text-white">Sort by</span>
        <DownArrow />
      </button>
      <ul
        className="dropdown-menu divide-lightGray min-w-max absolute hidden bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="w-52">
          <button
            className={
              btnStyles + " rounded-t-lg grid grid-cols-[auto_1fr_auto]"
            }
          >
            <span>Revenue Generated</span>
            <RightArrow />
          </button>
        </li>
        <li className="w-52">
          <button
            className={
              btnStyles + " rounded-b-lg grid grid-cols-[auto_1fr_auto]"
            }
          >
            <span>Most Recent Referral</span>
            <RightArrow />
          </button>
        </li>
      </ul>
    </div>
  );
}
