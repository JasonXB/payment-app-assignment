import React from "react";
import ModalAffiliate from "../table/buildingBlocks/ModalAffiliate";
import { numericString } from "../../utility/payoutFormat";

export default function ModalTableRow({ data }) {
  const tdStyle = " text-center text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap "; // prettier-ignore
  return (
    <tr className="border-b">
      <td className={tdStyle}>
        <ModalAffiliate name={data.affiliateName} />
      </td>
      <td className={tdStyle + "font-semibold"}>
        ${numericString(data.readyPayouts)}
      </td>
      <td className={tdStyle + "font-normal"}>{data.payoutType}</td>
    </tr>
  );
}
