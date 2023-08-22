import { ChevronRight } from "lucide-react";
import React from "react";

function Schedule() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Today’s schedule</h1>
        <p className="flex text-gray-500 text-xs">
          <span>See All</span>
          <ChevronRight className="w-2 pb-1 " />
        </p>
      </div>
      <div className="flex gap-4 mt-8">
        <div className="bg-green-500 h-auto w-2"></div>
        <div className="p-1">
          <h2 className="text-sm font-semibold text-gray-600">
            Meeting with suppliers from Kuta Bali
            <p className="text-xs text-gray-500 mt-1 font-light">
              14.00-15.00 <br /> at Sunset Road, Kuta, Bali
            </p>
          </h2>
        </div>
      </div>
      <div className="flex gap-4 mt-8 mb-4">
        <div className="bg-blue-400 h-auto w-2"></div>
        <div className="p-1">
          <h2 className="text-sm font-semibold text-gray-600">
            Meeting with suppliers from Kuta Bali
            <p className="text-xs text-gray-500 mt-1 font-light">
              14.00-15.00 <br /> at Sunset Road, Kuta, Bali
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
