import React from 'react'
import logo  from '../assets/logo.png'
import Button from '@mui/material/Button';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({val,show,logout,signup,create}) => {
  const navigate = useNavigate();
  const handleonClick=async(e)=>{
    e.preventDefault();
    try {
      if(logout){
        const res = await axios.post(
          `https://backened-smart-trip-planner.onrender.com/api/v1/logout/${email}`,
          {}, 
      );
        console.log(res.data.message || "Logout successful");
        navigate('/signin');
      }
      else{
        if(signup){
          navigate('/')
        }
        else{
          navigate('/signin');
        }

      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const {email} = useParams();
  const [trips, setTrips] = useState([]);  

  const showmyTrip = async () => {
    if (!email) return; 
    try {
      const res = await axios.get(`https://backened-smart-trip-planner.onrender.com/api/v1/show-trips/${email}`);
      setTrips(res.data);  
      navigate(`/show-trips/${email}`, { state: { trips: res.data } }); 
    } catch (error) {
      console.error(error);
    }
  };

  const createFunction=()=>{
    navigate(`/create-trip/${email}`);
  }

  

  return (

    <>
    <div className="p-2"></div>
      <div className="flex items-center justify-between mb-4 mx-14 flex-col sm:flex-row bg-[#00563B] p-2 rounded">
        <div className="logo my-4 sm:my-0">
            <img src={logo} alt="logo" className='w-10 h-10' />
        </div>
        <div className="flex">
        {create &&<Fab color="primary" aria-label="add" size='medium' onClick={createFunction}><AddIcon /></Fab>}
        <div className="p-2"></div>

        <Button variant="contained" className='mx-4' onClick={handleonClick}>{val}</Button>
        {/* <Button variant="outlined" >Sign In</Button> */}
        <div className="p-2"></div>
        { show && <Button variant="contained" className='mx-4' onClick={showmyTrip} >My Trips</Button>}
        </div>
      </div>
    </>
  )
}

export default Navbar
