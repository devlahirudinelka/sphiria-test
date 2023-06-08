import React from "react";
import "./home.css";
import HotCollection from "../../components/Common/HotCollections/HotCollection";
import assets from "../../assets";
import RegularCollection from "../../components/Common/RegularCollection/RegularCollection";
export default function Home(props) {
  return (
    <>
      <div className="home-main-container">
        <div className="home-toper">
          <div className="title-bar">
            <h1 className="salutation">Good Morning,</h1>
            <h1 className="name-home">Arafat Ahmed Chowdhury</h1>
          </div>
          <div className="search-box">
            <input
              class="search"
              type="search"
              placeholder="Search here"
            ></input>
          </div>
        </div>
        <h1 className="collection-title">🔥 Hot Collections</h1>
        <div className="hot-collections-view">
          <HotCollection
            backgroundColor="#F2D6C1"
            borderColorCode="#f1f5f6"
            image={assets.Nissan}
            VahicalName="Nissan GTR"
            TagLine="R35 Nismo"
            vehicle={assets.NissanGT}
            Price="$187,900"
            cc="3799"
            bhp="5914"
            speed="6"
            cylinder="4"
            backCC="#FBE0CB"
            backBHP="#F8FBE6"
            backSPEED="#EAE9B1"
            backCYLINDER="#E8EEFA"
            totalRUN="9254"
            backRUN="#F3F9F5"
          />
          <HotCollection
            backgroundColor="#fff"
            borderColorCode="#f1f5f6"
            image={assets.LandRover}
            VahicalName="Range Rover"
            TagLine="Autobiography"
            vehicle={assets.RangeRover}
            Price="$38,700"
            cc="1997"
            bhp="266.74"
            speed="6"
            cylinder="4"
            backCC="#FBE0CB"
            backBHP="#E7EAFB"
            backSPEED="#EFEFB3"
            backCYLINDER="#F9ECFE"
            totalRUN="12,500"
            backRUN="#BBEAC0"
          />
        </div>
        <h1 className="collection-title">Regular Collections</h1>
        <div className="popular-collections-view">
          <div className="main-wrapper-collection-regular">
            <div class="row">
              <div class="col-4">
                <span className="col-title">Car model</span>
              </div>
              <div class="col-2">
                <span className="col-title">total run</span>
              </div>
              <div class="col-2">
                <span className="col-title">condition</span>
              </div>
              <div class="col-2">
                <span className="col-title">asking price</span>
              </div>
              <div class="col-2">
                <span className="col-title"></span>
              </div>
            </div>
            <RegularCollection
              image={assets.HondaCRV}
              name="Honda CR-V 2021"
              run="22,409/Km"
              condition="Great"
              price="$30,450"
            />
            <RegularCollection
              image={assets.Audia6}
              name="Audi A6 2021"
              run="19,647/Km"
              condition="Need Servicing"
              price="$54,900"
            />
            <RegularCollection
              image={assets.AudiQ3}
              name="Audi Q3 2019"
              run="35,000/Km"
              condition="Need Servicing"
              price="$535,695"
            />
            <RegularCollection
              image={assets.Benz}
              name="Mercedes-Benz C-Class 2019"
              run="17,520/Km"
              condition="Excellent"
              price="$52,000"
            />
            
          </div>
        </div>
      </div>
    </>
  );
}
