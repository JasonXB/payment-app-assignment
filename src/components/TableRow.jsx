import React from "react";
import GiftIcon from "./icons/Gift";
import SendPayment from "./buttons/SendPayment";
import ViewArrow from "./ViewArrow";
import { convertRawDateToString } from "../utility/convertDate";
export default function TableRow({ data }) {

  return (
    <tr id="table_row_1" className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {data.affiliateName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {convertRawDateToString(data.mostRecentReferral)}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data.revenueGenerated}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data.paidPayouts}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data.unpaidPayouts}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data.readyPayouts}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <ViewArrow />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <GiftIcon />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <SendPayment />
      </td>
    </tr>
  );
}
