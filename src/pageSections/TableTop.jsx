import React from "react";
import Tabs from "../components/Tabs";
import SortBy from "../components/dropdown/SortBy";
import FilterBy from "../components/dropdown/FilterBy";
import Actions from "../components/dropdown/Actions";
import SearchBar from "../components/Searchbar";
import SearchButton from "../components/buttons/Search";
import ExportButton from "../components/buttons/Export";

export default function TableTop() {
  //$ Number of pending payouts
  const payouts = <p className="ml-2">18 pending payouts</p>;
  return (
    <section>
      <Tabs />
      <p className="sm:hidden mb-2">18 pending payouts</p>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex gap-2 items-center tabletopHeight mb-4">
          <SortBy />
          <FilterBy />
          <Actions />
          <p className="ml-2 hidden sm:flex">18 pending payouts</p>
        </div>
        <div className="flex gap-2 tabletopHeight">
          <SearchBar />
          <SearchButton />
          <ExportButton />
        </div>
      </div>
    </section>
  );
}
