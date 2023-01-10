import React from "react";

export default function ButtonBuilder({ text, className = "" }) {
  return (
    <button
      type="button"
      className={
        className +
        " inline-block px-4 py-2.5 bg-blue font-medium text-xs leading-tight rounded"
      }
    >
      <span className="text-white">{text}</span>
    </button>
  );
}
