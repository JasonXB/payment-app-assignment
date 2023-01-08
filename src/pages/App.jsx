import React from "react";
import LayoutBlock from "../components/LayoutBlock";
import SortBy from "../components/dropdown/SortBy";
import Actions from "../components/dropdown/Actions"
import FilterBy from '../components/dropdown/FilterBy'
function App() {
  return (
    <LayoutBlock>
      <SortBy />
      {/* <FilterBy/> */}
    </LayoutBlock>
  );
}

export default App;
