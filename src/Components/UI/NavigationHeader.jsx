import React from "react";
import { Link } from "react-router-dom";

export default function NavigationHeader() {
  return (
    <div className="navbar bg-base-100 shadow-lg rounded-xl mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-xs items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li className=" w-full ">
                <p className="text-center w-full  font-semibold text-lg">
                  명소
                </p>
              </li>
            </Link>
            <Link to="/foods">
              <li className=" w-full ">
                <p className="text-center w-full  font-semibold text-lg">
                  맛집
                </p>
              </li>
            </Link>
            <Link to="/accomodation">
              <li className=" w-full ">
                <p className="text-center w-full  font-semibold text-lg">
                  숙박
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-3xl">갈멧길 관광 정보</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
