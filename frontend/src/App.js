import './App.css';
import Login from './Login'
import Dashboard from './Dashboard'
import Game from './Game'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './Auth';

const code = new URLSearchParams(window.location.search).get('code');


function App() {

  const accessToken = localStorage['accessToken'] || Auth(code)

  return (
    accessToken?
    <Router>
      <Switch>
        <Route path="/playlist/:id">
          <Game accessToken={accessToken} />
        </Route>
        <Route path="/dashboard">
          <Dashboard accessToken={accessToken}/>
        </Route>
        <Redirect exact from="/" to="/dashboard" />
      </Switch>
    </Router>
    : <Login />
    )
}

export default App;
