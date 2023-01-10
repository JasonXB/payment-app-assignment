import React from "react";

export default function LayoutBlock(props) {
  return (
    <div className=" bg-[#f3f6fc] w-full ">
      <div className="p-8 max-w-[1400px] m-auto">{props.children}</div>
    </div>
  );
}
