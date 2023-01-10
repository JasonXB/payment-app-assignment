import React from "react";
import PayoutRectangle from "../components/PayoutRectangle";
export default function PayoutsOverview() {
  return (
    <section className="">
      <h6 className="text-[1.5rem] leading-7 text-center font-bold mb-6 lg:text-left">Payouts Overview</h6>
      <div className="flex flex-col gap-5 flex-wrap items-center lg:flex-row xl:gap-8">
        <PayoutRectangle label="Total Paid Payouts" total="0.00" />
        <PayoutRectangle label="Total Unpaid Payouts" total="185.88" />
        <PayoutRectangle
          label="Total Ready Payouts"
          total="185.88"
          includeButton={true}
        />
      </div>
    </section>
  );
}
