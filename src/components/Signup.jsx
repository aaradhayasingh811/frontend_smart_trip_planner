import React, { useState } from "react";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";
import back from "../assets/back.jpg"
import travel from "../assets/travel.jpg"

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleonSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post(
        "https://backened-smart-trip-planner.onrender.com/api/v1/sign-up",
        data
      );
      console.log(response.data);
      alert("Signup Successfull");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}>
    // <div style={{ backgroundImage: `url(${back})`, minHeight: "100vh" , backgroundSize : "cover" }}>
    <div style={{ backgroundImage: `url(${travel})`, minHeight: "100vh" , backgroundSize : "cover" , backgroundRepeat:"no-repeat"}}>
      <Navbar val="Sign In" show={false} />
      <h2 className="text-center text-2xl font-medium italic">Sign Up</h2>
      <div className="flex flex-col justify-center items-center p-4">
        <form
          method="POST"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(103, 92, 92, 0.56)",
          }}
          className="flex flex-col justify-center items-center mx-auto py-4 px-8"
          onSubmit={handleonSubmit}
        >
          <TextField
            label="Name"
            value={data.name}
            onChange={handleOnChange}
            variant="filled"
            name="name"
            className="my-1"
            margin="normal"
            required
          />
          <TextField
            label="Username"
            value={data.username}
            onChange={handleOnChange}
            variant="filled"
            name="username"
            className="my-1"
            margin="normal"
            required
          />
          <TextField
            label="Email"
            value={data.email}
            onChange={handleOnChange}
            variant="filled"
            name="email"
            className="my-1"
            margin="normal"
            required
          />
          <TextField
            label="Password"
            value={data.password}
            onChange={handleOnChange}
            type="password"
            name="password"
            variant="filled"
            className="my-1"
            margin="normal"
            required
          />

          <br />
          <Button
            variant="contained"
            color="primary"
            className="my-1"
            type="submit"
          >
            Create an Account
          </Button>
        </form>

        {/* <h2 className='text-center text-xl font-medium my-2'>OR</h2>

      <Button variant="contained" color="primary" className='my-1'> <GoogleIcon/> Sign in with Google</Button> */}
      </div>
    </div>
  );
};

export default Signup;
