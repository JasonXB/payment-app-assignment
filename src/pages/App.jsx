import React from "react";
import LayoutBlock from "../components/LayoutBlock";
import PayoutsOverview from "../pageSections/PayoutsOverview";
import TableTop from "../pageSections/TableTop";
import Table from "../components/table/PaymentsTable";
import { mockData } from "../mockData";

function App() {
  return (
    <LayoutBlock>
      <PayoutsOverview />
      <TableTop />
      <Table data={mockData} />
    </LayoutBlock>
  );
}

export default App;
