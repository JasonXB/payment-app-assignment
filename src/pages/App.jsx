import React, { useEffect, useState } from "react";
import LayoutBlock from "../components/LayoutBlock";
import PayoutsOverview from "../pageSections/PayoutsOverview";
import TableTop from "../pageSections/TableTop";
import Table from "../components/table/PaymentsTable";
import PayoutModal from "../components/modal/PayoutModal";
import { mockData } from "../mockData";
import { filterZeroPayouts } from "../utility/Modal";
import { convertPayoutString } from "../utility/convertPayoutString";
function App() {
  // On startup, calculate the total paid payouts, total unpaid payouts, and total ready payouts
  // const [totals, setTotals] = useState({
  //   paidPayouts: 0,
  //   unpaidPayouts: 0,
  //   readyPayouts: 0,
  // });
  // useEffect(() => {
  //   let paidPayouts, unpaidPayouts, readyPayouts = 0; // prettier-ignore
  //   mockData.forEach((obj, i) => {
  //     paidPayouts += convertPayoutString(obj.paidPayouts);
  //     unpaidPayouts += convertPayoutString(obj.unpaidPayouts);
  //     readyPayouts += convertPayoutString(obj.readyPayouts);
  //   });
  // }, []);

  let paidPayouts, unpaidPayouts, readyPayouts = 0; // prettier-ignore
  mockData.forEach((obj, i) => {
    console.log(obj.paidPayouts)
    paidPayouts += convertPayoutString(obj.paidPayouts);
    unpaidPayouts += convertPayoutString(obj.unpaidPayouts);
    readyPayouts += convertPayoutString(obj.readyPayouts);
  });
  // console.log(paidPayouts, unpaidPayouts, readyPayouts)
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
