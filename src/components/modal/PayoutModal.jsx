import React from "react";
import ModalTable from "./ModalTable";
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
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray"
              id="exampleModalXlLabel"
            >
              Confirm Payouts
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              // data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body relative p-4">
            <ModalTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
