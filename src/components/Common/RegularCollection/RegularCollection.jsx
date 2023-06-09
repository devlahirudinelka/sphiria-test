import React from "react";
import "./regularCollection.css";
import assets from "../../../assets";
export default function RegularCollection(props) {
  return (
    <>
      <div class="row cars-details">
        <div class="col-4">
          <img src={props.image} alt="" srcset="" className="CarLogo" />
          <span className="col-title-text-car">{props.name}</span>
        </div>
        <div class="col-2">
          <span className="col-title-text">{props.run}</span>
        </div>
        <div class="col-2">
          <span className="col-title-text">{props.condition}</span>
        </div>
        <div class="col-2">
          <span className="col-title-text">{props.price}</span>
        </div>
        <div class="col-2 flexend">
          <button class="icon-button">
             See details<i class="fas fa-play"></i>
          </button>
        </div>
      </div>
    </>
  );
}
