import React from "react";
import PayoutRectangle from "../components/PayoutRectangle";
export default function PayoutsOverview() {
  return (
    <section>
      <h6 className="text-xl font-bold mb-6">Payouts Overview</h6>
      <PayoutRectangle label="Total Paid Payouts" total="0.00" />
      <PayoutRectangle label="Total Unpaid Payouts" total="185.88" />
      <PayoutRectangle
        label="Total Ready Payouts"
        total="185.88"
        includeButton={true}
      />
    </section>
  );
}
