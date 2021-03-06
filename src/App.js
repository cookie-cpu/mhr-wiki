import react from 'react'
import Nav from './Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MonsterList from '../src/components/MonsterList'
import Locations from '../src/components/Locations'
import Weapons from '../src/components/Weapons'
import Home from '../src/components/Home'

function App() {
  return ( <>

    <Nav/>

    <div style={{border: '5px solid blue', padding: '1.5rem'}}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/weapons">
            <Weapons />
          </Route>

          <Route path="/locations">
            <Locations />
          </Route>
          
          <Route path="/monsters">
            <MonsterList />
          </Route>

        </Switch>
      </Router>
    </div>
    


    </>
  );
}

export default App;
