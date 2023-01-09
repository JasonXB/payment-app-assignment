import React from "react";

export default function ButtonBuilder({ text }) {
  return (
    <button
      type="button"
      className="inline-block px-4 py-2.5 bg-blue font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg"
    >
      <span className="text-white">{text}</span>
    </button>
  );
}
