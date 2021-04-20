import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NewThing from "./NewThing";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/new">New Thing</Link>
        </nav>
        <header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/new" component={NewThing} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
