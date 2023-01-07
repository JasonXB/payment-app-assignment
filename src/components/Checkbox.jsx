import React from "react";

// <Checkbox name="Gy Test" checked={true} />
export default function Checkbox({ name, checked }) {
  return (
    <div class="form-check">
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        checked={checked}
      />
      <label
        className="ml-4 form-check-label inline-block text-gray-800 text-base"
        for="flexCheckDefault"
      >
        {name}
      </label>
    </div>
  );
}
