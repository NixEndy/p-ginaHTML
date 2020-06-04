import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import IndexComponent from './Components/IndexComponent';
import DetalleComponent from './Components/DetalleComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink to="/" className="nav-item nav-link" activeClassName="active"><img src="https://image.flaticon.com/icons/svg/25/25694.svg" width="28"></img> Home</NavLink>
                  <NavLink to="posts" className="nav-item nav-link" hactiveClassName="active"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VisualEditor_-_Icon_-_Bullet-list-ltr.svg/1200px-VisualEditor_-_Icon_-_Bullet-list-ltr.svg.png" width="22"></img> Lista de Personajes</NavLink>
              </div>
            </div>
        </nav>

          <Switch>
            <Route path="/" exact>
            <h1>Welcome Geek, To the Marvel Characters site</h1>
            <br></br>
              <p>Click on the id if you wish to know more about certain character</p>
            </Route>
            <Route path="/posts" exact> 
              <IndexComponent></IndexComponent>
            </Route>
            <Route path="/posts/:id" exact> 
              <DetalleComponent></DetalleComponent>
            </Route>
          </Switch>
     </div>
</Router>
  );
}

export default App;