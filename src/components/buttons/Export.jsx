import React from "react";
import ButtonBuilder from "./buildingBlocks/ButtonBuilder";

export default function ExportButton({ className = "" }) {
  return <ButtonBuilder text="Export" className={className} />;
}
