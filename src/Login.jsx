import React, { useState } from "react";
import Img1 from "../Images/auth-login-illustration-light.png";
import Img2 from "../Images/facebook.png";
import Img3 from "../Images/Google.png";
import Img4 from "../Images/Twitter.png";
import hide from "../Images/hide.png";
import show from "../Images/show.png";
import axios from 'axios';

function Login({setLoginStatus}) {
  const [tog, settog] = useState(false);
  function handletoggle() {
    settog(!tog);
  }
  async function handleForm(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    console.log(username,password);
    try {
        const response = await fetch("http://localhost:7500/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Response:", data);
            setLoginStatus(true);
        } else {
            console.error("Error:", response.statusText);
            alert("User Not Found!")
            setLoginStatus(false);
        }
    } catch (error) {
        console.error("Error:", error.message);
        setLoginStatus(false);
    }
}

  return (
    <section className="flex items-center justify-center w-full min-h-screen sm:flex-row flex-col ">
      <div
        id="Imageblock"
        className="sm:h-full sm:w-1/2 lg:w-1/2  flex items-center justify-center w-full p-5 h-1/2"
      >
        <div className=" w-full h-full flex items-center justify-center bg-gray-100 p-2 rounded-lg">
          <img src={Img1} alt="Illustration" className="max-h-full w-auto" />
        </div>
      </div>

      <div
        id="LoginPage"
        className="sm:h-full sm:w-1/2 lg:w-1/2  w-full h-1/2 flex flex-col justify-start px-16 py-6   bg-navbg"
      >
        <div id="icon">
          <svg
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
        </div>

        <h2 className=" mt-4 font-thin text-3xl text-gray-600">
          Welcome to Vuexy!👋
        </h2>
        <p className=" text-sm mt-2 mb-6 font-thin text-gray-600">
          Please sign-in to your account and start the adventure
        </p>

        <form action="" className=" flex items-left flex-col gap-y-2" onSubmit={(e)=>handleForm(e)}>
          <label htmlFor="Username" className=" text-gray-700  font-medium">
            Email or Username
          </label>
          <input
            type="text"
            placeholder="Enter your email or username"
            className=" py-2 ps-2 rounded-sm border border-gray-400"
          required/>
          <div className="flex items-center justify-between">
            <label htmlFor="Password" className=" text-gray-700  font-medium">
              Password
            </label>
            <label htmlFor="Password" className=" text-main cursor-pointer">
              Forgot Password?
            </label>
          </div>
          <div className=" relative">
            <input
              type={tog ? "text" : "password"}
              className=" py-2 ps-2 rounded-sm w-full border border-gray-400"
              placeholder="Enter Your Password"
            required/>
            <span
              className=" absolute right-2 top-3 mb-2 cursor-pointer"
              onClick={() => handletoggle()}
            >
              <img src={tog ? show : hide} alt="Show" />
            </span>
          </div>
          <div>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label
              htmlFor="checkbox"
              className=" ms-2 text-gray-700  font-medium cursor-pointer"
            >
              Remember Me
            </label>
          </div>
          <button className="mt-6 border  bg-main py-2 rounded-lg text-white font-thin tracking-wide hover:text-black transition-colors">
            Sing in
          </button>
          <p className=" mt-2 font-thin text-center text-gray-700 ">
            New on our platform ?
            <span className="ms-2 text-main font-medium cursor-pointer ">
              Create an account
            </span>
          </p>
          <br />
          <div className=" flex items-center justify-between">
            <span className=" border border-gray-400 w-full"></span>
            <span className=" mx-4 text-gray-700 tracking-wider ">or</span>
            <span className=" border border-gray-400 w-full"></span>
          </div>
        </form>
        <div className=" flex w-full mt-8 items-center justify-center gap-x-4">
          <div className=" bg-fb p-2 rounded-xl cursor-pointer">
            <img src={Img2} alt="" />
          </div>
          <div className=" bg-GG p-2 rounded-xl cursor-pointer">
            <img src={Img3} alt="Google" />
          </div>
          <div className=" bg-Tw p-2 rounded-xl cursor-pointer">
            <img src={Img4} alt="twitter" />
          </div>
        </div>
        <button className="fixed bottom-2 right-10 px-2 py-1 shadow-custom bg-shadow rounded-sm z-10 hover:bg-red-500 hover:text-white hover:border-red-500 ">
          Book Now
        </button>
      </div>
    </section>
  );
}
export default Login;
