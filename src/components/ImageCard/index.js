import "./imageCard.css";
import axios from "axios";
import { useState, useEffect } from "react";

function ImageCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }, []);

  return (
    <div className="image-container">
      {data.map((data) => (
        <div className="image-card">
          <div className="image-content">
            <img className="photo-style" src={data.photo} alt="search" />
            <img
              className="bookmark-content"
              src={data.bookmark}
              alt="search"
            />
          </div>
          <div>
            <p className="image-text">{data.text}</p>
          </div>
          <div className="offer-price">
            <div className="price-content">
              <img className="rupee-log" src={data.rupee} alt="search" />
              <p className="discount-price">{data.discountPrice}</p>
              <p className="actual-price">{data.actualPrice}</p>
              <p className="offer-per">{data.discountOffer}</p>
            </div>
            <div>
              <img className="catalog-img" src={data.catalog} alt="search" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ImageCard;
