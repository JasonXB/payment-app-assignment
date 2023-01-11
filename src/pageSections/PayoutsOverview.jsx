import React from "react";
import PayoutRectangle from "../components/PayoutRectangle";
import { numericString } from "../utility/payoutFormat";
export default function PayoutsOverview({
  paidPayouts,
  unpaidPayouts,
  readyPayouts,
}) {
  return (
    <section className="mb-10">
      <h6 className="text-[1.5rem] leading-7 text-center font-bold mb-6 lg:text-left">
        Payouts Overview
      </h6>
      <div className="flex flex-col gap-5 flex-wrap items-center lg:flex-row xl:gap-10">
        <PayoutRectangle
          label="Total Paid Payouts"
          total={numericString(paidPayouts)}
        />
        <PayoutRectangle
          label="Total Unpaid Payouts"
          total={numericString(unpaidPayouts)}
        />
        <PayoutRectangle
          label="Total Ready Payouts"
          total={numericString(readyPayouts)}
          includeButton={true}
          green={true}
        />
      </div>
    </section>
  );
}
