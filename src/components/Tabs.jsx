import React from "react";

export default function Tabs() {
  return (
    <div className="grid grid-cols-[auto_1fr] ">
      <div>
        <button className="px-4 py-2 bg-white border-lightGray border-[2px] border-b-0 rounded-t-md">
          Pending Payouts
        </button>
      </div>
      <div className="border-b-2 border-lightGray">
        <button className="px-4 py-2 text-blue rounded-t-md">
          Pending Payouts
        </button>
      </div>
    </div>
  );
}
