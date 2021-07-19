import logo from './logo.svg';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth'
import AddPost from './components/AddPost'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <h1>🚀 MERN APP TORO 🎯</h1>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/AddPost'>AddPost</Link>
        <Link to='/Auth'>Auth</Link>
        <Link to='/Profile'>Profile</Link>
      </nav>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/AddPost" render={(props) => <AddPost {...props} />} />
        <Route exact path="/Auth" render={(props) => <Auth {...props} />} />
        <Route exact path="/Profile" render={(props) => <Profile {...props} />} />

      </Switch>

    </div>
  );
}

export default App;
