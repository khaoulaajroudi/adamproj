import React from 'react'

const JoinCode = ({setjoinmodal}) => {
  return (
    <div className='modal_join'>
      <div className="modal_join_rect">
      <i className="fa-solid fa-x" onClick={()=>setjoinmodal(0)}></i>
        <h1>Copy Code And Paste It Here:</h1>
        <input type="text" name="" id="" placeholder='Enter Code' />
        <button>Join</button>

      </div>
    </div>
  )
}

export default JoinCode
