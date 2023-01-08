import React from "react";
import DownArrow from "../icons/DownArrow";
import RightArrow from "../icons/RightArrow";

export default function SortBy() {
  // Control the nested drop down menus opening and closing with useState
  const [tray1, setTray1] = React.useState(false);
  const [tray2, setTray2] = React.useState(false);
  const toggleTray1 = () => setTray1(!tray1);
  const toggleTray2 = () => setTray1(!tray2);

  const btnStyles = "dropdown-item text-sm text-left py-4 px-6 w-full font-normal block whitespace-nowrap bg-transparent hover:bg-lightGray"; // prettier-ignore
  // #0b2c53
  return (
    <div className="dropdown relative">
      <button
        className={
          "dropdownPadding dropdown-toggle bg-blue font-medium text-xs leading-tight rounded flex items-center whitespace-nowrap"
        }
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="text-white">Sort by</span>
        <DownArrow />
      </button>
      <ul
        className="hidden dropdown-menu divide-lightGray min-w-max absolute bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
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
