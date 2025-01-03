import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import HotelIcon from '@mui/icons-material/Hotel';
const Hotel = ({address,cost,imageUrl,rating}) => {
    const randomNum = Math.random() * (5 - 3) + 3;

  return (
    <div className='flex-col p-3 border-2 border-green-300 rounded-lg w-56'>
    <img src="https://places.googleapis.com/v1/places/ChIJ_____-9HCTkR_mw2lUw8QAU/photos/AWYs27zf0eLiZ_b4Fyi4QCHbhAZzK3AtovlaWl4WSsyKtHOfjCFFFJnzFj-5xSECbAtkZKvQuP8JNXR_RKPpP1ak-LyqEY2T0Id4iX44xwvulV3BERaBpDBoFRBkCTHTETrmA6qigZ_df6q6hBWgG65lOdvpFJ6TOBGcYpMJ/media?maxHeightPx=600&maxWidthPx=1000&key=AIzaSyDBL1qVy7Dap0-b_EyiIIkvswGVHADvRu0" alt="hotel image" className='h-44 w-48'  />
     
     {/* <div className="flex items-center my-1">
        <HotelIcon/>
        {Name}
     </div> */}
     <div className="flex items-center my-1">
        <LocationOnIcon/>
        {address} 
     </div>
      <div className="flex items-center my-1">
        <MonetizationOnIcon/>
        {cost}
      </div>
      <div className="flex items-center my-1">
        <StarIcon/>
        {rating ? rating :  randomNum.toFixed(1)} 
   </div>


    </div>
  )
}

export default Hotel
