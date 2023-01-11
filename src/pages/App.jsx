import React from "react";
import LayoutBlock from "../components/LayoutBlock";
import PayoutsOverview from "../pageSections/PayoutsOverview";
import TableTop from "../pageSections/TableTop";
import Table from "../components/table/PaymentsTable";
import PayoutModal from "../components/modal/PayoutModal";
import { mockData } from "../mockData";
import { filterZeroPayouts } from "../utility/ModalCalcs";
import { calcWebpageTotals } from "../utility/pageCalcs";

function App() {
  // Calculate the total paid payouts, total unpaid payouts, and total ready payouts
  const { paidPayouts, unpaidPayouts, readyPayouts } = calcWebpageTotals(mockData); // prettier-ignore
  return (
    <LayoutBlock>
      <PayoutsOverview
        paidPayouts={paidPayouts}
        unpaidPayouts={unpaidPayouts}
        readyPayouts={readyPayouts}
      />
      <TableTop />
      <Table data={mockData} />
      <PayoutModal data={filterZeroPayouts(mockData)} />
    </LayoutBlock>
  );
}

export default App;
