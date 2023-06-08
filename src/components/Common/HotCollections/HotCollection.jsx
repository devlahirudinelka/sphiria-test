import React from "react";
import "./hotcollection.css";
export default function HotCollection(props) {
  return (
    <>
      <div
        className="main-wrapper-collection"
        style={{
          backgroundColor: props.backgroundColor,
          borderWidth: "1px",
          borderColor: props.borderColorCode,
          borderStyle: "solid",
        }}
      >
        <div className="preview">
          <div className="logo-brand">
            <img src={props.image} alt="" srcset="" />
            <div>
              <span className="nameOfVehicle">{props.VahicalName}</span>
              <span className="tagOfVehicle">{props.TagLine}</span>
            </div>
          </div>
          <img src={props.vehicle} alt="" srcset="" className="vehicleImage" />
          <div className="price-brand">
            <span className="asking">Asking Price</span>
            <span>
              <span className="PriceOfVehicle">{props.Price}</span>
              <span className="usd">USD</span>
            </span>
          </div>
        </div>
        <div className="details">
          <div className="firstRow">
            <div className="cc" style={{ backgroundColor: props.backCC }}>
              <div className="icon-bar">
                <i class="fas fa-cogs"></i>
              </div>
              <span className="details-text">{props.cc} CC</span>
            </div>
            <div className="bhp" style={{ backgroundColor: props.backBHP }}>
              <div className="icon-bar">
                <i class="fas fa-bolt"></i>
              </div>
              <span className="details-text">{props.bhp} BHP</span>
            </div>
          </div>
          <div className="secondRow">
            <div className="speed" style={{ backgroundColor: props.backSPEED }}>
              <div className="icon-bar">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              <span className="details-text">{props.speed} Speed</span>
            </div>
            <div
              className="cylinder"
              style={{ backgroundColor: props.backCYLINDER }}
            >
              <div className="icon-bar">
                <i class="fas fa-database"></i>
              </div>
              <span className="details-text">{props.cylinder} Cylinder</span>
            </div>
          </div>
          <div className="thirdRow">
            <div
              className="total-run"
              style={{ backgroundColor: props.backRUN }}
            >
              <div className="icon-bars">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <span className="details-text">
                Total Run: <span className="usd">{props.totalRUN} KM</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
