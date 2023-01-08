import React from "react";
import DropdownMaker from "./buildingBlocks/DropdownMaker";
export default function Actions() {
  return (
    <DropdownMaker
      text="Actions"
      listItems={["Mark as paid", "Reject", "Send payouts"]}
    />
  );
}
