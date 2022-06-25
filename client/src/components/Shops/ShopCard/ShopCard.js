import React from "react";
import { useHistory } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { BsStarHalf } from "react-icons/bs";

import "./shopCard.css";

export default function ShopCard({ shop }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/shops/${shop._id}`);
    console.log(shop);
  };

  return (
    <div className="card br fd-c df">
      <div className="card-hero">
        <img className="card-hero" src={shop.banner} alt="card-hero" />
      </div>

      <div onClick={handleClick} className="card-content">
        <div className="card-header df jc-sb">
          <div className="card-title">
            <h3 className="name">{shop.shopName}</h3>
            <p className="location df ai-c">
              <GrLocation className="location-icon" />
              {shop.district}
            </p>
          </div>
          <span className="df">
            <span>4.5</span>
            <BsStarHalf className="card-star" />
          </span>
        </div>

        <div className="card-body">
          <p className="description">{shop.description}</p>
        </div>
      </div>
    </div>
  );
}
