import React from "react";
import Place from "./Place";
const Day = ({ schedule, day }) => {
 
  return (
    <div className="my-8">
      <h1 className="text-lg font-semibold">{day}</h1>
      <div className="flex w-full gap-5 md:flex-row flex-col">
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-teal-900">Morning</h2>
          <Place data={schedule.morning} />
        </div>
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-teal-900">Afternoon</h2>
          <Place data={schedule.afternoon} />
        </div>
      </div>
    </div>
  );
};

export default Day;
