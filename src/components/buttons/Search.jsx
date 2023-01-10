import React from "react";
import ButtonBuilder from "./buildingBlocks/ButtonBuilder";

export default function SearchButton({ className = "" }) {
  return <ButtonBuilder text="Search" className={className} />;
}
