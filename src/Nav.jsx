import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function Nav() {
  return (
   
      <div>
          <nav>
            <ul>
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
