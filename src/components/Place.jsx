import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapIcon from '@mui/icons-material/Map';
const Place = ({data}) => {
  console.log(data);
  return (
    <div className='flex justify-start p-2 shadow-2xl'>
     <div className="">
     <img src="https://places.googleapis.com/v1/places/ChIJu0-pK65KhTkRUgI4wRKJMno/photos/AWYs27wDTG_WV5736yJAYrDXW20ls_mC-YKHu-YWyNMpf2SvGi-CL7AQTdDxCybRd87SYlGOnvU77eRMqLfouWrzdA21PH1kB1rre9Vv-uZnvTxc4bjCx7UHwYmYYWzHDDKZzF-uPEMdGp2bqW_KgftPhIK0THBbF6gt6BlO/media?maxHeightPx=600&maxWidthPx=1000&key=AIzaSyDBL1qVy7Dap0-b_EyiIIkvswGVHADvRu0" alt="" className='sm:w-28 sm:h-28 h-32 w-40' />
     </div>
     <div className="flex flex-col ms-10">
        <h1 className="text-2xl font-bold text-[#47663B]">{data.placeName}</h1>
        <p className="lg:text-base sm:text-sm text-xs">{data.description}</p>
        <p className='text-[#536493]'><AccessTimeIcon style={{color:"#536493"}}/> {data.time}</p>
        <p><MapIcon/></p>

     </div>

    </div>
  )
}

export default Place