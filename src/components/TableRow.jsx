import React from "react";
import GiftIcon from "./icons/Gift";
import SendPayment from "./buttons/SendPayment";
import ViewArrow from "./ViewArrow";
import { convertRawDateToString } from "../utility/convertDate";
export default function TableRow({ data }) {
  const tdStyle = "text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap "; // prettier-ignore
  return (
    <tr className="border-b">
      <td className={tdStyle + "text-blue"}>{data.affiliateName}</td>
      <td className={tdStyle}>
        {convertRawDateToString(data.mostRecentReferral)}
      </td>
      <td className={tdStyle + "text-green"}>+${data.revenueGenerated}</td>
      <td className={tdStyle}>${data.paidPayouts}</td>
      <td className={tdStyle}>${data.unpaidPayouts}</td>
      <td className={tdStyle + "text-red"}>${data.readyPayouts}</td>
      <td className={tdStyle}>
        <ViewArrow />
      </td>
      <td className={tdStyle}>
        <GiftIcon />
      </td>
      <td className={tdStyle}>
        <SendPayment />
      </td>
    </tr>
  );
}
