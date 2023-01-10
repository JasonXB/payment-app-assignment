import React from "react";
import LayoutBlock from "../components/LayoutBlock";
import PayoutsOverview from "../pageSections/PayoutsOverview";
import TableTop from "../pageSections/TableTop";
import Table from "../pageSections/Table";
import { mockData } from "../mockData";

function App() {
  return (
    <LayoutBlock>
      <PayoutsOverview />
      <TableTop />
      <Table data={mockData} />
      <div className="bg-green">f</div>
    </LayoutBlock>
  );
}

export default App;
