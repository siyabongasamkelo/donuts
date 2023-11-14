import React from "react";
import { Footers } from "../components/Footer";
import { Cartegories } from "../home/Cartegories";
import { Home } from "../home/Home";
import { Reviews } from "../home/Reviews";
import { TimeLine } from "../home/TimeLine";

export const HomePage = () => {
  return (
    <div className=" overflow-x-hidden">
      <Home /> <Cartegories /> <Reviews /> <TimeLine /> <Footers />
    </div>
  );
};
