import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Game from './pages/Game'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Auth from './services/Auth';

const code = new URLSearchParams(window.location.search).get('code');


function App() {

  const accessToken = localStorage['accessToken'] || Auth(code)

  return (
    accessToken?
    <Router>
        <Route path="/playlist/:id">
          <Game accessToken={accessToken} />
        </Route>
        <Route path="/dashboard">
          <Dashboard accessToken={accessToken}/>
        </Route>
        <Redirect exact from="/" to="/dashboard" />
        <Route path="/login">
          <Login />
        </Route>
    </Router>
    : <Login />
    )
}

export default App;
