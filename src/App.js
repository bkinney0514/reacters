import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Employee from './Employee/Employee';
import Manager from './Manager/Manager';
import Footer from './Footer';
import React, {useState} from 'react';


function App() {
  
  const [user, setUser] = useState("")
  
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact render={() => <Home user={user} setUser={setUser}/>}/>
        <Route path="/employee" exact render={() => <Employee user={user} setUser={setUser}/>}/>
        <Route path="/manager" exact render={() => <Manager user={user} setUser={setUser}/>}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}



export default App;
