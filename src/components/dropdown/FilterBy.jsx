import React from "react";
import DropdownMaker from "./buildingBlocks/DropdownMaker";
export default function FilterBy() {
  return (
    <DropdownMaker
      text="Filter by"
      listItems={["All pending payouts", "Ready Payouts", "No Leaks"]}
    />
  );
}
