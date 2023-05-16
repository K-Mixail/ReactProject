import React from "react";
import Header from "../components/Header";
import SunSystem from "../components/Content/SunSystem";
import Sun from "../components/Content/Sun";
import Moon from "../components/Content/Moon";
import Earth from "../components/Content/Earth";


function Main() {

  return (
    <div className="App">
      <Header/>
      <h2 className="title">Интересные факты Солнечной системы</h2>
      <SunSystem />
      <Sun />
      <Moon />
      <Earth />
    </div>
  );
}

export default Main;
