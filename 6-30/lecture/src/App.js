import { useState, useEffect } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import MyProjects from './MyProjects'
import ProjectDetail from './ProjectDetail'



//UseEffect happens when componentMounts aka loads.  You can put an argument in the array to load again when something changed

//react-router-DOM
//BrowserRouter which you just wrap your whole app in 
//Links is the new ahref tag
//Switch is where all your Routes go like a switch statement
//Route is what happens when you go to that url.  What component loads
//Dynamic routes are created with a :blahblah
//Dynamic route variables like :dynamicId are avaiable in child components via props.match.params.dynamicId



function App() {



  return (
    <main>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="/my-projects">My Projects</Link>
      </nav>



      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />

        {/* http://localhost:3000/about */}
        <Route exact path='/about' render={(props) => <About {...props} />} />
        <Route exact path='/contact-us' render={(props) => <Contact {...props} />} />
        <Route exact path='/my-projects' render={(props) => <MyProjects {...props} />} />
        {/* //http://localhost:3000/project/2b */}
        <Route exact path='/project/:dynamicId' render={(props) => <ProjectDetail {...props} />} />
      </Switch>

    </main>
  )
}

export default App;
