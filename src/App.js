import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header';
import Home from './Views/Home';
import EconomyOfCountry from './Views/EconomyOfCountry';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/country">
              <EconomyOfCountry />
            </Route>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
