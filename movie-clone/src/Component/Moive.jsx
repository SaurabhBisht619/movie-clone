import React from 'react'
import './Movie.css'
function Moive(props) {

  let obj={
    backgroundColor:"blue"
  }

  if(props.Year>=2010){
    obj.backgroundColor="green";
  }

  return (
    <div className='movieBox'>
      <div className="title">{props.Title}</div>
      <div className="year" style={obj}>{props.Year}</div>
      <div className="poster">
        <img src={props.Poster} alt="" />
      </div>
    </div>
  )
}

export default Moive;
