import React from "react";

export default function LayoutBlock(props) {
  return (
    <div className=" bg-[#f3f6fc] w-full">
      <div className="p-8">{props.children}</div>
    </div>
  );
}
