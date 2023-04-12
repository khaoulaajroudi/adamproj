import React, { useEffect, useState } from "react";
import coin from "../Images/coin.png";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../JS/userSlice/userSlice";
import Lobby from "./Lobby";
import { updatetournoi } from "../JS/tournoiSlice/tournoiSlice";


const Card = ({setlien,key,pdp,el }) => {
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user?.user)
  const [show_card, setshow_card] = useState(true)
  const tournoi=useSelector((store)=>store.tournoi?.tournoi)
  const [updateparticipant, setupdateparticipant] = useState({
    participant:"",
  })
  
  return (
    
      <div className="dash_card">

      <div className="dash_card_top">

        <div className="dash_card_top_left">
          <img src={pdp} alt="" id="dash_pdp" />
          {/* {el?.partie.map((el)=><span>{el.nickname}</span> )} */}
          <span>{el?.owner}</span>
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
          {/* <button id="dash_card_bot_right" onClick={()=>(dispatch(updateparticipant({id:el?._id,participant:user})),setlien(2))}>Join</button> */}
          <button 
            id="dash_card_bot_right" 
            onClick={() => {
              setupdateparticipant({...updateparticipant, participant: user?.nickname});
              dispatch(updatetournoi({id:el?._id,tournoi:updateparticipant}));
            }}
          >
            Join
          </button>
          </div>
          
      
    
    </div>
    


  );
};

export default Card;

