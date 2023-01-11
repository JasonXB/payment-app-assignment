import React from "react";
import ModalTableRow from "./ModalTableRow";
import { v4 as uuidv4 } from "uuid";

export default function ModalTable({ data }) {
  const tdStyle = "text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap "; // prettier-ignore
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
                  <td className={tdStyle + "text-center font-semibold"}>Store Credit:</td>
                  <td className={tdStyle + "font-semibold text-center"}></td>
                  <td className={tdStyle + "text-center font-semibold"}>
                    ADD UP STORE CREDIT
                  </td>
                </tr>
                <tr className="border-b">
                  <td className={tdStyle + "text-center font-semibold"}>Cash:</td>
                  <td className={tdStyle + "font-semibold text-center"}></td>
                  <td className={tdStyle + "text-center font-semibold"}>
                    ADD UP CASH
                  </td>
                </tr>
                <tr className="border-b border-none">
                  <td className={tdStyle + "text-center font-semibold"}>Total:</td>
                  <td className={tdStyle + "font-semibold text-center"}></td>
                  <td className={tdStyle + "text-center font-semibold"}>
                    SUM OF BOTH TOTALS
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
