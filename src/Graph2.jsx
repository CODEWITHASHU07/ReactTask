import React from "react";
import Barchart from "./Barchart";
function Graph2() {
  return (
    <>
      <div>
        <h2 className=" text-xl text-black mt-4">Earning Reports</h2>
        <p className=" text-text mt-2 text-base">Weekly Earnings Overview</p>
      </div>
      <div className=" flex items-center justify-between">
        <div>
          <h1 className=" font-bold text-2xl text-gray-800 my-4">$ 468</h1>
          <span className=" text-green-600 bg-green-100 text-base font-medium px-6 py-1 rounded-md">
            +4.2%
          </span>
          <p className=" text-gray-500 mt-4">
            You informed of this week compared to last week
          </p>
        </div>
        <div className=" lg:w-3/4">
          <Barchart />
        </div>
      </div>
    </>
  );
}
export default Graph2;
