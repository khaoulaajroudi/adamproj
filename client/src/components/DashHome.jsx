import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { gettournoi } from '../JS/tournoiSlice/tournoiSlice';


const DashHome = ({pdp,search}) => {
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(gettournoi())
  }, [])
  const tournoi=useSelector((store)=>store.tournoi?.tournoi)
  return (
    <div className='dash_home'>
      {tournoi?.filter((el) => el.gamename.toLowerCase().includes(search.toLowerCase())).map((el)=><Card pdp={pdp} el={el}/>)}
      
    </div>
  )
}

export default DashHome
