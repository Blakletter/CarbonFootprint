import react from 'react'
import './App.css';
import Home from './components/Home'
import './style.css';// Importing the Bootstrap CSS
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends react.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/about" component={Home}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
