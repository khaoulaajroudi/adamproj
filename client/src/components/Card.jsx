import React, { useEffect, useState } from "react";
import coin from "../Images/coin.png";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../JS/userSlice/userSlice";
const Card = ({ key,pdp,el }) => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getuser())
  }, [dispatch])
  const users=useSelector((store)=>store.user?.user)
console.log(users)
const [nick, setnick] = useState("")
  return (
    <div className="dash_card">

      <div className="dash_card_top">

        <div className="dash_card_top_left">
          <img src={pdp} alt="" id="dash_pdp" />
          {/* <span>{el?.partie}</span> */}
          {users?.filter((e)=>(e._id==el?.partie)?setnick(e.nickname):"")}
          <span>{nick}</span>
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
