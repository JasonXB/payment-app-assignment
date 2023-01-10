import React from "react";
import Tabs from "../components/Tabs";
import SortBy from "../components/dropdown/SortBy";
import FilterBy from "../components/dropdown/FilterBy";
import Actions from "../components/dropdown/Actions";
export default function TableTop() {
  return <div>TableTop</div>;
  return (
    <section>
      <Tabs />
      <div className="flex gap-2 my-8">
        <SortBy />
        <FilterBy />
        <Actions />
      </div>
    </section>
  );
}
