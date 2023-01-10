import React from "react";
import PayoutRectangle from "../components/PayoutRectangle";
import SearchButton from "../"
export default function PayoutsOverview() {
  //$ Three total props must be made dynamic
  return (
    <section className="mb-10">
      <h6 className="text-[1.5rem] leading-7 text-center font-bold mb-6 lg:text-left">
        Payouts Overview
      </h6>
      <div className="flex flex-col gap-5 flex-wrap items-center lg:flex-row xl:gap-10">
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
