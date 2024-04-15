// import { Component } from "react";
import Header from "../Header/Header";
import FramesContainer from "../Frames/index";
import Product from "../Product/Product";
import ImageContainer from "../ImageCard/index";
import "./home.css";

function Home() {
  return (
    <div className="main-container">
      <Header />
      <FramesContainer />
      <Product />
      <ImageContainer />
    </div>
  );
}
export default Home;
