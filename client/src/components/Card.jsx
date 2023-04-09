import React from "react";
import coin from "../Images/coin.png";

const Card = ({ pdp,el }) => {
  return (
    <div className="dash_card">

      <div className="dash_card_top">

        <div className="dash_card_top_left">
          <img src={pdp} alt="" id="dash_pdp" />
          <span>{el?.partie}</span>
        </div>

        <div className="dash_card_top_right">
          <img src={coin} alt="" id="dash_card_coin" />
          <span>{el?.money}</span>
        </div>

        </div>

        <h3>{el?.gamename}</h3>
        <div className="dash_card_desc">
          <h1>Description:</h1>
          <p>{el?.description}</p>
          </div>
          <div className="dash_card_bot">
          <span>{el?.mode}</span>
          <button id="dash_card_bot_right">Join</button>
          </div>
        
      
    </div>
  );
};

export default Card;
