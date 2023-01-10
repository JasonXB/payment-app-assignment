import React from "react";
import Checkbox from "./Checkbox";
export default function Affiliate({ name, checked, flag = "" }) {
  return (
    <div className="flex ">
      <Checkbox checked={checked} name={name} />
      {flag && <span className="ml-4 px-1 bg-yellow">{flag}</span>}
    </div>
  );
}
