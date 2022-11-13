import React from "react";
import Main from "../components/airbnb/Main";
import NavBar from "../components/airbnb/Navbar";
import Card from "../components/airbnb/Card";
import image1 from "../assets/images/swimmer.png";
import image2 from "../assets/images/wedding.png";
import image3 from "../assets/images/bike.png";

function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <div className="flex lg:justify-between gap-5 p-4 sm:px-10 xl:p-0 xl:max-w-5xl mx-auto overflow-x-scroll">
        <Card
          img={image1}
          rating="5.0"
          num={6}
          details="Life lessons with Katie Zaferes"
          amount={136}
          status="SOLD OUT"
        />
        <Card
          img={image2}
          rating="5.0"
          num={30}
          details="Learn wedding photography"
          amount={125}
          status="BOUGHT"
        />
        <Card
          img={image3}
          rating="4.8"
          num={2}
          details="Group Mountain Biking"
          amount={50}
          status="SOLD OUT"
        />
        <Card
          img={image2}
          rating="5.0"
          num={6}
          details="Life lessons with Katie Zaferes"
          amount={136}
          status="BOUGHT"
        />
      </div>
    </div>
  );
}

export default Home;
