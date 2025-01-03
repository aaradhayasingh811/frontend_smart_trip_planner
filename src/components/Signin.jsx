import React, { useState } from "react";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import { red } from "@mui/material/colors";
import background from "../assets/background.jpg";
import travel from "../assets/travel.jpg";
import { toast, Bounce } from "react-toastify";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleonSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backened-smart-trip-planner.onrender.com/api/v1/sign-in",
        data
      );
      console.log(response.data);
      toast.success("🦄 Sign in success", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      // alert("Sign in Success");

      navigate(`/create-trip/${data.email}`);
    } catch (error) {
      console.log(error);
      setErr("Invalid Email or Password");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${travel})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navbar val="Sign Up" signup={true} logout={false} show={false} />
      <h2 className="text-center text-2xl font-medium italic">Sign In</h2>
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
          className="flex p-6 flex-col justify-center items-center mx-auto"
          onSubmit={handleonSubmit}
        >
          <TextField
            label="Email"
            value={data.email}
            onChange={handleOnChange}
            variant="filled"
            className="my-1"
            name="email"
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={data.password}
            onChange={handleOnChange}
            variant="filled"
            className="my-1"
            margin="normal"
            name="password"
            required
          />
          <br />
          {err && <p className="my-2 text-red-700">{err}</p>}
          <Button
            variant="contained"
            color="primary"
            className="my-1"
            type="submit"
          >
            Sign In
          </Button>
        </form>

        {/* <h2 className='text-center text-xl font-medium my-2'>OR</h2>

      <Button variant="contained" color="primary" className='my-1'> <GoogleIcon/> Sign in with Google</Button> */}
      </div>
    </div>
  );
};

export default Signin;
