import React from "react";
import ModalTableRow from "./ModalTableRow";
import SendPayoutsButton from "../buttons/SendPayouts";
import { v4 as uuidv4 } from "uuid";

export default function ModalTable({ data }) {
  const tdStyle = "text-sm text-gray-900 font-medium pl-6 py-4 whitespace-nowrap "; // prettier-ignore
  return (
    <div id="payments-table" className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-md font-semibold text-gray-900 px-6 py-4 text-left"
                  >
                    Affiliate
                  </th>
                  <th
                    scope="col"
                    className="text-md font-semibold text-gray-900 px-6 py-4 text-left"
                  >
                    Commission
                  </th>
                  <th
                    scope="col"
                    className="text-md font-semibold text-gray-900 px-6 py-4 text-left"
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
                  <td className={tdStyle}>Store Credit:</td>
                  <td className={tdStyle + "font-semibold"}></td>
                  <td className={tdStyle + "font-normal"}>
                    ADD UP STORE CREDIT
                  </td>
                </tr>
                <tr className="border-b">
                  <td className={tdStyle}>Cash:</td>
                  <td className={tdStyle + "font-semibold"}></td>
                  <td className={tdStyle + "font-normal"}>ADD UP CASH</td>
                </tr>
                <tr className="border-b">
                  <td className={tdStyle}>Total:</td>
                  <td className={tdStyle + "font-semibold"}></td>
                  <td className={tdStyle + "font-normal"}>
                    SUM OF BOTH TOTALS
                  </td>
                </tr>
              </tbody>
            </table>
            <SendPayoutsButton />
          </div>
        </div>
      </div>
    </div>
  );
}
