// import { Component } from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div>
          <h1 className="heading">TANN TRIM</h1>
        </div>

        <div className="object-contain">
          <img
            className="text-content"
            src="assets/Frame 51.svg"
            alt="search"
          />
          <img
            className="text-content"
            src="assets/Frame 52.svg"
            alt="search"
          />
          <img
            className="text-content"
            src="assets/Frame 53.svg"
            alt="search"
          />
          <img
            className="text-content"
            src="assets/Frame 54.svg"
            alt="search"
          />
        </div>
      </div>
      <div className="layout">
        <p className="text-content">Bags</p>
        <p className="text-content">Travel</p>
        <p className="text-content">Accesories</p>
        <p className="text-content">Gifting</p>
        <p className="text-content">Jewelery</p>
      </div>
    </div>
  );
}
export default Header;
