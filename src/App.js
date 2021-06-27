import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const KEY = 'superheroApp.token';
export default function App() {
  const [logIn, setLog] = useState();
  const [authorization, setAuthorization] = useState();

  const loggedIn = (email, password, token) =>{
    const logged = (email !=="" && password !=="");
      setLog({email: email, token: token});
      console.log(logged);
  }

  useEffect(()=>{
    const loggedIn = JSON.parse(localStorage.getItem(KEY));
    if(loggedIn){
      setLog(loggedIn);
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(logIn));
  },[logIn])

  const authorized = () =>{
      if(logIn === 'undefined'){
        setAuthorization(false);
      }else{
        setAuthorization(true);
      }
  }

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path="/Home" component={() => <Home authorization={authorization}/>}/>
            <Route exact path="/" component={() => <Login loggedIn={loggedIn} authorized={authorized}/>}/>
          </Switch>
        </div>
      </div>
    </Router>
    
  )
}
