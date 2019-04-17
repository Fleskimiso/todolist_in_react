import React, { Component } from 'react';

import { BrowserRouter, Route,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Todocomp from "./Todocomp";
import Post from "./components/Post.js";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="TodoList-App container">
          <Switch>
          <Route path="/todolist" component={Todocomp} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
