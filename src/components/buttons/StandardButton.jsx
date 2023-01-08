import React from "react";

export default function StandardButton({ text }) {
  return (
    <button
      type="button"
      class="inline-block px-3 py-2.5 bg-blue text-white font-medium text-xs leading-tight rounded shadow-md hover:shadow-lg "
    >
      {text}
    </button>
  );
}
