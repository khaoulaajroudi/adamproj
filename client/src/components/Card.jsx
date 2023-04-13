import React, { useEffect, useState } from "react";
import coin from "../Images/coin.png";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../JS/userSlice/userSlice";
import Lobby from "./Lobby";
import { updatetournoi } from "../JS/tournoiSlice/tournoiSlice";
import {  useNavigate } from "react-router-dom";


const Card = ({setlien,key,pdp,el}) => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user?.user)
  const [show_card, setshow_card] = useState(true)
  const tournoi=useSelector((store)=>store.tournoi?.tournoi)
  const [updateparticipant, setupdateparticipant] = useState({
    gamename:el?.gamename,
    mode:el?.mode,
    money:el?.money,
    description:el?.description,
    owner:el?.owner,
    participant:"",
  })
  const handleRefresh = () => {
    window.location.reload();
  }
  return (
    
      <div className="dash_card">

      <div className="dash_card_top">

        <div className="dash_card_top_left">
          <img src={pdp} alt="" id="dash_pdp" />
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
          <button 
            id="dash_card_bot_right" 
            onClick={() => setupdateparticipant ({...updateparticipant, participant: user?.nickname})}
          >
            Join
          </button>
          <button onClick={()=>(dispatch(updatetournoi({id:el?._id,tournoi:updateparticipant}))&& navigate(`/partie/${el?._id}`))}>ok</button>
         
          </div>
          
      
    
    </div>
    


  );
};

export default Card;

