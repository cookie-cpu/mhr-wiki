import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function Nav() {
  return (
    <Router>
      <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/monsters">Monsters</Link>
              </li>
              <li>
                <Link to="/weapons">Weapons</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
            </ul>
          </nav>
        </div>
    </Router>
  )
}
