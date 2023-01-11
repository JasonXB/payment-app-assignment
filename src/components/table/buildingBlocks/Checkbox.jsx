import React from "react";

export default function Checkbox({ name, checked }) {
  return (
    <div className="form-check">
      <input
        checked={checked}
        className="form-check-input appearance-none h-4 w-4 border border-gray rounded-sm bg-white checked:bg-blue checked:border-blue focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label
        className={
          "ml-4 form-check-label inline-block text-blue text-sm text-gray-900 font-medium whitespace-nowrap "
        }
      >
        {name}
      </label>
    </div>
  );
}
