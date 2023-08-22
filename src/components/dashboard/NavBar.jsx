import React from "react";
import {
  FolderSync,
  GaugeCircle,
  Settings,
  Tags,
  UserCircle,
} from "lucide-react";

function NavBar() {
  return (
    <div className="bg-black text-white text-center navbar">
      <h4 className="font-bold text-2xl mt-8">Board.</h4>
      <ul className="w-full mt-8 ">
        <li
          className="flex items-center font-medium w-full pl-24 gap-2 mt-5 opacity-80 hover:opacity-60"
          style={{ marginBottom: 20 }}
        >
          <GaugeCircle className="w-4" />
          <a href="#">Dashboard</a>
        </li>
        <li
          className="flex items-center  w-full pl-24 gap-2 mt-5 hover:opacity-60"
          style={{ marginBottom: 25 }}
        >
          <Tags strokeWidth={1.5} className="w-4" />
          <a href="#">Transactions</a>
        </li>
        <li
          className="flex items-center  w-full pl-24 gap-2 mt-5 hover:opacity-60"
          style={{ marginBottom: 25 }}
        >
          <FolderSync className="w-4" />
          <a href="#">Schedules</a>
        </li>
        <li
          className="flex items-center  w-full pl-24 gap-2 mt-5 hover:opacity-60"
          style={{ marginBottom: 25 }}
        >
          <UserCircle className="w-4" />
          <a href="#">Users</a>
        </li>
        <li
          className="flex items-center  w-full pl-24 gap-2 mt-5 hover:opacity-60"
          style={{ marginBottom: 25 }}
        >
          <Settings strokeWidth={1.25} className="w-4" />
          <a href="#">Settings</a>
        </li>
      </ul>
      <div className="absolute bottom-14" style={{ left: "30%" }}>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default NavBar;
