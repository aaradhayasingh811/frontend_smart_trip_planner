import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import TripComponent from './TripComponent';
import axios from 'axios';

const Mytrips = () => {
  const { email } = useParams();
  console.log(email);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(`https://backened-smart-trip-planner.onrender.com/api/v1/show-trips/${email}`);
        console.log(response.data)
        setTrips(response.data);
        console.log("Trips",trips);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTrips();
  }, [email]);

  

  if (loading) {
    return <p className="text-center mt-8 text-xl text-gray-700">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-xl text-red-500">Error: {error}</p>;
  }

  const handleDelete = (tripId) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip._id !== tripId));
};

  return (
    <>
      <Navbar create={true} val="Logout" logout={true} />
      <div className=" flex justify-center flex-col mx-10">
        <h2 className="my-4 text-3xl font-bold text-teal-900">My Trips</h2>
        <div className="flex gap-8 flex-wrap justify-center w-full">
          {trips.length > 0 ? (
            trips.map((trip, index) => (
              <TripComponent key={index} trip={trip} email={email} onDelete={handleDelete} />
            ))
          ) : (
            <p className="text-gray-500 text-lg">No trips found.</p>
          )}
        </div>
        <div className="p-8"></div>
      </div>
    </>
  );
};

export default Mytrips;
