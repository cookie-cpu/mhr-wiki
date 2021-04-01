import React from 'react'
import Card from '@material-ui/core/Card';


export default function Monster(props) {
  return (
    <div>
    <h1>{props.name}</h1>

    {/* <img src='"http://localhost:3000/img/MHRise-Magnamalo_Render_002.webp'></img>
    <img src={ require('src/img/MHRise-Magnamalo_Render_002.webp') } /> */}
    <p>{props.name} is weak to {props.weaknesses} element</p>

    </div>
  )
}
