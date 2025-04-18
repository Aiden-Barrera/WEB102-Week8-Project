import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <h2 style={{fontSize: "32px", fontWeight: "700"}}>{props.name}</h2>
          <h2 style={{marginBottom: 0}}>{"Health: " + props.health}</h2>
          <h2 style={{marginBottom: "20px"}}>{props.class}</h2>
      </div>
  );
};

export default Card;