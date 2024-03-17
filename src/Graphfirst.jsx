import React from "react";
import Img1 from "../Images/Earth.png";
import "./graph.css";

function Graphfirst() {
  return (
    <div className=" bg-main rounded shadow-2xl" id="maingraphEarth">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:place-items-center sm:p-6 sm:pe-2 grid-rows-3 place-items-center ">
        <div className="lg:col-span-1 sm:col-span-1 lg:row-span-1 row-start-1 row-end-2">
          <h5 className="text-white mb-0 text-start text-xl">
            Website Analytics
          </h5>
          <small className=" text-slate-50 text-sm">
            Total 28.5% Conversion Rate
          </small>
        </div>
        <div className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 row-start-3 row-end-4 col-span-1">
          <h6 className="text-white mt-0  mb-3">Traffic</h6>
          <div className="grid grid-cols-2  grid-row-1 place-items-start gap-x-2">
            <div className="col-start-1 col-end-2">
              <ul className="list-none mb-0">
                <li className="flex mb-4 items-center">
                  <p className="mb-0 font-medium mr-2 bgsection">28%</p>
                  <p className="mb-0 font-thin text-slate-100 ">Sessions</p>
                </li>
                <li className="flex items-center">
                  <p className="mb-0 font-medium mr-2 bgsection">1.2k</p>
                  <p className="mb-0 text-thin text-slate-100">Leads</p>
                </li>
              </ul>
            </div>
            <div className=" col-start-2 col-end-3">
              <ul className="list-none mb-0">
                <li className="flex mb-4 items-center">
                  <p className="mb-0 font-medium  mr-2 bgsection">3.1k</p>
                  <p className="mb-0 text-thin text-slate-100">Page Views</p>
                </li>
                <li className="flex items-center">
                  <p className="mb-0 font-medium mr-2 bgsection">12%</p>
                  <p className="mb-0 text-slate-100 text-thin">Conversions</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 sm:col-span-1 my-4 sm:my-0 flex items-center justify-center row-start-2 row-end-2 col-start-1 col-end-2 place-items-center">
          <img
            src={Img1}
            alt="Website Analytics"
            width="170"
            className="card-website-analytics-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Graphfirst;
