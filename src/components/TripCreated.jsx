import React from "react";
import Navbar from "./Navbar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SportsBarIcon from "@mui/icons-material/SportsBar";
import Hotel from "./Hotel";
import Day from "./Day";
import { useLocation } from "react-router-dom";

const TripCreated = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <div>
      <Navbar
        val="Logout"
        logout={true}
        signup={false}
        show={true}
        create={true}
      />
      <div className="conatiner sm:mx-20">
        <div className="flex justify-center text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7gik0XrEZHEp9t9WLriUV4INuEKQSCNQWg&s"
            alt=""
            className="w-full sm:w-96"
          />
        </div>
        <div className="flex text-center my-4 justify-center flex-col">
          <h2 className="text-3xl font-bold text-[#123524]">
            {data.destination}
          </h2>
          <div className="flex flex-wrap justify-around mx-auto my-2 shadow-xl p-2">
            <div className="flex justify-center items-center p-2">
              <CalendarMonthIcon style={{color:"darkblue"}} />
              {data.days} days
            </div>
            <div className="flex justify-center items-center p-2">
              <CurrencyRupeeIcon style={{color:"green"}}className="me-1" />
             {data.budget}
            </div>
            <div className="flex justify-center items-center p-2">
              <SportsBarIcon style={{color:"darkblue"}} />
              Number of Traveller : {data.numberOfPeople}
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="sm:text-left font-bold text-xl my-4 w-full text-center">
            Hotel Recommendation
          </h2>
          <div className="flex sm:gap-8 gap-4 flex-wrap justify-center md:justify-start">
            {/* <Hotel/>
            <Hotel/>
            <Hotel/> */}
            {data.hotels.map((hotel) => {
              return (
                <Hotel
                  key={hotel.id}
                  address={hotel.address}
                  cost={hotel.cost}
                  imageUrl={data.imageUrl}
                  rating={data.rating}
                />
              );
            })}
          </div>
          <h2 className="sm:text-left font-bold text-3xl sm:text-2xl sm:my-4 my-6 text-center text-teal-950">Places to visit</h2>
          {/* <Day/>
            <Day/>
            <Day/> */}
          {Object.entries(data.schedule).map(([day, schedule]) => (
            <div key={day}>
              <Day schedule={schedule} day={day}  />
            </div>
          ))}
          <div className="my-20"></div>
          <p className="font-extralight text-center py-8">
            created by Aaradhaya Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripCreated;
