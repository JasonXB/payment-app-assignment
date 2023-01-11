import React from "react";
import Checkbox from "./Checkbox";

export default function ModalAffiliate({ name, checked }) {
  return (
    <div className={"flex justify-center"}>
      <Checkbox checked={checked} name={name} className="text-[#0b2c53]" />
    </div>
  );
}
