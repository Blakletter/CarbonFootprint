import react from 'react'
import './App.css';
import GetStarted from './components/GetStarted'
import About from './components/About'
import Home from './components/Home'
import Quiz from './components/Quiz'
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
            <Route path="/about" component={About}/>
            <Route path="/getstarted" component={GetStarted}/>
            <Route path="/home" component={Home}/>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
