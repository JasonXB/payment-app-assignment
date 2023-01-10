import React from "react";
import Checkbox from "./Checkbox";
export default function Affiliate({ name, checked, containsLeaks = false }) {
  return (
    <div className="flex ">
      <Checkbox checked={checked} name={name} />
      {containsLeaks && <span>FLAG</span>}
    </div>
  );
}
