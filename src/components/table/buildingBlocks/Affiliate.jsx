import React from "react";
import Checkbox from "./Checkbox";
export default function Affiliate({ name, flag = "", modal = false }) {
  return (
    <div className={modal ? "flex justify-center" : "flex"}>
      <Checkbox name={name} />
      {flag && <span className="ml-4 px-1 bg-yellow">{flag}</span>}
    </div>
  );
}
