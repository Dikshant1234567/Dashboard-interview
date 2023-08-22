import React from "react";
import NavBar from "./NavBar";
import DashRight from "./DashRight";

function Dashboard() {
  return (
    <div className="w-full h-max flex">
      <div className=" bg-black h-screen fixed w-1/5 z-30 left-0 bottom-0 top-0 nav-container " >
        <NavBar />
      </div>
      <div className="bg-slate-100 w-4/5 p-6 dash-conatiner "  >
        <DashRight />
      </div>
    </div>
  );
}

export default Dashboard;
