import React, { useRef } from "react";
import "tailwindcss";
import "../App.css";
import Navbar from "./Navbar";
import { motion, useInView } from "framer-motion";

function Home() {
  return (
    <div className="homeMotherDiv1">
      <div className="firstHomeDiv">
        <img src="../img/liam.jpg" className="homeProfilePicture" />
      </div>
      <div className="secondHomeDiv">
        <h1 className="homeName"> Liam Chan</h1>
        <h1 className="homeCaption">Creative</h1>
        <button className="homeButton w-40 h-40 border-2 border-blue  flex items-center justify-center">
          <img src="../img/homelogo.png" alt="" />
        </button>
        <button className="paintButton w-40 h-40 border-2 border-blue  flex items-center justify-center">
          <img src="../img/paintlogo.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Home;
