import React from "react";
import LayoutBlock from "../components/LayoutBlock";
import PayoutsOverview from "../pageSections/PayoutsOverview";
import TableTop from "../pageSections/TableTop";
import Table from "../pageSections/Table";
function App() {
  return (
    <LayoutBlock>
      <PayoutsOverview />
      <div className="bg-blue">f</div>
      {/* <TableTop />
      <Table /> */}
    </LayoutBlock>
  );
}

export default App;
