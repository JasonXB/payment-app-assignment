import React from "react";
import DownArrow from "../icons/DownArrow";
import RightArrow from "../icons/RightArrow";
import useClickOutside from "../../utility/useClickOutside";
export default function SortBy() {
  // Detect when someone clicks outside of the dropdown component
  const dropdownRef = React.useRef();

  // Control the nested drop down menus opening and closing with useState
  const [trays, setTrays] = React.useState({
    openFirst: false,
    openSecond: false,
  });
  const toggleTray1 = function () {
    // Closing the first tray should auto close the nested tray
    if (trays.openFirst) setTrays({ openFirst: false, openSecond: false });
    // Reopening the first tray should not auto open the nested tray
    else setTrays({ openFirst: true, openSecond: false });
  };
  const openTray2 = function () {
    // First tray should always be open if the second one is too
    setTrays({ openFirst: true, openSecond: true });
  };
  const closeBothTrays = function () {
    setTrays({ openFirst: false, openSecond: false });
  };

  useClickOutside(dropdownRef, () => closeBothTrays());

  const btnStyles = "dropdown-item text-sm text-left py-4 px-6 w-full font-normal block whitespace-nowrap bg-transparent hover:bg-lightGray"; // prettier-ignore
  return (
    <div className="dropdown relative">
      <button
        ref={dropdownRef}
        onClick={toggleTray1}
        className={
          "dropdownPadding bg-blue font-medium text-xs leading-tight rounded flex items-center whitespace-nowrap"
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
        className={
          trays.openFirst
            ? "min-w-max dropdown-menu absolute text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
            : "hidden"
        }
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="w-52 bg-white rounded-t-lg">
          <button
            className={
              btnStyles + " rounded-t-lg grid grid-cols-[auto_1fr_auto]"
            }
          >
            <span>Revenue Generated</span>
            <RightArrow />
          </button>
        </li>
        <li className="w-52 bg-white rounded-b-lg">
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
