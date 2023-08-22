import React from "react";
import { Bell, Search, Tags, FolderDown, ThumbsUp, Users } from "lucide-react";
import InfoBox from "./InfoBox";
import Chart from "./Chart";
import PieChartDash from "./PieChartDash";

function DashRight() {
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide">Dashboard</h1>
        <div className="flex space-x-5 items-center">
          <span className="relative ">
            <input
              className="relative py-1 px-4 rounded-sm text-xs outline-none"
              type="text"
              name="search"
              placeholder="Search..."
            />
            <Search
              className="absolute bottom-0 right-2 w-3"
              strokeWidth={0.75}
            />
          </span>
          <Bell className="w-4" />
          <img
            className="rounded-full w-5"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="pp"
          />
        </div>
      </header>
      <section className="flex items-center justify-between my-8 price-sec">
        <InfoBox
          text="Total Revenues"
          bg="bg-slate-200"
          MyIcon={<FolderDown strokeWidth={1.5} />}
          price="2,129,430"
        />
        <InfoBox
          text="Total Transactions"
          MyIcon={<Tags strokeWidth={1.5} />}
          bg="bg-pink-100"
          price="1,520"
        />
        <InfoBox
          text="Total Likes"
          bg="bg-pink-200"
          MyIcon={<ThumbsUp strokeWidth={1.5} />}
          price="9,721"
        />
        <InfoBox
          text="Total Users"
          bg="bg-slate-300"
          MyIcon={<Users strokeWidth={1.5} />}
          price="892"
        />
      </section>
      <article>
        <Chart />
      </article>
      <article className="flex  gap-12 my-8 bg-slate-100 pie-container" >
        <PieChartDash />
      </article>
      {/* <span className="bg-slate-100">
      <br /><br />
      </span> */}
    </>
  );
}

export default DashRight;
