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
      <div className="bg-green">f</div>
      <Table data={mockData} />
    </LayoutBlock>
  );
}

export default App;
