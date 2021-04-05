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

function App() {
  return ( <>

    <Nav/>


    <Router>
      <Switch>

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


    </>
  );
}

export default App;
