import React from 'react';
import "./Home.scss";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Slider from "../components/Slider/Slider"

const Home = () => {

  return (
    <div className ="container-fluid">
       <Header />
      <Button /> 
      <div class="topnav">
          <i class="fa fa-bars"></i>
      </div>
      <div className="bannerBackground">
        <div className="welcomeText">Welcome To TenTwenty Farms</div>
        <div className="fromFarmText">From our Farms <br></br>to your hands</div>
      </div>
      <br></br>
      <div className="textSection">
        <div className="headingText"><h3>Quality Products</h3></div><br></br>
        <div className="paraText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br></br>laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
      <br></br>
      <Slider/>
    </div>
  );
};

export default Home;