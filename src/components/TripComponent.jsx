import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, Bounce } from 'react-toastify';
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
            const response = await axios.delete(`https://backened-smart-trip-planner.onrender.com/api/v1/delete-trips/${email}/${trip._id}`);
            console.log(response);
            if (onDelete) onDelete(trip._id);
            toast.info('🦄 Trip deleted successfully!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
        } catch (error) {
            console.error("Error deleting trip:", error);
            toast.error('🦄 Failed to delete the trip. Please try again', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
        }
    }
    }    
  return (
    <div className="p-2 border-2 rounded-sm bg-[#F5F7F8] shadow-md hover:shadow-2xl hover:shadow-teal-900" >
        <img src="https://places.googleapis.com/v1/places/ChIJu0-pK65KhTkRUgI4wRKJMno/photos/AWYs27wDTG_WV5736yJAYrDXW20ls_mC-YKHu-YWyNMpf2SvGi-CL7AQTdDxCybRd87SYlGOnvU77eRMqLfouWrzdA21PH1kB1rre9Vv-uZnvTxc4bjCx7UHwYmYYWzHDDKZzF-uPEMdGp2bqW_KgftPhIK0THBbF6gt6BlO/media?maxHeightPx=600&maxWidthPx=1000&key=AIzaSyDBL1qVy7Dap0-b_EyiIIkvswGVHADvRu0" alt="" className='h-60 w-64 rounded' />
        <p className='font-semibold text-2xl flex items-center my-1 text-[#536493]'><LocationOnIcon style={{color:"#CC0000"}} className='me-1'/> {trip.destination}</p>
        <p className='font-normal text-base flex items-center my-1 text-[#0D7C66]'> <CalendarMonthIcon className='me-1'/>  {trip.days} days </p>
        <p className='font-normal text-base flex items-center my-1 text-[#468585]'><CurrencyRupeeIcon className='me-1'/>{trip.budget}</p>
        <p className='font-normal text-base flex items-center text-[#468585]'><PeopleIcon className='me-1'/> {trip.numberOfPeople} Traveller</p>
        <button onClick={toNavigate} type='click' className='p-2 bg-[#45474B] rounded-sm text-white my-2'>Show more..</button>
        <br />
        <button onClick={toDelete} type='click' className='p-2 bg-[#47663B] rounded-sm text-white my-2 flex items-center'>Delete <DeleteIcon className='ms-1'/></button>
    </div>
  )
}

export default TripComponent