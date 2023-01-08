import React from "react";
import DownArrow from "../icons/DownArrow";
import RightArrow from "../icons/RightArrow";
import useClickOutside from "../../utility/useClickOutside";

export default function SortBy() {
  // Manipulate which drop down menus and sub menus are open with useReducer
  const [menu, dispatch] = React.useReducer(reducer, {
    sortBy: false, // first level sub menu
    revenueGenerated: false, // second level sub menu (1 of 2)
    mostRecentReferral: false, // second level sub menu (2 of 2)
  });
  const menuManip = {
    open: () => dispatch({ type: "OPEN_MENU" }),
    toggle: () => dispatch({ type: "TOGGLE_MENU" }),
    close: () => dispatch({ type: "CLOSE_MENU" }),
    openRevenueGenerated: () => dispatch({ type: "OPEN_REV_GENERATED" }),
    openRecentReferral: () => dispatch({ type: "OPEN_RECENT_REFERRAL" }),
  };

  // Detect when someone clicks outside of the dropdown component
  const dropdownRef = React.useRef();
  useClickOutside(dropdownRef, () => menuManip.close());

  const btnStyles = "text-sm text-left py-4 px-6 w-full font-normal block whitespace-nowrap hover:bg-lightGray"; // prettier-ignore
  return (
    <div className="dropdown relative">
      <button
        ref={dropdownRef}
        onClick={menuManip.toggle}
        className={
          "dropdownPadding bg-blue font-medium text-xs leading-tight rounded flex items-center whitespace-nowrap"
        }
        type="button"
      >
        <span className="text-white">Sort by</span>
        <DownArrow />
      </button>
      <ul
        className={
          menu.sortBy
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

function reducer(state, action) {
  switch (action.type) {
    // Toggle dropdown menu
    case "TOGGLE_MENU":
      return {
        sortBy: !state.sortBy,
        revenueGenerated: false,
        mostRecentReferral: false,
      };
    // Close entire dropdown menu
    case "OPEN_MENU":
      return {
        sortBy: true,
        revenueGenerated: false,
        mostRecentReferral: false,
      };
    // Close entire dropdown menu
    case "CLOSE_MENU":
      return {
        sortBy: false,
        revenueGenerated: false,
        mostRecentReferral: false,
      };

    // Open revenue generated sub menu
    case "OPEN_REVENUE_GENERATED":
      return {
        sortBy: true,
        revenueGenerated: true,
        mostRecentReferral: false,
      };
    // Open recent referral sub menu
    case "OPEN_RECENT_REFERRAL":
      return {
        sortBy: true,
        revenueGenerated: false,
        mostRecentReferral: true,
      };
    default:
      return state;
  }
}
