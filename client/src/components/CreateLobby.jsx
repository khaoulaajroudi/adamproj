import React, { useState } from "react";
import coin from "../Images/coin.png";
import { useDispatch, useSelector } from "react-redux";
import { addtournoi } from "../JS/tournoiSlice/tournoiSlice";

const CreateLobby = ({setlien}) => {
  const dispatch = useDispatch();
  const user=useSelector((store)=>store.user?.user)
  const [addtour, setaddtour] = useState({
    gamename:"",
    mode:"",
    money:"",
    description:"",
    owner:user?.nickname,
    participant:""
  })
  return (
    <div className="create_lobby">
      <h1>Create Lobby</h1>
      <div className="create_box">
        
        <div className="create_box_top">
        <span>
            <label htmlFor="">Game</label>
            <select name="" id="" onChange={(e)=>setaddtour({...addtour,gamename:e.target.value})}>
            <option value="">Select Game:</option>
              <option value="League Of Legends ">League Of Legends</option>
              <option value="Valorant">Valorant</option>
              <option value="CSGO">CSGO</option>
              <option value="Fortnite">Fortnite</option>
              <option value="FIFA 23">FIFA 23</option>
            </select>
            </span>
            <span>
                <label htmlFor="">Mode</label>
                <select name="" id="" onChange={(e)=>setaddtour({...addtour,mode:e.target.value})}>
                <option value="">Select</option> 
              <option value="1vs1">1vs1</option>
              <option value="2vs2">2vs2</option>
              <option value="3vs3">3vs3</option>
              <option value="4vs4">4vs4</option>
              <option value="5vs5">5vs5</option>
            </select>
            </span>
            
        </div>
        <div className="create_box_middle"><label htmlFor="">Bet:</label><input type="number" name="" id=""  onChange={(e)=>setaddtour({...addtour,money:e.target.value})}/> <img src={coin} alt="" /></div>
        <div className="create_box_bot">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="3" rows="3" onChange={(e)=>setaddtour({...addtour,description:e.target.value})}></textarea>
        </div>
        <div className="create_box_buttons">
            <button>Cancel</button>
            <button onClick={()=>(dispatch(addtournoi(addtour))&&setlien(2))}>Create</button>
        </div>
      </div>

    </div>
  );
};

export default CreateLobby;
