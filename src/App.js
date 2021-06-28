import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const KEY = 'superheroApp.token';

export default function App() {
  const [logIn, setLog] = useState();

  const loggedIn = (email, password, token) =>{
    const logged = (email !=="" && password !=="");
      setLog({email: email, token: token});
      console.log(logged);
  }

  const logOut = () =>{
    setLog();
  }

  useEffect(()=>{
    let local = localStorage.getItem(KEY);
    if(local !== 'undefined'){
      const localData = JSON.parse(local);
      if(localData){
        setLog(localData);
      }
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(logIn));
  },[logIn])

  return (
    <Router>
      <div className="App">
        <Navbar logOut={logOut}/>
        <div className="content">
          <Switch>
              <Route path="/Home">
                {!logIn?<Redirect to="/"/>:<Home />}
              </Route>            
              <Route exact path="/">
              {logIn? <Redirect to="/Home"/>:<Login loggedIn={loggedIn}/>}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  )
}
