import React, { useState, useEffect } from "react";
import ModalTableRow from "./ModalTableRow";
import { useCustomContext } from "../../context";
import { round } from "../../utility/pageCalcs";
import { numericString } from "../../utility/payoutFormat";
import { v4 as uuidv4 } from "uuid";

export default function ModalTable({ data }) {
  const tdStyle = "text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap "; // prettier-ignore
  // Perform calculations for store credit totals, cash totals, and total sums
  // Calculations should change whenever a user tixks or unticks a checkbox
  const { checked, setLogList } = useCustomContext(); // hash map that tracks what payout rows are checked
  const [totals, setTotals] = useState({
    storeCredit: 0, // needed for modal
    cash: 0, // needed for modal
    combinedSum: 0, // needed for modal
  });
  useEffect(() => {
    let storeCredit = 0;
    let cash = 0;
    let logList = [];
    data.forEach((obj) => {
      if (!checked[obj.affiliateName]) return; // skip unchecked affiliates when doing calcs
      // Add to cash/storeCredit sums depending on the payout type
      if (obj.payoutType === "Cash") {
        cash = round(cash + obj.readyPayouts);
      } else if (obj.payoutType === "Store Credit") {
        storeCredit = round(storeCredit + obj.readyPayouts);
      }
      // Regardless of payout type, extend the printaable list
      logList.push({
        affiliateName: obj.affiliateName,
        payoutAmount: "$" + numericString(obj.readyPayouts), // "$4.09"
      });
    });
    // Update local state object that deals with the Modal Totals
    setTotals({
      cash,
      storeCredit,
      combinedSum: cash + storeCredit,
    });
    // Update React context array holding the array we need to log to the console
    setLogList(logList);
  }, [checked, data, setLogList]);

  return (
    <div id="payments-table" className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full  mb-8">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-center text-md font-semibold text-gray-900 px-6 py-4"
                  >
                    Affiliate
                  </th>
                  <th
                    scope="col"
                    className="text-center text-md font-semibold text-gray-900 px-6 py-4"
                  >
                    Commission
                  </th>
                  <th
                    scope="col"
                    className="text-center text-md font-semibold text-gray-900 px-6 py-4"
                  >
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((el) => (
                  <ModalTableRow key={uuidv4()} data={el} />
                ))}
                <tr className="border-b">
                  <td className={tdStyle + "text-center font-semibold"}>
                    Store Credit:
                  </td>
                  <td className={tdStyle + "font-semibold text-center"}></td>
                  <td className={tdStyle + "text-center font-semibold"}>
                    ${numericString(totals.storeCredit)}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className={tdStyle + "text-center font-semibold"}>
                    Cash:
                  </td>
                  <td className={tdStyle + "font-semibold text-center"}></td>
                  <td className={tdStyle + "text-center font-semibold"}>
                    ${numericString(totals.cash)}
                  </td>
                </tr>
                <tr className="border-b border-none">
                  <td className={tdStyle + "text-center font-semibold"}>
                    Total:
                  </td>
                  <td className={tdStyle + "font-semibold text-center"}></td>
                  <td className={tdStyle + "text-center font-semibold"}>
                    ${numericString(totals.combinedSum)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
