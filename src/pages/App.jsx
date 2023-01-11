import React from "react";
import LayoutBlock from "../components/LayoutBlock";
import PayoutsOverview from "../pageSections/PayoutsOverview";
import TableTop from "../pageSections/TableTop";
import Table from "../components/table/PaymentsTable";
import PayoutModal from "../components/modal/PayoutModal";
import { mockData } from "../mockData";
import { filterZeroPayouts } from "../utility/Modal";

function App() {
  return (
    <LayoutBlock>
      <PayoutsOverview />
      <TableTop />
      <Table data={mockData} />
      <PayoutModal data={filterZeroPayouts(mockData)} />
    </LayoutBlock>
  );
}

export default App;
