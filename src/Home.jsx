import React from "react";
import Topbar from "./Topbar";
import Graphfirst from "./Graphfirst";
import Img1 from "../Images/graphcart.png";
import Img2 from "../Images/url.png";
import Img3 from "../Images/cardcredit.png";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";

function Home() {
  return (
    <main className=" bg-Homebg sm:p-8 sm:pb-0 p-2">
      <Topbar />
      {/* <Graphfirst/> */}
      <div id="Main" className="grid lg:grid-rows-2 lg:grid-cols-2 gap-4 mt-4 sm:grid-cols-1 sm:grid-rows-4 grid-cols-1  grid-rows-5 grid-flow-row">
        <div
          id="Graph1"
          className=" sm:row-start-1 sm:row-end-2 lg:col-start-1 lg:col-end-2 sm:row-star-1 sm:col-start-1 sm:col-end-4 col-start-1 row-start-1 row-end-2"
        >
          <Graphfirst />
        </div>

        <div
          id="Graph2"
          className="bg-transparent lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 sm:col-start-1 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:flex sm:items-center gap-x-4 sm:flex-row flex-col flex items-center gap-y-4 row-start-2 row-end-3 bg-red-400"
        >
          <div
            id="inner1"
            className=" h-full sm:w-full bg-card flex items-start justify-center shadow-2xl rounded-sm flex-col sm:py-6 sm:px-6 lg:px-4 px-8 py-2 w-4/5 m-auto "
          >
            <p className=" flex items-center justify-between w-full">
              <span className="text-slate-500">Sales Overview</span>
              <span className=" text-green-500 font-medium">+18.2%</span>
            </p>
            <h2 className=" text-2xl text-gray-700 mb-4 mt-2 font-semibold">
              $42.5k
            </h2>
            <div
              id="innercompare"
              className="flex items-start justify-between relative  w-full"
            >
              <div className="border-e-2  border-gray-200  w-full flex items-start flex-col pe-5">
                <span className="flex ">
                  <img
                    src={Img1}
                    alt="Cart"
                    className=" h-6 w-6 bg-sky-100 me-2"
                  />
                  <span className=" text-text">Order</span>
                </span>
                <h2 className="mt-2 text-gray-600">62.2%</h2>
                <p className="mt-2 text-gray-500">6,440</p>
              </div>
              <div className="border-gray-300 text-start w-full flex items-end flex-col ps-6">
                <span className="flex">
                  <span className=" text-text">Visits</span>
                  <img
                    src={Img2}
                    alt="visit"
                    className=" bg-violet-300 h-6 w-6 ms-2 rounded"
                  />
                </span>
                <h2 className="mt-2 text-gray-600">25.5%</h2>
                <p className="mt-2 text-gray-500">12,749</p>
              </div>
              <span className="absolute bg-gray-300 text-gray-600 py-1 px-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-thin">
                vs
              </span>
            </div>
            <div className="w-full flex items-center justify-center h-3 mt-8 rounded-xl overflow-hidden">
              <div className="h-full w-3/4 bg-line1"></div>
              <div className="h-full w-1/3 bg-main"></div>
            </div>
          </div>
          <div
            id="inner2"
            className=" h-full  sm:w-full flex flex-col items-start justify-center sm:px-4 shadow-2xl rounded-sm bg-card px-4 py-1 w-4/5 m-auto"
          >
            <div className="h-8 w-8 rounded-3xl bg-green-200 flex items-center justify-center p-2">
              <img src={Img3} className=" w-full" />
            </div>
            <h3 className=" mt-4 text-2xl text-black font-thin">97.5k</h3>
            <p className=" mt-4 font-thin text-gray-700">Revenue Genrated</p>
          </div>
        </div>
        <div
          id="Graph3"
          className=" bg-card lg:row-start-2 lg:row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 row-start-3 row-end-4 col-start-1 col-end-2 px-8 py-4 min-w-4/5 m-auto sm:px-8 rounded-sm shadow-2xl"
        >
          <Graph2/>
        </div>
        <div
          id="Graph4"
          className=" bg-card lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-2 row-start-4 row-end-5 col-start-1 colr-end-2 px-8 py-2 min-w-4/5 m-auto rounded-sm shadow-2xl sm:px-8 sm:py-4"
        >
          <Graph3/>
        </div>
      </div>
    </main>
  );
}
export default Home;
