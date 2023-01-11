import React from "react";
import ModalTable from "./ModalTable";
import BackArrow from "../BackArrow";
import SendPayoutsButton from "../buttons/SendPayouts"
export default function PayoutModal({ data }) {
  return (
    <div
      className=" modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalXl"
      tabIndex="-1"
      aria-labelledby="exampleModalXlLabel"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <BackArrow />
          <div className="modal-header flex flex-shrink-0 items-center justify-center py-4 mx-4 border-b border-gray rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray"
              id="exampleModalXlLabel"
            >
              Confirm Payouts
            </h5>
          </div>
          <p className="font-semibold text-blue text-lg text-center mt-6">
            The following affiliates will be sent payouts:
          </p>
          <div className="modal-body relative px-4 pb-4">
            <ModalTable data={data} />
            <SendPayoutsButton />
          </div>
        </div>
      </div>
    </div>
  );
}
