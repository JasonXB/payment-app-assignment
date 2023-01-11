import React from "react";
import DownArrow from "../icons/DownArrow";
import RightArrow from "../icons/RightArrow";
import useClickOutside from "../../utility/useClickOutside";
import { reducer } from "./buildingBlocks/SortByReducer";

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
    toggleRevenueGenerated: () => dispatch({ type: "TOGGLE_REVENUE_GENERATED" }), // prettier-ignore
    toggleRecentReferral: () => dispatch({ type: "TOGGLE_RECENT_REFERRAL" }),
  };

  // Detect when someone clicks outside of the dropdown component using a custom hook
  const dropdownRef = React.useRef();
  useClickOutside(dropdownRef, () => menuManip.close());

  return (
    <div className="dropdown relative inline-block" ref={dropdownRef}>
      <button
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
            ? "min-w-max absolute text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
            : "hidden"
        }
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="w-52 bg-white rounded-t-lg">
          <button
            onClick={menuManip.toggleRevenueGenerated}
            className={
              styles.button +
              ` rounded-t-lg grid grid-cols-[auto_1fr_auto] ${
                menu.revenueGenerated && "bg-lightGray"
              }`
            }
          >
            <span>Revenue Generated</span>
            <RightArrow />
          </button>
        </li>

        <li className="w-52 bg-white rounded-b-lg">
          <button
            onClick={menuManip.toggleRecentReferral}
            className={
              styles.button +
              `rounded-b-lg grid grid-cols-[auto_1fr_auto] ${
                menu.mostRecentReferral && "bg-lightGray"
              }`
            }
          >
            <span>Most Recent Referral</span>
            <RightArrow />
          </button>
        </li>
      </ul>
      {/* NESTED SUB DROPDOWN MENUS */}
      {menu.revenueGenerated && (
        <div className={styles.submenu + " left-[210px] top-[40px]"}>
          <button
            onClick={menuManip.close}
            className={styles.submenuButton + " rounded-t-lg"}
          >
            Highest first
          </button>
          <button
            onClick={menuManip.close}
            className={styles.submenuButton + " rounded-b-lg"}
          >
            Lowest First
          </button>
        </div>
      )}
      {menu.mostRecentReferral && (
        <div className={styles.submenu + " left-[210px] top-[91px] "}>
          <button
            onClick={menuManip.close}
            className={styles.submenuButton + " rounded-t-lg"}
          >
            Newest first
          </button>
          <button
            onClick={menuManip.close}
            className={styles.submenuButton + " rounded-b-lg"}
          >
            Oldest First
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  button: "text-sm text-left py-4 px-6 w-full font-normal block whitespace-nowrap hover:bg-lightGray", // prettier-ignore
  submenu: "w-auto shadow-lg absolute z-100 rounded-lg", // prettier-ignore
  submenuButton: "bg-white text-sm text-left py-4 px-6 whitespace-nowrap hover:bg-lightGray w-full", // prettier-ignore
};
