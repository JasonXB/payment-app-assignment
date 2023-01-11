import React from "react";
import GiftIcon from "../../icons/Gift";
import SendPayment from "../../buttons/SendPayment";
import ViewArrow from "../../ViewArrow";
import Affiliate from "./Affiliate";
import { convertRawDateToString } from "../../../utility/convertDate";
import { numericString } from "../../../utility/payoutFormat";

export default function TableRow({ data }) {
  const tdStyle = "text-sm text-gray-900 font-medium pl-6 py-4 whitespace-nowrap "; // prettier-ignore
  return (
    <tr className="border-b">
      <td className={tdStyle + "text-blue"}>
        <Affiliate
          name={data.affiliateName}
          checked={data.checked}
          flag={data.flag}
        />
      </td>
      <td className={tdStyle}>
        {convertRawDateToString(data.mostRecentReferral)}
      </td>
      <td className={tdStyle + "text-green"}>
        +${numericString(data.revenueGenerated)}
      </td>
      <td className={tdStyle}>${numericString(data.paidPayouts)}</td>
      <td className={tdStyle}>${numericString(data.unpaidPayouts)}</td>
      <td className={tdStyle + "text-red"}>
        ${numericString(data.readyPayouts)}
      </td>
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
