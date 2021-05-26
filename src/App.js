import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React, {Component} from 'react';

import Login from './Components/Login';
import Home from './Home';

class App extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  }

  loggedIn = (username, password) =>{
      const logged = (username !=="" && password !=="");
      this.setState({username: username, password: password});
      console.log(this.state);
      return logged;
  }


  render (){
    return <div className="App">
      <header className="App-header">
        <Router>
              {/* <Link to="/">Login</Link> */}
              <Link to="/Home">Home</Link>
          <Route exact path="/"render={()=>{
            return <div>
                <img src={logo} className="App-logo" alt="logo" />
                <Login loggedIn={this.loggedIn} />
            </div>
          }}/>

          <Route path="/Home" component={Home}/>
            
        </Router>
      </header>
    </div>
  }
}

export default App;
