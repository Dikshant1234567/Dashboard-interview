import React from "react";
import { ChevronDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Schedule from "./Schedule";

const data01 = [
  { name: "Basic Tees", value: 55, color: "bg-green-400", colors: "green" },
  {
    name: "Custom Short Pants",
    value: 31,
    color: "bg-yellow-400",
    colors: "yellow",
  },
  { name: "Super Hoodies", value: 14, color: "bg-red-400", colors: "red" },
];

function PieChartDash() {
  const colorfamily = ["#4caf50", "#ffd700", "#f06292"];

  // const color = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'];

  return (
    <>
      <div className=" w-1/2 rounded-2xl bg-white h-max  p-6 pie-box  ">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Top Products</h1>
          <p className="text-xs text-gray-600 flex ">
            <span>May - June 2021</span>
            <span>
              <ChevronDown className="w-4 pb-1" />
            </span>
          </p>
        </div>

        <div className="flex mt-6 ">
          <div className="w-1/2">
            <ResponsiveContainer className="w-full h-48  ">
              <PieChart width={400} height={400} style={{ rotate: "284deg" }}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  fill="#daa520"
                />
                 { data01 && data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorfamily[index]}
                  />
                ))}
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-1/2 ml-8 ">
            {data01 &&
              data01.map((value, index) => {
                return (
                  <>
                    <div className="p-2" key={index}>
                      <div className="flex gap-2 items-center">
                        <span
                          className={`w-3 h-3 rounded-full ${value.color} `}
                        ></span>
                        <span className=" font-semibold">{value.name}</span>
                      </div>
                      <p className="ml-5 text-sm text-gray-600">
                        {value.value}%
                      </p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div className="bg-white w-1/2 rounded-2xl  p-6 sechecule-box">
        <Schedule />
      </div>
    </>
  );
}

export default PieChartDash;
