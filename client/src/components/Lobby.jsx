import React, {  useEffect } from 'react'
import coin from "../Images/coin.png";




const Lobby = ({pdp,state}) => {
  return (
    <div className='lobby'>
      <h1>My Lobby:</h1>
      <div className="lobby_cont">
      <div className="lobby_left">
        <h1>1vs1 Valorant</h1>
            <div className="lobby_users">
            <div className="lobby_user1">
                <img src={pdp} alt="" />
                <span>rrr</span>
                <button>I'M READY</button>
            </div>
            <div className="lobby_betmoney">
                <span>{state.money}</span>
                <img src={coin} alt="" />
            </div>
            <div className="lobby_user1">
            <img src={pdp} alt="" />
                <span>Adam Kadhi</span>
                <button>I'M READY</button>
            </div>
            </div>
            <div className="lobby_start_countdown">
                <h1>GAME WILL START IN</h1>
                <span>10</span>
            </div>
            <div className="lobby_buttons">
                <button>Leave</button>
                <button>Start</button>
            </div>

      </div>
      <div className="lobby_chat">
        <h1>Chat:</h1>
        <div  className='lobby_texts'>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
            <div className='lobby_text'><img src={pdp} alt="" /> <span>salem aalaykom</span> </div>
        </div>
        <div className="lobby_chat_typing">
        <input readonly type="text" name="" id="" placeholder="Type something..."   />
        <i class="fa-sharp fa-solid fa-share"></i>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Lobby
