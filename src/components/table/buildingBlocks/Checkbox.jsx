import React, { useState } from "react";
import { useCustomContext } from "../../../context";
export default function Checkbox({ name, className = "" }) {
  // Clicking the checbox should change how it looks and update the hashmap in React context
  const { checked, setChecked } = useCustomContext();
  // When a checkbox is hit, save it to the state object in React Context
  // A box being checked for Zack Treutel makes a key value pair like.. {'Zack Treutel': true }
  // A box being unchecked makes a key value pair like... { 'Zack Treutel': false }
  const hitCheckbox = function () {
    let hashMapClone = { ...checked }; // make a cloned hash map that doesn't mutate with the original
    hashMapClone[name] = checked[name] ? false : true; // toggle hash map property value
    setChecked(hashMapClone);
  };
  return (
    <div className="form-check">
      <input
        onChange={hitCheckbox}
        checked={checked[name] ? true : false}
        className="form-check-input appearance-none h-4 w-4 border border-gray rounded-sm bg-white checked:bg-blue checked:border-blue focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label
        className={
          "ml-4 form-check-label inline-block text-blue text-sm text-gray-900 font-medium whitespace-nowrap " +
          className
        }
      >
        {name}
      </label>
    </div>
  );
}
