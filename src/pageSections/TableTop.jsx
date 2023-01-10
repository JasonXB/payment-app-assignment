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

  return (
    <section>
      <Tabs />
      <div className="flex justify-between">
        <div className="flex gap-2 h-[35px]">
          <SortBy />
          <FilterBy />
          <Actions />
        </div>
        <div className="flex h-[35px]">
          <SearchBar />
          <SearchButton />
          <ExportButton />
        </div>
      </div>
    </section>
  );
}
