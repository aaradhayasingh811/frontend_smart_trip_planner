import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import HotelIcon from '@mui/icons-material/Hotel';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Hotel = ({address,cost,imageUrl,rating}) => {
    const randomNum = Math.random() * (5 - 3) + 3;

  return (
    <div className='flex-col p-3 hover:shadow-2xl hover:shadow-green-950 rounded-lg sm:w-56 w-72 bg-slate-100 shadow-lg '>
    <img src="https://places.googleapis.com/v1/places/ChIJ_____-9HCTkR_mw2lUw8QAU/photos/AWYs27zf0eLiZ_b4Fyi4QCHbhAZzK3AtovlaWl4WSsyKtHOfjCFFFJnzFj-5xSECbAtkZKvQuP8JNXR_RKPpP1ak-LyqEY2T0Id4iX44xwvulV3BERaBpDBoFRBkCTHTETrmA6qigZ_df6q6hBWgG65lOdvpFJ6TOBGcYpMJ/media?maxHeightPx=600&maxWidthPx=1000&key=AIzaSyDBL1qVy7Dap0-b_EyiIIkvswGVHADvRu0" alt="hotel image" className='sm:h-44 sm:w-48 w-64 h-56 rounded-sm'  />
     
     {/* <div className="flex items-center my-1">
        <HotelIcon/>
        {Name}
     </div> */}
     <div className="flex items-center my-1">
        <LocationOnIcon style={{color:"#CC0000"}}/>
        {address} 
     </div>
      <div className="flex items-center my-1">
        <CurrencyRupeeIcon style={{color:"green"}}/>
        {cost}
      </div>
      <div className="flex items-center my-1">
        <StarIcon style={{color:"orange"}}/>
        {rating ? rating :  randomNum.toFixed(1)} 
   </div>


    </div>
  )
}

export default Hotel
