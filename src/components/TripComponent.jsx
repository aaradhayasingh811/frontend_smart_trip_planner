import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const TripComponent = ({email,trip,onDelete}) => {
    const navigate = useNavigate();

    

    const toNavigate = async()=>{
        const response  = await axios.get(`https://backened-smart-trip-planner.onrender.com/api/v1/show-trips/${email}/${trip._id}`);
        const data = response.data
        console.log(data);

        navigate(`/created/${email}`,{state :{data}})
    }

    const toDelete =async()=>{
      if (window.confirm("Are you sure you want to delete this trip?")) {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/delete-trips/${email}/${trip._id}`);
            console.log(response);
            if (onDelete) onDelete(trip._id);
            alert("Trip deleted successfully.");
        } catch (error) {
            console.error("Error deleting trip:", error);
            alert("Failed to delete the trip. Please try again.");
        }
    }
    }    
  return (
    <div className="p-2 border-2 rounded-sm border-teal-800" >
        <img src="https://places.googleapis.com/v1/places/ChIJu0-pK65KhTkRUgI4wRKJMno/photos/AWYs27wDTG_WV5736yJAYrDXW20ls_mC-YKHu-YWyNMpf2SvGi-CL7AQTdDxCybRd87SYlGOnvU77eRMqLfouWrzdA21PH1kB1rre9Vv-uZnvTxc4bjCx7UHwYmYYWzHDDKZzF-uPEMdGp2bqW_KgftPhIK0THBbF6gt6BlO/media?maxHeightPx=600&maxWidthPx=1000&key=AIzaSyDBL1qVy7Dap0-b_EyiIIkvswGVHADvRu0" alt="" className='h-60 w-64 rounded' />
        <p className='font-semibold text-lg my-2'>{trip.destination}</p>
        <p className='font-normal text-base'> {trip.days} days Trip </p>
        <p className='font-normal text-base'>In a budget of &#8377; {trip.budget}</p>
        <p className='font-normal text-base'>{trip.numberOfPeople} Traveller</p>
        <button onClick={toNavigate} type='click' className='p-2 bg-teal-950 rounded-sm text-white my-2'>Show more..</button>
        <br />
        <button onClick={toDelete} type='click' className='p-2 bg-teal-950 rounded-sm text-white my-2'>Delete the Trip</button>
    </div>
  )
}

export default TripComponent