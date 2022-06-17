import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header';
import Home from './Views/Home';
import EconomyOfCountry from './Views/EconomyOfCountry';
import 'bootstrap/dist/css/bootstrap.min.css';
import Asia from './Views/Asia';
import Europe from './Views/Europe';
import NorthAmerica from './Views/NorthAmerica';

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
            <Route exact path="/asia">
              <Asia />
            </Route>
            <Route exact path="/europe">
              <Europe />
            </Route>
            <Route exact path="/northamerica">
              <NorthAmerica />
            </Route>
            <Route path="/country/:countryName">
              <EconomyOfCountry />
            </Route>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
