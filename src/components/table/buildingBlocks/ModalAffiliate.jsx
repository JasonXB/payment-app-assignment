import React from "react";
import Checkbox from "./Checkbox";

export default function ModalAffiliate({ name }) {
  return (
    <div className={"flex justify-center"}>
      <Checkbox name={name} className="text-[#0b2c53]" />
    </div>
  );
}
