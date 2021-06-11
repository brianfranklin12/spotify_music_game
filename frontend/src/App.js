import './App.css';
import Login from './Login'
import Dashboard from './Dashboard'
import Game from './Game'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useAuth from './useAuth';

const code = new URLSearchParams(window.location.search).get('code');


function App() {
  const accessToken = useAuth(code)

  return (
    code ? 
    <Router>
      <Switch>
        <Route path="/playlist/:id">
          <Game accessToken={accessToken} />
        </Route>
        <Route path="/">
          <Dashboard accessToken={accessToken}/>
        </Route>
      </Switch>
    </Router>
    : <Login />
    )
}

export default App;
