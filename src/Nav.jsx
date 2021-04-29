import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function Nav() {

  let navStyle = {
    backgroundColor: "lightblue",
    padding: '1rem'
  }
  let listStyle = {
    display: 'flex', 
    justifyContent: 'space-around',
  }

  return (
      <div>
          <nav style={navStyle}>
            <ul style={listStyle}>
              <li>
              <a href="/home">Home</a>
              </li>
              <li>
              <a href="/monsters">Monsters</a>
              </li>
              <li>
                <a href="/weapons">Weapons</a>
              </li>
              <li>
                <a href="/locations">Locations</a>
              </li>
            </ul>
          </nav>
        </div>
    
  )
}
