import React from 'react'
import Card from '@material-ui/core/Card';


export default function Monster(props) {
  return (
    <div style={{border: '2px solid', padding: '1rem', margin: '1rem', width: '45%'}}>
    <h2>{props.name}</h2>
    <img src={props.image}/>
    {props.weaknesses && <p>Weaknesses: {props.weaknesses[0]}, {props.weaknesses[1]}</p>}

    {/* { <p>{props.name} is weak to {props.weaknesses[0]} and {props.weaknesses[1]} element</p>}
    {props.weaknesses.length == 1 && <p>{props.name} is weak to {props.weaknesses} element</p>} */}
    </div>
  )
}
