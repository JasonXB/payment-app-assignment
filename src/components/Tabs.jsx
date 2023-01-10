import React from "react";

export default function Tabs() {
  return (
    <div className="grid grid-cols-[auto_1fr] mb-8">
      <div>
        <button className="px-4 py-2 bg-white border-gray border-[1px] border-b-0 rounded-t-md">
          Pending Payouts
        </button>
      </div>
      <div className="border-b-[1px] border-gray">
        <button className="px-4 py-2 text-blue rounded-t-md">
          Paid Payouts
        </button>
      </div>
    </div>
  );
}
