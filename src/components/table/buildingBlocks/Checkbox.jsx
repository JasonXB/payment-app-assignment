import React from "react";

export default function Checkbox({ name, checked }) {
  return (
    <div className="form-check">
      <input
        checked={checked}
        className="form-check-input appearance-none h-4 w-4 border border-gray rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label
        className={
          "form-check-label inline-block text-blue text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap "
        }
        for="flexCheckChecked"
      >
        {name}
      </label>
    </div>
  );
}
