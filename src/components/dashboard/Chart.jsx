import { ChevronDown } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";

const options = {
  scales: {
    y: {
      grid: {
        display: true, // Set to true to show horizontal grid lines
      },
    },
  },
};
const data = [
  {
    week: "",
    pink: 200,
    green: 100,
  },
  {
    week: "Week 1",
    pink: 380,
    green: 410,
  },
  {
    week: "",
    pink: 290,
    green: 320,
  },
  {
    week: "Week 2",
    pink: 205,
    green: 140,
  },
  {
    week: "",
    pink: 265,
    green: 275,
  },
  {
    week: "Week 3",
    pink: 300,
    green: 440,
  },
  {
    week: "",
    pink: 280,
    green: 180,
  },
  {
    week: "week4",
    pink: 220,
    green: 320,
  },
  {
    week: "",
    pink: 435,
    green: 360,
  },
];

// uv pv
function Chart() {
  return (
    <div className="h-max w-full bg-white p-4 text-sm rounded-xl text-black">
      <div className="flex items-center justify-between px-6 activity-head">
        <div>
          <h4 className="text-2xl font-bold">Activies</h4>
          <div className="text-gray-500 my-1 break-normal flex">
            <p>May - June 2021</p>
            <ChevronDown className="w-4 " />
          </div>
        </div>
        <div>
          <div className="flex gap-6 font-medium">
            <p className="flex items-center gap-2 info-grap">
              <span className="w-2 rounded-full bg-pink-600 h-2 mt-1"></span>
              <span>Guest</span>
            </p>
            <p className="flex items-center gap-2 info-grap">
              <span className="w-2 rounded-full bg-green-600 h-2 mt-1 "></span>
              <span>User</span>
            </p>
          </div>
        </div>
      </div>

      <div className="h-60">
        <ResponsiveContainer className="mt-4" width="100%" height="100%">
          <LineChart
            className="w-56"
            width={30}
            height={50}
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="week" />
            <YAxis />
            <Line
              options={options}
              type="basis"
              dataKey="pink"
              stroke="#ad1457"
            />
            <Line
              type="basis"
              options={options}
              dataKey="green"
              stroke="#2e7d32"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
