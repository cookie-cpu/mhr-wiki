import React from 'react'
import Card from '@material-ui/core/Card';


export default function Monster(props) {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>{props.name} is weak to {props.weaknesses} element</p>

    </div>
  )
}
