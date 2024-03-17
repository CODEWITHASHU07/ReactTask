import React, { useState } from "react";
import Img1 from "../Images/Bell.png";
import Img2 from "../Images/Menuicon.png";
import Img3 from "../Images/Search.png";
import Img4 from "../Images/Sun.png";
import Img5 from "../Images/1.png";
import Img6 from "../Images/section.png";
import Img7 from "../Images/Language.png";
import Arrow from "../Images/arrow.png"
// !------------------------
import Imagesidebar1 from "../Images/dash.png"
import Imagesidebar2 from "../Images/layout.png"
import Imagesidebar3 from "../Images/page.png"
import Imagesidebararrow from "../Images/next.png"
// !--Apps
import ImagesidebarApps1 from "../Images/mail.png"
import ImagesidebarApps2 from "../Images/chat.png"
import ImagesidebarApps3 from "../Images/calender.png"
import ImagesidebarApps4 from "../Images/kanban.png"
import ImagesidebarApps5 from "../Images/cart.png"
import ImagesidebarApps6 from "../Images/openbook.png"
import ImagesidebarApps7 from "../Images/truck.png"
import ImagesidebarApps8 from "../Images/bill.png"
import ImagesidebarApps9 from "../Images/user.png"

import "./Topbar.css";


function Content({Img,text,icon})
{
    return (
        <li className=" flex items-center justify-between hover:bg-gray-200 transition-all cursor-pointer mx-2 px-2 py-3 rounded-lg text-gray-600">
            <div className=" flex items-center justify-center gap-x-2"><span className=" h-6 w-6  me-2 flex items-center justify-center"><img src={Img} alt="" className=" opacity-70"/></span> <span>{text}</span></div>
            {icon&&<span className="h-6 w-6"><img src={Imagesidebararrow} className=" opacity-80"/></span>}
        </li>
    )
}


function Topbar() {
  const [showinput, setshowinput] = useState(false);
  function handleTogle()
  {
    setshowinput(!showinput)
  }
  const[showsidebar,setshowsidebar]=useState(true)
  function Handlesidebar()
  {
    setshowsidebar(!showsidebar)
  }
  return (
    <>
      <nav className=" max-w-full sm:mx-8  mt-4 flex items-center justify-between bg-navbg rounded-2xl py-2 px-2 relative min-w-max">
        {console.log(showinput,showsidebar)}
        <div
          className="flex items-center justify-between gap-x-2"
          id="Topbarleft"
        >
          <span className=" h-full" onClick={()=>Handlesidebar()} >
            <img src={Img2} alt="" />
          </span>
          <div className="  bg-transparent flex items-center ms-2 gap-x-3">
            <span id="seacrh">
              <img src={Img3} alt="" className="w-full"/>
            </span>
            <button
             onClick={()=>handleTogle()}
           className="text-gray-600 text-center cursor-pointer">CTRL + /</button>
          </div>
          
        {showinput && <><input className="w-full outline-none border-none bg-navbg capitalize text-base font-thin text-gray-700  absolute z-10  h-full rounded-2xl py-2 px-2 left-0 cursor-pointer"placeholder="Search"/><span className=" absolute z-30 top-2 right-5" onClick={()=>handleTogle()}>X</span></>}
        </div>
        <div
          className=" flex items-center justify-center gap-x-3 "
          id="Topbarright"
        >
          <span>
            <img src={Img7} alt="langugae" />
          </span>
          <span>
            <img src={Img4} alt="Day&nightMode" />
          </span>
          <span>
            <img src={Img6} alt="Layout" />
          </span>
          <span>
            <img src={Img1} alt="notification" />
          </span>
          <span className="" id="TopbarId">
            <img src={Img5} alt="Id" className="   bg-white" />
          </span>
        </div>
      </nav>
     {showsidebar &&  <section id="sidebar" className=" border-e-2 border-gray-200  transition-all">
        <div id="Logo" className=" flex items-center justify-between h-16 bg-navbg border-b-2">
        <span className=" flex items-center gap-x-2 pe-2"><svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
              fill="#7367F0"
            ></path>
            <path
              opacity="0.06"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
              fill="#161616"
            ></path>
            <path
              opacity="0.06"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
              fill="#161616"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
              fill="#7367F0"
            ></path>
          </svg>
          <span className="text-lg font-thin ">Vuexy</span></span>
          <span onClick={()=>Handlesidebar()} className=" h-6 w-6 cursor-pointer opacity-50"><img src={Arrow} alt="" className=" rotate-180 max-w-full"/></span>
        </div>
        <div id="container">
            <ul className="mt-2 ">
                <Content Img={Imagesidebar1} text={"Dashboard"} icon={true}/>
                <Content Img={Imagesidebar2} text={"Layouts"} icon={true}/>
                <Content Img={Imagesidebar3} text={"Front Pages"} icon={true}/>
                
            </ul>
            <h2 className="ms-2 text-gray-400 mt-4">APPS & PAGES</h2>
            <ul className="mt-2 ">
                <Content Img={ImagesidebarApps1} text={"Email"} icon={false}/>
                <Content Img={ImagesidebarApps2} text={"Chat"} icon={false}/>
                <Content Img={ImagesidebarApps3} text={"Calender"} icon={false}/>
                <Content Img={ImagesidebarApps4} text={"Kanban"} icon={false}/>
                <Content Img={ImagesidebarApps5} text={"eCommerce"} icon={false}/>
                <Content Img={ImagesidebarApps6} text={"Academy"} icon={true}/>
                <Content Img={ImagesidebarApps7} text={"Logistics"} icon={true}/>
                <Content Img={ImagesidebarApps8} text={"Invoice"} icon={true}/>
                <Content Img={ImagesidebarApps9} text={"Users"} icon={true}/>


                
            </ul>
        </div>



      </section>}
    </>
  );
}
export default Topbar;
