import React from "react";
import { useCustomContext } from "../../context";
export default function SendPayoutsButton() {
  // Function that lets you log the payouts list is stored in React Context
  const { logPayoutsList } = useCustomContext();
  return (
    <button
      type="button"
      onClick={logPayoutsList}
      className="w-full py-3 bg-blue text-white font-medium text-xs leading-normal rounded-lg flex align-center items-center justify-center"
    >
      <span className="mr-3 text-white text-lg">Send payouts</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        className="w-4 bi bi-send-fill"
        viewBox="0 0 16 16"
      >
        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
      </svg>
    </button>
  );
}
