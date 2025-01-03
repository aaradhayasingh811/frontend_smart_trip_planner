import React, { useState } from 'react'
import { TextField} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import { useParams } from "react-router"
import { useNavigate } from 'react-router';
import send from "../assets/send.gif"



const Form = () => {
  const navigate = useNavigate();
  const [loader,setLoader] = useState(false);
  let params = useParams()
  const id = params.email
    const [formdata , setFormData] = useState(
        {
            destination:"",
            days:"",
            budget:"",
            numberOfPeople:""

        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleOnSubmit =async (e)=>{
        e.preventDefault();
        console.log(formdata);
        try {
          setLoader(true);
         const response = await axios.post(`https://backened-smart-trip-planner.onrender.com/api/v1/create-trip/${id}`, formdata)
         console.log(response.data)
         const data= response.data;
         setLoader(false);
         navigate(`/created/${id}`,{state :{data}})
          
        } catch (error) {
          console.error(error);
        }

        
    }

    if (loader) {
      return <img src={send} alt="Loading..." className='flex justify-center mx-auto items-center' />;
    }
    
  return (
    <div className='mx-16 text-black'>
      <form method='POST' onSubmit={handleOnSubmit}>
        <h1 className='text-3xl font-bold mt-20 text-[#123524]'>Tell us your travel preferences</h1>
        <p className='text-xl font-light leading-10'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
        <p className='mb-4 mt-10 font-medium text-lg'>What is destination of choice?</p>
        <TextField name="destination" value={formdata.destination} onChange={handleChange} id="filled-basic" label="Destination" variant="filled" className='w-full' required/>
        <p className='mb-4 mt-10 font-medium text-lg'>How many days are you planning your trip?</p>
        <TextField name="days" value={formdata.days} onChange={handleChange} id="filled-basic" label="Days" variant="filled" className='w-full' type='Number' required/>
        <p className='mb-4 mt-10 font-medium text-lg'>What is Your Budget?</p>
        <TextField name="budget" value={formdata.budget} onChange={handleChange} id="filled-basic" label="Budget" variant="filled" className='w-full' type='Number' required/>
        <p className='mb-4 mt-10 font-medium text-lg'>Who do you plan on traveling with on your next adventure?</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="numberOfPeople"
          value={formdata.numberOfPeople}
          label="Number of People"
          onChange={handleChange}
          className='w-full my-2'
          required
        >
          <MenuItem value={1}>Single</MenuItem>
          <MenuItem value={2}>Couple</MenuItem>
          <MenuItem value={4}>Family / Friends</MenuItem>
        </Select>
        <br /><br />
        <Button variant="contained" color='primary' type='submit' endIcon={<SendIcon />}> Generate Trip</Button>
        <p className='py-10'></p>
        
      </form>
    </div>
  )
}

export default Form
